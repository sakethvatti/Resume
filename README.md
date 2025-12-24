# Resume

This repository contains a single-page static resume for Vatti Arogya Saketh. It's implemented with plain HTML, CSS and JavaScript and is ready to be published using GitHub Pages.

Files added:

- `index.html` — the resume page
- `styles.css` — styling and print rules
- `script.js` — small UI helpers (print + theme toggle)

How to preview locally (simple):

1. Open `index.html` in a browser. On Windows you can double-click the file or run:

```cmd
start index.html
```

2. To serve via a local static server (recommended for accurate routing):

```cmd
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

Publish on GitHub Pages:

1. Create a repository on GitHub named exactly the same as your username followed by `.github.io` (for example `sakethvatti.github.io`) to host at the root, or use a project repository and enable Pages from the `main` branch.
2. Commit and push this repository to GitHub.
3. In the repository settings -> Pages, select the `main` branch and root folder `/` (or `gh-pages` if you use that) and save. GitHub will publish the site; the URL will be visible in the Pages settings.

That's it — your resume will be available as a public webpage you can share with employers.
