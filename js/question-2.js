const key = "0f487994191e47eebcae4c82ccc05280";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;
const resultContainer = document.querySelector(".results");



async function getData() {
    const response = await fetch(url);
    const results = await response.json();
    const games = results.results;

    resultContainer.innerHTML = ""

     for (let i = 0; i < games.length; i++) {
        console.log(games[i].name);
        console.log(games[i].rating);
        console.log(games[i].tags);
        
        if (i === 8) {
            break;
        }

        resultContainer.innerHTML += `<div class="game">Name:${games[i].name}
                                                        Rating:${games[i].rating}
                                                        Number of tags:${games[i].tags.length}
                                      </div>`;
        
     }
   }

getData();