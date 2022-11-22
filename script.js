//fonctionnalité 1 et 1bis 
let footer = document.querySelector('footer');
let count = 0;
footer.addEventListener('click', function () {
    count += 1
    console.log(`clique ${count}`);
});

//fonctionnalité 2

let navbarHeader = document.getElementById('navbarHeader');
let hamburgerMenu = document.querySelector('button.navbar-toggler');
hamburgerMenu.addEventListener('click', function () {
    navbarHeader.classList.toggle("collapse");
});

//fonctionnalité 3 

let card1 = document.querySelectorAll('div.col-md-4')[0];
let editCard1 = document.querySelectorAll('div.col-md-4 button.btn-outline-secondary')[0];
editCard1.addEventListener('click', function () {
    card1.style.color = "red";
});

//fonctionnalité 4

let card2 = document.querySelectorAll('div.col-md-4')[1];
let editCard2 = document.querySelectorAll('div.col-md-4 button.btn-outline-secondary')[1];
editCard2.addEventListener('click', function () {
    if (card2.style.color === "green") {
        card2.style.color = "black";
    } else {
        card2.style.color = "green";
    }

});

//fonctionnalité 5


let getNav = document.querySelector('header')
getNav.addEventListener("dblclick", function() {
    if (document.querySelector('link').disabled === true) {
        document.querySelector('link').disabled = false;
    }
    else {
        document.querySelector('link').disabled = true;
    }
});



//fonctionnalité 6


let cards = document.querySelectorAll(".card");
cards.forEach(card => {
    let status = false;
    let btn = card.querySelector(".btn-success");
    let img = card.querySelector(".card-img-top");
    btn.addEventListener("mouseenter", function() {
        card.querySelector("p.card-text").toggleAttribute("hidden");
        if (status === false) {
            img.setAttribute("style", "width:20%");
            status = true;
        }
        else if (status === true) {
            img.setAttribute("style", "width:100%");
            status = false;
        }
    })
});


//fonctionnalité 7 et 8

let rotateright = document.querySelector("a.btn-secondary");
rotateright.addEventListener("click", function () {

    document.querySelectorAll("div.row")[1].insertBefore(document.querySelectorAll("div.col-md-4")[5], document.querySelectorAll("div.col-md-4")[0])
    
});

let rotateleft = document.querySelector("a.btn-primary");
rotateleft.addEventListener("click", function (event) {
    event.preventDefault()
    document.querySelectorAll("div.row")[1].insertBefore(document.querySelectorAll("div.col-md-4")[0], document.querySelectorAll("div.col-md-4")[5])
    
});


