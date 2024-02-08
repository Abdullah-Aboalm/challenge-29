const mySub = document.querySelector("#sub");
const myEmail = document.querySelector("#Email");
const myBtn = document.querySelector("#Btn");
const myErr = document.querySelector("#Err");

const mySuccess = document.querySelector("#success");
const mySpan = document.querySelector("#E-address");
const myDismiss = document.querySelector("#Dismiss");

myBtn.addEventListener("click", () => {
  let Text = myEmail.value.split("");
  if (Text.length === 0) {
    myErr.style.cssText = "display: block";
    myEmail.classList.add("Err-Text");
    myEmail.style.cssText =
      "background-color: rgba(252, 129, 129, 0.286); border-color: rgba(244, 63, 63, 0.823); color: rgba(244, 63, 63, 0.823)";
  } else if (
    /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(myEmail.value)
  ) {
    mySub.style.cssText = "display: none";
    mySuccess.style.cssText = "display: flex";
    mySuccess.classList.add("animation");
    mySpan.textContent = myEmail.value;
  } else {
    myErr.style.cssText = "display: block";
    myEmail.classList.add("Err-Text");
    myEmail.style.cssText =
      "background-color: rgba(252, 129, 129, 0.286); border-color: rgba(244, 63, 63, 0.823); color: rgba(244, 63, 63, 0.823)";
  }
});

myDismiss.addEventListener("click", () => {
  mySub.style.cssText = "display: flex";
  myEmail.value = "";
  mySuccess.style.cssText = "display: none";
});

myEmail.addEventListener("input", () => {
  myErr.style.cssText = "display: none";
  myEmail.classList.remove("Err-Text");
  myEmail.style.cssText =
    "background-color: unset; border-color: rgb(161, 161, 161); color: unset";
});
