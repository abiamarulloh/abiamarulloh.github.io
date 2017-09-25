//smootscroll

function smootscroll(id){
    var posY = 0; 

    var target = document.getElementById(id).offsetTop; //jarak antara atas dan div

    var scrollanimate = siteTimeout(function(){
                                smootScroll(id);
                            },5)

    window.scroll(0,posY) //x dan Y
    return false;
}