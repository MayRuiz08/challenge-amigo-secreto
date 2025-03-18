// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${nombre} <button class="eliminar" onclick="eliminarAmigo(${index})">❌</button>`;
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 nombres en la lista para hacer un sorteo.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    document.getElementById("resultado").innerHTML = `<li>🎊 El amigo secreto es: ${amigos[indiceAleatorio]} 🎊</li>`;
}
