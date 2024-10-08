AOS.init();

gsap.registerPlugin(TextPlugin);

const textos = ["Levamos sua Startup ao próximo nível"]

let tlMaster = gsap.timeline();

textos.forEach((texto) => {
    let tltext = gsap.timeline({repeat: 0});
    tltext.to('#animated-text', {duration: 2, text: texto, delay:.5});
    tlMaster.add(tltext);
});


gsap.registerPlugin(ScrollTrigger);

gsap.to('.card--servicos', {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: '.container--cards-servicos',
    start: 'top 80%', // Inicia a animação quando a seção está 80% visível
    end: 'top 30%', // Termina a animação quando a seção está 30% visível
    scrub: true // Animação suave
  }
});

const menuIcone = document.querySelector('#icone--menu--mobile');
const menuContainer = document.querySelector(".menu--mobile")
let ativo = false;

menuIcone.addEventListener("click", (e) => {
  if(!ativo) {
    menuContainer.style.display = "block";
    menuIcone.style.padding = "8px";
    menuIcone.style.backgroundColor = '#d3d3d3';
    menuIcone.style.borderRadius = '10px';
    ativo = true;
  } else {
    menuContainer.style.display = "none";
    menuIcone.style.backgroundColor = '#FFF';
    ativo = false
  }
})