let images = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg", "https://i.pinimg.com/originals/05/ec/c6/05ecc65aff90ba7b28287f007e23353d.jpg", "https://cdn130.picsart.com/305257635067201.jpg?type=webp&to=min&r=640", "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", "https://thumbs.dreamstime.com/b/girl-watching-stars-night-sky-87114348.jpg"]


images = [...images, ...images]

function createOneCard(idx) {
    var cardCase = document.createElement("div");
    cardCase.classList.add("cardCase");

    var card = document.createElement("div");
    card.classList.add("card");

    var front = document.createElement("div");
    front.classList.add("front");

    var back = document.createElement("div");
    back.classList.add("back");

    var img = document.createElement("img");
    img.src = images[idx];
    img.classList.add("myImg");

    back.appendChild(img);
    card.appendChild(front);
    card.appendChild(back);
    cardCase.appendChild(card);
    return cardCase;
  }

var grid = document.querySelector(".grid");
for (let i = 0; i < 12; i++) {
    let idx = Math.floor(Math.random() * (12 - i));
    grid.appendChild(createOneCard(idx));
    images.splice(idx, 1);
}

let chances = 14;
let pair = -1;
let matched = [];
let correct = 0;
let unmatched = [];

var cards = document.querySelectorAll(".card");
document.querySelector(".stats").innerText = "Moves Left :" + chances;

for (let i = 0; i < 12; i++)
{
  cards[i].addEventListener("click", () => {
    cards[i].classList.toggle("flipped");

    if (pair != -1 && i != pair)
    {      // 1st click done and 2nd click not on same card 
        chances--;
        document.querySelector(".stats").innerText = "Moves Left :" + chances;
      
        if(cards[i].lastChild.firstChild.src === cards[pair].lastChild.firstChild.src)
        {
            matched.push(i);
            matched.push(pair);
            correct++;
        } 
          else
        {
            unmatched.push(i);
            unmatched.push(pair);
        }
        pair = -1;   // reset pair variable for next iteration
    } 
        else
       {        // first click
        pair = i;
       }
  });

}

// whenever no match -> flip both cards -> this check is done every 1 second
setInterval(() => {
    // unmatched will always have 2 cards
    if (unmatched.length > 0) {
        for (let i = 0; i < unmatched.length; i++) {
        cards[unmatched[i]].classList.toggle("flipped");
        cards[unmatched[i + 1]].classList.toggle("flipped");
        unmatched.splice(0, 2);
        }
    }
}, 1000);

// check game end condition
setInterval(() => {
  if (chances == 0 && correct != 6) {
    alert("LOST !!");
    reset();
  } else if (correct == 6) {
    alert("WON !!");
    reset();
  }
}, 100);

function reset() {
    correct = 0;
    chances = 14;
    location.reload();
}