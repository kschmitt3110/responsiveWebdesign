// Get the modal
const materialien = {
  material1: 1,
  material2: 2
};

const groessen = {
  groesse1: 1,
  groesse2: 2,
  groesse3: 3
};

var modalMaterialSelect = document.getElementById("materialSelect");
var modalSizeSelect = document.getElementById("sizeSelect");
var searchBox = document.getElementById("Searchbox");
var ausgewaehltesMaterial = materialien.material1;
var ausgewaehltesGroesse = groessen.groesse2;

var btnMaterial = document.getElementById("materialBtn");
var btnSize = document.getElementById("sizeBtn");
var btnSearch = document.getElementById("SearchButton");
// Get the <span> element that closes the modal


var spanCloseMaterial = document.getElementsByClassName("closeMaterial")[0];
var spanCloseSize = document.getElementsByClassName("closeSize")[0];
var spanCloseSearch = document.getElementsByClassName("closeSearch")[0];

// When the user clicks on the button, open the modal
btnMaterial.onclick = function() {
  modalMaterialSelect.style.display = "block";
}

btnSize.onclick = function() {
    modalSizeSelect.style.display = "block";
}

btnSearch.onclick = function(){
  searchBox.style.display="block";
}

// When the user clicks on <span> (x), close the modal
spanCloseMaterial.onclick = function() {
  modalMaterialSelect.style.display = "none";
}

spanCloseSize.onclick = function() {
    modalSizeSelect.style.display = "none";
}

spanCloseSearch.onclick = function() {
  searchBox.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalMaterialSelect) {
    modalMaterialSelect.style.display = "none";
  }
  if (event.target == modalSizeSelect) {
      modalSizeSelect.style.display = "none";
  }
  if (event.target == searchBox){
    searchBox.style.display = "none";
  }

}
document.getElementById("Material1").style.borderStyle="solid";
  document.getElementById("Material1").style.borderWidth = "2px"; 


document.getElementById("Material1").onclick= function(){
  modalMaterialSelect.style.display= "none";
  setzeMaterial(materialien.material1);
  ausgewaehltesMaterial= materialien.material1;
  document.getElementById("Material1").style.borderStyle="solid";
  document.getElementById("Material1").style.borderWidth = "2px";
  document.getElementById("Material2").style.borderStyle="none";
  document.getElementById("Material3").style.borderStyle="none";
}
document.getElementById("Material2").onclick= function(){
  modalMaterialSelect.style.display= "none";
  setzeMaterial(materialien.material2);
  ausgewaehltesMaterial= materialien.material2;
  document.getElementById("Material2").style.borderStyle="solid";
  document.getElementById("Material2").style.borderWidth = "2px";
  document.getElementById("Material1").style.borderStyle="none";
  document.getElementById("Material3").style.borderStyle="none";
}

function setzeMaterial (material) {
  if (material == materialien.material1) {
    if(ausgewaehltesGroesse == groessen.groesse1){
      document.getElementById("bild1").src = "LVBildKlein1.png";
      document.getElementById("bild2").src = "LVBildKlein2.png";
      document.getElementById("bild3").src = "LVBildKlein3.png";
      document.getElementById("bild4").src = "LVBildKlein4.png";
    }else if(ausgewaehltesGroesse == groessen.groesse2){
      document.getElementById("bild1").src = "LVBildMittel1.png";
      document.getElementById("bild2").src = "LVBildMittel2.png";
      document.getElementById("bild3").src = "LVBildMittel3.png";
      document.getElementById("bild4").src = "LVBildMittel4.png";
    }else{
      document.getElementById("bild1").src = "LVBILD1FINAL.png";
      document.getElementById("bild2").src = "LVBILD2FINAL.png";
      document.getElementById("bild3").src = "LVBILD3FINAL.png";
      document.getElementById("bild4").src = "LVBILD4FINAL.png";
    }
      document.getElementById("materialBtn").innerHTML = "Monogram Canvas"
  }
  else if (material == materialien.material2) {
    if(ausgewaehltesGroesse == groessen.groesse1){
      document.getElementById("bild1").src = "LVBildKlein5.png";
      document.getElementById("bild2").src = "LVBildKlein6.png";
      document.getElementById("bild3").src = "LVBildKlein7.png";
      document.getElementById("bild4").src = "LVBildKlein8.png";
    }else if(ausgewaehltesGroesse == groessen.groesse2){
      document.getElementById("bild1").src = "LVBildMittel5.png";
      document.getElementById("bild2").src = "LVBildMittel6.png";
      document.getElementById("bild3").src = "LVBildMittel7.png";
      document.getElementById("bild4").src = "LVBildMittel8.png";
    }else{
      document.getElementById("bild1").src = "LVBILD5FINAL.png";
      document.getElementById("bild2").src = "LVBILD6FINAL.png";
      document.getElementById("bild3").src = "LVBILD7FINAL.png";
      document.getElementById("bild4").src = "LVBILD8FINAL.png";
    }
    document.getElementById("materialBtn").innerHTML = "Damier Ebene Canvas"
  }
}

document.getElementById("groesse1").onclick= function(){
  modalSizeSelect.style.display= "none";
  setzeGroesse(groessen.groesse1);
  ausgewaehltesGroesse= groessen.groesse1;
  setzeMaterial(ausgewaehltesMaterial);
  document.getElementById("groesse1").style.borderStyle="solid";
  document.getElementById("groesse1").style.borderWidth = "2px";
  document.getElementById("groesse2").style.borderStyle="none";
  document.getElementById("groesse3").style.borderStyle="none";
}
document.getElementById("groesse2").onclick= function(){
  modalSizeSelect.style.display= "none";
  setzeGroesse(groessen.groesse2);
  ausgewaehltesGroesse= groessen.groesse2;
  setzeMaterial(ausgewaehltesMaterial);
  document.getElementById("groesse2").style.borderStyle="solid";
  document.getElementById("groesse2").style.borderWidth = "2px";
  document.getElementById("groesse1").style.borderStyle="none";
  document.getElementById("groesse3").style.borderStyle="none";
}
document.getElementById("groesse3").onclick= function(){
  modalSizeSelect.style.display= "none";
  setzeGroesse(groessen.groesse3);
  ausgewaehltesGroesse= groessen.groesse3;
  setzeMaterial(ausgewaehltesMaterial);
  document.getElementById("groesse3").style.borderStyle="solid";
  document.getElementById("groesse3").style.borderWidth = "2px";
  document.getElementById("groesse1").style.borderStyle="none";
  document.getElementById("groesse2").style.borderStyle="none";
}

function setzeGroesse (Groesse) {
  if (Groesse == groessen.groesse2) {
    document.getElementById("preis1").innerHTML = "3.300€"
    document.getElementById("sizeBtn").innerHTML = "Quader 70"
  }
  else if ( Groesse == groessen.groesse1) { 
    document.getElementById("preis1").innerHTML = "2.200€"
    document.getElementById("sizeBtn").innerHTML = "Quader 50"
  }
  else {
    document.getElementById("preis1").innerHTML = "4.400€"
    document.getElementById("sizeBtn").innerHTML = "Quader 100"
  }
}
