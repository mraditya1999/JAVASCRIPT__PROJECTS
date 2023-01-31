const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
const url = 'https://icanhazdadjoke.com/';

btn.addEventListener('click', () => {
  fetchDadJokes();
});

const fetchDadJokes = async () => {
  result.textContent = 'Loading...';

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });
    if (!response.ok) {
      throw new Error('there was an error');
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = `Sorry!! there was an error...`;
  }
};

fetchDadJokes();
