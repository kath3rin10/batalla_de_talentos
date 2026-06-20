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


const glosarioES = `
<table class="tabla-glosario">

<tr>
    <th>Palabra</th>
    <th>Definición</th>
</tr>

<tr><td>Talento</td><td>Capacidad natural o adquirida para realizar una actividad con habilidad.</td></tr>
<tr><td>Creatividad</td><td>Capacidad para generar ideas originales e innovadoras.</td></tr>
<tr><td>Arte</td><td>Expresión de ideas y emociones mediante diversas técnicas.</td></tr>
<tr><td>Música</td><td>Combinación de sonidos y silencios organizados de manera armoniosa.</td></tr>
<tr><td>Canto</td><td>Producción de sonidos musicales mediante la voz.</td></tr>
<tr><td>Baile</td><td>Expresión corporal realizada siguiendo ritmos musicales.</td></tr>
<tr><td>Dibujo</td><td>Representación gráfica de ideas, objetos o personas.</td></tr>
<tr><td>Guitarra</td><td>Instrumento musical de cuerdas pulsadas.</td></tr>
<tr><td>Saxofón</td><td>Instrumento musical de viento utilizado en diversos géneros.</td></tr>
<tr><td>Escenario</td><td>Espacio destinado para realizar presentaciones artísticas.</td></tr>
<tr><td>Interpretación</td><td>Forma en que una persona ejecuta una obra artística.</td></tr>
<tr><td>Coreografía</td><td>Conjunto organizado de movimientos de baile.</td></tr>
<tr><td>Expresión</td><td>Manifestación de emociones o pensamientos.</td></tr>
<tr><td>Aprendiz</td><td>Estudiante en proceso de formación en el SENA.</td></tr>
<tr><td>Disciplina</td><td>Constancia y compromiso para alcanzar objetivos.</td></tr>
<tr><td>Innovación</td><td>Creación o mejora de ideas y procesos.</td></tr>
<tr><td>Confianza</td><td>Seguridad en las propias capacidades.</td></tr>
<tr><td>Motivación</td><td>Razón o impulso para realizar una actividad.</td></tr>
<tr><td>Inspiración</td><td>Estimulación creativa para producir ideas o arte.</td></tr>
<tr><td>Presentación</td><td>Exhibición pública de una habilidad o talento.</td></tr>
<tr><td>Audiencia</td><td>Grupo de personas que observa una presentación.</td></tr>
<tr><td>Ritmo</td><td>Patrón de tiempos que organiza la música.</td></tr>
<tr><td>Melodía</td><td>Secuencia de sonidos que forman una composición musical.</td></tr>
<tr><td>Armonía</td><td>Combinación agradable de sonidos musicales.</td></tr>
<tr><td>Ilustración</td><td>Dibujo que representa visualmente una idea.</td></tr>
<tr><td>Participación</td><td>Intervención activa en una actividad o evento.</td></tr>
<tr><td>Trabajo en Equipo</td><td>Colaboración entre varias personas para lograr un objetivo.</td></tr>
<tr><td>Habilidad</td><td>Capacidad para realizar una tarea con destreza.</td></tr>
<tr><td>Desempeño</td><td>Forma en que una persona ejecuta una actividad.</td></tr>
<tr><td>Desarrollo Integral</td><td>Crecimiento personal, académico y social de una persona.</td></tr>

</table>
`;

const glosarioEN = `
<table class="tabla-glosario">

<tr>
    <th>Word</th>
    <th>Definition</th>
</tr>

<tr><td>Talent</td><td>Natural or acquired ability to perform an activity skillfully.</td></tr>
<tr><td>Creativity</td><td>Ability to generate original and innovative ideas.</td></tr>
<tr><td>Art</td><td>Expression of ideas and emotions through various techniques.</td></tr>
<tr><td>Music</td><td>Combination of sounds and silences organized harmoniously.</td></tr>
<tr><td>Singing</td><td>Production of musical sounds using the voice.</td></tr>
<tr><td>Dancing</td><td>Body expression performed following musical rhythms.</td></tr>
<tr><td>Drawing</td><td>Graphic representation of ideas, objects or people.</td></tr>
<tr><td>Guitar</td><td>String musical instrument.</td></tr>
<tr><td>Saxophone</td><td>Wind musical instrument used in various genres.</td></tr>
<tr><td>Stage</td><td>Space intended for artistic performances.</td></tr>
<tr><td>Interpretation</td><td>Way in which a person performs an artistic work.</td></tr>
<tr><td>Choreography</td><td>Organized set of dance movements.</td></tr>
<tr><td>Expression</td><td>Manifestation of emotions or thoughts.</td></tr>
<tr><td>Apprentice</td><td>Student in training at SENA.</td></tr>
<tr><td>Discipline</td><td>Commitment and consistency to achieve goals.</td></tr>
<tr><td>Innovation</td><td>Creation or improvement of ideas and processes.</td></tr>
<tr><td>Confidence</td><td>Trust in one's own abilities.</td></tr>
<tr><td>Motivation</td><td>Reason or impulse to perform an activity.</td></tr>
<tr><td>Inspiration</td><td>Creative stimulation to produce ideas or art.</td></tr>
<tr><td>Presentation</td><td>Public display of a skill or talent.</td></tr>
<tr><td>Audience</td><td>Group of people watching a presentation.</td></tr>
<tr><td>Rhythm</td><td>Pattern of timing that organizes music.</td></tr>
<tr><td>Melody</td><td>Sequence of sounds that forms a musical composition.</td></tr>
<tr><td>Harmony</td><td>Pleasing combination of musical sounds.</td></tr>
<tr><td>Illustration</td><td>Drawing that visually represents an idea.</td></tr>
<tr><td>Participation</td><td>Active involvement in an activity or event.</td></tr>
<tr><td>Teamwork</td><td>Collaboration among several people to achieve a goal.</td></tr>
<tr><td>Skill</td><td>Ability to perform a task with competence.</td></tr>
<tr><td>Performance</td><td>Way in which a person carries out an activity.</td></tr>
<tr><td>Integral Development</td><td>Personal, academic and social growth of a person.</td></tr>

</table>`;

document.getElementById("contenidoGlosario").innerHTML = glosarioES;


let ingles = false;

document.getElementById("traducir").addEventListener("click", () => {

    ingles = !ingles;

    if(ingles){

        document.getElementById("contenidoGlosario").innerHTML = glosarioEN;

        document.getElementById("traducir").innerHTML =
        "🌎 Español";

        document.getElementById("tituloPrincipal").innerHTML =
        "SENA TALENT SHOW 2026";

        document.getElementById("subtitulo").innerHTML =
        "Art, music and creativity in an unforgettable experience.";

        document.getElementById("menuExp").innerHTML =
        "Experience";

        document.getElementById("menuGaleria").innerHTML =
        "Gallery";

        document.getElementById("menuPalabras").innerHTML =
        "Keywords";

        document.getElementById("menuGlosario").innerHTML =
        "Glossary";

        document.getElementById("menuConclusion").innerHTML =
        "Conclusion";

        document.getElementById("expTitulo").innerHTML =
        "My Experience";

        document.getElementById("galeriaTitulo").innerHTML =
        "Talent Gallery";

        document.getElementById("palabrasTitulo").innerHTML =
        "Keywords";

        document.getElementById("glosarioTitulo").innerHTML =
        "Glossary";

        document.getElementById("conclusionTitulo").innerHTML =
        "Conclusion";

document.getElementById("btnDescubrir").innerHTML =
"Discover More";

document.getElementById("textoExperiencia").innerHTML =
"During the talent event held at SENA, I observed performances in drawing, singing, dancing, guitar, and saxophone. It was an enriching experience that allowed me to appreciate the artistic abilities of the apprentices and strengthen values such as creativity, discipline, and teamwork.";

document.getElementById("textoConclusion").innerHTML =
"This experience made it possible to appreciate the artistic talent of the apprentices and recognize the importance of creativity within the educational process. Cultural activities strengthen confidence, participation, and personal growth.";

document.getElementById("tag1").innerHTML = "Creativity";
document.getElementById("tag2").innerHTML = "Art";
document.getElementById("tag3").innerHTML = "Music";
document.getElementById("tag4").innerHTML = "Talent";
document.getElementById("tag5").innerHTML = "Discipline";
document.getElementById("tag6").innerHTML = "Innovation";
document.getElementById("tag7").innerHTML = "Expression";
document.getElementById("tag8").innerHTML = "Learning";

    }else{

        document.getElementById("btnDescubrir").innerHTML =
"Descubrir Más";

document.getElementById("textoExperiencia").innerHTML =
"Durante la actividad de talentos realizada en el SENA observé presentaciones de dibujo, canto, baile, guitarra y saxofón. Fue una experiencia enriquecedora que permitió conocer las habilidades artísticas de los aprendices y fortalecer valores como la creatividad, la disciplina y el trabajo en equipo.";

document.getElementById("textoConclusion").innerHTML =
"Esta experiencia permitió valorar el talento artístico de los aprendices y reconocer la importancia de la creatividad dentro del proceso formativo. Las actividades culturales fortalecen la confianza, la participación y el crecimiento personal.";

document.getElementById("tag1").innerHTML = "Creatividad";
document.getElementById("tag2").innerHTML = "Arte";
document.getElementById("tag3").innerHTML = "Música";
document.getElementById("tag4").innerHTML = "Talento";
document.getElementById("tag5").innerHTML = "Disciplina";
document.getElementById("tag6").innerHTML = "Innovación";
document.getElementById("tag7").innerHTML = "Expresión";
document.getElementById("tag8").innerHTML = "Aprendizaje";

        document.getElementById("contenidoGlosario").innerHTML = glosarioES;

        document.getElementById("traducir").innerHTML =
        "🌎 English";

        document.getElementById("tituloPrincipal").innerHTML =
        "SENA TALENT SHOW 2026";

        document.getElementById("subtitulo").innerHTML =
        "Arte, música y creatividad en una experiencia inolvidable.";

        document.getElementById("menuExp").innerHTML =
        "Experiencia";

        document.getElementById("menuGaleria").innerHTML =
        "Galería";

        document.getElementById("menuPalabras").innerHTML =
        "Palabras Clave";

        document.getElementById("menuGlosario").innerHTML =
        "Glosario";

        document.getElementById("menuConclusion").innerHTML =
        "Conclusión";

        document.getElementById("expTitulo").innerHTML =
        "Mi Experiencia";

        document.getElementById("galeriaTitulo").innerHTML =
        "Galería de Talentos";

        document.getElementById("palabrasTitulo").innerHTML =
        "Palabras Clave";

        document.getElementById("glosarioTitulo").innerHTML =
        "Glosario";

        document.getElementById("conclusionTitulo").innerHTML =
        "Conclusión";
    }

});

const imagenes = [
    "png/imagen1.png",
    "png/imagen2.png",
    "png/imagen3.png",
    "png/imagen4.png",
    "png/imagen5.png",
    "png/imagen6.png",
    "png/imagen7.png",
    "png/imagen8.png",
    "png/imagen9.png",
    "png/imagen10.png"
];

let indice = 0;

const imagenGaleria = document.getElementById("imagenGaleria");

document.getElementById("siguiente").addEventListener("click", () => {

    indice++;

    if(indice >= imagenes.length){
        indice = 0;
    }

    imagenGaleria.src = imagenes[indice];
});

document.getElementById("anterior").addEventListener("click", () => {

    indice--;

    if(indice < 0){
        indice = imagenes.length - 1;
    }

    imagenGaleria.src = imagenes[indice];
});
