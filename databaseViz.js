window.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    let url = 'https://brooksniu.com/api/static/';
    let username = 'grader';
    let password = 'grader';
    let credentials = btoa(`${username}:${password}`);
    let auth = { "Authorization" : `Basic ${credentials}` };
    let data = fetch(url, { headers : auth })
    .then(response => response.json())
    .then(json => console.log(json));
    console.log(data);
    grid.setAttribute("data", data);
})