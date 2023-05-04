//Calculation Cart
document.getElementById("cart-total").innerText = localStorage.getItem("total") ?? 0

function checkout() {
    let bala_bala = document.getElementById("bala_bala")
    let cireng_isi = document.getElementById("cireng_isi")
    let pisang_goreng = document.getElementById("pisang_goreng")

    const checkoutSum = document.getElementById("cart-items")
    checkoutSum.style.display = "block"

    bala_bala.innerHTML = localStorage.getItem("Bala-bala") ?? 0
    cireng_isi.innerHTML = localStorage.getItem("Cireng Isi") ?? 0
    pisang_goreng.innerHTML = localStorage.getItem("Pisang Goreng") ?? 0
}

function addToCart(value) {
    let item = localStorage.getItem(value)
    if(item){
        localStorage.setItem(value, parseInt(item) + 1)
    } else {
        localStorage.setItem(value, "1")
    }

    alert("Gorengan successfully added")
    
    let total = 0
    for (let i = 0; i < localStorage.length; i++) {
        let gorenganKU = localStorage.key(i)
        if(gorenganKU == "Bala-bala") {
            let data = localStorage.getItem(gorenganKU)
            let totalPrice = 50000 * parseInt(data)
            total += totalPrice
        } else if (gorenganKU == "Pisang Goreng"){
            let data = localStorage.getItem(gorenganKU)
            let totalPrice = 40000 * parseInt(data)
            total += totalPrice
        } else if (gorenganKU == "Cireng Isi") {
            let data = localStorage.getItem(gorenganKU)
            let totalPrice = 60000 * parseInt(data)
            total += totalPrice
        }
        
    }
    localStorage.setItem("total", total)
    document.getElementById("cart-total").innerText = localStorage.getItem("total")
    location.reload(true)
}

function clearcheckout() {
    const confirmation = confirm("Do you want to reorder?")
    if(confirmation) {
        localStorage.clear()
        location.reload(true)
    }
}
// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
 
window.onscroll = () => {
    navbar.classList.remove('active');
}
 
// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});
 
 
sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})

