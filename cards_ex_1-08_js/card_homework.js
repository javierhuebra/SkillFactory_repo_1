"use strict"

const URL_TODOS = "https://jsonplaceholder.typicode.com/todos";
fetch(URL_TODOS) 
    .then((response) => response.json())
    .then((data) => showData(data)); 

function showData(data){


    let screen = document.querySelector(".screen");
    let textoHTML=``;
    let cardNumber=1;

    let todosMaped = data.map((element)=>{
        return {
            
            name: element.title,
            userID: element.userId,
            ID: element.id,
            status: element.completed
            
        }
    });        
        console.log(todosMaped);

    
    todosMaped.map((carta)=>{
        
        if(carta.status==true){
            textoHTML += `
            <div>
                <img src='usuario.jpg'>
                <div class="textos">
                    <h2><span>Title:</span> ${carta.name}</h2>
                    <h2><span>User ID:</span> ${carta.userID}</h2>
                    <h2><span>ID:</span> ${carta.ID}</h2>
                    <h2><span>status:</span> <span class="green"> ${carta.status}</span></h2>
                    
                </div>
                <h3>Card numer ${cardNumber}<h3>
            </div>`;
        }else{
            textoHTML += `
            <div>
            <img src='usuario.jpg'>
            <div class="textos">
                <h2><span>Title:</span> ${carta.name}</h2>
                <h2><span>User ID:</span> ${carta.userID}</h2>
                <h2><span>ID:</span> ${carta.ID}</h2>
                <h2><span>status:</span> <span class="red"> ${carta.status}</span></h2>
                
            </div>
            <h3>Card numer ${cardNumber}<h3>
        </div>`;
        }
       
        
        cardNumber++;
    });

    screen.innerHTML+=textoHTML;
    
         
}

