export function hamburguerMenu() {
    const hamburguer = document.querySelector(".hamburguer");
    const nav = document.getElementById("nav");

    hamburguer.addEventListener('click', () => {
        nav.classList.toggle("show");
        hamburguer.classList.toggle("show");
    });
}