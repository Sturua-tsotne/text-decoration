// cursor

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top :" + (e.pageY - 10) + "px;left:" + (e.pageX - 10) + "px"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
//Text
const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span class='text'>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    Complete();
    return;
  }
}

function Complete() {
  clearInterval(timer);
  timer = null;
}
