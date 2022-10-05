function showImg(){
    let image = document.getElementById('paga_pegno')
    console.log(image)
    image.removeAttribute('id')
    image.classList.toggle('img-show')
}

function changeTheme(){
    let body = document.getElementsByTagName('body')[0]
    let imgButton = document.getElementById('img_button')

    body.classList.toggle('body_dark')
    imgButton.classList.toggle('img_button-dark')

}