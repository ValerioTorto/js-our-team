let array = [
    {
        fullName:"Tizio Caio 1" ,
        role: "Developer",
        image: "coso.jpg",

        
    },
    {
        fullName:"Tizio Caio 2" ,
        role: "Developer",
        image: "coso.jpg",

        
    },
    {
        fullName:"Tizio Caio 3" ,
        role: "Developer",
        image: "coso.jpg",

        
    },
    {
        fullName:"Tizio Caio 4" ,
        role: "Developer",
        image: "coso.jpg",

        
    },
    {
        fullName:"Tizio Caio 5" ,
        role: "Developer",
        image: "coso.jpg",

        
    },
    {
        fullName:"Tizio Caio 6" ,
        role: "Developer",
        image: "coso.jpg",

        
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


