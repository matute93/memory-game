
let cardArray = [
    {
      name: 1,
      img: './img/arg.png',
    },
  {
      name: 2,
      img: './img/china.jpg'
  },
  {
      name: 3,
      img: './img/gb.jpg'
    },
  {
      name: 4,
      img: './img/israel.jpg'
  },
  {
      name: 5,
      img: './img/spain.jpg'
    },
  {
      name: 6,
      img: './img/usa.jpg'
  },
  {
      name: 1,
      img: './img/arg.png',
  },
  {
      name: 2,
      img: './img/china.jpg'
    },
  {
      name: 3,
      img: './img/gb.jpg'
    },
  {
      name: 4,
      img: './img/israel.jpg'
    },
  {
      name: 5,
      img: './img/spain.jpg'
    },
  {
      name: 6,
      img: './img/usa.jpg'
  },
]

cardArray.sort(() => 0.5 - Math.random())

let container = document.querySelector('.container')
let result = document.querySelector('.counter')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []
let time = document.querySelector('.timer');
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.classList.add('flip')
        card.setAttribute('src', './img/world.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        container.appendChild(card)
    }
  }
  
  function checkForMatch() {
    let cards = document.querySelectorAll('img')
    let optionOneId = cardsChosenId[0]
    let optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
        
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
        
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)

    } else {
        cards[optionOneId].setAttribute('src', './img/world.jpg')
        cards[optionTwoId].setAttribute('src', './img/world.jpg')
        
    }
    cardsChosen = []
    cardsChosenId = []
    result.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      result.textContent = 'Congratulations! You found them all!'
    }
}

//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 1000)
    }
}

createBoard()



//iterate over the array of objects
//create div for each iteration
//attach an event listener to each div
//pass that object to the event listener function


// let arr = [
//     {
//         id: 1,
//         src: './img/arg.png',
//     },
//     {
//         id: 2,
//         src: './img/china.jpg'
//     },
//     {
//         id: 3,
//         src: './img/gb.jpg'
//     },
//     {
//         id: 4,
//         src: './img/israel.jpg'
//     },
//     {
//         id: 5,
//         src: './img/spain.jpg'
//     },
//     {
//         id: 6,
//         src: './img/usa.jpg'
//     },
//     {
//         id: 1,
//         src: './img/arg.png',
//     },
//     {
//         id: 2,
//         src: './img/china.jpg'
//     },
//     {
//         id: 3,
//         src: './img/gb.jpg'
//     },
//     {
//         id: 4,
//         src: './img/israel.jpg'
//     },
//     {
//         id: 5,
//         src: './img/spain.jpg'
//     },
//     {
//         id: 6,
//         src: './img/usa.jpg'
//     },

// ];

// function flipCard(){
//     let clickedCard = event.currentTarget
//     let clickBackFace = clickedCard.querySelector('.back-face');
//     clickBackFace.style= "display: block;  transition: transform 1s;"

//   let ClickFrontFace =   event.currentTarget.querySelector('.front-face');
//   ClickFrontFace.style= 'display: none;  transition: transform 1s;'
// }

// function shuffle(array) {
//     return array.sort(() => Math.random() - 0.5);
// }
// function createElement() {
//     shuffle(arr)
//     let container = document.querySelector('.container');
//     for (let i = 0; i < arr.length; i++) {
//         let card = document.createElement('div');
//         card.classList.add('card');
//         let backFace = document.createElement('img')
//         backFace.classList.add('back-face');
//         backFace.style = "display:none;";
//         backFace.src = `${arr[i].src}`
//         card.appendChild(backFace);
//         let frontFace = document.createElement('img')
//         frontFace.classList.add('front-face');
//         frontFace.style = `display:block;`;
//         frontFace.src = './img/world.jpg'
//         card.appendChild(frontFace);
//         container.appendChild(card);
//         card.addEventListener('click', function(){
//             card.classList.add('flip')
//             flipCard();
//         })
//     }
// }
// createElement();