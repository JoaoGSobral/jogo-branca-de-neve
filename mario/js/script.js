const mario= document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
const jump =() => {
    mario.classList.add('jump');

    setTimeout(()=> {
        mario.classList.remove('jump')
    }, 500);
}
const loop =setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
 
    if (pipePosition<= 140 &&  pipePosition> 0 && marioPosition < 60){
        pipe.style.animation = 'none';
        pipe.style.left =`${pipePosition}px`;

        mario.style.animation='none';
        pipe.style.left ='${pipePosition}px';

        mario.src = './imagens/fim.gif'
        mario.style.width ='145px'
        mario.style.marginLeft = '10px'


        const gameOverImg = document.createElement('img');
        gameOverImg.src = '/imagens/ganeover.png'; // caminho da sua imagem
        gameOverImg.style.position = 'absolute';
        gameOverImg.style.width = '100%';
        gameOverImg.style.height = '100%';
        gameOverImg.style.objectFit = 'cover';
        gameOverImg.style.zIndex = '1000';
        
        document.querySelector('.game-board').appendChild(gameOverImg);
        
} 10});

document.addEventListener('keydown', jump);
