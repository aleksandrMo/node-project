import '../css/style.scss';
import '../css/profile.scss';
import getMain from './main.js';

console.log('Hello world');
let data = [];

const main = document.querySelector('main');
let state = window.location.search.slice(1);

if (!state) {
  const start = `?main`;
  window.history.pushState(null, null, start);
  state = 'main';
}

function loadMain() {
  main.innerHTML = getMain(state);
  if (data.length !== 0) loadRes(data);
}
//loadMain();

function updateURL(value) {
  if (window.history.pushState) {
    const newUrl = `?${value}`;
    window.history.pushState(null, null, newUrl);
    state = window.location.search.slice(1);
    loadMain();
  } else {
    console.log('History API не поддерживается');
  }
}

const recipes = document.querySelector('#recipes');
recipes.onclick = () => updateURL('recipes');

const search = document.querySelector('#search');
search.onclick = () => updateURL('search');

const news = document.querySelector('#news');
news.onclick = () => updateURL('news');

const about = document.querySelector('#about');
about.onclick = () => updateURL('about');

const profile = document.querySelector('#profile');
profile.onclick = () => updateURL('profile');

const goMains = document.querySelectorAll('.goMain');
for (const item of goMains) {
  item.onclick = () => updateURL('main');
}

function getTopicCard(topic) {
  const card = document.createElement('div');
  card.classList.add('article-part');

  card.innerHTML = `
    <div class="article-part-img image" style='background: url("${topic.imgUrl}'></div>
    <p class="article-part-title">${topic.title}</p>
    <p class="article-part-sub">by <span class="link">${topic.author}</span></p>
    `;

  return card;
}

function getRecipeCart(rec) {
  const card = document.createElement('div');
  card.classList.add('recipe');

  card.innerHTML = `
    <div class="like">
      <div class="heart image"></div>
    </div>
    <div class="recipe-img">
      <div class="img image" style="background: url('${rec.imgUrl}');"></div>
    </div>
    <p class="recipe-title">${rec.title}</p>
    <p class="recipe-sub-title">by <span class="link">${rec.author}</span></p>
    <div class="recipe-rate-time">
      <div class="rate">
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="num">${rec.rateNum}</span>
      </div>
      <div class="time">
        <span>${rec.time}</span>
        <div class="timer image"></div>
      </div>
    </div>
  `;

  const stars = card.querySelectorAll('.fa');
  for (let i = 0; i < rec.rating; i++) {
    stars[i].classList.add('checked');
  }
  return card;
}

// для сервера на модеме npm run server
fetch('http://192.168.0.101:3000/posts')
  //fetch('http://localhost:3000/posts')
  .then((res) => res.json())
  .then((res) => {
    data = res;
    //loadRes(res);
  });

function loadRes(res) {
  if (state == 'main') {
    const topicContainer = document.querySelector('.topics');
    for (let i = 0; i < 3; i++) {
      topicContainer.appendChild(getTopicCard(res[0].topics[i]));
    }

    const recContainer = document.querySelector('.recipes');
    for (let i = 0; i < 8; i++) {
      recContainer.appendChild(getRecipeCart(res[0].recipes[i]));
    }

    checkSize();
  }
}

function borderRad(target, a, b, pos) {
  target.style.position = pos;
  target.style.borderTopLeftRadius = a;
  target.style.borderTopRightRadius = a;
  target.style.borderBottomLeftRadius = b;
  target.style.borderBottomRightRadius = b;
  return target;
}

function checkNav() {
  if (parseInt(window.innerWidth, 10) > 1010) {
    let nav = document.querySelector('nav');
    const extend = document.querySelectorAll('.nav-extend');

    if (scrollY > 390) {
      nav = borderRad(nav, '0px', '50px', 'fixed');
      for (const item of extend) {
        item.style.display = 'flex';
      }
    } else {
      nav = borderRad(nav, '50px', '0px', 'static');
      for (const item of extend) {
        item.style.display = 'none';
      }
    }

    const burger = document.querySelector('.burger-menu');
    if (!burger.classList.contains('close')) {
      changeBurgerIcon('1', '20%', '40%', '80%', '60%', '0', '0');
      burger.classList.toggle('close');
    }
  }

  if (scrollY > 390) {
    const navParts = document.querySelectorAll('.nav-part');
    for (const item of navParts) {
      item.style.width = '150px';
    }
  } else {
    const navParts = document.querySelectorAll('.nav-part');
    for (const item of navParts) {
      item.style.width = '230px';
    }
  }
}

window.addEventListener('scroll', () => {
  checkNav();
  const burger = document.querySelector('.burger-menu');
  if (!burger.classList.contains('close')) {
    changeBurgerIcon('1', '20%', '40%', '80%', '60%', '0', '0');
    burger.classList.toggle('close');
  }
});

window.addEventListener('resize', () => {
  checkNav();
  checkSize();
});

function changeBurgerIcon(op, marOne, marTwo, wOne, wTwo, rot, top) {
  const list = document.querySelector('.burger-list');
  const lines = document.querySelectorAll('.line');
  const shadow = document.querySelector('.shadow');

  lines[1].style.opacity = op;
  lines[0].style.marginLeft = marOne;
  lines[2].style.marginLeft = marTwo;
  lines[0].style.width = wOne;
  lines[2].style.width = wTwo;
  lines[0].style.transform = `rotate(${rot})`;
  lines[2].style.transform = `rotate(-${rot})`;
  lines[0].style.top = `${top}`;
  lines[2].style.top = `-${top}`;
  list.classList.toggle('show');
  shadow.classList.toggle('show');
}

const burger = document.querySelector('.burger-menu');
burger.onclick = () => {
  if (burger.classList.contains('close')) {
    changeBurgerIcon('0', '0', '0', '100%', '100%', '45deg', '14px');
    burger.classList.toggle('close');
  } else {
    changeBurgerIcon('1', '20%', '40%', '80%', '60%', '0', '0');
    burger.classList.toggle('close');
  }
};

function checkSize() {
  if (state === 'main') {
    const best = document.querySelector('.top');
    const stars = best.querySelectorAll('.fa');
    const recContainer = document.querySelector('.recipes');
    const recipes = recContainer.querySelectorAll('.recipe');
    if (window.innerWidth <= 1010) {
      for (const star of stars) {
        if (star.classList.contains('fa-2x')) star.classList.remove('fa-2x');
      }
      for (let i = 6; i < 8; i++) {
        recipes[i].style.display = 'none';
      }
    } else {
      for (const star of stars) {
        if (!star.classList.contains('fa-2x')) star.classList.add('fa-2x');
      }
      for (let i = 6; i < 8; i++) {
        recipes[i].style.display = 'block';
      }
    }

    const topics = document.querySelectorAll('.article-part');

    if (window.innerWidth <= 680) {
      topics[2].style.display = 'none';
    } else {
      topics[2].style.display = 'block';
    }
  }
}
