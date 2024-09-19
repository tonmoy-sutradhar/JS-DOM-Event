// option-1
function btnClick() {
  console.log("Button click");
  const text = document.getElementById("defultTxt");
  text.innerText = "This is a DOM Summery practice/";
}

// option-2
document
  .getElementById("event-listener")
  .addEventListener("click", function () {
    const text = document.getElementById("defultTxt");
    text.innerText = "Update by Event listener function.";
  });
