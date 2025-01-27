window.addEventListener('load', ()=>{
    const playerOne='X';
    const playerTwo='O';
    let turn = playerOne;
    const GAME=[
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ];
    const BOXES= document.querySelectorAll('.box');

    const isFull=()=>{
        const CP_BOXES=[...GAME].flat(Infinity);
        const isTotal=CP_BOXES.every(box=>box!==null);
        console.log(CP_BOXES);
    }

    const checkGame= ()=>{
        const isWinnerRowOne=[GAME[0][0],GAME[0][1],GAME[0][2]].every(item=>item===GAME[0][0]);
        const isWinnerRowTwo=[GAME[1][0],GAME[1][1],GAME[1][2]].every(item=>item===GAME[1][0]);
        const isWinnerRowThree=[GAME[2][0],GAME[2][1],GAME[2][2]].every(item=>item===GAME[2][0]);
        
    }

    BOXES.forEach((box)=>{
        box.addEventListener('click',()=>{
            const row=box.getAttribute('data-row'); //capturamos atributos de box en este caso el valor de la fila en cada click
            const col=box.getAttribute('data-col'); // capturamos atributos de box en este caso el valor de la columna en cada click
            GAME[row][col]=turn === playerOne ? 0:1;
           box.innerHTML=turn; //lee el html en este caso el boy y lo cambia al hacer click por el evento addeventlistener
           turn= turn===playerOne? playerTwo:playerOne; // si turn es playerone entonces turn es playertwo sino es playerone
           if(isFull()){
            checkGame();
           }
        })
    })
})