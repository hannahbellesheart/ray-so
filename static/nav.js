// Navigation dropdown functionality
(function () {
  const navTrigger = document.getElementById("navTrigger");
  const navMenu = document.getElementById("navMenu");

  if (navTrigger && navMenu) {
    navTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      navTrigger.classList.toggle("active");
      navMenu.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!navTrigger.contains(e.target) && !navMenu.contains(e.target)) {
        navTrigger.classList.remove("active");
        navMenu.classList.remove("show");
      }
    });
  }
})();
