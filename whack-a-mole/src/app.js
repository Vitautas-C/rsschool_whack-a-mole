import './scss/main.scss';
console.log('Hello, SASS');
console.log('Hello, HTML');

// // array of sounds // start //

const creaturesSounds = [
    { fileName: "bat-1.wav", category: "bat" },
    { fileName: "bat-2.wav", category: "bat" },
    { fileName: "bat-3.wav", category: "bat" },
    { fileName: "bat-4.wav", category: "bat" },
    { fileName: "bat-5.wav", category: "bat" },
    { fileName: "bat-6.wav", category: "bat" },
    { fileName: "bat-7.wav", category: "bat" },

    { fileName: "hawk-1.wav", category: "hawk" },
    { fileName: "hawk-2.wav", category: "hawk" },
    { fileName: "hawk-3.wav", category: "hawk" },
    { fileName: "hawk-4.wav", category: "hawk" },

    { fileName: "owl-1.wav", category: "owl" },
    { fileName: "owl-2.wav", category: "owl" },
    { fileName: "owl-3.wav", category: "owl" },
    { fileName: "owl-4.wav", category: "owl" },

    { fileName: "scorpion-1.wav", category: "scorpion" },
    { fileName: "scorpion-2.wav", category: "scorpion" },

    { fileName: "snake-1.wav", category: "snake" },
    { fileName: "snake-2.wav", category: "snake" },
    { fileName: "snake-3.wav", category: "snake" },

    { fileName: "spider-1.wav", category: "spider" },
    { fileName: "spider-2.wav", category: "spider" },

    { fileName: "wolf-1.wav", category: "wolf" },
    { fileName: "wolf-2.wav", category: "wolf" },
    { fileName: "wolf-3.wav", category: "wolf" },
    { fileName: "wolf-4.wav", category: "wolf" },
    { fileName: "wolf-5.wav", category: "wolf" },

    { fileName: "ghost-laugh-1.mp3", category: "evil-laugh" },
    { fileName: "ghost-laugh-1.wav", category: "evil-laugh" },
    { fileName: "ghost-laugh-2.wav", category: "evil-laugh" },
    { fileName: "ghost-laugh-3.wav", category: "evil-laugh" },
    { fileName: "ghost-laugh-4.wav", category: "evil-laugh" },
    { fileName: "ghost-laugh-5.wav", category: "evil-laugh" },
    { fileName: "ghost-laugh-6.wav", category: "evil-laugh" },
    { fileName: "ghost-laugh-7.wav", category: "evil-laugh" },
    { fileName: "ghost-laugh-8.wav", category: "evil-laugh" },

    { fileName: "heartbeat-1.wav", category: "heartbeat" },
    { fileName: "heartbeat-2.wav", category: "heartbeat" },
    { fileName: "heartbeat-3.wav", category: "heartbeat" },
];

// // array of sounds // end //



// //array of pictures // start //

const creaturesTop = [
    { eyesFileName: "false", fileName: "1106219.png", category: "bat" },
    { eyesFileName: "1294402-eyes.png", fileName: "1294402.png", category: "bat" },
    { eyesFileName: "310517-eyes.png", fileName: "310517.png", category: "hawk" },
    { eyesFileName: "1298038-eyes.png", fileName: "1298038.png", category: "hawk" },
    { eyesFileName: "1529444-eyes.png", fileName: "1529444.png", category: "hawk" },
    { eyesFileName: "2944595-eyes.png", fileName: "2944595.png", category: "hawk" },
    { eyesFileName: "36097-eyes.png", fileName: "36097.png", category: "owl" },
    { eyesFileName: "1280170-eyes.png", fileName: "1280170.png", category: "owl" },
    { eyesFileName: "1758772-eyes.png", fileName: "1758772.png", category: "owl" },
    { eyesFileName: "false", fileName: "2223092.png", category: "owl" },
    { eyesFileName: "2825831-eyes.png", fileName: "2825831.png", category: "owl" },
];

const creaturesMiddleLeft = [
    { eyesFileName: "30695-eyes.png", fileName: "30695.png", category: "wolf" },
    { eyesFileName: "31708-eyes.png", fileName: "31708.png", category: "wolf" },
    { eyesFileName: "37088-eyes.png", fileName: "37088.png", category: "wolf" },
    { eyesFileName: "37089-eyes.png", fileName: "37089.png", category: "wolf" },
    { eyesFileName: "47256-eyes.png", fileName: "47256.png", category: "wolf" },
    { eyesFileName: "161987-eyes.png", fileName: "161987.png", category: "wolf" },
    { eyesFileName: "296748-eyes.png", fileName: "296748.png", category: "wolf" },
    { eyesFileName: "false", fileName: "708258.png", category: "wolf" },
    { eyesFileName: "false", fileName: "1949437.png", category: "wolf" },
    { eyesFileName: "2253209-eyes.png", fileName: "2253209.png", category: "wolf" },
    { eyesFileName: "2874776-eyes.png", fileName: "2874776.png", category: "wolf" },
    { eyesFileName: "2954968-eyes.png", fileName: "2954968.png", category: "wolf" },
    { eyesFileName: "2985555-eyes.png", fileName: "2985555.png", category: "wolf" },
    { eyesFileName: "3271475-eyes.png", fileName: "3271475.png", category: "wolf" },
    { eyesFileName: "3322007-eyes.png", fileName: "3322007.png", category: "wolf" },
];

const creaturesMiddleRight = [
    { eyesFileName: "23158-eyes.png", fileName: "23158.png", category: "scorpion" },
    { eyesFileName: "2025106-eyes.png", fileName: "2025106.png", category: "scorpion" },
    { eyesFileName: "2774272-eyes.png", fileName: "2774272.png", category: "scorpion" },

    { eyesFileName: "155814-eyes.png", fileName: "155814.png", category: "spider" },
    { eyesFileName: "1615195-eyes.png", fileName: "1615195.png", category: "spider" },
    { eyesFileName: "3357489-eyes.png", fileName: "3357489.png", category: "spider" },
];

const creaturesBottom = [
    { eyesFileName: "44785-eyes.png", fileName: "44785.png", category: "snake" },
    { eyesFileName: "44803-eyes.png", fileName: "44803.png", category: "snake" },
    { eyesFileName: "47546-eyes.png", fileName: "47546.png", category: "snake" },
    { eyesFileName: "159135-eyes.png", fileName: "159135.png", category: "snake" },
    { eyesFileName: "1293856-eyes.png", fileName: "1293856.png", category: "snake" },
    { eyesFileName: "false", fileName: "1298883.png", category: "snake" },
    { eyesFileName: "2082037-eyes.png", fileName: "2082037.png", category: "snake" },
    { eyesFileName: "false", fileName: "3066876.png", category: "snake" },
];

// //array of pictures // end //


const sections = [".game__cells_top", ".game__cells_middle-left", ".game__cells_middle-right", ".game__cells_bottom"];



const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);


const startGame = $(".game__button-play");

const activeStory = $(".game__logo-img");
const finalStory = $(".game__logo-img2");

const logoWrapper = $(".game__logo_wrapper");

const menu = $(".game__menu");
const activeMenu = $(".game__button-menu");
const modeMenu = $(".game__difficulty-levels");

const closeButtons = $$(".button-close");

const modeButtons = $(".game__mode_buttons");

const flashlight = $(".flashlight");

const story = $(".game__story");

const victory = $(".game__result-victory");
const victoryPoints = $(".victory_points");

const notBad = $(".game__result-notBad");
const notBadPoints = $(".notBad_points");

const lost = $(".game__result-lost");
const lostPoints = $(".lost_points");

let iterations = 7;

let playGame = false;
let hardMods = false;


let detect = new MobileDetect(window.navigator.userAgent)
console.log("Mobile: " + detect.mobile());


const startStory = (event) => {
    if (event.target.classList.contains("game__logo-img")) {
        // logoWrapper.classList.add("hidden");
        story.classList.add("block");
        let backgroundLogo = new Audio(`sounds/background-sounds/breath.mp3`);
        backgroundLogo.volume = 0.5;
        backgroundLogo.play();
        playGame = true;
        localStorage.setItem("playGame", playGame);
    };
};


const lightUpDarknessPC = () => {
    document.addEventListener("mousemove", (event) => {
        let x = event.pageX;
        let y = event.pageY;
        flashlight.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent, #000 25%)`;
    })
};


const lightUpDarknessMobile = () => {
    document.addEventListener("touchmove", (event) => {
        if (event.targetTouches.length == 1) {
            let touch = event.targetTouches[0];
            let x = touch.pageX;
            let y = touch.pageY;
            console.log(x, y);
            flashlight.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent, #000 40%)`;
        }
    })
};


const startMenu = (event) => {
    if (event.target.classList.contains("game__button-menu")) {
        modeMenu.classList.toggle("block");
        let startGameMusic = new Audio(`sounds/background-sounds/ghost-laugh-long.wav`);
        startGameMusic.play();
    };
};


const closeWindow = () => {
    closeButtons.forEach(el => {
        el.addEventListener("click", () => {
            el.parentNode.classList.remove("block");
        })
    })
}


const clearField = (event) => {
    // if (event.target.classList.contains("game__button-play")) {
    menu.classList.add("hidden");
    modeMenu.classList.remove("block");
    let startGameMusic = new Audio(`sounds/background-sounds/ghost-laugh-long.wav`);
    startGameMusic.play();
    // };
};


const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
};


const selectItem = (array) => {
    shuffle(array);
    let selected = array.slice(0, 1);
    return selected;
};


const random = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber
};


const getCompileRandomItem = () => {
    let selectedSection = selectItem(sections);
    let rawCells = $$(`${selectedSection} > .cell`);

    let cells = Array.from(rawCells).filter(item => getComputedStyle(item).display != 'none');

    let randomNumberCell = random(1, cells.length);
    let randomItem = $(`${selectedSection} > .cell${randomNumberCell}`);
    return [selectedSection, randomItem]
};


const repeat = (iterations, functionName) => {
    let count = 0;
    let reactionTime = random(500, 2000);
    const fn = () => {
        count++;
        functionName();
        if (count < iterations) {
            setTimeout(fn, reactionTime)
        };
        if (count == iterations) {
            console.log(count, "вот и все")
            setTimeout(() => (window.location.href = `result.html`), 5000);
        };
    };
    setTimeout(fn, reactionTime);
};


const pictureSelection = (creatures) => {
    let creaturesAllCategory = creatures.map(item => item.category);
    shuffle(creaturesAllCategory);
    let creaturesSelectedCategory = creaturesAllCategory.slice(0, 1);
    let creaturesNew = creatures.filter((e) => {
        return e.category == creaturesSelectedCategory;
    });

    shuffle(creaturesNew);
    let creaturesNewSelected = creaturesNew.slice(0, 1);

    for (let el of creaturesNewSelected) {
        return [el.category, el.fileName, el.eyesFileName];
    }
}


const soundSelection = (pictureSelectionCategory) => {
    let soundSelectedCategory = pictureSelectionCategory;
    let soundNew = creaturesSounds.filter((e) => {
        return e.category == soundSelectedCategory;
    });

    shuffle(soundNew);
    let soundNewSelected = soundNew.slice(0, 1);

    for (let el of soundNewSelected) {
        return [el.category, el.fileName]
    }
}


const getCompileRandomRawSound = (soundDirectory) => {
    let rawSound = soundDirectory;
    let soundCategory = rawSound[0];
    let soundFileName = rawSound[1];
    let soundSelectionCompile = new Audio(`sounds/${soundCategory}/${soundFileName}`);
    return soundSelectionCompile;
}


const gameModeButtons = (event) => {
    const modifier = event.target.dataset.modifier;
    switch (modifier) {
        case "more":
            iterations++;
            localStorage.setItem("iterations", iterations);
            console.log(iterations);
            break;
        case "less":
            iterations--;
            localStorage.setItem("iterations", iterations);
            console.log(iterations);
            break;
        case "game mode":
            hardMods = !hardMods;
            // (() => {
            //     repeat((localStorage.getItem("iterations") || iterations), animateGame);
            //     clearField();
            // })();
            break;
    };
    (() => {
        clearField();
        repeat((localStorage.getItem("iterations") || iterations), animateGame);
    })();
};


const animateGame = () => {
    let reactionTime = random(1500, 3000);
    let rawPicture;
    let rawElem = getCompileRandomItem();
    let section = rawElem[0];
    let elem = rawElem[1];

    if (section == ".game__cells_top") {
        rawPicture = pictureSelection(creaturesTop);
    } else if (section == ".game__cells_bottom") {
        rawPicture = pictureSelection(creaturesBottom);
    } else if (section == ".game__cells_middle-left") {
        rawPicture = pictureSelection(creaturesMiddleLeft);
    } else if (section == ".game__cells_middle-right") {
        rawPicture = pictureSelection(creaturesMiddleRight);
    }
    let pictureCategory = rawPicture[0];
    let pictureFileName;
    if (!hardMods) {
        pictureFileName = rawPicture[1];
    }
    if (hardMods) {
        if (rawPicture[2] == "false") {
            pictureFileName = rawPicture[1];
        } else {
            pictureFileName = rawPicture[2];
        }
    }

    getCompileRandomRawSound(soundSelection(pictureCategory)).play();

    let img = document.createElement("img");
    img.classList.add("creature-pic");
    img.src = `./img/animals/${pictureCategory}/${pictureFileName}`;
    elem.append(img);

    setTimeout(() => {
        img.remove();
    }, reactionTime);
};


let countGame = 0;
const countPoints = (event) => {
    let backgroundMusic = new Audio(`sounds/background-sounds/sound_fire.mp3`);
    backgroundMusic.volume = 0.4;
    backgroundMusic.play();

    let mistakeSound = getCompileRandomRawSound(soundSelection("evil-laugh"));
    let correctSound = getCompileRandomRawSound(soundSelection("heartbeat"));

    if (event.target.classList.contains("clicked")) {
        mistakeSound.play();
        console.log("already found");
        return;
    };
    if (event.target.classList.contains("creature-pic")) {
        countGame++;
        localStorage.setItem("countGame", countGame);
        correctSound.play();
        event.target.classList.add("clicked")
    } else if (!event.target.classList.contains("creature-pic")) {
        mistakeSound.play();
        console.log("you wrong");
    };
};


const finalСount = (event) => {
    console.log(localStorage.getItem("countGame"));
    console.log(localStorage.getItem("iterations"));
    if (event.target.classList.contains("game__logo-img2")) {
        if (localStorage.getItem("countGame") == localStorage.getItem("iterations")) {
            victory.classList.add("block");
            victoryPoints.textContent = localStorage.getItem("countGame");
        } else if (localStorage.getItem("countGame") != localStorage.getItem("iterations")) {
            if (localStorage.getItem("countGame") >= Math.floor((localStorage.getItem("iterations")) / 4 * 3)) {
                notBad.classList.add("block");
                notBadPoints.textContent = localStorage.getItem("countGame");

            } else if (localStorage.getItem("countGame") < Math.floor((localStorage.getItem("iterations")) / 4 * 3)) {
                lost.classList.add("block");
                lostPoints.textContent = localStorage.getItem("countGame");
            }
        }
    }
};


// Run
if (activeStory) {
    activeStory.addEventListener("click", startStory);
}


if (activeMenu) {
    activeMenu.addEventListener("click", startMenu);
}


closeWindow();


if (flashlight && localStorage.getItem("playGame")) {
    if (detect.mobile() == null) {
        lightUpDarknessPC();
    } else if (detect.mobile() != null) {
        lightUpDarknessMobile();
    }

}


if (modeButtons) {
    modeButtons.addEventListener("click", gameModeButtons);
}


if (startGame) {
    startGame.addEventListener("click", clearField);
    startGame.addEventListener("click", () => { localStorage.setItem("countGame", countGame) });
    startGame.addEventListener("click", () => { repeat((localStorage.getItem("iterations") || iterations), animateGame) });
}


document.addEventListener("click", countPoints);


if (finalStory) {
    finalStory.addEventListener("click", finalСount);
}