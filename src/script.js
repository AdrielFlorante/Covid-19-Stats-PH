async function fetchData() {
    const res = await fetch("https://disease.sh/v3/covid-19/countries/philippines");
    const data = await res.json();

    document.getElementById("date").innerHTML = new Date(data.updated).toLocaleDateString();
    document.getElementById("areaName").innerHTML = data.country;
    document.getElementById("confirmedCases").innerHTML = data.cases.toLocaleString();
    document.getElementById("deathNew").innerHTML = data.todayDeaths.toLocaleString();
}

fetchData();
