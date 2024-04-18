let wholeGame = document.querySelector('.wholeGame'),
    upBtn = document.querySelector('.upBtn'),
    rightBtn = document.querySelector('.rightBtn'),
    downBtn = document.querySelector('.downBtn'),
    leftBtn = document.querySelector('.leftBtn'),
    output = document.querySelector('.output'),
    yourScore = document.querySelector('.yourScore'),
    highestScore = document.querySelector('.highestScore'),
    randomNumberArray = [2, 4],
    randomPlace,
    randomNumber,
    blankCellArray = [],
    score = 0,
    highest = 0;

window.onload = game();



// Whole Function
function game() {
    if (yourScore.innerHTML >= 2048) {
        gameWon();
    }
    appearNumber();
    appearNumber();
    colorize();


    // Function for Key Press
    window.addEventListener('keydown', function (event) {
        switch (event.which) {
            case 38:
                movementToUpDirection();
                appearNumber();
                colorize();
                break;
            case 40:
                movementToDownDirection();
                appearNumber();
                colorize();
                break;
            case 39:
                movementToRightDirection();
                appearNumber();
                colorize();
                break;
            case 37:
                movementToLeftDirection();
                appearNumber();
                colorize();
                break;
            default:
                break;
        }
    });



    // Function for Visual Buttons
    upBtn.addEventListener('click', function () {
        movementToUpDirection();
        appearNumber();
        colorize();
    });
    downBtn.addEventListener('click', function () {
        movementToDownDirection();
        appearNumber();
        colorize();
    });
    rightBtn.addEventListener('click', function () {
        movementToRightDirection();
        appearNumber();
        colorize();
    });
    leftBtn.addEventListener('click', function () {
        movementToLeftDirection();
        appearNumber();
        colorize();
    });
};



// Function for Appearing Numbers in Each Blank Cells
function appearNumber() {
    for (let eachCell of wholeGame.children) {
        if (!eachCell.innerHTML) {
            blankCellArray.push(eachCell);
        }
    }
    if (!blankCellArray.length) {
        endGame();
    }
    randomPlace = Math.ceil(Math.random() * blankCellArray.length) - 1;
    randomNumber = Math.ceil(Math.random() * 2) - 1;
    blankCellArray[randomPlace].innerHTML = randomNumberArray[randomNumber];
    score += randomNumberArray[randomNumber];
    if (highest <= score) {
        highest = score;
    }
    sessionStorage.setItem("highestScore", highest);
    yourScore.innerHTML = score;
    highestScore.innerHTML = sessionStorage.getItem('highestScore');
    blankCellArray = [];
}

// Function for Ending and Restarting the Game
function endGame() {
    output.innerHTML = `Game Over!!!`;
    setTimeout(() => {
        output.innerHTML = `Restarting the game in 3...`;
    }, 2000);
    setTimeout(() => {
        output.innerHTML = `Restarting the game in 2...`;
    }, 2500);
    setTimeout(() => {
        output.innerHTML = `Restarting the game in 1...`;
    }, 3000);
    setTimeout(() => {
        for (let eachCell of wholeGame.children) {
            eachCell.innerHTML = '';
            eachCell.style.background = '';
        }
        output.innerHTML = `Game RESTARTED`;
    }, 4000);
    setTimeout(() => {
        output.innerHTML = `Click in those button or Arrow key in keyboard to continue!`;
    }, 5000);
    setTimeout(() => {
        output.innerHTML = ``;
    }, 8000);
    score = 0;
};





// movementAccordingToDirection();

// Function to Move Numbers According to Up Direction
function movementToUpDirection() {
    for (let eachCell = 0; eachCell < wholeGame.children.length; eachCell++) {
        if (wholeGame.children[eachCell].innerHTML) {
            let nextCell = eachCell;
            let current = wholeGame.children[nextCell].innerHTML;
            if (eachCell > 3) {
                if (
                    wholeGame.children[nextCell - 12]
                    && !(wholeGame.children[nextCell - 8].innerHTML)
                    && !(wholeGame.children[nextCell - 4].innerHTML)
                    && (!(wholeGame.children[nextCell - 12].innerHTML) || (current === wholeGame.children[nextCell - 12].innerHTML))) {
                    wholeGame.children[nextCell - 12].innerHTML = (wholeGame.children[nextCell - 12].innerHTML - 1 + 1) + parseInt(current);
                    wholeGame.children[nextCell].innerHTML = '';
                } else if (
                    wholeGame.children[nextCell - 8]
                    && !(wholeGame.children[nextCell - 4].innerHTML)
                    && (!(wholeGame.children[nextCell - 8].innerHTML) || (current === wholeGame.children[nextCell - 8].innerHTML))) {
                    wholeGame.children[nextCell - 8].innerHTML = (wholeGame.children[nextCell - 8].innerHTML - 1 + 1) + parseInt(current);
                    wholeGame.children[nextCell].innerHTML = '';
                } else if (
                    (!(wholeGame.children[nextCell - 4].innerHTML) || (current === wholeGame.children[nextCell - 4].innerHTML))) {
                    wholeGame.children[nextCell - 4].innerHTML = (wholeGame.children[nextCell - 4].innerHTML - 1 + 1) + parseInt(current);
                    wholeGame.children[nextCell].innerHTML = '';
                }
            }
        }
    };
};




// Function to Move Numbers According to Right Direction
function movementToRightDirection() {
    for (let eachCell = (wholeGame.children.length - 1); eachCell >= 0; eachCell--) {
        if (wholeGame.children[eachCell].innerHTML) {
            let nextCell = eachCell;
            let current = wholeGame.children[nextCell].innerHTML;
            switch (nextCell % 4) {
                case 0:
                    if (
                        !(wholeGame.children[nextCell + 2].innerHTML)
                        && !(wholeGame.children[nextCell + 1].innerHTML)
                        && (!(wholeGame.children[nextCell + 3].innerHTML) || (current === wholeGame.children[nextCell + 3].innerHTML))) {
                        wholeGame.children[nextCell + 3].innerHTML = (wholeGame.children[nextCell + 3].innerHTML - 1 + 1) + parseInt(current);
                        wholeGame.children[nextCell].innerHTML = '';
                    } else if (
                        !(wholeGame.children[nextCell + 1].innerHTML)
                        && (!(wholeGame.children[nextCell + 2].innerHTML) || (current === wholeGame.children[nextCell + 2].innerHTML))) {
                        wholeGame.children[nextCell + 2].innerHTML = (wholeGame.children[nextCell + 2].innerHTML - 1 + 1) + parseInt(current);
                        wholeGame.children[nextCell].innerHTML = '';
                    } else if (
                        (!(wholeGame.children[nextCell + 1].innerHTML) || (current === wholeGame.children[nextCell + 1].innerHTML))) {
                        wholeGame.children[nextCell + 1].innerHTML = (wholeGame.children[nextCell + 1].innerHTML - 1 + 1) + parseInt(current);
                        wholeGame.children[nextCell].innerHTML = '';
                    }
                    break;
                case 1:
                    if (
                        !(wholeGame.children[nextCell + 1].innerHTML)
                        && (!(wholeGame.children[nextCell + 2].innerHTML) || (current === wholeGame.children[nextCell + 2].innerHTML))) {
                        wholeGame.children[nextCell + 2].innerHTML = (wholeGame.children[nextCell + 2].innerHTML - 1 + 1) + parseInt(current);
                        wholeGame.children[nextCell].innerHTML = '';
                    } else if (
                        (!(wholeGame.children[nextCell + 1].innerHTML) || (current === wholeGame.children[nextCell + 1].innerHTML))) {
                        wholeGame.children[nextCell + 1].innerHTML = (wholeGame.children[nextCell + 1].innerHTML - 1 + 1) + parseInt(current);
                        wholeGame.children[nextCell].innerHTML = '';
                    }
                    break;
                case 2:
                    if (
                        (!(wholeGame.children[nextCell + 1].innerHTML) || (current === wholeGame.children[nextCell + 1].innerHTML))) {
                        wholeGame.children[nextCell + 1].innerHTML = (wholeGame.children[nextCell + 1].innerHTML - 1 + 1) + parseInt(current);
                        wholeGame.children[nextCell].innerHTML = '';
                    }
                    break;
                default:
                    break;
            }
        }
    };
};



// Function to Move Numbers According to Left Direction
function movementToLeftDirection() {
    for (let eachCell = 0; eachCell < wholeGame.children.length; eachCell++) {
        if (wholeGame.children[eachCell].innerHTML) {
            let nextCell = eachCell;
            let current = wholeGame.children[nextCell].innerHTML;
            switch (nextCell % 4) {
                case 3:
                    if (
                        !(wholeGame.children[nextCell - 2].innerHTML)
                        && !(wholeGame.children[nextCell - 1].innerHTML)
                        && (!(wholeGame.children[nextCell - 3].innerHTML) || (current === wholeGame.children[nextCell - 3].innerHTML))) {
                        wholeGame.children[nextCell - 3].innerHTML = (wholeGame.children[nextCell - 3].innerHTML - 1 + 1) + parseInt(current);
                        wholeGame.children[nextCell].innerHTML = '';
                    } else if (
                        !(wholeGame.children[nextCell - 1].innerHTML)
                        && (!(wholeGame.children[nextCell - 2].innerHTML) || (current === wholeGame.children[nextCell - 2].innerHTML))) {
                        wholeGame.children[nextCell - 2].innerHTML = (wholeGame.children[nextCell - 2].innerHTML - 1 + 1) + parseInt(current);
                        wholeGame.children[nextCell].innerHTML = '';
                    } else if (
                        (!(wholeGame.children[nextCell - 1].innerHTML) || (current === wholeGame.children[nextCell - 1].innerHTML))) {
                        wholeGame.children[nextCell - 1].innerHTML = (wholeGame.children[nextCell - 1].innerHTML - 1 + 1) + parseInt(current);
                        wholeGame.children[nextCell].innerHTML = '';
                    }
                    break;
                case 2:
                    if (
                        !(wholeGame.children[nextCell - 1].innerHTML)
                        && (!(wholeGame.children[nextCell - 2].innerHTML) || (current === wholeGame.children[nextCell - 2].innerHTML))) {
                        wholeGame.children[nextCell - 2].innerHTML = (wholeGame.children[nextCell - 2].innerHTML - 1 + 1) + parseInt(current);
                        wholeGame.children[nextCell].innerHTML = '';
                    } else if (
                        (!(wholeGame.children[nextCell - 1].innerHTML) || (current === wholeGame.children[nextCell - 1].innerHTML))) {
                        wholeGame.children[nextCell - 1].innerHTML = (wholeGame.children[nextCell - 1].innerHTML - 1 + 1) + parseInt(current);
                        wholeGame.children[nextCell].innerHTML = '';
                    }
                    break;
                case 1:
                    if (
                        (!(wholeGame.children[nextCell - 1].innerHTML) || (current === wholeGame.children[nextCell - 1].innerHTML))) {
                        wholeGame.children[nextCell - 1].innerHTML = (wholeGame.children[nextCell - 1].innerHTML - 1 + 1) + parseInt(current);
                        wholeGame.children[nextCell].innerHTML = '';
                    }
                    break;
                default:
                    break;
            }
        }
    };
};



// Function to Move Numbers According to Down Direction
function movementToDownDirection() {
    for (let eachCell = (wholeGame.children.length - 1); eachCell >= 0; eachCell--) {
        if (wholeGame.children[eachCell].innerHTML) {
            let nextCell = eachCell;
            let current = wholeGame.children[nextCell].innerHTML;
            if (nextCell < 12) {
                if (
                    wholeGame.children[nextCell + 12]
                    && !(wholeGame.children[nextCell + 8].innerHTML)
                    && !(wholeGame.children[nextCell + 4].innerHTML)
                    && (!(wholeGame.children[nextCell + 12].innerHTML) || (current === wholeGame.children[nextCell + 12].innerHTML))) {
                    wholeGame.children[nextCell + 12].innerHTML = (wholeGame.children[nextCell + 12].innerHTML - 1 + 1) + parseInt(current);
                    wholeGame.children[nextCell].innerHTML = '';
                } else if (
                    wholeGame.children[nextCell + 8]
                    && !(wholeGame.children[nextCell + 4].innerHTML)
                    && (!(wholeGame.children[nextCell + 8].innerHTML) || (current === wholeGame.children[nextCell + 8].innerHTML))) {
                    wholeGame.children[nextCell + 8].innerHTML = (wholeGame.children[nextCell + 8].innerHTML - 1 + 1) + parseInt(current);
                    wholeGame.children[nextCell].innerHTML = '';
                } else if (
                    (!(wholeGame.children[nextCell + 4].innerHTML) || (current === wholeGame.children[nextCell + 4].innerHTML))) {
                    wholeGame.children[nextCell + 4].innerHTML = (wholeGame.children[nextCell + 4].innerHTML - 1 + 1) + parseInt(current);
                    wholeGame.children[nextCell].innerHTML = '';
                }
            }
        }
    };
};





// Colorize
function colorize() {
    for (let eachCell of wholeGame.children) {
        if (!eachCell.innerHTML) {
            eachCell.style.backgroundColor = '';
        } else if (eachCell.innerHTML == 2) {
            eachCell.style.backgroundColor = '#EFBC9B';
        } else if (eachCell.innerHTML == 4) {
            eachCell.style.backgroundColor = '#B3C8CF';
        } else if (eachCell.innerHTML == 8) {
            eachCell.style.backgroundColor = '#97E7E1';
        } else if (eachCell.innerHTML == 16) {
            eachCell.style.backgroundColor = '#77B0AA';
        } else if (eachCell.innerHTML == 32) {
            eachCell.style.backgroundColor = '#FFAF45';
        } else if (eachCell.innerHTML == 64) {
            eachCell.style.backgroundColor = '#D9EDBF';
        } else if (eachCell.innerHTML == 128) {
            eachCell.style.backgroundColor = '#D74B76';
        } else if (eachCell.innerHTML == 256) {
            eachCell.style.backgroundColor = '#BC7FCD';
        } else if (eachCell.innerHTML == 512) {
            eachCell.style.backgroundColor = '#D20062';
        } else if (eachCell.innerHTML == 1024) {
            eachCell.style.backgroundColor = '#8576FF';
        } else if (eachCell.innerHTML == 2048) {
            eachCell.style.backgroundColor = '#5755FE';
        }
    }
}




// Function for winning the game
function gameWon() {
    output.innerHTML = `Cogratulations! You've won the game.`;
    setTimeout(() => {
        for (let eachCell of wholeGame.children) {
            eachCell.innerHTML = '';
        }
        output.innerHTML = `Click in those button or Arrow key in keyboard to play again!`;
    }, 2000);
}