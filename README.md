# Madrone Studios - Event Production Website

A beautiful, interactive website showcasing Madrone Studios' high-end event production services, converted from the 2026 pitch deck.

## ✨ Features

### Animations & Visual Effects
- **Smooth Scroll Animations**: All content fades in as you scroll
- **Parallax Effects**: Hero and section backgrounds move at different speeds for depth
- **Image Zoom Animations**: Background images subtly scale on hover
- **Custom Cursor**: Interactive cursor trail with gold accent
- **Floating Elements**: Case cards have subtle floating animations
- **Staggered Reveals**: Grid items animate in sequence
- **Sparkle Effects**: Interactive sparkle effects on title hovers

### Design Elements
- **Hero Section**: Full-screen intro with abstract 3D art background
- **Case Studies**: Three showcase cards with hover effects and actual event photos
- **Venue Showcase**: Full-screen background image of 57 Windward
- **Service Sections**: Multiple sections with immersive background imagery
- **Budget Breakdown**: Interactive table with hover states
- **Contact Section**: Clean, professional contact information

### Technical Features
- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Intersection Observer API for performance
- CSS Grid & Flexbox layouts
- Custom animations and transitions
- 93 extracted images from original PDF
- Optimized image loading

## 🚀 How to View

### Option 1: Direct File Open
```bash
open index.html
```

### Option 2: Local Server (Recommended)
```bash
# Using Python
python3 -m http.server 8080

# Then visit http://localhost:8080 in your browser
```

### Option 3: Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactions
├── images/             # 93 extracted images from PDF
│   ├── slide_1_full.png
│   ├── slide_7_img_1.jpeg
│   └── ...
├── extract_images.py   # Python script used to extract images
├── venv/              # Python virtual environment
└── README.md          # This file
```

## 🎨 Key Sections

1. **Hero** - Striking intro with animated background
2. **The Big Idea** - Creating cultural moments
3. **Why This Matters** - The shift from campaigns to experiences
4. **Our Model** - One partner, one vision approach
5. **Framework** - $1M+ engagement details
6. **Capacity** - Four flagship partners per year
7. **Case Studies** - Real examples with metrics
8. **Venue Partner** - 57 Windward showcase
9. **Services** - Environment, AV, Hospitality, Branding, Talent, Logistics, Reach
10. **Budget** - Detailed allocation breakdown
11. **Engagement** - Partnership structure
12. **Contact** - Get in touch information

## 🔧 Customization

### Colors
Main color variables are defined in `:root` in `styles.css`:
- `--bg-dark`: Background color
- `--text-primary`: Main text color
- `--accent-gold`: Gold accent color

### Images
All images are in the `images/` folder. You can replace them with new images while keeping the same filenames.

### Content
Edit `index.html` to update text content, stats, or add/remove sections.

## 📱 Browser Support

- Chrome (recommended)
- Safari
- Firefox
- Edge

## 🛠️ Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript
- Intersection Observer API
- Python (for image extraction)
- PyMuPDF (PDF processing)

## 📄 License

Proprietary & confidential © 2026 Madrone Studios

## 📧 Contact

For questions about this website:
- Email: jon@madronestudios.com
- Phone: +6275849248501
- Address: 57 Windward Ave, Venice, CA 90291 USA
