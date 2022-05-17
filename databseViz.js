window.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    let data = fetch("https://brooksniu.com/api/static/");
    console.log(data);
    grid.setAttribute("data", data);
})