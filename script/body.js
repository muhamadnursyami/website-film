const buttonSearch = document.querySelector(".search-button");
filmUnggulan();
cinemaxxi();
console.log(
  "%c WELCOME WELCOME DI TOOLS DEVELOPER",
  "font-size: 50px; color: #eb77ae"
);
console.log(
  "%c Thank you so much visit My Website",
  "font-size: 50px; color: #4dc1bf"
);
console.log(
  "%c Refrensi My Website: https://94.103.82.88/",
  "font-size: 30px; color: #8459e8"
);

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
  updateMarvel(marvel);
  deleteElemet();
}

function getMarvel() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=marvel")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}
function updateMarvel(marvel) {
  let dataMarvel = "";
  marvel.forEach((marvelMovies) => {
    dataMarvel += showMarvel(marvelMovies);
    const filmGenre = document.querySelector(".film-unggulan");
    filmGenre.innerHTML = dataMarvel;
  });
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
  updateHarryPotter(harry);
  deleteElemet();
}
function getHarryPotter() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=harry potter")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.log(error));
}
function updateHarryPotter(harry) {
  let dataHarry = "";
  harry.forEach((harryMovies) => {
    dataHarry += showHarryPotter(harryMovies);
    const film = document.querySelector(".film-unggulan");
    film.innerHTML = dataHarry;
  });
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

  updateGenreAction(action);
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

function updateGenreAction(genreAction) {
  let dataGenreAction = "";
  genreAction.forEach((genre) => {
    dataGenreAction += showAnimation(genre);
    const filmGenre = document.querySelector(".film-unggulan");
    filmGenre.innerHTML = dataGenreAction;
  });
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
  updateGenreAnimation(genreAnimation);
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
function updateGenreAnimation(genreAnimation) {
  let dataGenreAnimation = "";
  genreAnimation.forEach((genre) => {
    dataGenreAnimation += showAnimation(genre);
    const filmGenre = document.querySelector(".film-unggulan");
    filmGenre.innerHTML = dataGenreAnimation;
  });
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
  updateAdventure(adventure);
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
function updateAdventure(adventure) {
  let dataAdventure = "";
  adventure.forEach((adventureMovies) => {
    dataAdventure += showAdventure(adventureMovies);
    const filmGenre = document.querySelector(".film-unggulan");
    filmGenre.innerHTML = dataAdventure;
  });
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
  updateBiography(biography);
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
function updateBiography(bio) {
  let databio = "";
  bio.forEach((bioMovies) => {
    databio += showBiography(bioMovies);
    const filmGenre = document.querySelector(".film-unggulan");
    filmGenre.innerHTML = databio;
  });
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
  updateComedy(comed);
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
function updateComedy(comed) {
  let datacome = "";
  comed.forEach((comedMovies) => {
    datacome += showComedy(comedMovies);
    const filmGenre = document.querySelector(".film-unggulan");
    filmGenre.innerHTML = datacome;
  });
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
  updateCrime(genreCrime);
  deleteElemet();
}
function getCrime() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=The Batman ")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.info(error));
}
function updateCrime(genreCrime) {
  let dataCrime = "";
  genreCrime.forEach((crime) => {
    dataCrime += showCrime(crime);
    const filmGenre = document.querySelector(".film-unggulan");
    filmGenre.innerHTML = dataCrime;
  });
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
  updateDrama(drama);
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
function updateDrama(genreDrama) {
  let dataDrama = "";
  genreDrama.forEach((drama) => {
    dataDrama += showDrama(drama);
    const filmGenre = document.querySelector(".film-unggulan");
    filmGenre.innerHTML = dataDrama;
  });
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
  updateHoror(genreHoror);
  deleteElemet();
}
function getHoror() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=Annabelle")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.info(error));
}
function updateHoror(genreHoror) {
  let dataHoror = "";
  genreHoror.forEach((horor) => {
    dataHoror += showHoror(horor);
    const filmGenre = document.querySelector(".film-unggulan");
    filmGenre.innerHTML = dataHoror;
  });
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
  updateMistery(mistery);
  deleteElemet();
}

function getSearching() {
  return fetch("http://www.omdbapi.com/?apikey=2c90f209&s=SEARCHING")
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => console.info(error));
}

function updateMistery(mistery) {
  let dataMystery = "";
  mistery.forEach((misteryMovie) => {
    dataMystery += showMistery(misteryMovie);
    const filmGenre = document.querySelector(".film-unggulan");
    filmGenre.innerHTML = dataMystery;
  });
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
  updateRomance(romanceFilm);
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
function updateRomance(romance) {
  let dataRomance = "";
  romance.forEach((roman) => {
    dataRomance += showRomance(roman);
    const filmGenre = document.querySelector(".film-unggulan");
    filmGenre.innerHTML = dataRomance;
  });
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
  updateThiller(thiller);
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
function updateThiller(genreThiller) {
  let dataThiller = "";
  genreThiller.forEach((thiller) => {
    dataThiller += showThiller(thiller);
    const filmGenre = document.querySelector(".film-unggulan");
    filmGenre.innerHTML = dataThiller;
  });
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
                  >Show
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

function showAnimation(animation) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${animation.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${animation.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${animation.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${animation.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}
function showMarvel(marvel) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${marvel.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${marvel.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${marvel.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${marvel.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}

function showHarryPotter(harry) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${harry.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${harry.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${harry.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${harry.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}
function showAction(action) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${action.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${action.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${action.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${action.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}

function showAdventure(jura) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${jura.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${jura.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${jura.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${jura.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}
function showBiography(bioMovies) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${bioMovies.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${bioMovies.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${bioMovies.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${bioMovies.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}

function showComedy(comed) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${comed.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${comed.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${comed.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${comed.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}

function showCrime(crime) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${crime.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${crime.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${crime.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${crime.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}
function showDrama(drama) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${drama.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${drama.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${drama.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${drama.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}

function showHoror(horor) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${horor.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${horor.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${horor.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${horor.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}

function showRomance(roman) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${roman.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${roman.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${roman.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${roman.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}
function showThiller(thiller) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${thiller.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${thiller.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${thiller.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${thiller.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}
function showMistery(mistery) {
  return `<div class="col-md-2 my-3 ">
            <div class="card bg-dark text-white">
              <img src="${mistery.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${mistery.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${mistery.Year}</h6>
                <a href="#" class="btn btn-primary modal-details-button"  data-bs-toggle="modal"
                data-bs-target="#movieDetailsModal" data-imdbid ="${mistery.imdbID}"
                  >Show
                  <details></details
                ></a>
              </div>
            </div>
          </div>`;
}
