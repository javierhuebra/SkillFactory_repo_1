"use strict"

/* Fetch con .then()
Fetch con async/await
Axios async/await
Promise 
*/

//las promesas tienen tres estados fulfilled, reject y pending

const URL_USERS = "https://jsonplaceholder.typicode.com/users";
fetch(URL_USERS) //Si no le indico nada va a inferir que es de tipo get (le tengo que indicar post put delete)
    .then((response) => response.json())
    .then((data) => showData(data)); //console.table muestra la consola en formato table

function showData(data){
    console.table(data);

    let screen = document.querySelector(".screen");
    let textoHTML=``;

    for(let i = 0; i< data.length ; i++ ){
        textoHTML += `<h2>${data[i].name}</h2>`;
        console.log(data[i]);
    }
    screen.innerHTML=textoHTML;
}