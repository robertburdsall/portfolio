Project gallery photos and video go in this folder.

Reference them from content.js, in a project's detail.media array:

  media: [
    { src: "assets/img/projects/panel-interior.jpg",
      caption: "Panel interior - DIN rail layout, relays and power distribution" },
    { src: "assets/img/projects/machine-running.mp4",
      poster: "assets/img/projects/machine-running.jpg",
      caption: "Running at 120 caps/min with automatic ejection" }
  ]

BEFORE YOU COMMIT PHOTOS:
  - Resize the long edge to ~1600px and save as JPEG around 80% quality.
    Aim for 200-500 KB per image. Straight-off-the-phone photos are often
    4000px and 4-8 MB, which makes the page painfully slow on bad wifi.
  - Keep video clips short, 1080p, under ~10 MB.
  - Use descriptive filenames. panel-interior.jpg beats IMG_4471.jpg.

IDEAL FASTENER PHOTOS: get sign-off before publishing. The machine, the
panel interiors, and the HMI screens are three separate permissions.
