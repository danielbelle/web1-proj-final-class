// Validação do formulário
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Filtro de produtos por categoria e nome/letra
document.addEventListener("DOMContentLoaded", function () {
  const filtroCategoria = document.getElementById("filtro-categoria");
  const filtroNome = document.getElementById("filtro-nome");

  if (filtroCategoria && filtroNome) {
    filtroCategoria.addEventListener("change", filtrarProdutos);
    filtroNome.addEventListener("input", filtrarProdutos);
  }

  function filtrarProdutos() {
    const categoria = filtroCategoria.value;
    const texto = filtroNome.value.trim().toLowerCase();
    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(function (produto) {
      const prodCat = produto.getAttribute("data-categoria");
      const prodNome = produto.getAttribute("data-nome");
      const correspondeCategoria =
        categoria === "todas" || prodCat === categoria;
      const correspondeNome = prodNome.includes(texto);

      if (correspondeCategoria && correspondeNome) {
        produto.style.display = "";
      } else {
        produto.style.display = "none";
      }
    });
  }
});
