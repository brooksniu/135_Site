window.addEventListener("DOMContentLoaded", init);

async function init() {
    // navbar elements
    let projects = document.getElementById("projects");
    let work = document.getElementById("work");
    let contact = document.getElementById("contact");
    // add eventlistener to react
    projects.addEventListener("mouseover", async function() {
        projects.textContent = "Site in progress";
    });
    projects.addEventListener("mouseout", async function() {
        projects.textContent = "Projects";
    });

    work.addEventListener("mouseover", async function() {
        work.textContent = "Site in progress";
    });
    work.addEventListener("mouseout", async function() {
        work.textContent = "work";
    });

    contact.addEventListener("mouseover", async function() {
        contact.textContent = "Site in progress";
    });
    contact.addEventListener("mouseout", async function() {
        contact.textContent = "contact";
    });
}


