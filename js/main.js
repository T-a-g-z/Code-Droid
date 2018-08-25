$(document).ready(function(){
window.sr = ScrollReveal();
 sr.reveal('.navbar', {
     duration:2000,
     origin:'bottom'
 });
 sr.reveal('.picture', {
    duration:2000,
    origin:'left',
    distance:'300px'
});
sr.reveal('.login', {
    duration:2000,
    origin:'right',
    distance:'300px'
});
sr.reveal('.regbtn', {
    duration:2000,
    delay:1000,
    origin:'bottom', 
});
sr.reveal('.tagline', {
    duration:2000,
    origin:'top',
});
sr.reveal('.tagline2', {
    duration:2000,
    origin:'top',
});
sr.reveal('.footer', {
    duration:2000,
    origin:'bottom',
    distance:'100px',
    viewFactor:0.2
});
});

