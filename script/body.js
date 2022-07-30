filmUnggulan();
cinemaxxi();
const buttonSearch = document.querySelector(".search-button");
// console.log(
//   "%c WELCOME WELCOME DI TOOLS DEVELOPER",
//   "font-size: 50px; color: #eb77ae"
// );
// console.log(
//   "%c Thank you so much visit My Website",
//   "font-size: 50px; color: #4dc1bf"
// );
// console.log(
//   "%c Refrensi My Website: https://94.103.82.88/",
//   "font-size: 30px; color: #8459e8"
// );

function deleteElemet() {
  const buttonUnggulan = document.querySelector(".button-unggulan");
  buttonUnggulan.parentNode.removeChild(buttonUnggulan);
  const cinema = document.querySelector(".film-cinemaxxi");
  cinema.innerHTML = "";
  const btnCinema = document.querySelector(".button-cinema");
  btnCinema.parentNode.removeChild(btnCinema);
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
}

buttonSearch.addEventListener("click", async function () {
  // try catch ini dilakukan jika film nya nggak atau yang di inputkan itu kosong
  try {
    const undefined = document.querySelector(".undefined");
    undefined.innerHTML = "";
    const buttonUnggulan = document.querySelector(".button-unggulan");
    const unggulan = document.querySelector(".film-unggulan");
    unggulan.innerHTML = "";
    if (document.body.contains(buttonUnggulan) == true) {
      const buttonUnggulan = document.querySelector(".button-unggulan");
      buttonUnggulan.parentNode.removeChild(buttonUnggulan);
      const unggulan = document.querySelector(".film-unggulan");
      unggulan.innerHTML = "";
      const cinema = document.querySelector(".film-cinemaxxi");
      cinema.innerHTML = "";
      const btnCinema = document.querySelector(".button-cinema");
      btnCinema.parentNode.removeChild(btnCinema);
    }
    const inputKeyword = document.querySelector(".input-keyword").value;
    const movies = await getMovies(inputKeyword);
    updateMovies(movies);

    // Jika data bener maka yang Film tidak di temukan tadi di hapus.
  } catch (error) {
    // Jika Input Kosong atau salah
    const undefined = document.querySelector(".undefined");
    let dataKosong = "";
    dataKosong += `<h5 style="height:400px; margin-bottom:-200px;"> Film yang anda cari tidak kami temukan</h5>`;
    undefined.innerHTML = dataKosong;
  }
});
// Pada saat Tombol Show Details di Click
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-details-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetails = await getMoviesDetails(imdbid);
    updateMoviesDetails(movieDetails);
  }
});

function getMovies(inputKeyword) {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=" + inputKeyword)
    .then((response) => response.json())
    .then((response) => response.Search);
}
function getMoviesDetails(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&i=" + imdbid)
    .then((response) => response.json())
    .then((detailsMovie) => detailsMovie);
}
// fungsi ini tidak mengembalikan data karena ini untuk menampilkan datanya
function updateMovies(movies) {
  let gabungData = "";
  movies.forEach((movie) => {
    gabungData += showCards(movie);
    const containerMovie = document.querySelector(".movie-container");
    containerMovie.innerHTML = gabungData;
  });
}

function updateMoviesDetails(movieDetails) {
  const detailsMovie = showDetailsMovie(movieDetails);

  const modal = document.querySelector(".modal-body");
  modal.innerHTML = detailsMovie;
}

// FILM UNGGULAN
async function filmUnggulan() {
  const filmBetterCallSaul = await getBetterCallSaul();
  const filmJurassicWorldDominion = await getJurassicWorldDominion();
  const filmRoundup = await getRoundup();
  const filmGrayMan = await getGrayMan();
  const filmMinion = await getMinion();
  const filmMsMarvel = await getMsMarvel();
  const filmThor = await getThor();
  const filmMoneyHeist = await getMoney();
  const filmManBen = await getManBen();
  const filmUmbrella = await getUmbrella();
  const filmStranger = await getStrangers();
  const filmYummi = await getYumi();
  const film = [
    filmBetterCallSaul,
    filmJurassicWorldDominion,
    filmRoundup,
    filmGrayMan,
    filmMinion,
    filmMsMarvel,
    filmThor,
    filmMoneyHeist,
    filmManBen,
    filmUmbrella,
    filmStranger,
    filmYummi,
  ];

  updateFilmUnggulan(film);
}
function getBetterCallSaul() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Better Call Saul")
    .then((response) => response.json())
    .then((response) => response.Search[0])
    .catch((error) => console.log(error));
}
function getJurassicWorldDominion() {
  return fetch(
    "http://www.omdbapi.com/?apikey=2c90f209&s=Jurassic World Dominion"
  )
    .then((response) => response.json())
    .then((response) => response.Search[0])
    .catch((error) => console.log(error));
}
function getRoundup() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=The Roundup")
    .then((response) => response.json())
    .then((response) => response.Search[1])
    .catch((error) => console.log(error));
}
function getGrayMan() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=The Gray Man")
    .then((response) => response.json())
    .then((response) => response.Search[2])
    .catch((error) => console.log(error));
}
function getMinion() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Minions")
    .then((response) => response.json())
    .then((response) => response.Search[1])
    .catch((error) => console.log(error));
}
function getMsMarvel() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Ms. Marvel")
    .then((response) => response.json())
    .then((response) => response.Search[0])
    .catch((error) => console.log(error));
}
function getThor() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Thor Love")
    .then((response) => response.json())
    .then((response) => response.Search[0])
    .catch((error) => console.log(error));
}
function getMoney() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Money Heist")
    .then((response) => response.json())
    .then((response) => response.Search[1])
    .catch((error) => console.log(error));
}
function getManBen() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Man Vs Bee")
    .then((response) => response.json())
    .then((response) => response.Search[0])
    .catch((error) => console.log(error));
}
function getUmbrella() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=The Umbrella Academy")
    .then((response) => response.json())
    .then((response) => response.Search[0])
    .catch((error) => console.log(error));
}
function getStrangers() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Stranger Things")
    .then((response) => response.json())
    .then((response) => response.Search[0])
    .catch((error) => console.log(error));
}
function getYumi() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Yumi’s Cells")
    .then((response) => response.json())
    .then((response) => response.Search[0])
    .catch((error) => console.log(error));
}

function updateFilmUnggulan(Unggulan) {
  let dataFilmUnggulan = "";
  Unggulan.forEach((moviesUnggulan) => {
    dataFilmUnggulan += showFilmUnggulan(moviesUnggulan);
    const film = document.querySelector(".film-unggulan");
    film.innerHTML = dataFilmUnggulan;
  });
}

// Film Cinema
async function cinemaxxi() {
  const cinemaPaw = await getPawsofFury();
  const cinemaHomefront = await getHomefront();
  const cinemaReef = await getReef();
  const cinemaAmericanoSecario = await getAmericaSicario();
  const cinemaAmanth = await getAmaranth();
  const cinemaAtlas = await getAtlas();
  const cinema = [
    cinemaPaw,
    cinemaHomefront,
    cinemaReef,
    cinemaAmericanoSecario,
    cinemaAmanth,
    cinemaAtlas,
  ];
  updateCinema(cinema);
}
function getPawsofFury() {
  return fetch(
    "http://www.omdbapi.com/?apikey=2c90f209&s=Paws of Fury: The Legend of Hank"
  )
    .then((response) => response.json())
    .then((response) => response.Search[0])
    .catch((error) => console.log(error));
}
function getHomefront() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Homefront")
    .then((response) => response.json())
    .then((response) => response.Search[0])
    .catch((error) => console.log(error));
}
function getReef() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=The Reef: Stalked")
    .then((response) => response.json())
    .then((response) => response.Search[0])
    .catch((error) => console.log(error));
}
function getAmericaSicario() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=American Sicario")
    .then((response) => response.json())
    .then((response) => response.Search[0])
    .catch((error) => console.log(error));
}
function getAmaranth() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=The Amaranth")
    .then((response) => response.json())
    .then((response) => response.Search[0])
    .catch((error) => console.log(error));
}
function getAtlas() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Atlas")
    .then((response) => response.json())
    .then((response) => response.Search[5])
    .catch((error) => console.log(error));
}

function updateCinema(cinema) {
  let dataCinema = "";
  cinema.forEach((moviesCinema) => {
    dataCinema += showCinema(moviesCinema);
    const film = document.querySelector(".film-cinemaxxi");
    film.innerHTML = dataCinema;
  });
}

// Fungsi Marvel

async function marvel() {
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
  const containerMovie = document.querySelector(".movie-container");

  if (document.body.contains(containerMovie)) {
    containerMovie.innerHTML = "";
  }
  const marvel = await getMarvel();
  updateFilmUnggulan(marvel);
  deleteElemet();
}

function getMarvel() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=marvel")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}

// Fungsi Harry Potter

async function harryPotter() {
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
  const containerMovie = document.querySelector(".movie-container");

  if (document.body.contains(containerMovie)) {
    containerMovie.innerHTML = "";
  }
  const harry = await getHarryPotter();
  updateFilmUnggulan(harry);
  deleteElemet();
}
function getHarryPotter() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=harry potter")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}

// Genre Action
async function genreAction() {
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
  const containerMovie = document.querySelector(".movie-container");

  if (document.body.contains(containerMovie)) {
    containerMovie.innerHTML = "";
  }
  const genreExtration = await getAction();
  const resident = await getResident();
  const fastFourius = await getFastForius();
  const action = [...genreExtration, ...resident, ...fastFourius];

  updateFilmUnggulan(action);
  deleteElemet();
}

function getAction() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Extraction")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}
function getResident() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Resident Evil")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}
function getFastForius() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=The fast")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}

// Genre Animation
async function genreAnimation() {
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
  const containerMovie = document.querySelector(".movie-container");

  if (document.body.contains(containerMovie)) {
    containerMovie.innerHTML = "";
  }
  const genreDoraemon = await getFilmAnimation();
  const naruto = await getNaruto();
  const genreAnimation = [...genreDoraemon, ...naruto];
  updateFilmUnggulan(genreAnimation);
  deleteElemet();
}
function getFilmAnimation() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=doraemon")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}
function getNaruto() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Naruto")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}

// Fungsi Adventure

async function adventure() {
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
  const containerMovie = document.querySelector(".movie-container");

  if (document.body.contains(containerMovie)) {
    containerMovie.innerHTML = "";
  }
  const jura = await getJurassic();
  const maze = await getMazeRunner();
  const adventure = [...jura, ...maze];
  updateFilmUnggulan(adventure);
  deleteElemet();
}
function getJurassic() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Jurassic")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}
function getMazeRunner() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=The Maze Runner")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}

// Biography
async function biography() {
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
  const containerMovie = document.querySelector(".movie-container");

  if (document.body.contains(containerMovie)) {
    containerMovie.innerHTML = "";
  }
  const social = await getSocial();
  const lion = await getLion();
  const america = await getAmerica();
  const biography = [...social, ...lion, ...america];
  updateFilmUnggulan(biography);
  deleteElemet();
}
function getSocial() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=The Social Network")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}
function getLion() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Lion")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}
function getAmerica() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=American Sniper")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}

// Comedy
async function comedy() {
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
  const containerMovie = document.querySelector(".movie-container");

  if (document.body.contains(containerMovie)) {
    containerMovie.innerHTML = "";
  }
  const deadpool = await getdeadpool();
  const minions = await getminions();
  const comed = [...deadpool, ...minions];
  updateFilmUnggulan(comed);
  deleteElemet();
}
function getdeadpool() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Deadpool")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}
function getminions() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Minions")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}

// Crime
async function crime() {
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
  const containerMovie = document.querySelector(".movie-container");

  if (document.body.contains(containerMovie)) {
    containerMovie.innerHTML = "";
  }
  const genreCrime = await getCrime();
  updateFilmUnggulan(genreCrime);
  deleteElemet();
}
function getCrime() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=The Batman ")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.info(error));
}

// Drama
async function drama() {
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
  const containerMovie = document.querySelector(".movie-container");

  if (document.body.contains(containerMovie)) {
    containerMovie.innerHTML = "";
  }
  const godfather = await getFather();
  const greyhound = await getgreyHound();
  const drama = [...godfather, ...greyhound];
  updateFilmUnggulan(drama);
  deleteElemet();
}
function getFather() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=The Godfather")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.info(error));
}
function getgreyHound() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Greyhound")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.info(error));
}

// Horor
async function horor() {
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
  const containerMovie = document.querySelector(".movie-container");

  if (document.body.contains(containerMovie)) {
    containerMovie.innerHTML = "";
  }
  const genreHoror = await getHoror();
  updateFilmUnggulan(genreHoror);
  deleteElemet();
}
function getHoror() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Annabelle")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.info(error));
}

// Mystery
async function mistery() {
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
  const containerMovie = document.querySelector(".movie-container");

  if (document.body.contains(containerMovie)) {
    containerMovie.innerHTML = "";
  }
  const harry = await getHarryPotter();
  const searching = await getSearching();
  const mistery = [...harry, ...searching];
  updateFilmUnggulan(mistery);
  deleteElemet();
}

function getSearching() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=SEARCHING")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.info(error));
}

// Romance
async function romance() {
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
  const containerMovie = document.querySelector(".movie-container");

  if (document.body.contains(containerMovie)) {
    containerMovie.innerHTML = "";
  }
  const genreromaceTitanic = await getTitanic();
  const genreromaceDilan = await getDilan();
  // Jika inign mengabungkan kedua data film menjadi 1 antara film dilan dan titanic.
  const romanceFilm = [...genreromaceDilan, ...genreromaceTitanic];
  updateFilmUnggulan(romanceFilm);
  deleteElemet();
}
function getTitanic() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Titanic")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.info(error));
}
function getDilan() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Dilan")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.info(error));
}

// Thiller
async function thiller() {
  const undefined = document.querySelector(".undefined");
  undefined.innerHTML = "";
  const containerMovie = document.querySelector(".movie-container");

  if (document.body.contains(containerMovie)) {
    containerMovie.innerHTML = "";
  }
  const trance = await getTrance();
  const survivor = await getSurvivor();
  const thiller = [...survivor, ...trance];
  updateFilmUnggulan(thiller);
  deleteElemet();
}
function getTrance() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Trance")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.info(error));
}
function getSurvivor() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Survivor")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.info(error));
}

function showCards(movie) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${movie.Poster}" class="card-img-top" />
              <div class="card-body ">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${movie.imdbID}"
                  >
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}

function showDetailsMovie(details) {
  return `<div class="container-fluid  ">
            <div class="row ">
              <div class="col-md-3">
                <img src="${details.Poster}" class="img-fluid" />
              </div>
              <div class="col-md ">
                <ul class="list-group ">
                  <li class="list-group-item bg-dark text-white"><h4>${details.Title} (${details.Year})</h4></li>
                  <li class="list-group-item bg-dark text-white">
                    <strong>Director : </strong>${details.Director}
                  </li>
                  <li class="list-group-item bg-dark text-white">
                    <strong>Actors</strong>: ${details.Actors}
                  </li>
                  <li class="list-group-item bg-dark text-white">
                    <strong>Type : </strong> ${details.Type}
                  </li>
                  <li class="list-group-item bg-dark text-white">
                    <strong> Plot : </strong> <br />
                    ${details.Plot}
                  </li>
                </ul>
              </div>
            </div>
          </div>`;
}

function showFilmUnggulan(film) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${film.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${film.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${film.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${film.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}
function showCinema(cinema) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${cinema.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${cinema.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${cinema.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${cinema.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}
