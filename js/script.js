```javascript
// CONTADORES

const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {

    const actualizar = () => {

        const objetivo = +contador.getAttribute("data-target");
        const actual = +contador.innerText;

        const incremento = objetivo / 50;

        if(actual < objetivo){
            contador.innerText = Math.ceil(actual + incremento);
            setTimeout(actualizar,40);
        }else{
            contador.innerText = objetivo;
        }

    };

    actualizar();

});

// BOTÓN SUBIR

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        btnTop.style.display = "block";
    }else{
        btnTop.style.display = "none";
    }

});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// TRADUCCIÓN

let ingles = false;

document.getElementById("traducir").addEventListener("click", () => {

    ingles = !ingles;

    if(ingles){

        document.getElementById("tituloPrincipal").innerHTML =
        "SENA TALENT SHOW 2026";

        document.getElementById("subtitulo").innerHTML =
        "Art, music and creativity in an unforgettable experience.";

    }else{

        document.getElementById("tituloPrincipal").innerHTML =
        "SENA TALENT SHOW 2026";

        document.getElementById("subtitulo").innerHTML =
        "Arte, música y creatividad en una experiencia inolvidable.";

    }

});
```
