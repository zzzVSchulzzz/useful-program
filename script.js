const buttonDown = document.querySelector('.btn.btn-danger')

buttonDown.addEventListener('mousemove', (event) => {
     const xPos = event.clientX;
     const yPos = event.clientY;
     buttonDown.style.left = `${xPos}px`;
     buttonDown.style.top = `${yPos}px`;
});