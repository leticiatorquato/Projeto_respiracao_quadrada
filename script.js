const musica= document.getElementById("musica_ambiente");
const pulmao= document.getElementById("pulmao");    
const borda= document.getElementById("borda");


document.addEventListener("click", function() {
    musica.volume=0.2;
    musica.play();
}, { once: true });


let tempototal;
let temporestante;
let intervalo;
let segundo;
let minuto;


function formatartempo(segundo){
    minuto= Math.floor(segundo/60);
    segundo= segundo % 60;
    return String(minuto).padStart(2,'0') + ':' + String(segundo).padStart(2,'0');
}

function iniciar() {
    if (!intervalo) {
        if (temporestante === undefined){
            minuto= parseInt(document.getElementById("input_minuto").value) || 0;
            segundo= parseInt(document.getElementById("input_segundo").value) || 0;
            tempototal=minuto*60+segundo;
            temporestante=tempototal;
            
        }

        pulmao.style.animationPlayState = 'running';
        borda.style.animationPlayState = 'running';

        intervalo= setInterval(() => {
            document.getElementById('temporizador').textContent= formatartempo(temporestante);
             temporestante--;

             if(temporestante<=0) {
                clearInterval(intervalo);
                intervalo=null;
                pulmao.style.animationPlayState = 'paused';
                borda.style.animationPlayState = 'paused';
                document.getElementById('temporizador').textContent= 'Ciclo encerrado 😮‍💨🍃';
             }
        }, 1000);
    }
}

function pausar() {
    clearInterval(intervalo);

    pulmao.style.animationPlayState = 'paused';
    borda.style.animationPlayState = 'paused';
}

function resetar() {
  clearInterval(intervalo);
  intervalo = null;

  temporestante = tempototal;

  document.getElementById('temporizador').textContent = formatartempo(temporestante);

  pulmao.style.animation = 'none';
  borda.style.animation = 'none';

  pulmao.style.animation = 'pulsar 16s infinite';
  borda.style.animation = 'carregarborda 16s infinite';
  
  pulmao.style.animationPlayState = 'paused';
  borda.style.animationPlayState = 'paused';
}
    

    

