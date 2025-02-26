# Consulting Company Website

This is a responsive website for a consulting company, built using HTML, CSS, and JavaScript. The website features a modern design with sections for services, contact information, and more. It is fully responsive and optimized for both desktop and mobile devices.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Setup Instructions](#setup-instructions)
4. [File Structure](#file-structure)
5. [Code Structure & Flow](#code-structure--flow)
6. [Additional Notes](#additional-notes)

---

## Project Overview
The website is designed to showcase the services offered by a consulting company, including IT solutions, recruitment, study abroad guidance, and business consulting. It includes:
- A responsive header with a navigation menu and hamburger icon for mobile devices.
- A hero section with a call-to-action button.
- Service cards highlighting key offerings.
- A contact form and company information section.
- A footer with social media links.

---

## Features
- **Responsive Design**: The website is fully responsive and adapts to different screen sizes, including mobile and desktop.
- **Interactive Elements**: Buttons and cards have hover effects for better user engagement.
- **Dynamic Navigation**: The hamburger menu toggles the navigation links on mobile devices.
- **Contact Form**: A fully functional contact form for user inquiries.
- **Modern Styling**: Clean and professional design with animations and transitions.

---

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/consulting-company-website.git
   cd consulting-company-website
   ```

2. **Open the Project**:
   - Open the `index.html` file in your browser to view the website.

3. **Modify the Content**:
   - Replace the placeholder text, images, and links in the `index.html` file with your own content.
   - Update the styles in `style.css` to match your branding.

4. **Test Responsiveness**:
   - Use browser developer tools to test the website on different screen sizes.

5. **Deploy the Website**:
   - Upload the project files to your web server or hosting platform (e.g., GitHub Pages, Netlify, etc.).

---

## File Structure
```
consulting-company-website/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet for the website
├── script.js           # JavaScript for interactive elements
├── assets/             # Folder for images and icons
│   ├── logo.jpg        # Company logo
│   ├── 2.jpg           # Background image for students card
│   ├── 3.jpg           # Background image for job seekers card
│   ├── ServiceLarge.jpg # Large image for services section
│   ├── icon1.svg       # Icon for IT services
│   ├── icon2.svg       # Icon for recruitment services
│   ├── icon3.svg       # Icon for study abroad services
│   ├── icon4.svg       # Icon for business consulting services
│   ├── linkedin.svg    # LinkedIn icon
│   ├── twitter.svg     # Twitter icon
│   ├── facebook.svg    # Facebook icon
│   ├── youtube.svg     # YouTube icon
│   └── pinterest.svg   # Pinterest icon
└── README.md           # Project documentation
```

---

## Code Structure & Flow
### **1. HTML (index.html)**
The HTML file contains the structure of the website:
- The `<header>` section contains the navigation bar and logo.
- The `<section class='hero'>` displays the main heading and call-to-action button.
- The `<section class='card-section'>` presents service categories.
- The `<section id='services'>` details the various consulting services.
- The `<section id='contact'>` provides a contact form and company information.
- The `<footer>` includes social media links.

### **2. CSS (style.css)**
The CSS file styles the website:
- The `.header` and `.nav-links` classes handle navigation styling.
- The `.hero` section applies a background image and text styling.
- The `.card-section` styles the service cards.
- The `.contact-form` defines input fields and button styling.
- The `.footer` contains styling for the social media links.

### **3. JavaScript (script.js)**
The JavaScript file handles user interactions:
- The `document.getElementById('hamburger')` toggles the mobile navigation menu.
- The `document.querySelectorAll('.nav-links a')` enables smooth scrolling when clicking on menu links.
- The `window.addEventListener('scroll')` modifies the header styling on scroll.
- The `document.querySelector('.contact-form')` processes form validation (if implemented).

---

## Additional Notes
- **Fonts Used**: The website uses Google Fonts (`Poppins` and `Montserrat`). Ensure an internet connection for the fonts to load correctly.
- **Icons**: Font Awesome icons are used for the hamburger menu and social media links.
- **JavaScript**: The `script.js` file handles the toggle functionality for the mobile navigation menu.
- **Customization**: You can easily customize the colors, fonts, and content to match your brand identity.

---

