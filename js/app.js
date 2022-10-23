
//file creato seguendo la logica della lezione e appunti presi dalla stessa, ragionando ed andando avanti solo dopo aver capito il passaggio precedente.



const main = document.querySelector('.game-wrapper');
const playBtn = document.querySelector('#play');
const levelSelect = document.querySelector('#level');

const gridLevels = [100, 81, 49];
let bombsNumber = 16;
let bombs = [];

let score = 0;
playBtn.addEventListener('click', play);


function play(){
    //STABILISCO IL NUMERO DELLE CELLE
    const boxNumbers = gridLevels[levelSelect.value];

    reset();

    generateGround(boxNumbers);
    bombs = bombGenerator(boxNumbers);
}

function generateGround(boxNumbers){
    //creo la griglia
    const grid = document.createElement('div');
    grid.className = 'grid';
    //creo le celle
    for(let i = 1; i <= boxNumbers; i++){
        const box = generateBox(i, boxNumbers);

        grid.append(box);
       
    }
    main.append(grid);
}

function generateBox(boxId, boxNumbers){
    const box = document.createElement('div');
    box.className = 'box';
    box.classList.add('box' + boxNumbers);
    box.boxId = boxId;
    box.innerHTML = `<span>${boxId}</span>`;
    box.addEventListener('click', handleClick);
    return box;
}

function handleClick(){
    if(!bombs.includes(this.boxId)){

        this.classList.add('clicked');
        score++;

        //CREO LA COLLECTION CHE CONTIENE TUTTE LE CELLE
        const boxes = document.getElementsByClassName('box');
        //CREO LA CONDIZIONE DI VITTORIA DEFINITIVA
        if(score === boxes.length - bombsNumber){
            endGame(true)
        }
    }else{
        endGame(false)
    }
}

function endGame(isWin){

    /*
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente
     ha cliccato su una cella che non era una bomba.
    */
    let msg;
    const boxes = document.getElementsByClassName('box');

    if(isWin){
        msg = ` HAI Vinto! <br>  
                Hai fatto ${score} punti su ${boxes.length - bombsNumber}`;
        console.log('HAI VINTO');
    }else{
        msg = ` HAI PERSO <br> 
                Hai calpestato una bomba :( <br> 
                Hai fatto ${score} punti su ${boxes.length - bombsNumber}`;
        console.log('HAI PERSO');
        //mi accende tutte le bombe 
        showBombs();
    }

    document.querySelector('.end-message').innerHTML = msg;
}

//creo la funzione che mi accende tutte le bombe
function showBombs(){

    const boxes = document.getElementsByClassName('box');
    for(let i = 0; i < boxes.length; i++){
        const box = boxes[i];
        if(bombs.includes(box.boxId)){
            box.classList.add('bomb');
        }
    }
};

function bombGenerator(boxNumbers){
    const bombsGenerated = [];

    while(bombsGenerated.length < bombsNumber){
        const bomb = randomNumberGenerator(1, boxNumbers);
        if(!bombsGenerated.includes(bomb)){
            bombsGenerated.push(bomb);
        }
    }
    return bombsGenerated;
}

function randomNumberGenerator(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reset(){
    main.innerHTML = '';
    score = 0;
    document.querySelector('.end-message').innerHTML = '';

}
