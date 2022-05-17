window.addEventListener("DOMContentLoaded", () => {
    const staticGrid = document.getElementById("static");
    const performanceGrid = document.getElementById("performance");
    const activGrid = document.getElementById("activity");
    let staticUrl = 'https://brooksniu.com/api/static/';
    let performanceUrl = 'https://brooksniu.com/api/performance/';
    let activUrl = 'https://brooksniu.com/api/activity/';
    let username = 'grader';
    let password = 'grader';
    let credentials = btoa(`${username}:${password}`);
    let auth = { "Authorization" : `Basic ${credentials}` };
    fetch(staticUrl, { headers : auth })
    .then(response => response.json())
    .then(json => {
        staticGrid.setAttribute("data", JSON.stringify(json));
    });
    fetch(performanceUrl, { headers : auth })
    .then(response => response.json())
    .then(json => {
        performanceGrid.setAttribute("data", JSON.stringify(json));
    });
    fetch(activUrl, { headers : auth })
    .then(response => response.json())
    .then(json => {
        activGrid.setAttribute("data", JSON.stringify(json));
    });
})