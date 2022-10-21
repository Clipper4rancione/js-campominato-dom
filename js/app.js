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
    console.log(boxNumbers);

    reset();

    generateGround(boxNumbers);
    bombs.push(bombGenerator(boxNumbers));
    console.log(bombs);
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
        score++
        console.log(score);
    }else{
        console.log('FINE');
    }
}

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
}
