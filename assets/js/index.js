AOS.init();


gsap.registerPlugin(TextPlugin);

// const textos = ["Nós impulsionamos o crescimento da sua Startup"]
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

// gsap.registerPlugin(TextPlugin);

// const textos = ["Nós impulsionamos o crescimento da sua Startup", "Nós impulsionamos o crescimento da sua Startup2", "Nós impulsionamos o crescimento da sua Startup3"];

// let tlMaster = gsap.timeline({repeat: -1});

// textos.forEach((texto) => {
//     let tltext = gsap.timeline({repeat: 1, yoyo: true});
//     tltext.to('#animated-text', {duration: 2, text: texto});
//     tlMaster.add(tltext);
// });

// Animação do cursor
// gsap.to('#cursor', {opacity: 0, repeat: -1, yoyo: true, duration: 0.5, ease: "power2.inOut"});

