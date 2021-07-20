const getData = async () => {
    let res;
    let star;
    try {
        res = await axios.get("https://swapi.dev/api/people/3/");
        const homeworld = await axios.get(res.data.homeworld);
        const film =  await axios.get(homeworld.data.films[0]);
        const planet = await axios.get(film.data.planets[0]);
        starWarApiData(res, homeworld, film, planet);

        star = await axios.get("https://swapi.dev/api/people/5/");
        const homeWorld = await axios.get(star.data.homeworld);

        starWarApiData1(star,homeWorld);
    }
    catch(err) {
        console.log(err);
    }
}
getData();

function starWarApiData(res, homeworld, film, planet) {
    const h1 = document.createElement("h1");
    h1.textContent = "Character's name: " + res.data.name;
    document.body.appendChild(h1);

    const h2 = document.createElement("h2");
    h2.textContent = "Origin: " + homeworld.data.name;
    document.body.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent = "Film: " + film.data.title;
    document.body.appendChild(h3);

    const h4 = document.createElement("h4");
    h4.textContent = "Planet: " + planet.data.name;
    document.body.appendChild(h4);
}
function starWarApiData1(star, homeWorld) {
    const h1 = document.createElement("h1");
    h1.textContent = "Character's name: " + star.data.name;
    document.body.appendChild(h1);

    const h2 = document.createElement("h2");
    h2.textContent = "Origin: " + homeWorld.data.name;
    document.body.appendChild(h2);
}
