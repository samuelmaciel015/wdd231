export function getCurrentYear() {
    const year = document.querySelector("#currentYear");
    const today = new Date;
    year.innerHTML = today.getFullYear();
}