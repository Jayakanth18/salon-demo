# Salone - Beauty Salon Website

A modern, responsive beauty salon website built with Next.js 16, App Router, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16.1.6 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Next.js Image optimization and static generation
- **Interactive Components**: Auto-playing hero carousel, responsive navigation
- **Clean Code**: Well-organized components and pages structure

## 📄 Pages

- **Home** (`/`) - Hero section with carousel, about preview, services overview, team, and testimonials
- **About** (`/about`) - Detailed information about the salon
- **Services** (`/service`) - Comprehensive list of all salon services
- **Team** (`/team`) - Meet our experienced specialists
- **Testimonials** (`/testimonial`) - Client reviews and feedback
- **Contact** (`/contact`) - Contact form and information
- **404** - Custom not found page

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Fonts](https://fonts.google.com/) - Dancing Script, Playfair Display, Work Sans

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jayakanth18/salon-demo.git
cd salon-demo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
salon-demo/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── service/
│   ├── team/
│   ├── testimonial/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # Reusable React components
│   ├── Footer.tsx
│   ├── HeroCarousel.tsx
│   └── Navbar.tsx
├── public/               # Static assets (images)
└── old-site/            # Original HTML website (backup)
```

## 🎨 Customization

### Colors

The primary brand color can be customized in `app/globals.css`:

```css
:root {
  --primary: #d4a574; /* Brand color */
}
```

### Fonts

Fonts are loaded via Google Fonts in `app/layout.tsx`. Current fonts:
- Dancing Script (decorative headings)
- Playfair Display (headings)
- Work Sans (body text)

## 🌐 Deployment

### Vercel (Recommended)

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Jayakanth18/salon-demo)

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder. You can deploy this to any platform that supports Node.js.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any questions or inquiries, please contact:
- Email: info@example.com
- Phone: +012 345 67890

---

Built with ❤️ using Next.js and Tailwind CSS
