# Cara Mia Restaurant Website

A beautiful, modern, and responsive website for Cara Mia Restaurant, built with love to honor the memory of your uncle who poured his heart and soul into creating this special place.

## 🌟 Features

- **Modern Design**: Elegant, professional appearance that reflects the quality of your restaurant
- **Fully Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Beautiful scroll animations and hover effects
- **Interactive Elements**: Engaging user experience with smooth interactions
- **Professional Typography**: Beautiful fonts that enhance readability
- **Optimized Performance**: Fast loading and smooth scrolling
- **Accessibility**: Built with accessibility best practices

## 🎨 Design Elements

- **Color Scheme**: Warm gold accents (#d4af37) representing Italian elegance
- **Typography**: Playfair Display for headings (elegant serif) and Inter for body text (clean sans-serif)
- **Layout**: Modern grid-based design with beautiful spacing
- **Animations**: Subtle fade-ins, hover effects, and smooth transitions

## 📱 Sections Included

1. **Hero Section**: Stunning full-screen introduction with call-to-action buttons
2. **About Section**: Your restaurant's story and a touching tribute to your uncle
3. **Announcement**: "We Are Now Open!" section to attract attention
4. **Hours & Happy Hour**: Clear display of operating hours and special offers
5. **Menu Preview**: Overview of your menu categories
6. **Photo Gallery**: Showcase your restaurant's ambiance and dishes
7. **Contact Information**: Address, phone, and social media links
8. **Newsletter Signup**: Keep customers updated with special offers
9. **Footer**: Additional links and memorial tribute

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS (for customization)

### Installation
1. Download all files to your computer
2. Open `index.html` in your web browser to view the website
3. Customize the content as needed

## ✏️ Customization Guide

### Adding Your Photos
Replace the image placeholders with your actual restaurant photos:

1. **Hero Background**: Update the background image in `styles.css` (line ~200)
2. **Gallery Images**: Replace the placeholder divs with actual `<img>` tags
3. **About Section**: Add your restaurant interior photo

### Updating Content
- **Restaurant Information**: Modify text in `index.html`
- **Hours**: Update the hours in the hours section
- **Menu**: Add your actual menu items
- **Contact Details**: Update address, phone, and social media links

### Changing Colors
The main color scheme uses:
- Primary Gold: `#d4af37`
- Darker Gold: `#b8860b`
- Text: `#333` (dark gray)
- Background: `#fafafa` (light gray)

### Adding New Sections
You can easily add new sections by following the existing pattern in the HTML and CSS.

## 📱 Mobile Responsiveness

The website automatically adapts to different screen sizes:
- **Desktop**: Full layout with side-by-side sections
- **Tablet**: Adjusted spacing and layout
- **Mobile**: Stacked layout with mobile navigation menu

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your website folder
3. Get a free URL instantly
4. Option to connect a custom domain

### Option 3: Traditional Web Hosting
1. Upload files to your web hosting provider
2. Point your domain to the hosting
3. Your site will be live at your domain

## 🔧 Technical Details

- **HTML5**: Semantic markup for better SEO
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Vanilla JS for interactivity (no frameworks needed)
- **Optional Backend**: Simple Node.js/Express server for reservations (SQLite)

### Local backend (reservations)

An optional server in `server/` accepts reservation requests and stores them in a local SQLite database.

Setup:
1. Install Node.js 18+
2. In a terminal:
   ```bash
   cd server
   npm install
   npm start
   ```
   The API runs on `http://localhost:3001`.

Endpoints:
- `POST /api/reservations` — create a reservation

Environment variables:
- `PORT` (default 3001)
- `DB_PATH` (default `cara_mia.sqlite`)
- **Fonts**: Google Fonts (Playfair Display + Inter)
- **Icons**: Font Awesome for beautiful icons
- **Performance**: Optimized for fast loading

## 📞 Support & Customization

If you need help customizing the website:

1. **Content Updates**: Modify the HTML files directly
2. **Styling Changes**: Edit the CSS file
3. **Functionality**: Modify the JavaScript file
4. **Professional Help**: Consider hiring a web developer for complex changes

## 💝 Special Features

- **Memory Tribute**: Special section honoring your uncle's legacy
- **Smooth Scrolling**: Elegant navigation between sections
- **Interactive Elements**: Hover effects and animations
- **Newsletter Integration**: Easy way to collect customer emails
- **Social Media Links**: Connect with customers on all platforms

## 🎯 Next Steps

1. **Add Your Photos**: Replace placeholders with actual restaurant images
2. **Update Content**: Customize text to match your restaurant
3. **Choose Domain**: Decide on your website address
4. **Deploy**: Upload to your chosen hosting platform
5. **Share**: Let your customers know about your beautiful new website!

## 🌟 In Memory

This website was created to honor the memory of your uncle, whose passion for Italian cuisine and love for family continues to inspire everyone who visits Cara Mia. Every element of this design reflects the warmth, elegance, and authenticity that he brought to your restaurant.

---

*Built with love and respect for family traditions and authentic Italian cuisine.*
