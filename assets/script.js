function verificar() {
    var res = document.querySelector('div#res')
    var a = new Date()
    var agora = a.getFullYear()
    var fano = document.getElementById('txna')
    var nasci = Number(fano.value)

    if (nasci == 0 || nasci > agora) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var rest = agora - nasci
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'

            if (rest <= 12) {
                img.setAttribute('src', 'imagens/bb-menino.png')
            } else if (rest >= 13 && rest <= 21) {
                img.setAttribute('src', 'imagens/homem-jovem.png')
            } else if (rest >= 22 && rest < 60) {
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                img.setAttribute('src', 'imagens/homem-velho.png')
            }

        } else {
            genero = 'Mulher'

            if (rest <= 12) {
                img.setAttribute('src', 'imagens/bb-menina.png')
            } else if (rest >= 13 && rest <= 21) {
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            } else if (rest >= 22 && rest < 60) {
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                img.setAttribute('src', 'imagens/mulher-velha.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${rest} anos`
        res.appendChild(img)
    }
}

