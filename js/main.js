let array = [
    {
        fullName:"Wayne Barnett" ,
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo",

        
    },
    {
        fullName:"Angela Carrol" ,
        role: "Chief Editor",
        image: "angela-caroll-chief-editor",

        
    },
    {
        fullName:"Tizio Caio 3" ,
        role: "Office Manager",
        image: "walter-gordon-office-manager",

        
    },
    {
        fullName:"Tizio Caio 4" ,
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager",

        
    },
    {
        fullName:"Tizio Caio 5" ,
        role: "Developer",
        image: "scott-estrada-developer",

        
    },
    {
        fullName:"Tizio Caio 6" ,
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer",

        
    }
];


//--------------------- FUNZIONI ---------------------------
//Dato un array di oggetti, stampiamo i campi di ogni oggetto.
/*
function printArrayOfObject(arrayOfObject) {
    for (let key in arrayOfObject) {
        console.log(key);
    }

}
printArrayOfObject(array)
*/

//COL CICLO FOR 
function printArrayOfObject(arrayOfObject) {
for (let i = 0; i < arrayOfObject.length; i++) {
    console.log(arrayOfObject[i])
}
}
printArrayOfObject(array);

//card createCard()
//document.getElementById("cardContainer").addChild(card)

//---------------MILESTONE 2----------------

function createCards(htmlElement, arrayOfObject) {
    for (let i= 0; i < arrayOfObject.length; i++) {
        let p = document.createElement("p")
        p.innerHTML += arrayOfObject[i].fullName
        htmlElement.appendChild(p)
    }
}
let cardContainer = document.getElementById("cardContainer")
createCards(cardContainer, array)
//let p = document.createElement("p")
//p.innerHTML += "TEST"
//document.getElementById("cardContainer").appendChild(p)

document.getElementById("team_cards").innerHTML += `
    <div class="card col-4">
        <img src="./img/angela-caroll-chief-editor.jpg${array[0].fullName}" class="card-img-top" alt="Angela">
        <div class="card-body">
            <p class="card-text">${array[0].name}</p>
            <p>${array[0].job}</p>
        </div>
    </div>

`
document.getElementById("team_cards").innerHTML += `
    <div class="card col-4">
        <img src="./img/${array[1].fullName}" class="card-img-top" alt="Angela">
        <div class="card-body">
            <p class="card-text">${array[1].name}</p>
            <p>${array[1].job}</p>
        </div>
    </div>
`