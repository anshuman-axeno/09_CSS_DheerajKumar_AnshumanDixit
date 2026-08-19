const cards=document.querySelectorAll('.card-div')
let topZ=5;
let activeCard=null;

cards.forEach(card=>{
  card.addEventListener('click',()=>{
    topZ++;
    card.style.zIndex=topZ;
  })
})