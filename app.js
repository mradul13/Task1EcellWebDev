const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');
    
    burger.addEventListener('click', () =>{
        //for toggling between nav-active and navlinks
        nav.classList.toggle('nav-active');
        
        //link animation
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
}
navSlide()


let header = document.querySelector("header");
window.onscroll = () =>{
    let pos = document.documentElement.scrollTop;
    if (pos>0){
        header.classList.add('sticky')
    }
    else{
        header.classList.remove('sticky');
    }
}




// scroll top
const scroltop =() =>{
let scrollTopBtn = document.getElementById('scroll-top')
if (pos > 300){
    scrollTopBtn.style.display = "grid"
}else{
    scrollTopBtn.style.display = 'none'
}
scrollTopBtn.addEventListener("click", ()=>{
    document.documentElement.scrollTop =0
})
}
scroltop()