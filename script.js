
document.addEventListener("DOMContentLoaded", () => {
  
 
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

 
  const filterBtns = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
     
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedFilter = btn.getAttribute("data-filter");

      // Filter products dynamically
      productCards.forEach((card) => {
        const itemCategory = card.getAttribute("data-category");

        if (selectedFilter === "all" || itemCategory === selectedFilter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 3. Smooth Anchor Scrolling for Top Navigation
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
        
        // Mobile view mein menu band karne ke liye
        if (navLinks && navLinks.classList.contains("show")) {
          navLinks.classList.remove("show");
        }
      }
    });
  });

  console.log("Bean & Brew Script loaded and running successfully.");
});