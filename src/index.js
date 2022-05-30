const rightBtn = document.querySelector('#right-btn')
const leftBtn = document.querySelector('#left-btn')
let mainContent = document.querySelector('.main-content')
let mainTitle = document.querySelector('.main-title')
let headerJS = document.querySelector('#header')
let counter = 1

// if (counter === 1) {
//     

//     

// }

function nxtImg() {
    counter += 1
    if (counter === 0 || counter > 3) {
        counter = counter === 0 ? 3 : 1
    }
    if (counter === 2) {
        headerJS.classList.add('Two')
        headerJS.classList.remove('Three')
        mainTitle.textContent = 'We are available all across the globe'
        mainContent.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
    } else if (counter === 3) {
        headerJS.classList.add('Three')
        headerJS.classList.remove('Two')
        mainTitle.textContent = `Manufactured with the best materials`
        mainContent.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
    } else {
        mainContent.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in  ringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`
        mainTitle.textContent = `Discover innovative ways to decorate`
        headerJS.classList.remove('Two')
        headerJS.classList.remove('Three')
    }
    console.log(counter)
}

function prevImg() {
    console.log(counter)
    counter -= 1  
    if (counter === 0 || counter > 3) {
        counter = counter === 0 ? 3 : 1
    }
    

    if (counter === 2) {
        headerJS.classList.add('Two')
        headerJS.classList.remove('Three')
        mainTitle.textContent = 'We are available all across the globe'
        mainContent.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
    } else if (counter === 3) {
        headerJS.classList.add('Three')
        headerJS.classList.remove('Two')
        mainTitle.textContent = `Manufactured with the best materials`
        mainContent.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
    } else {
        mainContent.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in  ringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`
        mainTitle.textContent = `Discover innovative ways to decorate`
        headerJS.classList.remove('Two')
        headerJS.classList.remove('Three')
    }
}


rightBtn.addEventListener('click', nxtImg)
leftBtn.addEventListener('click', prevImg)