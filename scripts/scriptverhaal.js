var buttonLike = document.getElementById("count");
var likes = document.getElementById("likes");
var counter =  125;
    
buttonLike.addEventListener("click", function(){
     if (counter < 126){
        counter += 1;
    } else{
    counter -= 1;
}
    likes.innerHTML = counter;
});

var buttonDownload = document.getElementById("gedownload");

buttonDownload.addEventListener("click", function(){
    buttonDownload.classList.toggle("active");
});

var buttonLijst = document.getElementById("favorieten");
var aantalLijst = document.getElementById("aantalfavs");
var favs = 0;

buttonLijst.addEventListener("click", function(){
    if (favs < 5){
        favs += 1;
    } else{
    favs = 0;
}
     aantalLijst.innerHTML = favs;
});
