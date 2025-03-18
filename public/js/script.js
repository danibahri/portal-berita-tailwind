window.onload = function () {
  const loader = document.getElementById("loading");
  loader.style.display = "none";
};

window.onscroll = function () {
  const topButton = document.getElementById("topBotton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
};

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
