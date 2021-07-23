const start1 = document.getElementById("start");
const stop1 = document.getElementById("stop");
const reset = document.getElementById("reset");
const heading = document.getElementById("heading");
let lele;
let ok = false;
let sec = 0,
  min = 0,
  hr = 0,
  f = 0;
function func() {
  f = 0;
  if (ok) return;

  lele = setInterval(() => {
    ok = true;

    heading.innerHTML = `${hr} : ${min} : ${sec++}`;
    if (sec === 60) {
      min++;
      sec = 0;
      if (min === 60) {
        hr++;
        min = 0;
        sec = 0;
      }
      if (hr == 24) {
        hr = 0;
        min = 0;
        sec = 0;
      }
    }
    heading.style.color = "#333";
    heading.style.fontSize = "5em";
    heading.style.backgroundColor = "white";
  }, 1000);
}
function func1() {
  f = 1;
  clearInterval(lele);
  ok = false;
}
function func2() {
  f = 2;
  if (ok == false && f == 0) return;
  clearInterval(lele);
  ok = false;
  sec = 0;
  min = 0;
  hr = 0;
  heading.innerHTML = `STOPWATCH `;
  heading.style.color = "black";
  heading.style.fontSize = "3em";
}
start1.addEventListener("click", func);
stop1.addEventListener("click", func1);
reset.addEventListener("click", func2);
