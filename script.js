const cards = document.querySelectorAll('.card-div');

const slots = [
  { tx: "0px",  ty: "0px",  z: 4 },   
  { tx: "15px", ty: "15px", z: 3 },   
  { tx: "30px", ty: "30px", z: 2 },   
  { tx: "45px", ty: "45px", z: 1 }    
];

let order = [cards[0], cards[1], cards[2], cards[3]]; // front to back

function applySlots() {
  for (let i = 0; i < order.length; i++) {
    order[i].style.setProperty('--tx', slots[i].tx);
    order[i].style.setProperty('--ty', slots[i].ty);
    order[i].style.zIndex = slots[i].z;
  }
}

applySlots();

cards.forEach(card => {
  card.addEventListener('click', () => {
    order = order.filter(c => c !== card);
    order.unshift(card);
    applySlots();

    cards.forEach(c => c.style.setProperty('--scale', c === card ? 1.05 : 1));
  });
});