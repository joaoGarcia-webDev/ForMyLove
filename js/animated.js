var allContainer = document.querySelectorAll('.container');
var delay = 0;

window.onload = function(){
    allContainer.forEach(container => {
        container.classList.toggle('click');
        delay += 0.3;
        container.style.transitionDelay = delay+"s";
    });
    console.log('function')
}