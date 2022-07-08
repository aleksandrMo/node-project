function getMain(value) {
  switch (value) {
    case 'main':
      return `
        <div class="top">
            <article>
              <section class="best">
                <div class="best-sign like">
                  <div class="crown image"></div>
                  <span>best</span>
                </div>
                <div class="like">
                  <div class="heart image"></div>
                </div>
                <div class="best-container">
                  <div class="best-img image"></div>
                </div>
                <div class="best-name-rate">
                  <div class="best-name">
                    <p class="title">Spaghetti with chicken</p>
                    <p class="title-sub">by <span class="link">Anna Ritz</span></p>
                  </div>
                  <div class="best-rate">
                    <span class="fa fa-star fa-2x checked"></span>
                    <span class="fa fa-star fa-2x checked"></span>
                    <span class="fa fa-star fa-2x checked"></span>
                    <span class="fa fa-star fa-2x checked"></span>
                    <span class="fa fa-star fa-2x"></span>
                    <span class="num">12351</span>
                  </div>
                </div>
              </section>
              <section class="fact">
                <div class="info">
                  <p class="title">
                    Fall In Love With Stanley Tucci And His Favorite 5-Ingredient Summer Pasta Recipe
                  </p>
                  <p class="title-sub">
                    This simple recipe goes back decades for Tucci. "It was the perfect meal."
                  </p>
                  <p class="link">Read more...</p>
                </div>
                <div class="fact-img left image"></div>
                <div class="fact-img right image"></div>
              </section>
              <section class="topics"></section>
            </article>
            <aside>
              <section class="login">
                <div class="login-img">
                  <span>?</span>
                </div>
                <p>Username or email address</p>
                <input />
                <p>Password</p>
                <input type="password" />
                <p class="link" id="forgot">Forgot password?</p>
                <button>Sing in</button>
                <p class="link" id="newUser">Create an account</p>
              </section>
              <section class="stats">
                <div class="king image"></div>
                <div class="stats-part">
                  <div class="stats-img">
                    <div class="stats-user image"></div>
                  </div>
                  <div class="stats-info">
                    <p class="name">Gordon Ramsay</p>
                    <p class="job">Head Chief at Berloga</p>
                    <span class="recipe">Recipes: 25</span>
                    <span class="rate">Rating: 9.6/10</span>
                  </div>
                </div>
                <div class="stats-line"></div>
                <div class="stats-part">
                  <div class="stats-img">
                    <div class="stats-user image"></div>
                  </div>
                  <div class="stats-info">
                    <p class="name">Gordon Ramsay</p>
                    <p class="job">Head Chief at Berloga</p>
                    <span class="recipe">Recipes: 25</span>
                    <span class="rate">Rating: 9.6/10</span>
                  </div>
                </div>
                <div class="stats-line"></div>
                <div class="stats-part">
                  <div class="stats-img">
                    <div class="stats-user image"></div>
                  </div>
                  <div class="stats-info">
                    <p class="name">Gordon Ramsay</p>
                    <p class="job">Head Chief at Berloga</p>
                    <span class="recipe">Recipes: 25</span>
                    <span class="rate">Rating: 9.6/10</span>
                  </div>
                </div>
                <div class="stats-line"></div>
                <div class="stats-part">
                  <div class="stats-img">
                    <div class="stats-user image"></div>
                  </div>
                  <div class="stats-info">
                    <p class="name">Gordon Ramsay</p>
                    <p class="job">Head Chief at Berloga</p>
                    <span class="recipe">Recipes: 25</span>
                    <span class="rate">Rating: 9.6/10</span>
                  </div>
                </div>
                <div class="stats-line"></div>
                <div class="stats-part">
                  <div class="stats-img">
                    <div class="stats-user image"></div>
                  </div>
                  <div class="stats-info">
                    <p class="name">Gordon Ramsay</p>
                    <p class="job">Head Chief at Berloga</p>
                    <span class="recipe">Recipes: 25</span>
                    <span class="rate">Rating: 9.6/10</span>
                  </div>
                </div>
                <div class="stats-line"></div>
                <div class="stats-part">
                  <div class="stats-img">
                    <div class="stats-user image"></div>
                  </div>
                  <div class="stats-info">
                    <p class="name">Gordon Ramsay</p>
                    <p class="job">Head Chief at Berloga</p>
                    <span class="recipe">Recipes: 25</span>
                    <span class="rate">Rating: 9.6/10</span>
                  </div>
                </div>
              </section>
            </aside>
          </div>
          <div class="news">
            <p>News & Trending</p>
            <div class="news-left">
              <div class="news-left-part">
                <div class="news-img image news-img-one"></div>
                <span>
                  Dairy Prices Are Increasing At Staggering Rates — Here's What You Need To Know
                </span>
              </div>
              <div class="news-left-part">
                <div class="news-img image news-img-one"></div>
                <span>
                  Dairy Prices Are Increasing At Staggering Rates — Here's What You Need To Know
                </span>
              </div>
              <div class="news-left-part">
                <div class="news-img image news-img-one"></div>
                <span>
                  Dairy Prices Are Increasing At Staggering Rates — Here's What You Need To Know
                </span>
              </div>
            </div>
            <div class="news-right">
              <div class="news-big-img image"></div>
              <span>Sriracha Shelves Are Emptying</span>
              <span>How Long Will the Shortage Last?</span>
            </div>
          </div>
          <div class="recipes"></div>
        `;

    case 'profile':
      return ``;

    default:
      return `
        <div class="error">
            <p>Error 404</p>
        </div>
        `;
  }
}

export default getMain;
