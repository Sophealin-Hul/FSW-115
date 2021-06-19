fetch("https://swapi.dev/api/people/")
    .then( resopnse => resopnse.json())
    .then(characters => showCharacters(characters.results));
showCharacters = characters => {
    const charactersDiv = document.querySelector("#people");
    characters.forEach(character => {
      const characterElement = document.createElement("p");
      characterElement.innerText = `Character Name: ${character.name}`;
      charactersDiv.append(characterElement);
    });
  }

