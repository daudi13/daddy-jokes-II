const jokeEl = document.querySelector('.jokes');
const buttonJokes = document.getElementById('btn');

buttonJokes.addEventListener('click', displayJoke);

async function displayJoke() {
    const config = {
        headers: {
            "Accept": "application/json"
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config);
    const meta = await res.json();
    jokeEl.innerHTML = meta.joke
}