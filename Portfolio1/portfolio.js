// Smooth Scroll

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        document.querySelector(
            link.getAttribute('href')
        ).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mouse 3D Effect

document.querySelectorAll('.project-card,.skill-card').forEach(card => {

    card.addEventListener('mousemove', (e) => {

        let x = e.offsetX;
        let y = e.offsetY;

        let rotateY = (-20 + x / 10);
        let rotateX = (20 - y / 10);

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0)';
    });

});
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e){
    e.preventDefault();

    successMsg.innerHTML =
    "✅ Thank you! Your details have been submitted.";

    form.reset();
});