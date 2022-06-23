function onScroll() {
  showBackToTopButtonOn();
}

function showBackToTopButtonOn() {
  if (scrollY > 700) {
    const nav = document.getElementById("backToTopButton").classList;
    nav.add("show");
  } else {
    const nav = document.getElementById("backToTopButton").classList;
    nav.remove("show");
  }
}
