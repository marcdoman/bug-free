window.addEventListener("load", function () {
    // BUSCADOR
    document.querySelector("form").addEventListener("click", function(event){
    
    });
    
    ////////////////////////// CARGA Populares //////////////////////////////////////////////////
    
      fetch("https://api.themoviedb.org/3/trending/all/day?api_key=0bcd16440b25702a4e2645e9b22f2a2d")
    
        .then(function(respuesta) {
          return respuesta.json()
        })
    
        .then(function(informacion) {
    
          var div
          var imagen
          var nombre
          var id
          for (var i = 0; i < informacion.results.length; i++) {
              imagen =  "https://image.tmdb.org/t/p/w500/" + informacion.results[i].poster_path;
              nombre = informacion.results[i].title;
              id = informacion.results[i].id;
              div = "<div class='col-md-6 '>"
              div +=  "<a href='../../views/detallePelicula.ejs?id=" + id + "'>" + "<img class='w-100 card-img rounded-0 'src=" + imagen +">" + "</a>"
              div +=  "<div class='contenedorBoton'> <h5 class='card-title text-white'>" + nombre + "<button class='btn peliFavorita '>&#10084;</button></h5> </div>  "; //onclick='peliFavorita("+id+")'
                      //intente dentro de un div, con clases de bootstrap, sin clases de bootstrap, con id, con clases siendo todo lo especifico,
                      //Nada funciona para capturar ese elemento y que active el evento.
              div += "</div>"
    
              document.querySelector("div.populares").innerHTML += div
    
          }
        })
        .catch(function(error) {
              console.log("Error: " + error);
        })
    
    
    ////////////////////////// CARGA mejorPuntajes //////////////////////////////////////////////////
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US&page=1")
    
          .then(function(respuesta) {
            return respuesta.json()
          })
    
          .then(function(informacion) {
    
            var div
            var imagen
            var nombre
            var id
            for (var i = 0; i < informacion.results.length; i++) {
    
                imagen =  "https://image.tmdb.org/t/p/w500/" + informacion.results[i].poster_path;
                nombre = informacion.results[i].title;
                id = informacion.results[i].id;
                div = "<div class='col-md-6'>"
                div +=  "<a href='../../views/detallePelicula.ejs?id=" + id + "'>" + "<img class='w-100 card-img'src=" + imagen +">" + "</a>"
                div +=  "<div class='contenedorBoton'> <h5 class='card-title text-white'>" + nombre + "<button class=' btn peliFavorita '>&#10084;</button></h5> </div>  "; //onclick='peliFavorita("+id+")'
                div += "</div>"
                document.querySelector("div.mejorPuntajes").innerHTML += div
            }
          })
    
          .catch(function(error) {
                console.log("Error: " + error);
          })
    
    //////////////////////// CARGA nuevosLanzamientos //////////////////////////////////////////////////
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US&page=1")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        var div
        var imagen
        var nombre
        var id
        for (var i = 0; i < informacion.results.length; i++) {
            imagen =  "https://image.tmdb.org/t/p/w500/" + informacion.results[i].poster_path;
            nombre = informacion.results[i].title;
            id = informacion.results[i].id;
            div = "<div class='col-md-6 '>"
            div +=    "<a href='../../views/detallePelicula.ejs?id=" + id + "'>" + "<img class='w-100 card-img'src=" + imagen +">" + "</a>"
            div +=  "<div class='contenedorBoton'> <h5 class='card-title text-white'>" + nombre + "<button class='btn peliFavorita '>&#10084;</button></h5> </div>  "; //onclick='peliFavorita("+id+")'
            div += "</div>"
            document.querySelector("div.nuevosLanzamientos").innerHTML += div
        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
    
    
    //////////////////////// CARGA CARROUSEL //////////////////////////////////////////////////
    
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=e2d1aa72fbd5bdcc6bf4f5760ec0b244&language=en-US&page=1")
    
          .then(function(respuesta) {
            return respuesta.json()
          })
          .then(function(informacion) {
            var div
            var imagen
            for (var i = 0; i < informacion.results.length; i++) {
                imagen =  "https://image.tmdb.org/t/p/w500/" + informacion.results[i].poster_path;
                nombre = informacion.results[i].title;
                id = informacion.results[i].id;
                li  = "<li>"
                li +=    "<a href='../../views/detallePelicula.ejs?id=" + id + "'>" + "<img src=" + imagen + " alt=´´>"
                li +=    "<div class=´uk-position-center uk-panel´></div>"
                li +=  "</li>"
    
                document.querySelector("#carousel").innerHTML += li
    
            }
          })
    
          .catch(function(error) {
                console.log("Error: " + error);
          })
    
    
    
    
    })
    