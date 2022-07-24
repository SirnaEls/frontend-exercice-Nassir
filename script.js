function getAPI() {
  let inputCommune = document.getElementById("input-adresse").value;
  let displayCommune = document.getElementById("display-commune")

  fetch(`https://api-adresse.data.gouv.fr/search/?q=${inputCommune}`)
    .then((res) => res.json())    
    .then((data) =>JSON.stringify(data.features.forEach(element => {
        //displayCommune.textContent += " "+ element.properties.city +   
        displayCommune.textContent += ` ${element.properties.city}\n(${element.properties.context})`
        
    })))
    
}

