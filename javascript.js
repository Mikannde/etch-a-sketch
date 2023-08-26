const container = document.querySelector('#container');

let divBox = document.createElement('div');
divBox.classList.add('box');

const btnReset = document.createElement('button');
btnReset.textContent = "Reset";

container.appendChild(divBox);

const btnSetSize = document.createElement('button');
btnSetSize.textContent = "Set grid size";
btnSetSize.addEventListener(
    "click",
    () => {
        let gridSize = prompt("Choose a value between 1 and 64");
        console.log(gridSize);

        if(gridSize > 64) {
            gridSize = 64;
        }

        if(gridSize < 1) {
            gridSize = 1;
        }

        divBox.remove();
        divBox = document.createElement('div');
        divBox.classList.add('box');
        container.insertBefore(divBox, btnSetSize);

        printPixel(gridSize);
    }
)

const btnRainbow = document.createElement('button');
btnRainbow.textContent = "Rainbow mode!";

const btnBlack = document.createElement('button');
btnBlack.textContent = "Regular mode";

const btnEraser = document.createElement('button');
btnEraser.textContent = "Eraser";


container.appendChild(btnSetSize);
container.appendChild(btnRainbow);
container.appendChild(btnBlack);
container.appendChild(btnEraser);
container.appendChild(btnReset);

function printPixel(gridSize) {

    for(let columns = 0; columns < gridSize; columns++) {
        for(let rows = 0; rows < gridSize; rows++) {
            let divPixel = document.createElement('div');
            divPixel.classList.add('pixel');
            divBox.appendChild(divPixel);

            let pixelSize = 640/gridSize;
            divPixel.style.width = `${pixelSize}px`;
            divPixel.style.height = `${pixelSize}px`;

            divPixel.addEventListener(
                "mouseover", 
                () => {
                    divPixel.style.backgroundColor="black";
                }
            )

            btnReset.addEventListener(
                "click",
                () => {
                    divPixel.style.backgroundColor="white";
                }
            )

            btnRainbow.addEventListener(
                "click",
                () => {
                    const x = Math.floor(Math.random() * 256);
                    const y = Math.floor(Math.random() * 256);
                    const z = Math.floor(Math.random() * 256);
                    const randomGeneratedColor = "rgb(" + x + "," + y + "," + z + ")";
                    
                    divPixel.addEventListener(
                        "mouseover",
                        () => {
                            divPixel.style.backgroundColor = randomGeneratedColor;
                        }
                    )
                }
            )

            btnBlack.addEventListener(
                "click", 
                () => {
                    divPixel.addEventListener(
                        "mouseover", 
                        () => {
                            divPixel.style.backgroundColor="black";
                        }
                    )
                }
            )

            btnEraser.addEventListener(
                "click", 
                () => {
                    divPixel.addEventListener(
                        "mouseover", 
                        () => {
                            divPixel.style.backgroundColor="white";
                        }
                    )
                }
            )
        }
    }   
}

printPixel(32);