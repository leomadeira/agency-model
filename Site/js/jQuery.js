$('.container-slider').slick({ // Inicializando o container-slider nessa classe
    
    dots: true, // se quer ou nao pontos/ se sim(true) senao(false)
    arrows:false, // flechas no caso nao
    speed:1000, //velocidade do movimento do box
    slidesToShow: 3, // aparecer 3 box por slider
    slidesToScroll: 3,
    autoplay: true, // apertar sozinho no movimento
    autoplaySpeed: 3000,
    pauseOnHover:false,
    responsive: [
                {
                    breakpoint: 768,
                        settings: {slidesToShow: 1,slidesToScroll: 1}
                },
                {
                    breakpoint: 1000,settings: {slidesToShow: 2,slidesToScroll: 1}
                
                }],
    });

   //slider box-inf
$('.all').slick({ // Inicializando o container-slider nessa classe
    dots: true, // se quer ou nao pontos/ se sim(true) senao(false)
    arrows:false, // flechas no caso nao
    speed:1000, //velocidade do movimento do box
    slidesToShow: 3, // aparecer 3 box por slider
    autoplay: true, // apertar sozinho no movimento
    autoplaySpeed: 3000,
    pauseOnHover:false,
    responsive: [
                {
                    breakpoint: 768,
                        settings: {slidesToShow: 1,slidesToScroll: 1}
                },{
                  breakpoint: 1036,
                  settings: {slidesToShow: 2,slidesToScroll: 1}

                  }],
    });
