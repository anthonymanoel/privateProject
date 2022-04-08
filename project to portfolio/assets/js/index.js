const navSlide = () => {
    const burguer = document.querySelector('.burguer');
        const nav = document.querySelector('.nav-navbar');
            const navbar = document.querySelectorAll('.nav-navbar li')
    burguer.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    navbar.forEach((link, index) =>{
        console.log(index)
        link.style.animation = `navlinkFade 0.5s ease forwards ${index / 5 + 0.2}s`;
    })
}

navSlide();