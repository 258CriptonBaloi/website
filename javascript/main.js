const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toogle && nav){
        toogle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('menu_toogle','nav_menu')