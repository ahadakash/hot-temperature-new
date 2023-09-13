const API_KEY = `2ed0fa03637ded6345de76e987d2fe7a`;
const searchButton = () => {
    const city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
}

const displayTemp = (data) => {
    const degree = data.main.temp;
    document.getElementById("degree").innerText = degree;
    const name = data.name;
    document.getElementById("name").innerText = name;
    const lead = data.weather[0].main;
    document.getElementById("cloud").innerText = lead;
    console.log(data);
}