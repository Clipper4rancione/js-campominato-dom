/**
 * L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
 */

const boxContainer = document.getElementById('#box-container');
const selectLevel = document.querySelector('#difficulty');
//QUANTI BOX CI SONO PER ROW
let boxPerRow = 10;
const gridLevels = [100, 81, 49];
let bombs = [];
let score = 0;



const start = document.getElementById('start')
start.addEventListener('click', play);




// CREO LA FUNZIONE CHE INIZIA TUTTO
function play(){
   const boxNumbers = gridLevels[selectLevel.value];


   generateGrid(boxNumbers);
};

function generateGrid(boxNumbers){
    const grid = document.createElement('div');
    grid.className = 'grid';


    for(let i = 1; i <= boxNumbers; i++){
        const box = generateBox(i, boxNumbers);
        grid.append(box);
    }
    boxContainer.append(box);
};

function generateBox(boxID, boxNumbers){
    const box = document.createElement('div');
    box.classList.add('box' + boxNumbers);

    box.boxID = boxID;
    box.innerHTML = `<span>${boxID}</span>`;
    return box;
};

//CREO UNA FUNZIONE CHE PERMETTE DI INTERAGIRE CON I BOX
function clickBox(){
    this.classList.add('bg-azure');
    console.log(this.innerHTML);
};

