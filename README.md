# Bean & Brew - Responsive Artisan Coffee Website

A responsive, multi-view front-end web project developed as part of the Junior Web Designer Internship task. This project translates visual UI mockups into a semantic, fully functional layout adhering to modern UI/UX principles and responsive design standards.

---

## 🚀 Live Demo
- **Live Preview:** [Click Here to View Live Site](https://muhammadiqram633.github.io/Bean_and_Brew_Responsive_Website/)

---

## 🛠️ Tech Stack & Specifications
- **Markup:** Semantic HTML5 (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- **Styling:** Vanilla CSS3 (Custom CSS Variables, Flexbox, CSS Grid, Media Queries)
- **Scripting:** Vanilla JavaScript (DOM Manipulation, Dynamic Filtering)
- **Typography:** Google Fonts (`Cinzel Decorative`, `Cinzel`, `Poppins`)

---

## 📐 Applied UI/UX & Design Principles

1. **Fitts’s Law & Touch Targets:**
   - Primary action buttons (e.g., `Explore Menu`, `Order Now`) are designed with a minimum touch-target size of $48\text{px}$ for accessibility across mobile and desktop environments.
2. **Jakob’s Law (Standard Mental Models):**
   - Implemented standard top navigation architecture with persistent branding on the left and navigation/actions aligned for zero user friction.
3. **Miller’s Law (Cognitive Chunking):**
   - Coffee offerings are structured into 4 distinct taxonomy filters (`ALL`, `HOT COFFEE`, `COLD BREW`, `WHOLE BEAN`) to prevent choice overload.
4. **WCAG 2.1 AA Compliance:**
   - High color contrast between Espresso text (`#2B1704`) and Cream background (`#FDFBF7`) achieving a verified contrast ratio above $12:1$ (exceeding the standard $4.5:1$ threshold).

---

## 📱 Responsiveness & Breakpoints
The layout seamlessly adapts across various viewport sizes using structured media queries:
- **Desktop (> 992px):** 4-column product grid, horizontal navigation.
- **Tablet (768px – 992px):** 2-column product grid, adjusted padding.
- **Mobile (< 768px):** Single-column stack, collapsible hamburger navigation menu.

---

## 📂 Project Structure
```text
Bean_and_Brew_Responsive_Website/
├── index.html       # Semantic layout & views
├── style.css        # Design tokens, grid, and media queries
├── script.js        # Dynamic filtering & mobile toggle logic
└── README.md        # Technical documentation
