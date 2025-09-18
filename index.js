const dataPermissiva = new Date().toISOString().split("T")[0]
document.getElementById("data").setAttribute("min", dataPermissiva);

const boxes = document.querySelectorAll(".servicos-single")

boxes.forEach(box => {
    box.addEventListener("click", () => {
        box.classList.toggle("ativo");
    })
})