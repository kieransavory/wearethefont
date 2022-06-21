function menuOpener() {
    document.querySelector('#openMenu').classList.toggle('active');
}

function bgChangerHome() {

    let menuBg = document.getElementById('openMenu');


    menuBg.style.backgroundImage = "url('matadorbg.jpg')";
    menuBg.style.backgroundAttachment = "fixed";
    menuBg.style.backgroundSize = "cover";
    menuBg.style.backgroundRepeat = "no-repeat";
    menuBg.style.backgroundPosition = "center";

    document.getElementById('menuItemOne').addEventListener("mouseleave" , () =>  {
        menuBg.style.backgroundImage = "none";
    })
}

function bgChangerAbout() {

    let menuBg = document.getElementById('openMenu');

    menuBg.style.backgroundImage = "url('ash still.jpg')";
    menuBg.style.backgroundAttachment = "fixed";
    menuBg.style.backgroundSize = "cover";
    menuBg.style.backgroundRepeat = "no-repeat";
    menuBg.style.backgroundPosition = "center";

    document.getElementById('menuItemTwo').addEventListener("mouseleave" , () =>  {
        menuBg.style.backgroundImage = "none";
    })
}

function bgChangerShows() {

    let menuBg = document.getElementById('openMenu');
    
    menuBg.style.backgroundImage = "url('sambg.jpg')";
    menuBg.style.backgroundAttachment = "fixed";
    menuBg.style.backgroundSize = "cover";
    menuBg.style.backgroundRepeat = "no-repeat";
    menuBg.style.backgroundPosition = "center";

    document.getElementById('menuItemThree').addEventListener("mouseleave" , () =>  {
        menuBg.style.backgroundImage = "none";
    })
}

function bgChangerContact() {

    let menuBg = document.getElementById('openMenu');
    
    menuBg.style.backgroundImage = "url('rossbg.jpg')";
    menuBg.style.backgroundAttachment = "fixed";
    menuBg.style.backgroundSize = "cover";
    menuBg.style.backgroundRepeat = "no-repeat";
    menuBg.style.backgroundPosition = "center";

    document.getElementById('menuItemFour').addEventListener("mouseleave" , () =>  {
        menuBg.style.backgroundImage = "none";
    })
}