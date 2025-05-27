# minimal-grid-portfolio

🔗 Live Demo: https://vercel.com/bishwas-thapa-magars-projects/minimal-grid-portfolio/8ir2qT16QiQUeUzZFgqGjdJ4aCqb

A **fully customizable**, **community-driven** portfolio starter built with Next.js, Tailwind CSS, Framer Motion, Lottie animations, and React Icons. Fork, customize your data & assets, and launch your own developer portfolio in minutes!

---

## 🚀 Features

- **Hero** section with Lottie animation
- **About** section with avatar, bio, fun-fact, skills (linear & radial), tech-stack icons, timeline & testimonials
- **Projects** grid with images, descriptions & tech badges
- **Contact** modal powered by EmailJS + floating button
- **Social** page with styled embed cards for LinkedIn, Medium, Facebook
- **Light / Dark mode** via next-themes
- **Responsive** design: mobile → tablet → desktop
- **Config-driven**: all content lives in simple TypeScript data files
- **Easy to fork & contribute**: clear CI, issue & PR templates

---

## 📦 Tech Stack

- **Next.js** 14 (App Router)
- **React & TypeScript**
- **Tailwind CSS** + shadcn/ui
- **Framer Motion** for animations
- **lottie-react** for JSON animations
- **EmailJS** for contact form
- **next-themes** for light/dark mode
- **React Icons** for logos & UI icons
- **Vercel** (recommended) for deployment

---

## 🛠️ Getting Started

### 1. Fork & Clone

```bash
# Fork this repo on GitHub, then:
git clone git@github.com:<YOUR-USERNAME>/minimal-grid-portfolio.git
cd minimal-grid-portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment

Create a `.env.local` in the project root:

```ini
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

> Obtain these values from your EmailJS dashboard.

### 4. Add Your Assets

- **Avatar:** `public/images/avatar.png`
- **Resume PDF:** `public/resume.pdf`
- **Lottie Animations:** `public/animations/*.json`
- **Project Screenshots:** `public/images/*.png`

### 5. Customize Your Data

Edit the following files under `src/data/`:

- **siteConfig.ts** – name, profession, colors, about (avatar, bio, funFact, resumeUrl, location, languages, skills), projects, contact links
- **social.ts** – embed URLs for the Social page
- **techStack.ts** – tech names & icons
- **timeline.ts** – career milestones
- **testimonials.ts** – quotes & authors

### 6. Run Locally

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 to see your personalized portfolio.

---

## 📐 Folder Structure

```
minimal-grid-portfolio/
├── public/
│   ├─ animations/      # Lottie JSON files
│   ├─ images/          # Avatar, project screenshots
│   └─ resume.pdf       # Downloadable resume
├── src/
│   ├─ app/             # Next.js App Router pages & layout
│   ├─ components/      # Reusable UI components
│   ├─ data/            # siteConfig.ts, social.ts, techStack.ts, timeline.ts, testimonials.ts
│   ├─ styles/          # globals.css (Tailwind imports)
│   └─ theme/           # theme palettes (optional)
├── .env.local          # EmailJS credentials
├── .gitignore
├── README.md
└── tailwind.config.js
```

---

## 🚀 Deployment

### Vercel (recommended)

1. Push your fork to GitHub.
2. Import the repo in Vercel.
3. Add the same environment variables in Vercel’s dashboard.
4. Deploy!

### Netlify

1. Connect your GitHub repo in Netlify.
2. Set the environment variables.
3. Deploy command:
   ```bash
   npm run build
   ```
   Publish directory: `.next`

---

## 🤝 Contributing

1. **Fork** the repo and **clone** locally.
2. Create a feature branch:
   ```bash
   git checkout -b feat/your-feature
   ```
3. **Make your changes**, update data modules or assets.
4. **Commit** with a clear message:
   ```bash
   git add .
   git commit -m "feat: add new testimonial"
   ```
5. **Push** and open a Pull Request against `main`.
6. Use the issue & PR templates in `.github/` to guide your contribution.

---

## 📝 License

Licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## ✉️ Contact

Built by **Your Name**.  
Questions or feedback? Open an issue or email `bishwastmgr@gmail.com`.
