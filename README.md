# Beneficial Backyards — marketing site

Static multi-page site for **Beneficial Backyards** (`beneficialbackyards.co.nz`), a New Zealand landscaping business.

Contact: [info@beneficialbackyards.co.nz](mailto:info@beneficialbackyards.co.nz)

## Branches

1. Residential landscaping  
2. Small digger work  
3. Gardening  
4. Garden sculptures made from corten steel  

## Preview locally

No build step. Open the home page in a browser:

- Double-click `index.html`, or
- From this folder: `python3 -m http.server 8080` then visit `http://localhost:8080/`

Pages: `index.html`, `about.html`, `services.html`, `contact.html`

## Hosting (planned)

Intended for **GitHub Pages** (or any static host):

1. Push this folder to a GitHub repository.
2. Enable Pages (deploy from `main` / root, or `/docs` if you nest the site).
3. Point the custom domain `beneficialbackyards.co.nz` at Pages when ready.

## Contact form

v1 uses `action="mailto:info@beneficialbackyards.co.nz"` so enquiries open the visitor’s email client. A HTML comment on `contact.html` notes how to switch to a free form backend (e.g. Formspree) later.

## Stack

- Plain HTML5, CSS (`css/styles.css`), minimal JS for mobile nav (`js/main.js`)
- Free Google Fonts (Fraunces + Source Sans 3); system-font fallbacks
- Original SVG favicon / illustrations (no stock photos)

## Licence

Site code and original SVG graphics in this folder are free to use for Beneficial Backyards. Google Fonts remain under their own licences.
