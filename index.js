let slc = document.querySelector("select");
let adb = document.querySelector(".adb");
let elmy = document.querySelector(".elmy");
let holder = document.querySelector(".holder");
slc.onchange = function () {
  window.localStorage.setItem("value", slc.value);
  if (window.localStorage.getItem("value") === "2") {
    adb.style.cssText = "display: none;";
    elmy.style.cssText = "display: block;";
    slc.style.cssText = "border-color: #82e2ff;";
  }
  if (window.localStorage.getItem("value") === "1") {
    elmy.style.cssText = "display: none;";
    adb.style.cssText = "display: block;";
    slc.style.cssText = "border-color: coral;";
  }
};

if (window.localStorage.getItem("value") === "2") {
  adb.style.cssText = "display: none;";
  elmy.style.cssText = "display: block;";
  slc.style.cssText = "border-color: #82e2ff;";
}
if (window.localStorage.getItem("value") === "1") {
  elmy.style.cssText = "display: none;";
  adb.style.cssText = "display: block;";
  slc.style.cssText = "border-color: coral;";
}

slc.value = window.localStorage.getItem("value");

let sur = document.querySelector(".sur");
let surS = document.querySelector(".sur span");
setTimeout(function () {
  sur.classList.add("show");
}, 4000);

surS.onclick = function () {
  sur.classList.remove("show");
};
