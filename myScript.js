/* diretct in HTML */
/* variables var, let, const */
var oldCnt = 0;
let newCnt = 0;
const maxCnt = 5;
const strCnt = "5"


console.log("==: ",(maxCnt == strCnt));
console.log("===: ",(maxCnt === strCnt));

for (let i=0;i<maxCnt;i++) {
    console.log("cnt: ", i);
    console.count("loop-counter");
}

/* console log */
console.error("Fehler, sofort anhalten!!");
console.debug("Information zum Debuggen");
console.info("Info, level")


// navigator.geolocation.getCurrentPosition(
//     function(position){
//     // wenn Positionsbestimmung geklappt hat:
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     const alt = position.coords.altitude+'m';
//     const acc = position.coords.accuracy+'m';
//     console.log("position: ",{lat,lon,alt,acc});
//     },
//     function(){
//     // wenn Positionsbestimmung einen Fehler erzeugt hat (z.B. weil Sie vom User ablehnt wurde).
//     console.warn("position not found");
//     }
// )


/* JSON (JavaScript Object Notation) */
const person = {
    "name": "TestPerson",
    "arbeitBei": "Hartlauer",
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
};

console.log(person);

const color = "red";


function clickHeading() {
    const elem = document.getElementById("heading");
    let elemCol = elem.style.color;

    console.log("color: ", elemCol);
    elemCol =  elemCol=="" ? "red" : elemCol;

    if (elemCol === color) {
        elemCol = "blue";
    } else {
        elemCol = "red";
    }

    elem.style.color = elemCol;
}

/* --------------------------------- */
/* in script file */

const mybutton = document.getElementById('myF1');
if ( mybutton != null ) {
    mybutton.classList.add("button","f1");
    mybutton.addEventListener("click", (event) => {
        addF1Cars();
    });
}

async function addF1Cars() {
    const json =  await callJson("./f1_teams.json");

    if(json != null) {
        const f1Ranking = document.getElementById('f1-team-ranking');
        console.log("f1-container: ",f1Ranking);
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
                
                // ranking-div
                const divRow1 = document.createElement("div");
                divRow1.classList.add("team-row","ranking");
                divRow1.innerText = `Pos: ${team.ranking}`; //string - literals
                divTeam.appendChild(divRow1);
                
                // name-div
                const divRow2 = document.createElement("div");
                divRow2.classList.add("team-row","name");
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

async function callJson(url) {
    let json = null;
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        json = await response.json();
        console.log("Json erfolgreich geladen: ",json);

    } catch (error) {
        console.error(error.message);
    }

    return json;
}