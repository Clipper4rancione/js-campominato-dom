/**
 * L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
 */

//SELEZIONO IL CONTAINER
const grid = document.getElementById('grid');
//QUANTI BOX CI SONO PER ROW
let boxPerRow = 10;




document.getElementById('start').addEventListener('click', function(){
    grid.innerHTML = ''
    //INIZIO IL "GIOCO"
    init(boxPerRow);
});





// CREO LA FUNZIONE CHE INIZIA TUTTO
function init(nBox){
    //ELEVO IL NUMERO DI BOX PER RIGA ALLA POTENZA PER CREARE LA GRIGLIA
    const totalBox = Math.pow(nBox, 2);
    //GENERO LA GRIGLIA CON UN CICLO FOR
    for(let i = 0; i < totalBox; i++){
        squareGenerator(i);
    };
};

// CREO LA FUNZIONE CHE GENERA IL BOX
function squareGenerator(boxID){
    //CREO IL BOX
    const box = document.createElement('div');
    box.className = 'square';
    //ASSEGNO UN NUMERO AL BOX
    box.innerHTML = boxID + 1;

    box.style.width = calcCss();
    box.style.height = calcCss();
    //AGGIUNGO UN' EVENTO AL BOX
    box.addEventListener('click', clickBox);
    //LO APPENDO AL CONTAINER
    grid.append(box);
};

function calcCss(){
    return ` calc(100% / ${boxPerRow})`;
}

//CREO UNA FUNZIONE CHE PERMETTE DI INTERAGIRE CON I BOX
function clickBox(){
    this.classList.add('bg-azure');
    console.log(this.innerHTML);
};