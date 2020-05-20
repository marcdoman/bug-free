window.addEventListener("load", function () {
  var element = document.querySelector("button.favorita") //Funciona con img //NO SE PUEDE CAPTURAR EL BOTON
                                                          // EL BOTON FUE AGREGADO DIRECTAMENTE AL HTML

  element.addEventListener('click', function () {
          // alert('click');
    });
  })


  //
  idPelicula = new URLSearchParams(location.search).get("id")
  console.log(idPelicula);
  //
  // // INICIO BLOQUE 1 - Leer el array de storage
  //
  //   // Paso 1 - Leo de localStorage
    var jsonFavoritas = localStorage.getItem("peliculasFavoritas")
    console.log(jsonFavoritas);

  // si el elemento esta vacio o no existe
    if (jsonFavoritas == null) {
      var favoritas = []
      console.log(favoritas); //FUNCIONA, EL BOTON AGREGA Y QUITA LA PELICULA DEL ARRAY!!

    } else {
      // Paso 2 - Desempaqueto el json
      var objLit = JSON.parse(jsonFavoritas)

      // Paso 3 - Leo del obj lit, la caracteristica importante
      var favoritas = objLit.caracteristica;
    }
  // // CIERRA BLOQUE 1
  //
  fetch("https://api.themoviedb.org/3/movie/" + idPelicula + "?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US")
    .then(function(data) {
      return data.json()
    })
    .then(function(dataPeli) {
      // HACEN COSAS PARA MOSTRAR EL DETALLE

      // Inicio bloque 2 - Si la peli ya era favorita que aparezca ya pintada la estrella
      if (favoritas.indexOf(idPelicula) >= 0) {
          "<button class='btn  btn-danger favorita' onclick='peliFavorita("+id+")'>&#10084;</button>"      }
      // Fin bloque 2

    })

    // Bloque 3 - Que pasa al clickear el corazon
    var favorita = document.querySelector("button.favorita").onclick = function() { // CAPTURA OK EL BOTON
        alert('ok')
      // Bloque 3 a - Modifico el array
      if (favoritas.indexOf(idPelicula) >= 0) {
        // La quito
        var pos = favoritas.indexOf(idPelicula)
        favoritas.splice(pos,1)
        // DESPINTAR el corazon
          "<button class='btn favorita'>&#10084;</button>"
      } else {
        // La agrego
        favoritas.push(idPelicula)
        // Pintar el corazon
        "<button class='btn btn-danger favorita'>&#10084;</button>"
      }
      // Fin bloque 3 a

      // Bloque 3 b
        var objLit = {
          caracteristica: favoritas
        }

        var json = JSON.stringify(objLit)

        localStorage.setItem("peliculasFavoritas", json) //guardo en localStorage
      // Fin bloque 3 b
    }
    // Fin bloque 3




//   console.log();
//   if ( (window.localStorage.getItem('user')) != null) {
//        var div = "<li class='nav-item active'>"
//           div += "<button class='btn btn-danger log' > Log out </button>"
//           div += "</li>"
//           document.querySelector("div.log").innerHTML = div
//           div = document.querySelector("div.log")
//
//           div.addEventListener("click", function() {
//             localStorage.clear();
//             var url = window.location.href
//             location.href = url;
//             var div = "<li class='nav-item active'>"
//                 div += "<button type='button' class='btn btn-primary log' data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>Log in </button>"
//                 div += "</li>"
//                 document.querySelector("div.log").innerHTML = div
//           })
//         }
// })
//
//

// var fav
// fav = document.querySelector("botondemierda").innerHTML
// // fav = document.querySelector('#botondemierda').innerHTML
// console.log(fav);
// fav.addEventListener("click", function () {
//   fav +=  "<button class='padrefav.fav'>&#10084;</button>"
// })
// onclick='peliFavorita("+id+")'


// var fav = document.querySelectorAll("favorita")
//   console.log(fav);
//   alert("funciona")
//   var newFav =  "<button class='btn btn-warning fav'>&#10084;</button>"
//   fav.forEach().innerHTML = newFav;



//
// var fav = document.querySelectorAll("favorita").addEventListener("click", function () {
//   console.log(fav);
//   alert("funciona")
//   var newFav =  "<button class='btn btn-warning fav'>&#10084;</button>"
//   fav.innerHTML = newFav;
// })
