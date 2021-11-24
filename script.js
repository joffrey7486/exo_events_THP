//1) définir en console le nombre de clic sur le footer
let footer = document.querySelector("body > footer");
let i = 1
footer.addEventListener("click", function(){ 
    console.log(`clic numéro ${i}`) ;
    i ++;
});


//2) Ajouter et supprimer la class collapse au header quand on clique sur le button burger
let navBarToggle = document.querySelector(".navbar-toggler");
let navBarHeader = document.querySelector('#navbarHeader');
navBarToggle.addEventListener('click', function(){ navBarHeader.classList.toggle("collapse") })


//3) Passer le texte de la première carte en rouge quand on clique sur edit  
let firstCard = document.querySelector("body > main > div > div > div > div:nth-child(1)")
let editBtnFirstCard = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
editBtnFirstCard.addEventListener("click", function() {
    firstCard.style.color = "red";
})

//4) passer le texte en vert ou en noir de la seconde carte quand on clique sur edit 
let secondCard = document.querySelector("body > main > div > div > div > div:nth-child(2)")
let secondSecond = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > p")
let editBtnSecondCard = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
editBtnSecondCard.addEventListener("click", function(){
    if (secondCard.style.color === 'green'){
        secondCard.style.color = 'black' ;
        secondSecond.style.color = 'black' ;
    } else {
        secondCard.style.color = 'green' ;
        secondSecond.style.color = 'green' ;
    }    
})

//5) Supprimer et ajouter le CDN Bootstrap en double cliquant sur la navBar
let navbar = document.querySelector('.navbar')
let bootstrap = document.querySelector('head link')
let main = document.querySelector('main')
navbar.addEventListener("dblclick", function() {
    bootstrap.setAttribute('disabled', 'disabled')
})
main.addEventListener('dblclick', function() {     
    bootstrap.removeAttribute("disabled");
}); 

//6) Diminuer la taille des buttons en les survolants et restaurer leurs taille d'origine en les re-survolant 
for(let i = 0; i < 6; i++){
    let card = document.getElementsByClassName('col-md-4')[i];
    let textContent = card.querySelector('p');
    let image = card.querySelector('img');
    let btnView = card.querySelector('button');
    btnView.addEventListener('mouseover', function(){
        textContent.classList.toggle("collapse") ;
        if (image.style.width === '20%'){
            image.style.width = '' ;
        } else {
            image.style.width = "20%";
        };
    });
};


//7) transvaser les places des cards en cliquant sur le bouton gris
let btnNext = document.querySelector("body > main > section > div > p > a.btn.btn-secondary.my-2") //selectionner le bouton
let cards = document.querySelector("body > main > div > div > div > div") // selectionner toute les cartes
let divcards = document.querySelector("body > main > div > div > div") //selectionner le conteneur des cartes 
let card_1 = divcards.children[0]; // definir la première carte 
let card_6 = divcards.children[5]; // définir la seconde carte 

btnNext.addEventListener('click', function() {   
  divcards.insertBefore(card_6, card_1); // insert la dernière carte avant la première
  card_1 = divcards.children[0]; // redéfinir la première carte 
  card_6 = divcards.children[5]; // redéfinir la dernière carte 
}); 

//8) Même principe pour le 7 mais dans le sens inverse
document.querySelector("body > main > section > div > p > a.btn.btn-primary.my-2").removeAttribute("href")
btnPrevious = document.querySelector("body > main > section > div > p > a.btn.btn-primary.my-2")

btnPrevious.addEventListener('click', function() {
    divcards.insertBefore(card_1, card_6.nextElementSibling); 
    card_1 = divcards.children[0]; 
    card_6 = divcards.children[5]; 
})
