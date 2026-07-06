document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const icon = themeToggle.querySelector("i");

  const currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateIcon(currentTheme);

  themeToggle.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    let newTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    if (theme === "light") {
      icon.classList.remove("ph-moon");
      icon.classList.add("ph-sun");
    } else {
      icon.classList.remove("ph-sun");
      icon.classList.add("ph-moon");
    }
  }

  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  const mobileToggle = document.getElementById("mobile-toggle");
  const menu = document.getElementById("menu");

  mobileToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});

function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

document.querySelector(".close-modal").addEventListener("click", () => {
  document.getElementById("imageModal").style.display = "none";
});

document.getElementById("imageModal").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});
