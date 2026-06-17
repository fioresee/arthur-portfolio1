// --- Animação do Header ---------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("rolado");
    }else{
        header.classList.remove("rolado");
    }

});

// --- Carrossel de Projetos -------------------------

(function () {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  let atual    = 0;
  let timer;

  function irPara(index) {
    slides[atual].classList.remove('ativo');
    dots[atual].classList.remove('ativo');
    atual = (index + slides.length) % slides.length;
    slides[atual].classList.add('ativo');
    dots[atual].classList.add('ativo');
  }

  function iniciarTimer() {
    timer = setInterval(() => irPara(atual + 1), 4000);
  }

  function reiniciarTimer() {
    clearInterval(timer);
    iniciarTimer();
  }

  document.getElementById('btn-proximo').addEventListener('click', () => {
    irPara(atual + 1);
    reiniciarTimer();
  });

  document.getElementById('btn-anterior').addEventListener('click', () => {
    irPara(atual - 1);
    reiniciarTimer();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      irPara(Number(dot.dataset.index));
      reiniciarTimer();
    });
  });

  iniciarTimer();
})();