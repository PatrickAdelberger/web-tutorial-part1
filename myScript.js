var oldCnt = 0;

let newCnt = 0;
const maxCnt = 5;
const strCnt = "5";

//   console.log("test");
//   console.debug("debug");
//   console.warn("warn");
//   console.error("error");

console.log("oldCnt == newCnt", oldCnt == newCnt);
console.log("maxCnt == strCnt", maxCnt == strCnt);
console.log("maxCnt === strCnt", maxCnt === strCnt);

for (let i=0;i<maxCnt;i++) {
  console.count("loop-counter");
}

// example JSON
let person = {
  "name": "TestPerson",
  "arbeitetBei": "Hartlauer",
  "alter": 33,
  "ambidexter": false,
  "haustiere": [
      {
          "art": "Katze",
          "name": "DeathStare"
      },
      {
          "art": "Hund",
          "name": "GuiltyEyes"
      }
  ]
}

console.log(person);

const color = "red";

// change color of h1-element (id="heading")
function clickHeading() {
  const elem = document.getElementById("heading");
  let elemCol = elem.style.color;

  console.log("color: ", elemCol);
  elemCol = elemCol === "" ? "red" : elemCol;

  if(elemCol === color) {
      elemCol = "blue";
  } else {
      elemCol = "red";
  }
  elem.style.color = elemCol;
}

// add class and eventlistener to button
const myButton = document.getElementById('myF1');
if(myButton != null) {
    myButton.classList.add("button","f1");
    myButton.addEventListener("click", (event) => {
        addF1Cars();
    })
}

// create F1 ranking
async function addF1Cars() {
    const json = await callJson("./f1_teams.json");

    if(json != null) {

        const f1Ranking = document.getElementById('f1-team-ranking');
        console.log("f1-container: ",f1Ranking);
        
        // make sure the ranking will not be added twice
        if (f1Ranking == null) {

            const f1Container = document.createElement("div");
            f1Container.id = "f1-team-ranking";
            f1Container.classList.add("f1-teams","f1-ranking");
            document.body.appendChild(f1Container);

            // sortierung nachdem die fertig sind
            json.teams.sort((a,b) => a.ranking - b.ranking);

            json.teams.forEach(team => {
                const divTeam = document.createElement("div");
                divTeam.classList.add("team");
                f1Container.appendChild(divTeam);
                
                // -- 1. row in flex layout --
                // ranking-div
                const divRow1 = document.createElement("div");
                divRow1.classList.add("team-row","ranking");
                divRow1.innerText = `Ranking: ${team.ranking}`; //string - literals
                divTeam.appendChild(divRow1);
                
                // -- 2. row in flex layout --
                // name-div
                const divRow2 = document.createElement("div");
                divRow2.classList.add("team-row","name-row");
                // name-logo
                const imgLogo = document.createElement("img");
                imgLogo.classList.add("team-logo");
                imgLogo.src = `./images/F1/team-logos/${team.logo}` //string - literals
                imgLogo.alt = `Logo von Team ${team.name}`;
                divRow2.appendChild(imgLogo);
                // name-label
                const divNameLabel = document.createElement("div");
                divNameLabel.classList.add("team-name");
                divNameLabel.innerText = `${team.name}`; //string - literals
                divRow2.appendChild(divNameLabel);
                divTeam.appendChild(divRow2);
                
                // -- 2. row in flex layout --
                // car-div
                const divRow3 = document.createElement("div");
                divRow3.classList.add("team-row","car");
                // car-img
                const imgCar = document.createElement("img");
                imgCar.classList.add("team-car");
                imgCar.src = `./images/F1/team-cars/${team.car}`; //string - literals
                imgCar.alt = `Auto von Team ${team.name}`;
                divRow3.appendChild(imgCar);
                divTeam.appendChild(divRow3);
            });
        }
    }
}

// load the F1 teams data (JSON) 
async function callJson(url) {
    let json = null;
    
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        json = await response.json();
        console.log("Json: ", json);

    } catch (error) {
        console.error(error.message);
    }

    return json;

}