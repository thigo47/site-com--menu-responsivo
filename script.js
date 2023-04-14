let menus = document.getElementsByClassName("menus")

function clicar(){
for (const i in menus) {
    if (menus[i].style.display === "none" && window.innerWidth < 767) {
        menus[i].style.display = "block"
    }else{
        menus[i].style.display = "none"
    }
 
    }
}

function tamanho() {
    for (const i in menus) {
        if (window.innerWidth >= 768) {
            menus[i].style.display = "block"
            
        }
    }

}