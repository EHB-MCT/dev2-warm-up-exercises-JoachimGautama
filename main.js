import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();

warmup1();
warmup2();

function warmup1() {
  let c1 = false;
  let c2 = false;
  let c3 = false;
  let contentC1 = "Let's start session 1";
  let optionalTitle = "";

  console.log("Exercise week 1");

  document.getElementById("button-1a").addEventListener("click", function () {
    c1 = !c1;
    if (c1 == true) {
      contentC1 = "Dit is de oefening van Joachim";
    } else {
      contentC1 = "Let's start session 1";
    }
    document.getElementById("content-1").innerHTML = contentC1 + optionalTitle;
  });

  document.getElementById("button-1b").addEventListener("click", () => {
    c2 = !c2;
    if (c2 == true) {
      document.getElementById("section-1").style.backgroundColor = "lightblue";
    } else {
      document.getElementById("section-1").style.backgroundColor = "#fde0dc";
    }
  });

  document.getElementById("button-1c").addEventListener("click", () => {
    c3 = !c3;
    if (c3 == true) {
      optionalTitle = "<h1>Ik ben er klaar voor</h1>";
    } else {
      optionalTitle = "";
    }
    document.getElementById("content-1").innerHTML = contentC1 + optionalTitle;
  });
}

function warmup2() {
  console.log("Exercise week 2");
  let scores = getRandomScores(10);
  let contentC2 = "";

  document.getElementById("button-2a").addEventListener("click", () => {
    contentC2 = "<ul>";
    scores.forEach(function (score) {
      contentC2 += `<li>${score}</li>`;
    });
    document.getElementById("content-2").innerHTML = contentC2;
  }) + "</ul>";

  document.getElementById("button-2b").addEventListener("click", () => {
    scores = scores.sort(function (a, b) {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    });
    contentC2 = "<ul>";
    scores.forEach(function (scores) {
      contentC2 += `<li>${scores}</li>`;
    });
    document.getElementById("content-2").innerHTML = contentC2 + `</ul>`;
  });

  document.getElementById("button-2c").addEventListener("click", () => {
    const sum = scores.reduce(function (total, current) {
      return total + current;
    });
    document.getElementById(
      "content-2"
    ).innerHTML += `<h1>Som scores = ${sum}</h1>`;
  });
}

function warmup3() {
  let student = getStudentJSON();
}

function warmup4() {
  let main, min, max;
}

function warmup5() {}
