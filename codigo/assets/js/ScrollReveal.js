//Início do Slide


const slideLeft = {
    distance: "150px",
    origin: "left",
    opacity: 0,
    delay: 400,
    reset: true,
    duration: 700,
  };
  
  const slideRight = {
    distance: "150px",
    origin: "right",
    opacity: null,
    opacity: 0,
    delay: 200,
    duration: 700,
    reset: true,
  };
  
  const slideUp = {
    distance: "150px",
    origin: "bottom",
    opacity: 0,
    delay: 400,
    reset: true,
    duration: 700,
  };
  
  const slideDown = {
    distance: "150px",
    origin: "top",
    opacity: 0,
    delay: 200,
    duration: 700,
    reset: true,
  };

//Fim do Slide

  
//Conteúdo do Cabeçalho


  ScrollReveal().reveal(".header-content-left", slideLeft);
  ScrollReveal().reveal(".header-content-right", slideRight);
  
//Seção de Visuzalização do Aplicativo
  
  ScrollReveal().reveal(".app-preview-left", slideDown);
  ScrollReveal().reveal(".app-preview-right", slideUp);
  
  //Acompanhe sua seção de gastos


  ScrollReveal().reveal(".track-your-spending-left", slideLeft);
  ScrollReveal().reveal(".track-your-spending-right", slideRight);
  
  //Seção Entre em Contato


  ScrollReveal().reveal(".get-in-touch", slideUp);
  
  //Rodapé


  ScrollReveal().reveal(".footer-container", slideLeft);
  