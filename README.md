# Modelyo Website - Hugo Implementation

This is a Hugo-based implementation of the Modelyo website design from Figma.

## Prerequisites

- Hugo installed (version 0.152.2 or later)
- A web browser

## Getting Started

1. **Start the Hugo development server:**
   ```bash
   hugo server --bind 0.0.0.0 --port 1313
   ```

2. **View the site:**
   Open your browser and navigate to `http://localhost:1313`

## Project Structure

```
Modelyo-MCP/
├── assets/
│   └── css/
│       └── main.css          # Main stylesheet
├── content/
│   └── _index.md             # Homepage content
├── layouts/
│   ├── _default/
│   │   └── baseof.html       # Base template
│   └── index.html            # Homepage template
├── static/
│   └── images/               # All image assets
├── hugo.toml                 # Hugo configuration
└── README.md                 # This file
```

## Features

- **Responsive Design**: The site is built with responsive CSS
- **Modern UI**: Implements the Figma design with custom CSS (no Tailwind)
- **Hugo Baseof Template**: Uses Hugo's baseof template structure
- **All Sections Included**:
  - Hero section with gradient CTA
  - Diagram section
  - Why Modelyo section
  - Platform layers section
  - Opportunities section
  - Products section (Confidential Workspaces, AI, Databases, Kubernetes)
  - Solutions section (Defense, Government, Finance)
  - Partners section
  - Footer with newsletter signup

## Customization

- **Colors**: Edit CSS variables in `assets/css/main.css`
- **Content**: Edit `content/_index.md` or `layouts/index.html`
- **Styling**: Modify `assets/css/main.css`

## Notes

- Images are stored in `static/images/`
- The site uses Google Fonts (Poppins) loaded from CDN
- All styling is custom CSS (no external frameworks)

## Development

The Hugo server includes live reload, so changes to templates and CSS will automatically refresh in the browser.

## Deployment

### Vercel Deployment

1. **Connect your repository to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Hugo and use the `vercel.json` configuration

2. **Build Settings (if needed):**
   - Build Command: `hugo --minify`
   - Output Directory: `public`
   - Install Command: (leave empty or use `echo 'No install needed'`)

3. **Environment Variables:**
   - Vercel will automatically set the `HUGO_BASEURL` environment variable
   - You can also manually set it in Vercel dashboard if needed

4. **Deploy:**
   - Push to your main branch to trigger automatic deployments
   - Or manually deploy from the Vercel dashboard

### GitHub Push

1. **Stage all changes:**
   ```bash
   git add .
   ```

2. **Commit changes:**
   ```bash
   git commit -m "Prepare for deployment"
   ```

3. **Push to GitHub:**
   ```bash
   git push origin main
   ```

## Project Structure

```
Modelyo-MCP/
├── .gitignore              # Git ignore rules
├── vercel.json             # Vercel deployment configuration
├── package.json            # NPM scripts for Hugo
├── hugo.toml               # Hugo configuration
├── assets/
│   └── css/
│       └── main.css        # Main stylesheet
├── content/
│   └── _index.md           # Homepage content
├── layouts/
│   ├── _default/
│   │   └── baseof.html     # Base template
│   └── index.html          # Homepage template
├── static/
│   ├── images/             # All image assets
│   ├── css/                # CSS files
│   ├── js/                 # JavaScript files
│   └── 3d/                 # 3D Spline scene files
└── public/                # Generated site (gitignored)
```

