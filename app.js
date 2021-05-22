// Next Slide Function
document.getElementById("next").addEventListener("click", function () {
  let slides = document.querySelectorAll(".slide");
  for (let i = 0; i < slides.length; i++) {
    if (i === slides.length - 1 && slides[i].id === "active") {
      slides[i].id = "";
      slides[0].id = "active";
      break;
    } else if (slides[i].id === "active") {
      slides[i].id = "";
      slides[i + 1].id = "active";
      break;
    }
  }
});
// Last Slide Function
document.getElementById("last").addEventListener("click", function () {
  let slides = document.querySelectorAll(".slide");
  for (let i = 0; i < slides.length; i++) {
    if (i === 0 && slides[i].id === "active") {
      slides[i].id = "";
      slides[slides.length - 1].id = "active";
      break;
    } else if (slides[i].id === "active") {
      slides[i].id = "";
      slides[i - 1].id = "active";
      break;
    }
  }
});
