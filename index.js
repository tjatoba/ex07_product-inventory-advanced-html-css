let inventory = [];

function openForm() {
  document.getElementById("form-container").style.display = "block";
}

function closeForm() {
  document.getElementById("form-container").style.display = "none";
  clearForm();
}

function clearForm() {
  document.getElementById("inventoryForm").reset();
}

function addItem() {
  const type = document.getElementById("type").value;
  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value;
  const reference = document.getElementById("reference").value;

  if (type && size && color && reference) {
    const newItem = { type, size, color, reference };
    inventory.push(newItem);
    displayInventory();
    clearForm();
    closeForm();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function displayInventory() {
  const itemList = document.getElementById("item-list");
  itemList.innerHTML = "";

  inventory.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Tipo: ${item.type}, Tamanho: ${item.size}, Cor: ${item.color}, Referência: ${item.reference}`;
    itemList.appendChild(listItem);
  });
}
