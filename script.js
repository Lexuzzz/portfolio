
function zom(src) {
    src = "img/" + src;
    document.getElementById("zoomet").setAttribute("src", src);
    document.getElementById("zoomer").style.display = "flex";
    document.getElementById("zoomer").style.justifyContent = "center";
    document.getElementById("zoomer").style.alignItems = "center";
    document.getElementById("header").style.display = "none";
    document.getElementById("closeImg").style.display="block";
    
    ArIm = document.querySelectorAll('.imgs');
    let tempSrc = document.getElementById("zoomet").getAttribute("src");
    console.log(ArIm);
    console.log(tempSrc);
    for (i = 0; i < ArIm.length; i++) {
        console.log(ArIm[i].getAttribute("src"));
        if (ArIm[i].getAttribute("src") == tempSrc) {
            if (i == 0){
                document.getElementById("swipeL").style.opacity = "0";
                document.getElementById("swipeL").style.cursor ="default";
            }            
            else if (i == (ArIm.length-1)){
                document.getElementById("swipeR").style.opacity = "0";
                document.getElementById("swipeR").style.cursor ="default";
            }            
            else {
                document.getElementById("swipeL").style.opacity = "1";  
                document.getElementById("swipeL").style.cursor ="pointer";   
                document.getElementById("swipeR").style.opacity = "1";  
                document.getElementById("swipeR").style.cursor ="pointer";           
            }

        }
    }
}

function closeZ() {
    document.getElementById("zoomer").style.display = "none";
    document.getElementById("header").style.display = "flex";
    document.getElementById("closeImg").style.display="none";
}

function lastPic() {
    ArIm = document.querySelectorAll('.imgs');
    let tempSrc = document.getElementById("zoomet").getAttribute("src");
    console.log(ArIm);
    console.log(tempSrc);
    for (i = 0; i < ArIm.length; i++) {
        console.log(ArIm[i].getAttribute("src"));
        if (ArIm[i].getAttribute("src") == tempSrc) {
            if (i == 0){
                document.getElementById("swipeL").style.opacity = "0";
                document.getElementById("swipeL").style.cursor ="default";
            }
            else if (i == 1) { 
                document.getElementById("swipeL").style.opacity = "0";
                document.getElementById("zoomet").setAttribute("src", ArIm[i - 1].getAttribute("src")); 
                document.getElementById("swipeL").style.cursor ="default";        
            }
            else {
                document.getElementById("swipeL").style.opacity = "1";  
                document.getElementById("swipeL").style.cursor ="pointer";   
                document.getElementById("swipeR").style.opacity = "1";  
                document.getElementById("swipeR").style.cursor ="pointer";             
                document.getElementById("zoomet").setAttribute("src", ArIm[i - 1].getAttribute("src"));             
            }

        }
    }
}

function nextPic() {
    ArIm = document.querySelectorAll('.imgs');
    let tempSrc = document.getElementById("zoomet").getAttribute("src");
    console.log(ArIm);
    console.log(tempSrc);
    for (i = 0; i < ArIm.length; i++) {
        console.log(ArIm[i].getAttribute("src"));
        if (ArIm[i].getAttribute("src") == tempSrc) {
            if (i == (ArIm.length-1)){
                document.getElementById("swipeR").style.opacity = "0";
                document.getElementById("swipeR").style.cursor ="default";
            }
            else if (i == ArIm.length-2) { 
                document.getElementById("swipeR").style.opacity = "0";
                document.getElementById("zoomet").setAttribute("src", ArIm[i + 1].getAttribute("src")); 
                document.getElementById("swipeR").style.cursor ="default";        
            }
            else {
                document.getElementById("swipeL").style.opacity = "1";  
                document.getElementById("swipeL").style.cursor ="pointer";   
                document.getElementById("swipeR").style.opacity = "1";  
                document.getElementById("swipeR").style.cursor ="pointer";                 
                document.getElementById("zoomet").setAttribute("src", ArIm[i + 1].getAttribute("src"));             
            }

        }
    }

}
