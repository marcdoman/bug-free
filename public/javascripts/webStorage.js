window.addEventListener("load", function () {


    var form = document.querySelector("#form")
    
    
    
    form.onsubmit= function (event) {
          event.preventDefault()
          var inputNombre = document.querySelector("#name")
          var inputEmail = document.querySelector("#email")
          var inputGenre = document.querySelector("#genre")
          var select = inputGenre.options[ inputGenre.selectedIndex].text
          var emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
    
    
                if (inputNombre.value.length < 3) {
                  event.preventDefault();
                  UIkit.notification({
                      message: 'Ingresá un nombre de 3 caracteres o más!',
                      status: 'warning',
                      pos: 'top-center',
                      timeout: 3000
                  });
                }else if (inputEmail.value == "" ) {
                  event.preventDefault();
                  UIkit.notification({
                      message: 'Ingresa un email válido',
                      status: 'primary',
                      pos: 'top-center',
                      timeout: 3000
                  });
    
                }else if (select == "Elegir...") {
                  event.preventDefault()
                  UIkit.notification({
                      message: 'Elegi un genero',
                      status: 'primary',
                      pos: 'top-center',
                      timeout: 3000
                  });
    
                }else {
    
          var name = inputNombre.value
          var email = inputEmail.value
          var genre = select
    
          var Usuario = {
            nombre: name,
            correo: email,
            genero: genre
          }
    
    
          window.sessionStorage.setItem('user', JSON.stringify(Usuario))
          console.log(window.sessionStorage.getItem('user'))
    
          console.log(JSON.parse(window.sessionStorage.getItem('user')))
    
          var url = location.href
          location.href = url;
     }
    }
    
      if ( (window.sessionStorage.getItem('user')) === null) {
      event.preventDefault()
      console.log("No hay entradas en el session storage");
    }
    else {
      document.querySelector("a.bienvenido").innerHTML = "Bienvenido " + JSON.parse(window.sessionStorage.getItem('user')).nombre
      document.querySelector("a.favoritas").innerHTML = "Tus peliculas favoritas"
    }
    
    })
    
    
    
    
    //////////////////////////VIEJOOOOOO///////////////////////////////////////////////////////
    
    
    
    //   var baseDatos = JSON.parse(window.sessionStorage.getItem('user'))
    //   if (baseDatos.nombre != "") {
    //     UIkit.notification({
    //         message: 'Bienvenido '+ baseDatos.nombre,
    //         status: 'primary',
    //         pos: 'top-center',
    //         timeout: 3000
    //     });  }
    //
    //
    // var form = document.querySelector("#form")
    //
    //
    //
    // form.onsubmit= function (event) {
    //       var inputNombre = document.querySelector("#name")
    //       var inputEmail = document.querySelector("#email")
    //       var inputGenre = document.querySelector("#genre")
    //       var select = inputGenre.options[ inputGenre.selectedIndex].text
    //       var emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
    //
    //
    //       if (inputNombre.value.length < 3) {
    //         event.preventDefault();
    //         UIkit.notification({
    //             message: 'Ingresa un nombre de 3 caracteres o mas!',
    //             status: 'warning',
    //             pos: 'top-center',
    //             timeout: 3000
    //         });
    //       }else if (inputEmail.value == "" ) {
    //         event.preventDefault();
    //         UIkit.notification({
    //             message: 'Ingresa un email valido',
    //             status: 'primary',
    //             pos: 'top-center',
    //             timeout: 3000
    //         });
    //
    //       }else if (select == "Elegir...") {
    //         event.preventDefault()
    //         UIkit.notification({
    //             message: 'Elegi un genero',
    //             status: 'primary',
    //             pos: 'top-center',
    //             timeout: 3000
    //         });
    //
    //       }else {
    //         var name = inputNombre.value
    //         var email = inputEmail.value
    //         var genre = select
    //
    //         var Usuario = {
    //           nombre: name,
    //           correo: email,
    //           genero: genre
    //         }
    //
    //         window.sessionStorage.setItem('user', JSON.stringify(Usuario))
    //         console.log(window.sessionStorage.getItem('user'))
    //         console.log(JSON.parse(window.sessionStorage.getItem('user')))
    //       }
    //
    //
    //   }
    