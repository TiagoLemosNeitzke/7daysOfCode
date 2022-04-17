const menuEl = document.getElementById('lateral--menu')

function mostraMenu() {


    if (menuEl.classList == 'active') {
        menuEl.classList.remove('active')
    } else {
        menuEl.classList.add('active')
    }


}