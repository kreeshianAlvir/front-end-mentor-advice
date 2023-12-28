function initializeScript() {
  const adviceBtn = document.querySelector("#btn-advice");

  handleGenerateAdvice();

  adviceBtn.addEventListener("click", handleGenerateAdvice, false);
}

function handleGenerateAdvice() {
  const adviceTxt = document.querySelector(".advice-text");
  const adviceNum = document.querySelector("#advice-num");

  adviceTxt.innerHTML = "--";
  adviceNum.innerHTML = "--";

  fetch("https://api.adviceslip.com/advice", {
    method: "get",
  })
    .then((res) => res.json())
    .then((res) => {
      const { slip } = res;
      adviceTxt.innerHTML = `"${slip.advice}"`;
      adviceNum.innerHTML = slip.id;
    });
}

window.addEventListener("load", initializeScript);
