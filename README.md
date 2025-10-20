# Personal Website Template - DIY Guide

A modern, responsive personal website template built with React, TypeScript, and TailwindCSS. Perfect for job seekers who want to maintain separate professional identities on LinkedIn vs. their own website.

## 🎯 Why This Template?

**The "Split Identity" Problem:**
Most people earning in traditional careers while building in Bitcoin need to position themselves differently for different audiences. This template gives you a sovereign web presence separate from LinkedIn.

**Example use cases:**
- LinkedIn → Traditional career positioning
- Personal Website → Bitcoin positioning
- Or vice versa - you decide!

---

## ✨ Features

### Base Template (Included)
- ✅ Professional homepage with bio
- ✅ CV/Resume display with downloadable PDF
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern UI with dark mode support
- ✅ Fast performance (Vite + React)

### Additional Features (Optional - See Instructions)
- 📧 Contact form (using Resend API)
- 📊 Privacy-first analytics (Umami)
- 📅 Booking calendar (Cal.com integration)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 22.x or higher ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- **npm** or **pnpm** (npm comes with Node.js)
- **Git** for cloning the repository

### Installation

```bash
# 1. Clone this repository
git clone https://github.com/MindaugasN/personal-website-template.git
cd personal-website-template

# 2. Install dependencies
npm install
# or if you use pnpm
pnpm install

# 3. Start development server
npm run dev
# or
pnpm dev
```

Visit http://localhost:5173 to see your site running locally!

---

## 📝 Customization Guide

**Quick Checklist - Complete these steps before deploying:**

- [ ] Updated personal information in `src/pages/Index.tsx` (see Step 1 below)
- [ ] Replaced profile photos in `public/profile.jpg` and `public/profile-opentobitcoin.png`
- [ ] Added your CV PDF to `src/assets/`
- [ ] Updated meta tags in `index.html` (see Step 5 below)
- [ ] Customized colors (optional) in `src/index.css`
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`

---

### Step 1: Update Personal Information

Edit `/src/pages/Index.tsx` and replace the following placeholders:

**Personal Details:**
```tsx
// Line ~30-40: Update your name and bio
I'm [YOUR NAME], a [YOUR PROFESSION] with extensive experience in [YOUR EXPERTISE].
```

**Contact Information:**
```tsx
// Email (around line 80)
<a href="mailto:YOUR_EMAIL@example.com">
  YOUR_EMAIL@example.com
</a>

// LinkedIn (around line 90)
<a href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME">

// GitHub (around line 95)
<a href="https://github.com/YOUR_GITHUB_USERNAME">
```

**Footer:**
```tsx
// Bottom of file
© 2025 [YOUR NAME] | Built with sovereignty in mind
```

---

### Step 2: Replace Images

1. **Profile Photo** (`public/profile.jpg`)
   - Replace with your professional headshot
   - Recommended size: 400x400px (square)
   - Format: JPG or PNG

2. **Open to Bitcoin Frame** (`public/profile-opentobitcoin.png`) - Optional
   - If you don't use #OpenToBitcoin frame, you can delete this file
   - Or replace with your alternative profile image
   - Used for hover effect on profile photo

3. **Favicon** (`public/favicon.svg`)
   - Replace with your personal brand icon
   - Size: 32x32px or 64x64px

---

### Step 3: Update CV/Resume

1. **Export your CV as PDF**
   - Name it: `cv-YOUR-NAME.pdf`

2. **Place in** `/src/assets/`
   - Replace existing `cv-mindaugas-nizauskas.pdf`

3. **Update import in** `/src/pages/Index.tsx`:
   ```tsx
   // Line ~5
   import cvPdf from "@/assets/cv-YOUR-NAME.pdf";
   ```

4. **Update download link** (around line 75):
   ```tsx
   <a href={cvPdf} download="YOUR-NAME-CV.pdf">
     Download CV
   </a>
   ```

---

### Step 4: Customize Colors (Optional)

Edit `/src/index.css` to change the color scheme:

```css
@layer base {
  :root {
    --background: 0 0% 100%;    /* White background */
    --foreground: 222.2 84% 4.9%;  /* Dark text */
    --accent: 25 100% 60%;      /* Orange accent (Bitcoin color) */
    /* ... modify other colors ... */
  }
}
```

**Quick color themes:**
- **Bitcoin Orange:** `--accent: 25 100% 60%;`
- **Professional Blue:** `--accent: 217 91% 60%;`
- **Tech Purple:** `--accent: 262 83% 58%;`

---

### Step 5: Update Metadata (SEO)

Edit `/index.html`:

```html
<head>
  <title>Your Name - Your Profession</title>
  <meta name="description" content="Professional website of Your Name - Data Engineer specializing in...">

  <!-- Open Graph for social sharing -->
  <meta property="og:title" content="Your Name - Your Profession">
  <meta property="og:description" content="Your bio here">
  <meta property="og:image" content="https://yourdomain.com/profile.jpg">
</head>
```

---

## 🌐 Deployment

### Option 1: Vercel (Recommended - Free Tier Available)

1. **Create Vercel account** at [vercel.com](https://vercel.com)

2. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow prompts:**
   - Link to existing project? No
   - What's your project name? `your-name-website`
   - Which directory is your code? `./`
   - Want to override settings? No

5. **Connect custom domain** (if you have one):
   - Vercel Dashboard → Your Project → Settings → Domains
   - Add your domain
   - Update DNS records at your domain registrar:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21

     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

**Free tier limits:**
- 100 GB bandwidth/month
- Unlimited deployments
- Free SSL certificate
- Perfect for personal portfolio sites

---

### Option 2: Netlify (Alternative)

1. **Create account** at [netlify.com](https://netlify.com)

2. **Deploy from GitHub:**
   - Push your code to GitHub first
   - Netlify → New Site from Git
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Or use Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

**Free tier:**
- 100 GB bandwidth/month
- Free SSL
- Continuous deployment from Git

---

### Option 3: GitHub Pages (Free, Static Only)

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Add base path in vite.config.ts:**
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Repository → Settings → Pages
   - Source: `gh-pages` branch
   - Your site: `https://username.github.io/repo-name`

⚠️ **Note:** Contact form won't work on GitHub Pages (no serverless functions). Use Vercel/Netlify for full features.

---

## 📧 Additional Feature Setup

### Contact Form (Resend Integration)

**Step 1: Create Resend Account**
1. Sign up at [resend.com](https://resend.com/signup) (free tier: 3,000 emails/month)
2. Verify your email
3. Go to [API Keys](https://resend.com/api-keys)
4. Create new API key → Copy it

**Step 2: Configure Environment Variables**
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env`:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

**Step 3: Update Contact Form Email**

Edit `/api/contact.ts` (around line 25):
```ts
const { data, error } = await resend.emails.send({
  from: 'website@yourdomain.com',  // Change this
  to: ['your.email@example.com'],   // Your actual email
  subject: `Website Contact: ${name}`,
  // ...
});
```

**Step 4: Deploy with Environment Variable**

On Vercel:
- Dashboard → Your Project → Settings → Environment Variables
- Add: `RESEND_API_KEY` = `your_key`
- Redeploy

**Testing:**
- Fill out contact form on your site
- Check your email inbox
- Check Resend dashboard for delivery status

---

### Umami Analytics (Privacy-First Tracking)

**Step 1: Create Umami Cloud Account**
1. Sign up at [umami.is](https://umami.is) (free tier: 10k events/month)
2. Add website: Dashboard → Add Website
3. Enter your domain name
4. Copy tracking script

**Step 2: Add Script to Your Site**

Edit `/index.html` in `<head>` section:
```html
<script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id="YOUR-WEBSITE-ID-HERE"
></script>
```

**Step 3: Test**
- Deploy your site
- Visit a few pages
- Check Umami dashboard → you should see visits

**Features:**
- Page view tracking
- Event tracking (see `data-umami-event` attributes in code)
- No cookies required
- GDPR compliant
- Public dashboard option (share your stats)

---

### Cal.com Booking Integration

**Step 1: Create Cal.com Account**
1. Sign up at [cal.com](https://cal.com) (free tier available)
2. Set up your availability calendar
3. Create event type (e.g., "30 min call")

**Step 2: Get Embed Code**
1. Cal.com → Event Types → Your Event → Embed
2. Copy the embed code

**Step 3: Add to Your Website**

Create new section in `/src/pages/Index.tsx`:
```tsx
{/* Booking Section */}
<section className="mb-16">
  <h2 className="text-2xl font-bold mb-4">Schedule a Call</h2>
  <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-8">
    {/* Paste Cal.com embed code here */}
    <iframe
      src="https://cal.com/YOUR-USERNAME/30min"
      width="100%"
      height="600px"
      frameBorder="0"
    ></iframe>
  </div>
</section>
```

---

## 🔧 Customization Tips

### Adding New Sections

The website structure in `/src/pages/Index.tsx` uses sections:

```tsx
{/* Add your new section here */}
<section className="mb-16">
  <h2 className="text-2xl font-bold mb-4">Section Title</h2>
  <div className="space-y-4">
    {/* Your content */}
  </div>
</section>
```

**Ideas:**
- **Portfolio Projects:** Showcase your work with screenshots
- **Blog/Writing:** Link to external blog or embed posts
- **Skills:** Tech stack and tools you use
- **Testimonials:** Recommendations from colleagues
- **Timeline:** Career journey visualization

---

### Changing Fonts

Edit `/src/index.css`:

```css
@layer base {
  body {
    font-family: 'Inter', sans-serif;  /* Change to your preferred font */
  }
}
```

Add to `/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

---

### Adding More Pages

1. Create new file in `/src/pages/` (e.g., `Portfolio.tsx`)

2. Add route in `/src/App.tsx`:
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}
```

3. Add navigation in header:
```tsx
<nav>
  <a href="/">Home</a>
  <a href="/portfolio">Portfolio</a>
</nav>
```

---

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** TailwindCSS + shadcn/ui components
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Backend API:** Vercel Serverless Functions (contact form)
- **Email:** Resend API
- **Analytics:** Umami (optional)

---

## 📦 Project Structure

```
personal-website/
├── public/                 # Static assets
│   ├── profile.jpg        # Your headshot
│   └── favicon.ico        # Browser icon
├── src/
│   ├── assets/            # Downloadable files
│   │   └── cv-*.pdf       # Your CV/resume
│   ├── components/
│   │   └── ui/            # shadcn/ui components
│   ├── pages/
│   │   └── Index.tsx      # Main homepage (CUSTOMIZE THIS)
│   ├── App.tsx            # App entry point
│   └── index.css          # Global styles + colors
├── api/
│   └── contact.ts         # Contact form serverless function
├── .env.example           # Environment variables template
├── package.json           # Dependencies
└── vite.config.ts         # Vite configuration
```

---

## 🐛 Troubleshooting

### Build fails with TypeScript errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Contact form doesn't work locally
- Serverless functions only work in production (Vercel)
- Use `npm run dev:vercel` to test locally with Vercel CLI
- Or test on Vercel preview deployment

### Images not loading after deployment
- Check images are in `/public/` folder
- Use absolute paths: `/profile.jpg` not `./profile.jpg`
- Ensure images are committed to Git

### Custom domain not working
- Wait 24-48 hours for DNS propagation
- Verify DNS records at [dnschecker.org](https://dnschecker.org)
- Check SSL certificate in Vercel/Netlify dashboard

---

## 📄 License

This template is free to use for personal websites. Attribution appreciated but not required.

---

## 🤝 Get Help

**If you need help deploying this:**

This template was created as part of the [Jobtober](https://jobtober.com/). If you're a Jobtober participant or [Bitvocation's POW Lab](https://www.bitvocation.com/pow-lab) member, I offer free setup assistance:

- **First 5 Jobtober participants:** Free setup + Year 1 hosting
- **After that:** 21k sats/year for deployment + hosting

**DM "jobtober" on LinkedIn:** [linkedin.com/in/mindaugas-nizauskas](https://linkedin.com/in/mindaugas-nizauskas)

---

## 🌟 Showcase

Using this template? Share your site and I'll add it here!

---

**Built with ⚡ by [Mindaugas Nižauskas](https://nizauskas.com/)**
**Building tools for the Bitcoin community**

---

## Changelog

### v1.0.0 (2025-10-18)
- Initial DIY template release
- Base features: Homepage, CV display, mobile responsive
- Optional features: Contact form, Umami analytics, Cal.com
- Complete deployment guides for Vercel, Netlify, GitHub Pages
