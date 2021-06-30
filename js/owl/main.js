$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function resumoPrincipal() {
    window.location.href = "file:///C:/Users/Perseu/Documents/Dio%20Aulas/InterfaceNetflix/style/paginaDois.html";

}

function voltar(elemente) {
    window.location.href = "file:///C:/Users/Perseu/Documents/Dio%20Aulas/InterfaceNetflix/style/Index.html";
    
}

