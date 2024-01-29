var el_texto = document.title;
var espera = 100;
var refresca = null;
function move_title(){
  document.title = el_texto;
  el_texto = el_texto.substring(1, el_texto.length) + el_texto.charAt(0);
  refresca = setTimeout("move_title()", espera);
}
move_title();
