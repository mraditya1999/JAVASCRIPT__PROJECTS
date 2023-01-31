const container = document.querySelector('.container');

const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      const { avatar_url: image, login: name, html_url: github_url } = person;

      return `<article class="card">
    <img src="${image}" alt ="${name}">
    <h4>${name}</h4>
    <a href="${github_url}" class ="btn"  target="_blank">view profile</a>
    </article>`;
    })
    .join('');
  container.innerHTML = newFollowers;
};

export default display;
