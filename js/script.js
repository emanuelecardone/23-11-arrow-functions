// effetto a matriosca per lo scope
// Ogni eventuale variabile è leggibile nel suo scope e in quelli innestati
// ma non viene letta negli scope esteriori in quanto non è globale
// ad esempio quel let i; verrà letto nel for poiché i ha uno scope più globale

// function example(){
//     let i;
//     while(!isNaN(i)){
//         for(i = 0; i < 100; i++){
//             if(i = 99){
//                 alert(`Ultimo giro`);
//             }
//         }
//     }
// }




// for(let i = 0; i < 3; i++){
//     exampleButton[i].addEventListener('click', miaFunzione);
// }


for(let i = 0; i < 5; i++){
    const title = document.createElement('h2');
    document.querySelector('body').appendChild(title);
    title.innerHTML = 'test';
    title.addEventListener('click', miaFunzione);
}

function miaFunzione (){
    // document.querySelector('.example_title').classList.add('red');
    this.classList.add('red');
}
