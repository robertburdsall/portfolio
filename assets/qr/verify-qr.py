#!/usr/bin/env python3
"""
Prove the QR actually decodes before you print a stack of resumes.

    pip install opencv-python-headless pillow
    python assets/qr/verify-qr.py [expected-url]

Checks it at realistic print sizes, at an angle, at low resolution, and with
weak contrast — the conditions a recruiter's phone will actually meet.
"""
import sys
import cv2
import numpy as np
from PIL import Image

EXPECTED = sys.argv[1] if len(sys.argv) > 1 else "https://robertburdsall.github.io/"
det = cv2.QRCodeDetector()


def check(label, img):
    arr = np.array(img.convert("RGB"))[:, :, ::-1]
    data, _, _ = det.detectAndDecode(arr)
    ok = data == EXPECTED
    print(f"{label:<34} {'OK  ' if ok else 'FAIL'} -> {data!r}")
    return ok


full = Image.open("assets/qr/portfolio-qr.png")
results = [check("PNG as generated", full)]

for mm in (15, 20, 25):
    px = int(mm / 25.4 * 300)
    results.append(check(f"printed {mm}mm @300dpi ({px}px)", full.resize((px, px), Image.LANCZOS)))

results.append(check("low-res capture (180px)", full.resize((180, 180), Image.LANCZOS)))
results.append(check("photographed at 7deg", full.rotate(7, expand=True, fillcolor="white")))
results.append(
    check(
        "low contrast / grey print",
        Image.eval(full.convert("L"), lambda p: min(255, int(p * 0.75) + 40)).convert("RGB"),
    )
)

print("\nALL PASS" if all(results) else "\nSOME FAILED — do not print")
sys.exit(0 if all(results) else 1)
