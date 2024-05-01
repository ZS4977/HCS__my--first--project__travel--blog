let d_1 = document.getElementById("scroll_down1");
let d_2 = document.getElementById("scroll_down2");
let m_1 = false;
let linkocity = document.getElementById("linktocity()")

setInterval(function () {
  if (m_1 === false) {
    d_1.style.opacity = "0";
    d_2.style.opacity = "1";
    m_1 = true;
  } else {
    d_1.style.opacity = "1";
    d_2.style.opacity = "0";
    m_1 = false;
  }
}, 1000);


function linktocity {
  window.location.href = "city1.html"
}