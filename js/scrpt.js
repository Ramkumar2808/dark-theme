const btn = document.querySelector("button");
const msg = document.createElement("h3");
msg.style.cssText = "color:red; text-align:center";

document.body.appendChild(msg);

btn.addEventListener("click", () => {
  msg.textContent = "you Are in Dark Mode";
  btn.classList.toggle("light");
  document.querySelector("body").classList.toggle("dark");

  if (btn.className == "light") {
    btn.textContent = "Light";
  } else {
    btn.textContent = "Dark";
    msg.textContent = "you Are in Light Mode";
  }
});
const theme = document.querySelector("select");
theme.addEventListener("change", () => {
  switch (theme.value) {
    case "yellow":
      document.body.style.backgroundColor = "yellow";
      break;
    case "chart":
      document.body.style.backgroundColor = "chartreuse";
      break;
    case "coral":
      document.body.style.backgroundColor = "coral";
      break;
  }
});
