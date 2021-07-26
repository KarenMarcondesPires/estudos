function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = './imagem/manha.png'
        document.body.style.background = '#b8ced7', 20
        msg.innerHTML = msg.innerHTML + ", Bom Dia!"
    } else if (hora >= 12 && hora <= 18) {

        // BOA TARDE
        img.src = './imagem/tarde.png'
        document.body.style.background = '#583249ff'
        msg.innerHTML = msg.innerHTML + ", Boa Tarde!"

    } else {
        // BOA NOITE
        img.src = './imagem/noite.png'
        document.body.style.background = '#1a2426ff'
        msg.innerHTML = msg.innerHTML + ", Boa Noite!"

    }
}