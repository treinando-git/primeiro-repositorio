const p = document.querySelector("p");
p.style.color = 'rgb(230, 230, 230)';

p.addEventListener('click', () => {
  const corAtual = p.style.color;

  if (corAtual === 'rgb(230, 230, 230)') {
    p.style.color = 'rgb(255, 85, 85)';
  } else {
    p.style.color = 'rgb(230, 230, 230)';
  }
});