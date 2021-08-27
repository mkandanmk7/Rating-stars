const rating = document.querySelector("#rating");
function rate(click) {
  const stars = document.querySelectorAll(".star");
  [...stars].map((star) => star.classList.remove("hovered")); //removing class list
  click.classList.add("hovered"); //adding class list

  let points = ["poor", "Fair", "Average", "Good", "Excellent"];
  rating.innerHTML = points[click.getAttribute("data-value") - 1]; //length -1
  console.log(click.getAttribute("data-value"));
}
