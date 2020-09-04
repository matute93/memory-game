

let arr = [
    {
        id: 1,
        src: './img/arg.png',
    },
    {
        id: 2,
        src: './img/china.jpg'
    },
    {
        id: 3,
        src: './img/gb.jpg'
    },
    {
        id: 4,
        src: './img/israel.jpg'
    },
    {
        id: 5,
        src: './img/spain.jpg'
    },
    {
        id: 6,
        src: './img/usa.jpg'
    },
    {
        id: 1,
        src: './img/arg.png',
    },
    {
        id: 2,
        src: './img/china.jpg'
    },
    {
        id: 3,
        src: './img/gb.jpg'
    },
    {
        id: 4,
        src: './img/israel.jpg'
    },
    {
        id: 5,
        src: './img/spain.jpg'
    },
    {
        id: 6,
        src: './img/usa.jpg'
    },

];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
function createElement() {
    shuffle(arr)
    let container = document.querySelector('.container');
    for (let i = 0; i < arr.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        let backFace = document.createElement('img')
        backFace.classList.add('back-face');
        backFace.style = "display:none;";
        backFace.src = `${arr[i].src}`
        card.appendChild(backFace);
        let frontFace = document.createElement('img')
        frontFace.classList.add('front-face');
        frontFace.style = `display:block;`;
        frontFace.src = './img/world.jpg'
        card.appendChild(frontFace);
        card.addEventListener('click', function(){
          
                let clickedCard = event.currentTarget
                let clickBackFace = clickedCard.querySelector('.back-face');
                clickBackFace.style= "display: block"

              let ClickFrontFace =   event.currentTarget.querySelector('.front-face');
              ClickFrontFace.style= 'display: none;'
        })
        container.appendChild(card)
    }
}
createElement();



     //iterate over the array of objects
     //create div for each iteration
     //attach an event listener to each div
     //pass that object to the event listener function