const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from all btns
    btns.forEach(function (btn) {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });

    // hdie all articles
    articles.forEach(function (article) {
      article.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
  }
});
