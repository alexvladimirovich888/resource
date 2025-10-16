// Fade-in on scroll
const fades = document.querySelectorAll('.fade');
const onScroll = () => {
  const trigger = window.innerHeight * 0.85;
  fades.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < trigger){ el.classList.add('visible'); }
  });
};
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
