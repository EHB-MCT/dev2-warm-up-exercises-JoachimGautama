import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();

warmup1();
warmup2();
warmup3();
warmup4();

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
  const scoresOriginal = getRandomScores(10);
  let scores = [...scoresOriginal];
  let contentC2 = "";

  document.getElementById("button-2a").addEventListener("click", () => {
    contentC2 = "<ul>";
    scoresOriginal.forEach(function (score) {
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
  const person = JSON.parse(student);
  document.getElementById("button-3a").addEventListener("click", function () {
    console.log(person);
  });

  document.getElementById("button-3b").addEventListener("click", function () {
    let html = "";
    html += `<h2>Naam: ${person.firstname} ${person.name}</h2>`;
    html += `<h2>Leeftijd: ${person.age}`;

    document.getElementById("content-3").innerHTML = html;

    if (person.isGraduated) {
      document.getElementById("content-3").classList = "graduated";
    } else {
      document.getElementById("content-3").classList = "not-graduated";
    }
  });
}

function warmup4() {
  let main = "Fetch data first";
  let min = "Fetch data first";
  let max = "Fetch data first";
  const URL =
    "http://api.openweathermap.org/data/2.5/weather?q=Brussels&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric";

  document.getElementById("button-4a").addEventListener("click", function () {
    goFetch(URL);
  });

  document.getElementById("button-4b").addEventListener("click", function () {
    const html = `<h2>Temp: ${main}</h2><h2>Min temp: ${min}</h2><h2>Max temp: ${max}`;

    document.getElementById("content-4").innerHTML = html;
  });

  function goFetch(URL) {
    fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (weather) {
        console.log(weather);
        main = weather.main.temp;
        min = weather.main.temp_min;
        max = weather.main.temp_max;
      });
  }
}

function warmup5() {}
