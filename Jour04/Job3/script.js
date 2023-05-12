function printText() {
    let file = "pokemon.json";
    fetch(file)
      .then((x) => x.json())
      .then((y) => {
        let id = document.getElementById("id").value.toLowerCase();
        let name = document.getElementById("nom").value.toLowerCase();
        let type = document.getElementById("type").value.toLowerCase();
        let filtered = y.filter((x) => {
          let isIdMatched = id === "" || x.id.toString().toLowerCase().includes(id);
          let isNameMatched = name === "" || x.name.toLowerCase().includes(name);
          let isTypeMatched = type === "" || x.type.some((t) => t.toLowerCase().includes(type));
          return isIdMatched && isNameMatched && isTypeMatched;
        });
        document.getElementById("myText").innerHTML = JSON.stringify(filtered);
      });
  }
  
  document.getElementById("filtrer").addEventListener("click", printText);

