const shoppingList = [
  "Breaking Bad",
  "O Atirador",
  "Sintonia",
  "Esqudrão 6",
  "La Casa de Papel",
  "Resgate",
  "Irmandade",
  "Stranger Things",
  "O Mecanismo",
  "The Flash",
];

const listaEl = document.getElementById("list");
const searchField = document.getElementById("searchField");
const notFound = document.querySelector(".notFound");
searchField.addEventListener("input", inputHandler);

this.fillList();

//Caso não receba nenhum parâmetro, usará a shoppingList
function fillList(list = shoppingList) {
  listaEl.innerHTML = "";
  //adicionando itens do array como elemento no HTML
  for (let i = 0; i < list.length; i++) {
    let listItems = document.createElement("li");
    listItems.innerHTML = list[i];
    listaEl.appendChild(listItems);
  }
}

function inputHandler() {
  const filteredList = shoppingList.filter((el) => {
    const listItem = el.toLocaleLowerCase();
    const searchWord = searchField.value.toLowerCase();

    return listItem.includes(searchWord);
  });
  // A cada vez que o campo de busca muda, chama fillList
  fillList(filteredList);

  if (filteredList < 1) {
    notFound.innerHTML = "Não encontrado.";
  } else {
    notFound.innerHTML = "";
  }
}
