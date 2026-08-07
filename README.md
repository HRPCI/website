# HRPCI Website

Modern, static website for **Human Rights Protection Council, India (HRPCI)**. Pure HTML/CSS/JS — no build step, ready for GitHub Pages, Cloudflare Pages, Netlify, or any static host.

## Structure

```
/
├── index.html
├── about.html
├── awards.html
├── honorary-doctorate.html
├── verify.html
├── nomination.html
├── thank-you.html
├── contact.html
├── policy.html
├── terms.html
├── refund.html
├── style.css
├── script.js
└── images/
    ├── hrpci-logo.png     (included)
    ├── slide1.jpg  ... slide4.jpg      (homepage hero slideshow — add your own)
    ├── event1.jpg  ... event6.jpg      (event gallery — add your own)
    └── awardee1.png ... awardee8.png   (awardee photo strip — add your own)
```

## Add your images

Drop your photos into `images/` using the exact filenames above (jpg for slides/events, png for awardees). The homepage will pick them up automatically — no code changes needed. Recommended sizes:
- Slides: 1920×1080 (landscape)
- Event gallery: 800×600 (landscape, will be cropped to 4:3)
- Awardee photos: 300×300 (square, will be cropped to a circle)

## Deploy to GitHub Pages

1. Push this folder to a repository (e.g. `hrpci-website`).
2. Repo → **Settings → Pages** → Source: `main` branch, `/ (root)`.
3. Site will be live at `https://<username>.github.io/<repo>/`.

For a custom domain (e.g. `hrpci.org`), add a `CNAME` file containing your domain name to the repo root and configure your DNS accordingly.

## Certificate Verification

`verify.html` uses a small in-file JavaScript database (`CERTIFICATES` object near the bottom of the file). To add a new certificate, copy an existing entry block and fill in the awardee's details — no backend required.

## Forms

`contact.html` and `nomination.html` submit via [FormSubmit](https://formsubmit.co) to `contact@hrpci.org`. First submission from a new address requires a one-time email confirmation (FormSubmit's standard flow).
