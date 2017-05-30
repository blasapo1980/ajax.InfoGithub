var inputName = document.querySelector(".searchName");

var button = document.querySelector(".btn-go");

var userName = document.querySelector("#nom");
var repo = document.querySelector("#repositories");
var photo = document.querySelector("#photo");

function search () {
  var request = new XMLHttpRequest();
  var urlApi = "https://api.github.com/users/"+inputName.value;

  request.open('GET', urlApi, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      userName.innerHTML = data.name;
      repo.innerHTML = data.public_repos;
      photo.innerHTML = '<img src= "'+ data.avatar_url +'">';
    } else {
      console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
    }
  };
  request.onerror = function() {
    console.log('Error al tratar de conectarse con el servidor');
  };
  request.send();
}
button.addEventListener('click', search);
