$(document).ready(function() {

  // var prevScrollpos = window.pageYOffset;
  // const el = document.getElementById('menu-container');
  // window.onscroll = function() {
  //   var currentScrollPos = window.pageYOffset;
  //   // document.getElementById("logo-container").style.top = "74px";
  //   el.classList.add('fixed-top');
  //   if (prevScrollpos > currentScrollPos) {
  //     // document.getElementById("logo-container").style.top = "0";
  //     el.classList.toggle('fixed-top');
  //   } else {
  //     // document.getElementById("logo-container").style.top = "-74px";
  //     // el.classList.remove('fixed-top');
  //   }
  //   prevScrollpos = currentScrollPos;
  //
  // }
  const buscador = document.querySelector('#buscador');

  $('#send').click(function() {
    const texto = buscador.value.toLowerCase();
    switch (texto) {
      case 'tintas':
      case 'set':
      case 'sets':
      case 'set de tintas':
        location.href = "tintas.html";
        break;
      case 'cartuchos':
      case 'big':
      case 'wasp':
      case 'big wasp':
      case 'membrana':
      case 'cartuchos membrana':
      case 'caruchos de membrana':
      case 'spark':
      case 'cartridge':
      case 'cartridge needles':
      case 'stigma':
      case 'cartuchos stigma':
        location.href = "cartuchos.html";
        break;
      case 'bobina':
      case 'bobinas':
      case 'maquinas de bobinas':
      case 'maquina de bobina':
      case 'maquina artesanal ':
        location.href = "bobinas.html";
        break;
      case 'pen':
      case 'maquina pen':
      case 'maquinas pen':
      case 'pens':
      case 'maquina tipo pluma':
      case 'rotativa tipo pen':
        location.href = "pen.html";
        break;
      case 'rotativa':
      case 'rotativas':
      case 'maquinas rotativas':
      case 'maquina rotativa':
        location.href = "rotativas.html";
        break;
      case 'agujas y cartuchos':
        location.href = "productos.html";
        break;
      case 'maquinas':
        location.href = "maquinas.html";
        break;
      case 'agujas y tubos':
      case 'tubos':
      case 'agujas':
      case 'tubos y agujas':
      case 'grips':
      case 'grip':
        location.href = "agujas-y-tubos.html";
        break;
      case 'accesorios':
      case 'acesorios':
      case 'pieles':
      case 'piel sintetica':
      case 'vendas':
      case 'kits':
      case 'venda':
      case 'kit para tatuar':
      case 'kit para tattoo':
      case 'kits':
      case 'kits para tatuaje':
      case 'cubre maquina':
      case 'cubre maquinas':
      case 'clipcord':
      case 'cables':
      case 'cubre grip':
        location.href = "accesorios.html";
        break;
      case 'muebles':
      case 'posabrazo':
      case 'posabraso':
      case 'bancos':
      case 'banco':
      case 'camilla':
        location.href = "muebles.html";
        break;
      case 'fuentes':
      case 'fuente de poder':
      case 'alimentacion':
      case 'fuente para maquina':
      case 'fuente para maquina rotativa':
      case 'fuente para maquina de bobina':
      case 'fuente':
        location.href = "fuentes.html";
        break;
      case 'eternal':
      case 'eternal ink':
      case 'tinta eternal':
      case 'tintas eternal':
      case 'sets eternal':
      case 'eternal set':
      case 'eternal sets':
      case 'halo set':
      case 'levgen':
      case 'liz cook':
      case 'm series':
      case 'myke chambers':
      case 'chambers set':
      case 'rember set':
        location.href = "eternal.html";
        break;
      case 'intenze':
      case 'intense':
      case 'alex del pase':
      case 'bob tyrrel':
      case 'bowery':
      case 'dragon color':
      case 'set intenze':
      case 'intenze set':
      case 'tintas intenze':
        location.href = "intenze.html";
        break;
      case 'dynamic':
      case 'dinamic':
      case 'dinamyc':
      case 'dynamic colors':
      case 'black':
      case 'triple black':
      case 'white':
        location.href = "dynamic.html";
        break;
      case 'kuro sumi':
      case 'kuro':
      case 'sumi':
      case 'tinta japonesa':
      case 'tinta kuro sumi':
        location.href = "kuro-sumi.html";
        break;
      case 'starbrite':
      case 'tintas starbrite':
      case 'tinta starbrite':
      case 'star':
      case 'brite':
      case 'starbrite colors':
        location.href = "starbrite.html";
        break;
      case 'puntas':
      case 'puntas cortas':
      case 'puntas largas':
      case 'largas':
      case 'cortas':
      case 'agujas':
      case 'tubos':
        location.href = "agujas.html";
        break;
      case 'xcentricas':
        location.href = "xcentricas.html";
        break;
      default:
        document.getElementById("buscador").placeholder = "No encontrado";
    }
  });


  $('.ir-arriba').click(function() {
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.ir-arriba').slideDown(300);
    } else {
      $('.ir-arriba').slideUp(300);
    }
  });
});
