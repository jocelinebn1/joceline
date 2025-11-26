# Joceline Chen - Personal Portfolio

A modern, interactive portfolio website showcasing design, development, and creative projects with a beautiful glassmorphism design aesthetic.

## 🌟 Features

- **Modern Design** - Clean, minimalist interface with glassmorphism effects
- **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - Elegant transitions and hover effects
- **Interactive Elements** - Smooth scrolling, toggle functionality
- **Daily Bible Verse** - Fun easter egg feature with random inspirational verses
- **Easy Navigation** - Intuitive menu with smooth page transitions
- **Portfolio Downloads** - Quick access to download your design portfolio as PDF

## 📄 Pages

### Home (`index.html`)
- Introduction and professional summary
- Featured project showcase (COSKA App)
- Call-to-action buttons
- iPhone mockup display

### Works (`works.html`)
- Project categories: UI/UX Design, Software Development, Data Science, Graphic Design, Photography, Mandarin
- Programming languages section (Python, SQL)
- Portfolio PDF downloads for design work
- Project links

### Fun (`fun.html`)
- Creative projects and personal work
- Interactive poem display with meaning reveal
- Expandable content cards
- Inspirational elements

### Contact
- Social media links (LinkedIn, Instagram, YouTube, Kaggle, GitHub)
- Email contact information
- Available on all pages via navbar

## 🛠 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with backdrop-filter for glassmorphism
- **JavaScript** - Vanilla JS for interactivity (no frameworks)
- **Font Awesome Icons** - Beautiful social media icons
- **Google Fonts** - Inter typeface

## 📁 Project Structure

```
joceline/
├── index.html          # Home page
├── works.html          # Works showcase page
├── fun.html            # Creative projects page
├── css/
│   └── styles.css      # Shared global styles
├── js/
│   └── script.js       # Shared JavaScript (Bible verse, smooth scroll)
├── assets/
│   └── pdf/
│       └── portfolio.pdf  # Your design portfolio
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🚀 Getting Started Locally

1. **Clone the repository** (or download as ZIP)
   ```bash
   git clone https://github.com/YOUR-USERNAME/joceline.git
   cd joceline
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use Live Server extension in VS Code

## 📋 Customization Guide

### Update Social Links
Edit the social media links in the Connect section of each HTML file:

```html
<a href="https://linkedin.com/in/YOUR-USERNAME" title="LinkedIn" target="_blank">
<a href="https://instagram.com/YOUR-USERNAME" title="Instagram" target="_blank">
<a href="https://youtube.com/@YOUR-CHANNEL" title="YouTube" target="_blank">
<a href="https://kaggle.com/YOUR-USERNAME" title="Kaggle" target="_blank">
<a href="https://github.com/YOUR-USERNAME" title="GitHub" target="_blank">
```

### Add Your Portfolio PDF
1. Place your portfolio PDF in: `assets/pdf/portfolio.pdf`
2. The download buttons will automatically work

### Update Content
- Edit text directly in the HTML files
- Update descriptions and project information
- Replace placeholder images with your own

### Customize Colors
Edit the CSS variables in `css/styles.css`:
- Primary blue: `#0099ff`
- Dark background: `#0a0a0a`
- Accent colors and gradients

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Create GitHub repository**
   - Go to github.com and create new repository named `joceline`
   - Make it public

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR-USERNAME/joceline.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose branch: `main`
   - Select folder: `/ (root)`
   - Save

4. **Your site is live!**
   ```
   https://YOUR-USERNAME.github.io/joceline
   ```

## 🎨 Design Features

### Glassmorphism Effect
- Used in bio box and bible verse card
- Creates modern, frosted glass appearance
- Combines backdrop blur with transparency

### Typography
- **Font**: Inter (from Google Fonts)
- **Hierarchy**: Clear visual hierarchy with size and weight
- **Responsive**: Scales appropriately on different devices

### Color Scheme
- **Primary**: Light blue (#0099ff)
- **Background**: Dark (#0a0a0a)
- **Accents**: Gradient blues and whites
- **Text**: White and gray tones for contrast

## ✨ Special Features

### Bible Verse Easter Egg
- Click the 📖 book icon in bottom right
- Get random inspirational Bible verses
- Smooth animations and glassmorphic design
- Click to reveal/hide

### Smooth Scrolling
- "Contact" link smoothly scrolls to connect section
- Works across all pages
- Enhances user experience

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly buttons and links

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔮 Future Enhancements

- Add more detailed project pages
- Implement blog section
- Add dark/light mode toggle
- Contact form with email integration
- Animated scrolling indicators
- Project filtering/search
- Case study pages

## 📧 Contact

For questions or feedback:
- Email: joceline.chen@binus.ac.id
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ by Joceline Chen**

*Last Updated: 2025*