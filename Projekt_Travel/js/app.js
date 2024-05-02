let d_1 = document.getElementById("scroll_down1");
let d_2 = document.getElementById("scroll_down2");
let temperature = document.getElementById("temperature");
let copyright = document.getElementById("copyright");
let top_block = document.getElementById("top_block");

let pics_pic = document.querySelectorAll(".item_pic");
let pic_res = document.getElementById("pic_res");

let btn_add = document.getElementById("btn_add");
let form_m = document.getElementById("form_m");
let m_1 = false;
if (d_1 != undefined) {
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
}

let key_wether = "9b2134590bea1de49510f364bec32fde";

async function currentWeather() {
  let str = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key_wether}`;
  const data = await fetch(str).then((response) => {
    response.json().then(function (data) {
      console.log(data);
      if (temperature != null)
        temperature.innerHTML = `Temperature: ${Math.floor(
          data.main.temp - 273
        )} °C <br /> humidity: ${data.weather[0].description}  <br /> `;
    });
  });
}
currentWeather();
if (copyright != undefined) {
  let date = new Date();
  let year_current = date.getFullYear();
  if (copyright != null) copyright.innerHTML = `Copyright @ ${year_current}`;
}
if (top_block != undefined) {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      top_block.style.display = "block";
      top_block.style.opacity = "1";
    } else {
      top_block.style.display = "none";
      top_block.style.opacity = "0";
    }
  });
  top_block.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });
}
if (pics_pic != undefined) {
  pics_pic.forEach(function (image) {
    image.addEventListener("click", function () {
      pic_res.src = this.src;
    });
  });
}

/**обработка формы new location*/

function form_load(event) {
  event.preventDefault();
  let city = document.getElementsByClassName("city")[0].value;
  let country = document.getElementsByClassName("country")[0].value;
  let date_from = document.getElementById("date_from").value;
  let date_to = document.getElementById("date_to").value;
  let description = document.getElementsByClassName("description")[0].value;
  console.log(city, country, date_to, date_from, description);
}
