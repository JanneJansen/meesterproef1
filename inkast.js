let jurk = document.getElementById("jurk-path");

jurk.addEventListener("mouseover", function( event ) {   
  // highlight the mouseenter target
  event.target.style.fill = "url(#img1)";
//    console.log('jemoeder');
})

jurk.addEventListener("mouseout", function( event ) { 
      event.target.style.fill = null;
})
    



let broek = document.getElementById("broek-path");

broek.addEventListener("mouseover", function( event ) {   
  // highlight the mouseenter target
  event.target.style.fill = "url(#img2)";

})

broek.addEventListener("mouseout", function( event ) { 
      event.target.style.fill = null;
})




let tshirt = document.getElementById("tshirt-path");

tshirt.addEventListener("mouseover", function( event ) {   
  event.target.style.fill = "url(#img3)";
})

tshirt.addEventListener("mouseout", function( event ) { 
      event.target.style.fill = null;
})
    


let trui = document.getElementById("trui-path");

trui.addEventListener("mouseover", function( event ) {   
  event.target.style.fill = "url(#img4)";
})

trui.addEventListener("mouseout", function( event ) { 
      event.target.style.fill = null;
})



let jas = document.getElementById("jas-path");

jas.addEventListener("mouseover", function( event ) {   
  event.target.style.fill = "url(#img5)";
})

jas.addEventListener("mouseout", function( event ) { 
      event.target.style.fill = null;
})





jurk.onclick=function(){
location.href = "detail1.html";
};

broek.onclick=function(){
location.href = "detail2.html";
};

tshirt.onclick=function(){
location.href = "detail3.html";
};

trui.onclick=function(){
location.href = "detail4.html";
};

jas.onclick=function(){
location.href = "detail5.html";
};