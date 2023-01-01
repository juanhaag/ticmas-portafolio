const user = {
  nombre: "",
  email: "",
  telefono: 0,
};

const url = "https://randomuser.me/api/";
const nombre = document.getElementById("set-name");
const buttonsArea = document.getElementById("contact");
//Se utiliza async await para incoporar metodos de ES6
//Al momento de hacer un llamado a la API
async function getRandomUser(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results[0]);
  user.nombre = data.results[0].name.first;
  user.email = data.results[0].email;
  user.telefono = data.results[0].cell;
}

async function modificarDom() {
  await getRandomUser(url);
  nombre.textContent = user.nombre;
}

modificarDom();

//Evento encargada de hacer aparecer el email y numero de telefono
//Cuando el usuario haga over en los iconos de telefono y email.
//Se utiliza classlist para poder identificar cada icono y aplicarle dicha informacion
buttonsArea.addEventListener("mouseover", (e) => {
  const eventTarget = e.target;
  const detailContact = document.getElementById("detail-contact");
  if (eventTarget.classList.contains("fa-square-envelope")) {
    detailContact.textContent = user.email;
  } else if (eventTarget.classList.contains("fa-square-phone")) {
    detailContact.textContent = user.telefono;
  }
});
