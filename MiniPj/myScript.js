const addClass = document.querySelector(".square");
for (let i = 1; i <= 12; i++) {
  if (i <= 6) {
    addClass.innerHTML += '<div class="circle" id="sale"></div>';
    if (i === 6) {
      let objSale = document.getElementById("sale");
      objSale.setAttribute("style", "background-color: lightgray;");
      objSale.innerHTML = '<h1 id="docSale">Giảm 20k</h1>';
    }
  } else {
    addClass.innerHTML += '<div class="circledown" id="free"></div>';
    if (i === 12) {
      let objFree = document.getElementById("free");
      objFree.setAttribute("style", "background-color: lightgray;");
      objFree.innerHTML = '<h1 id="docFree">Free</h1>';
    }
  }
}
