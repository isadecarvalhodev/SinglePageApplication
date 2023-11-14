fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => makeCards(data.results))

    function makeCards(characterArray) {
        
        const cardContainer = document.querySelector('#card-container')
        characterArray.forEach(character => {
            cardContainer.innerHTML = cardContainer.innerHTML +
            
            `<div id='character-card-${character.id}' <h2> ${character.name} </h2>
            <img src=${character.image}></img>
            </div>`

        })
    }


