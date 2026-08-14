#!/usr/bin/env python3
"""
Regenerate the portfolio QR code.

Run this ONLY if your URL changes — for example if you buy a custom domain.
Anything already printed with the old code keeps pointing at the old URL, so
decide the URL before you print in bulk.

    pip install "qrcode[pil]"
    python assets/qr/make-qr.py https://your-new-domain.com/

Then re-verify it before printing:

    pip install opencv-python-headless
    python assets/qr/verify-qr.py
"""
import sys
import qrcode
from qrcode.image.svg import SvgPathImage
from qrcode.constants import ERROR_CORRECT_Q

URL = sys.argv[1] if len(sys.argv) > 1 else "https://robertburdsall.github.io/"

qr = qrcode.QRCode(
    version=None,                      # smallest version that fits the URL
    error_correction=ERROR_CORRECT_Q,  # 25% recoverable — survives print smudging
    box_size=20,
    border=4,                          # quiet zone; the spec minimum. Never crop this.
)
qr.add_data(URL)
qr.make(fit=True)

print(f"URL             : {URL}")
print(f"QR version      : {qr.version}")
print(f"Modules         : {qr.modules_count}x{qr.modules_count}")
print(f"Error correction: Q (25%)")

qr.make_image(fill_color="black", back_color="white").resize((1200, 1200)).save(
    "assets/qr/portfolio-qr.png"
)
qrcode.make(
    URL, error_correction=ERROR_CORRECT_Q, border=4, image_factory=SvgPathImage
).save("assets/qr/portfolio-qr.svg")

print("\nWrote assets/qr/portfolio-qr.png and assets/qr/portfolio-qr.svg")
