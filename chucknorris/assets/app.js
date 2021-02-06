const URL_FETCH_CARTEGORIES = 'https://api.chucknorris.io/jokes/categories';
const BASE_URL = 'https://api.chucknorris.io/jokes/';
const METHOD = 'GET';
const CONTENT_TYPE = 'application/json';
const MODE = 'cors';

async function getJoke(category) {
    createLoader();

    const JOKE = await getRandomJokeFromCategory(category);
    let imgNode = document.getElementById('avatar');
    let jokeParagraph = document.getElementById('joke');

    imgNode.src = JOKE.icon_url;
    jokeParagraph.innerHTML = JOKE.value;

    destroyLoader();
}

async function getRandomJoke() {
    try {
        const response = await fetch(`${BASE_URL}random`, {
            method: METHOD,
            mode: MODE,
            headers: {
                'Content-Type': CONTENT_TYPE
            }
        })

        return await response.json()
    } catch (error) {
        console.log(error);
    }
}

async function getRandomJokeFromCategory(category) {
    try {
        const response = await fetch(`${BASE_URL}random?category=${category}`, {
            method: METHOD,
            mode: MODE,
            headers: {
                'Content-Type': CONTENT_TYPE
            }
        })

        return await response.json()
    } catch (error) {
        console.log(error);
    }
}

function createLoader() {
    let divRoot = document.getElementById("card");
    let divLoader = document.createElement('div');
    divLoader.setAttribute('id', 'divLoader');
    divLoader.setAttribute('class', 'loader');
    divRoot.appendChild(divLoader);
}

function destroyLoader() {
    let divLoader = document.getElementById('divLoader');
    if (divLoader.parentNode) {
        divLoader.parentNode.removeChild(divLoader);
    }
}