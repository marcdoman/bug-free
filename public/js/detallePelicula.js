// <!-- EL BOTON FUNCIONA SI LO CARGO DIRECTAMENTE EN HTML-->
  // POSIBLE PROBLEMA CON PRIORIDADES DE CARGA DE LOS .JS????

  var url_string = window.location.href; //window.location.href
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  
  fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      var div
      var nombre
      var imagen
      var descripcion
      var estreno
      var generos = ""
      var idGenero
      var lenguajeOriginal
  
      nombre = informacion.title;
      imagen = "https://image.tmdb.org/t/p/w500/" + informacion.poster_path;
      descripcion = informacion.overview;
      estreno = informacion.release_date;
      id = informacion.id;
      lenguajeOriginal = informacion.original_language;
      for (var i = 0; i < informacion.genres.length; i++) {
        if (i == informacion.genres.length - 1) {
          generos += "<a href='/generos/?id=" + informacion.genres[i].id + "'>" + informacion.genres[i].name + "</a>"
        } else {
          generos += "<a href='/generos/?id=" + informacion.genres[i].id + "'>" + informacion.genres[i].name + "</a>" + " / ";
        }
      }
      var contenedor = document.querySelector(".row");
  
      contenedor.innerHTML =  "<div class='col-4  '>"
                              + "<img class='w-100 rounded ' src=" + imagen + ">"
                             + "</div>"
  
      contenedor.innerHTML +=  "<div class='col-8 w-100 columna text-white rounded'>"
                                + "<br>"
                                + "<h1 class='text-white'>" + nombre +  "</h1>"
                                + "<h5 class='text-white'>" + "Lanzamiento: " + estreno + "</h5>"
                                + "<h5 class='text-white'>" + "Lenguaje original : " + lenguajeOriginal + "</h5>"
                                + "<h5 class='text-white'>" + "Géneros: " + generos + "</h5>"
                                + "<h5 class='video text-white'>" + descripcion + "</h5>"
                                + "<br>"
                              + "</div>"
  
        })
  
    .catch(function(error) {
      console.log("Error: " + error);
    })
  
  //////////////////////////// TRAILER /
  
  fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US")
    .then(function(respuesta) {
      return respuesta.json()
      })
  
    .then(function(informacion) {
      var contenedor = document.querySelector(".video");
      var video = "https://www.youtube.com/embed/" + informacion.results[0].key
      contenedor.innerHTML += "<br>"
                            + " <br><div class='col-xs-12 text-center embed-responsive embed-responsive-16by9'><iframe class='rounded' width='960' height='540' src='" + video + " 'frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" + "</div>"
      })
  
    .catch(function(error) {
      console.log("Error: " + error);
      })
  
  //////////////// Carrousel Recomendadas ///////////////
  
  
      fetch("https://api.themoviedb.org/3/movie/" + id + "/similar?api_key=e2d1aa72fbd5bdcc6bf4f5760ec0b244&language=en-US&page=1")
  
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
              li +=    "<a href='/peliculas/detalle/?id=" + id + "'>" + "<img src=" + imagen + " alt=´´>"
              li +=    "<div class=´uk-position-center uk-panel´></div>"
              li +=  "</li>"
  
              document.querySelector("#carousel").innerHTML += li
  
          }
        })
  
        .catch(function(error) {
              console.log("Error: " + error);
        })
  