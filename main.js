/*==================== LOADING ANIMATION ====================*/
function load (){
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inherit";
}

window.onload = (function () { window.setInterval('load()',2000);})




// --- SCROLL ANIMATION ---
atuacao = document.getElementById("areas-de-atuacao");
formacao = document.getElementById("formacao-academica");
facilidade = document.getElementById("facilidade");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 80) { atuacao.className = "cta show" } else { atuacao.className = "cta hide" };
  if (y >= 700) { formacao.className = "cta show" ; console.log(window.scrollY)} else { formacao.className = "cta hide" };
  if (y >= 1100) { facilidade.className = "cta show" } else { facilidade.className = "cta hide" };
};

window.addEventListener("scroll", myScrollFunc);



// --- BROWSER VERIFY ---
function browserVerify() {

    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        //    alert('Opera');
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        //    alert('Chrome');

    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        // alert('Firefox');
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        document.getElementById("main-site").style.display = 'none';
        document.getElementById("not-suported").style.display = 'block';
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
        document.getElementById("main-site").style.display = 'none';
        document.getElementById("not-suported").style.display = 'block';
    }
    else {
        //   alert('unknown');
    }
}


//motion by device move
let counter = 0;
const updateRate = 10;
const limit = 45;
const tiltable = document.getElementById("tiltable");

function updateNow() {
    return counter++ % updateRate === 0;
};

window.addEventListener("deviceorientation", function (event) {
    if (updateNow()) {
        let positionGama = Math.round(event.gamma);
        let positionBeta = Math.round(event.beta);

        if (Math.abs(positionGama) > limit) {
            if (positionGama > limit) {
                positionGama = limit;
            } else {
                positionGama = -limit;
            }
        }
        if (Math.abs(positionBeta) > limit) {
            if (positionBeta > limit) {
                positionBeta = limit;
            } else {
                positionBeta = -limit;
            }
        }

        positionGama = positionGama / -100;
        positionBeta = positionBeta / -100;

        let styleY = "rotateY(" + positionGama * 3 + "deg)";
        let styleX = "rotateX(" + positionBeta * 2 + "deg)";
        tiltable.style.transform = styleY + styleX;
    }
});