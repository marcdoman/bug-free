window.onload = function () {

    // como capturo el id?
    
      var url_string = window.location.href; //window.location.href
      var url = new URL(url_string);
      var id = url.searchParams.get("id");
      // console.log(id);
      // document.querySelector("h1.idGenero").innerHTML = id
    
    
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + id )
      .then(function(respuesta) {
        return respuesta.json()
      })
    
      .then(function(informacion) {
        var div
        var imagen
        var nombre
        var genero
        for (var i = 0; i < informacion.results.length; i++) {
            imagen =  "https://image.tmdb.org/t/p/w500/" + informacion.results[i].poster_path;
            nombre = informacion.results[i].title;
            id = informacion.results[i].id;
            div = "<div class='col-md-2 '>"
            div +=    "<a href='../../views/detallePelicula.ejs?id=" + id + "'>" +  "<img class='w-100 card-img ' src=" + imagen + ">" + "</a>"
            div +=    "<h5 class='card-title text-white'>" + nombre + "</h5>";
            div += "</div>"
            document.querySelector(".genero").innerHTML += div
    
        }
      })
    
      .catch(function(error) {
            console.log("Error: " + error);
      })
    
    }
    