function openpopup(imageElement){
    var popupoverlay=document.getElementById("myoverlay")
    var popupimg=document.getElementById("popupimage")
    popupoverlay.style.display="block"
    popupimg.src=imageElement.src

}
function closepopup(){
    var popupoverlay=document.getElementById("myoverlay")
    popupoverlay.style.display="none"
}