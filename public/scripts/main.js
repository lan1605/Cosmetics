window.addEventListener("load", function () {
  const toggle = document.querySelector(".header-navbar");
  const menu = document.querySelector(".header-top-menu");
  toggle && toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.toggle("mobile-active");
    toggle && toggle.classList.toggle("rotate-active");
  }
  document.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (e.target.matches(".header-navbar") || e.target.matches(".header-top-menu, .header-top-menu *")) return;
    menu && menu.classList.remove("mobile-active");
    toggle && toggle.classList.remove("rotate-active");
  }
});
//scroll to top
window.addEventListener("scroll", function () {
  const btnScrollTop = document.querySelector(".btn-scroll-top");
  if (window.scrollY > 700) {
    btnScrollTop.style.display = "block";
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 20);
      }
    };
    btnScrollTop.addEventListener("click", function () {
      scrollToTop();
    });
  } else {
    btnScrollTop.style.display = "none";
  }
  // sticky header
  const headerTop = document.querySelector(".header-top");
  if (window.scrollY > 0) {
    headerTop.classList.add("is-sticky");
  } else {
    headerTop.classList.remove("is-sticky");
  }
});
//accordion

const accordionList = document.querySelectorAll(".questions-accordion");
const accordionContentList = document.querySelectorAll(".questions-accordion--content");
const minusList = document.querySelectorAll(".minus");
const plusList = document.querySelectorAll(".plus");
accordionList.forEach(item => item.addEventListener("click", function () {
  const accordionContent = item.querySelector(".questions-accordion--content");
  const minusBtn = item.querySelector(".minus");
  const plusBtn = item.querySelector(".plus");
  if (!accordionContent.classList.contains("questions-accordion--content--active")) {
    accordionContentList.forEach(item => item.classList.remove("questions-accordion--content--active"));
    accordionList.forEach(item => item.classList.remove("questions-accordion-active"));
    item.classList.add("questions-accordion-active");
    accordionContent.classList.add("questions-accordion--content--active");
    minusList.forEach(item => item.classList.remove("active"));
    plusList.forEach(item => item.classList.add("active"));
    minusBtn.classList.add("active");
    plusBtn.classList.remove("active");
  } else {
    accordionContentList.forEach(item => item.classList.remove("questions-accordion--content--active"));
    accordionList.forEach(item => item.classList.remove("questions-accordion-active"));
    minusList.forEach(item => item.classList.remove("active"));
    plusList.forEach(item => item.classList.add("active"));
    minusBtn.classList.remove("active");
    plusBtn.classList.add("active");
  }
}));
// menu
const menuHeader = document.querySelectorAll(".header-menu-item");
menuHeader.forEach(item => item.addEventListener("click", function () {
  if (!item.classList.contains("active")) {
    menuHeader.forEach(item => item.classList.remove("active"));
    item.classList.add("active");
  }
}));