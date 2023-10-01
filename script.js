document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("busqueda");
    const busqueda = document.getElementById("entrada");
    const lista = document.getElementById("listita");
    const URL = "https://picsum.photos/200/300";

    button.addEventListener("click", () => {
        fetch(URL)
            .then(res => res.blob())
            .then(data => {
                const imageUrl = URL;
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <img src="${imageUrl}" alt="Imagen de tarea">
                    <span>${busqueda.value}</span>
                    <button type="button" class="completeBtn">Completar</button>
                    <button type="button" class="deleteBtn">Eliminar</button>
                `;
                lista.appendChild(listItem);

                const completeBtn = listItem.querySelector(".completeBtn");
                const deleteBtn = listItem.querySelector(".deleteBtn");

                completeBtn.addEventListener("click", () => completartemita(listItem));
                deleteBtn.addEventListener("click", () => eliminartemita(listItem));

                busqueda.value = "";
            })
            .catch(error => {
                console.error(error);
                alert("Hubo un error al obtener la imagen");
            });
    });

    function completartemita(listItem) {
        listItem.classList.toggle("completed");
    }

    function eliminartemita(listItem) {
        listItem.remove();
    }
});