console.log("This is separate file");
// Option 1: Directly set on the html element
{
  /* <button onclick="console.log(56)">Click!!</button> */
}

// option 2 : add onclick function on the html element
/* <button onclick="blue()">Make Blue</button> */
// Important we will use this sometimes

function blue() {
  document.body.style.backgroundColor = "blue";
}
function white() {
  document.body.style.backgroundColor = "white";
}

// Option 3
const red = document.getElementById("make-red");
red.onclick = redbtn; //ekhane redbtn e shudu hbe function er () hbe na.

function redbtn() {
  document.body.style.backgroundColor = "red";
}

// Option 4---------->
const purple = document.getElementById("make-purple");
purple.addEventListener("click", prplbtn);

function prplbtn() {
  document.body.style.backgroundColor = "purple";
}
// Option-4 another
const pink = document.getElementById("make-pink");
pink.addEventListener("click", function pinkbtn() {
  document.body.style.backgroundColor = "pink";
});

// Option 4 Final
// Important we will use this sometimes
document
  .getElementById("make-goldenRod")
  .addEventListener("click", function golden() {
    document.body.style.backgroundColor = "rgb(218, 165, 32)";
  });
