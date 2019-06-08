// $(document).ready(() => {
//   $('#searchForm').on('submit', (e) => {
//     let searchText = $('#searchText').val();
//     getMovies(searchText);
//     e.preventDefault();
//   });
// });
//
// function getMovies(searchText){
//   axios.get('https://www.omdbapi.com?&apikey=7d1891f3&s='+searchText)
//     .then((response) => {
//       console.log(response);
//       let movies = response.data.Search;
//       let output = '';
//       $.each(movies, (index, movie) => {
//         output += `
//           <div class="col-md-3">
//             <div class="well text-center">
//               <img src="${movie.Poster}">
//               <h5>${movie.Title}</h5>
//               <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
//             </div>
//           </div>
//         `;
//       });
//
//       $('#movies').html(output);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
//
// function movieSelected(id){
//   sessionStorage.setItem('movieId', id);
//   window.location = 'movie.html';
//   return false;
// }
//
// function getMovie(){
//   let movieId = sessionStorage.getItem('movieId');
//
//   axios.get('https://www.omdbapi.com?&apikey=7d1891f3&i='+movieId)
//     .then((response) => {
//       console.log(response);
//       let movie = response.data;
//
//       let output =`
//         <div class="row">
//           <div class="col-md-4">
//             <img src="${movie.Poster}" class="thumbnail">
//           </div>
//           <div class="col-md-8">
//             <h2>${movie.Title}</h2>
//             <ul class="list-group">
//               <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
//               <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
//               <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
//               <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
//               <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
//               <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
//               <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
//             </ul>
//           </div>
//         </div>
//         <div class="row">
//           <div class="well">
//             <h3>Plot</h3>
//             ${movie.Plot}
//             <hr>
//             <a href="https://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
//             <a href="index.html" class="btn btn-default">Go Back To Search</a>
//           </div>
//         </div>
//       `;
//
//       $('#movie').html(output);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }


let result = document.querySelector('#movies');

let request = new XMLHttpRequest();

request.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=4e61d32c7f8095da04f6550d8cc3dd94&language=ru-RU&query=%D0%94%D0%B6%D0%BE%D0%BD&page=1&include_adult=false');

request.addEventListener('readystatechange', function () {

    let output;

    if (request.readyState < 4) {
        result.innerHTML = 'Загрузка';
    } else if (request.readyState === 4) {
        if (request.status === 200 && request.status < 300) {
            output = JSON.parse(this.responseText);
            result.innerHTML = output;
            for (let resultsKey in output.results) {
                console.log(output.results[resultsKey].title)
            }
        }
    } else {
        statusMessage.innerHTML = 'Error';
    }



    // if (this.readyState === 4) {
    //     console.log('Status:', this.status);
    //     console.log('Headers:', this.getAllResponseHeaders());
    //     console.log('Body:', output.results);
    // }
});

request.send();

