function showImg(){
    let image = document.getElementById('image_div')
    console.log(image)
    
    image.classList.toggle('img-show')
}

function changeTheme(){
    let body = document.getElementsByTagName('body')[0]
    let imgButton = document.getElementById('img_button')

    body.classList.toggle('body_dark')
    imgButton.classList.toggle('img_button-dark')

}