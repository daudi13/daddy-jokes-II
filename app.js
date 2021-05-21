const jokeElement = document.querySelector('.jokes');
const buttonJokes = document.getElementById('btn');

buttonJokes.addEventListener('click', displayJokes)

async function displayJokes() {
    const config = {
        headers: {
            "Accept":"application/json"
        }
    }

    const response = await fetch('https://icanhazdadjoke.com/', config);
    const data = await response.json();
    jokeElement.innerHTML = data.joke
}