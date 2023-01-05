function getEle(id) {
    return document.getElementById(id)
}


// function handleOnClick() {
//     let subMenu = getEle("subMenu")
//     let close = getEle("close")


//     if(getEle("navbarTogglerDemo02").style.height > '10px'){
//         subMenu.style.display = "block";
//         close.style.display = 'none'
//     } else {

//         subMenu.style.display = "none";
//         close.style.display = 'block'
//     }
// }



document.getElementById("subMenu").onclick() = function() {
    let subMenu = getEle("subMenu")
let close = getEle("close")
    subMenu.style.display = "none";
    close.style.display = 'block'
}
document.getElementById('close').onclick() = function(){
    let subMenu = getEle("subMenu")
let close = getEle("close")
    subMenu.style.display = "block";
    close.style.display = 'none'
}