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
  const productos = [{
      tipo: "maquinas",
      palabras: ["maquina", "maquinas", "original", "maquinas originales"]
    },
    {
      tipo: "tintas",
      palabras: ["set", "tintas", "set de tintas", "tintas set", "set", "tinta"]
    }, {
      tipo: "agujas",
      ["zita", "black rose"]
    },
    {
      tipo: "cartuchos",
      palabras: ["cartuchos", "big", "wasp", "big wasp", "cartuchos membrana", "Spark", "spark", "cartridge", "cartridge needles", "stigma", "menbrana"]
    },
    {
      tipo: "pen",
      palabras: ["pen", "pen rotativas", "pluma", "maquina pen"]
    },
    {
      tipo: "rotativas",
      palabras: ["rotativas", "rotativa", "maquina rotativa", "maquina de cartuchos"]
    },
    {
      tipo: "bobinas",
      palabras: ["bobina", "bobinas", "maquina de bobinas"]
    },
    {
      tipo: "starbrite",
      palabras: ["star", "starbrite", "tinta starbrite"]
    },
    {
      tipo: "intenze",
      palabras: ["intenze", "intense", "intence", "tinta intenze"]
    },
    {
      tipo: "eternal",
      palabras: ["eternal", "eternal ink", "ink eternal", "tinta eternal", "eternal set" , "eternal sets" , "halo set", "levgen", "m series", "liz", "liz colors", "liz cook", "rember", "rember set", "mike", "mike chambers", "chambers", "myke chambers"]
    },
    {
      tipo: "dynamic",
      palabras: ["dynamic", "dinamic", "dynamic colors", "dinamyc"]
    },
    {
      tipo: "accesorios",
      palabras: ["acesorios", "accesorios", "kit", "kits", "principiante", "kit para principiante"]
    },
    {
      tipo: "kuro sumi",
      palabras: ["kuro sumi", "kuro", "sumi"]
    },
    {
      tipo: "fuentes",
      palabras: ["fuente", "fuentes", "poder", "fuentes de poder"]
    },
    {
      tipo: "muebles",
      palabras: ["mueble", "muebles", "posabrazo", "posabraso", "camilla", "banco", "bancos", "silla", "sillas"]
    },
  ];




  const buscador = document.querySelector('#buscador');

  $('#send').click(function() {
    console.log('puto');
    const texto = buscador.value.toLowerCase();
    const filtrar = () => {
      if (texto == "tintas") {
        location.href = "http://www.fento.com.mx";
        console.log('hola');
      }
      if (texto == "maquinas") {
        location.href = "http://www.cristalab.com/foros";
      }
    };
  });

  //


  // const boton = document.querySelector('#send');
  // const resultado = document.querySelector('#resultado')



});
