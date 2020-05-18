//TENGO QUE LEER LOCAL STORAGE
// TRANSFORMAR JSON A OBJETO
// RECORRER E IMPRIMIR

console.log(localStorage.getItem("peliculasFavoritas"));

arrayFavoritas = JSON.parse(localStorage.getItem("peliculasFavoritas")).caracteristica;
console.log(arrayFavoritas);

for (var i = 0; i < arrayFavoritas.length; i++) {

  fetch("https://api.themoviedb.org/3/movie/" + arrayFavoritas[i]+ "?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US")

    .then(function(respuesta) {
      return respuesta.json()
    })

    .then(function(informacion) {
      console.log(informacion);
      var div
      var nombre
      var imagen
      //CARGO LA PELICULA OKEY // DATO: SOLO TENGO ID
        imagen =  "https://image.tmdb.org/t/p/w500/" + informacion.poster_path;
        nombre = informacion.title;
        id = informacion.id;
        div = "<div class='col-md-2 '>"
        div +=    "<a href='../pagina5/detallePelicula.html?id=" + id + "'>" +  "<img class='w-100 card-img ' src=" + imagen + ">" + "</a>"
        div +=    "<h5 class='card-title text-white'>" + nombre + "</h5>";
        div += "</div>"
        console.log(div);
        document.querySelector(".listaFavoritas").innerHTML += div

      })
    .catch(function(error) {
          console.log("Error: " + error);
    })

  }
