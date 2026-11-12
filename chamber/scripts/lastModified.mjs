export function lastModified() {
    const modified = document.getElementById("lastModified");
    modified.innerHTML = `Last Modified: ${document.lastModified}`;
}