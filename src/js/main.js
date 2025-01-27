window.addEventListener('load', ()=>{
    const playerOne='X';
    const playerTwo='O';
    let turn = playerOne;
    let gameOver=false;
    const GAME=[
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ];
    const BOXES= document.querySelectorAll('.box');

    const isFull=()=>{
        const CP_BOXES=[...GAME].flat(Infinity);
        const isTotal=CP_BOXES.every(box=>box!==null);
        return isTotal;
    }

    const checkGame= ()=>{
        const isWinnerRowOne=[GAME[0][0],GAME[0][1],GAME[0][2]].every(item=>item===GAME[0][0] && item !== null);
        const isWinnerRowTwo=[GAME[1][0],GAME[1][1],GAME[1][2]].every(item=>item===GAME[1][0] && item !== null);
        const isWinnerRowThree=[GAME[2][0],GAME[2][1],GAME[2][2]].every(item=>item===GAME[2][0] && item !== null);
        
        const isWinnerColOne=[GAME[0][0],GAME[1][0],GAME[2][0]].every(item=>item===GAME[0][0] && item !== null);
        const isWinnerColTwo=[GAME[0][1],GAME[1][1],GAME[2][1]].every(item=>item===GAME[1][0] && item !== null);
        const isWinnerColThree=[GAME[0][2],GAME[1][2],GAME[2][2]].every(item=>item===GAME[2][0] && item !== null);

        const isWinnerDiagonalOne=[GAME[0][0],GAME[1][1],GAME[2][2]].every(item=>item===GAME[0][0] && item !== null);
        const isWinnerDiagonalTwo=[GAME[0][2],GAME[1][1],GAME[2][0]].every(item=>item===GAME[0][2] && item !== null);

        if(isWinnerRowOne || isWinnerColOne || isWinnerRowTwo || isWinnerColTwo || isWinnerRowThree 
            || isWinnerColThree || isWinnerDiagonalOne || isWinnerDiagonalTwo){
            const winner=turn === playerOne ? playerTwo :playerOne;
            alert(`${winner} es el ganador`);
            gameOver=true;
            window.location.reload();
            return;
        }
        // Comprobar empate
        if (isFull()) {
            alert('¡Es un empate!');
            gameOver = true; // Detenemos el juego
        }
    }

    BOXES.forEach((box)=>{
        box.addEventListener('click',()=>{
            if(gameOver) return;
            const row=box.getAttribute('data-row'); //capturamos atributos de box en este caso el valor de la fila en cada click
            const col=box.getAttribute('data-col'); // capturamos atributos de box en este caso el valor de la columna en cada click
            if (GAME[row][col] !== null) {
                return; // Si la celda ya está ocupada, no hacer nada
            }
            GAME[row][col]=turn;
           box.innerHTML=turn; //lee el html en este caso el boy y lo cambia al hacer click por el evento addeventlistener
           turn= turn===playerOne? playerTwo:playerOne; // si turn es playerone entonces turn es playertwo sino es playerone
           checkGame();
        })
    })
})