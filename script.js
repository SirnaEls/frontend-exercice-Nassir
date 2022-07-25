function getAPI() {
  let inputCommune = document.getElementById("input-adresse").value;
  let displayCommune = document.getElementById("display-commune")
  displayCommune.innerHTML = ""

  fetch(`https://api-adresse.data.gouv.fr/search/?q=${inputCommune}`)
    .then((res) => res.json())    
    .then((data) =>JSON.stringify(data.features.forEach(element => {
        //displayCommune.textContent += " "+ element.properties.city +   
        displayCommune.innerHTML += ` ${element.properties.city} (${element.properties.context})<br/>`
        
    })))
    
}

function getDepartment(){
    let getDepartment = document.getElementById("department-select");
    let displayCommunesInDepartment = document.getElementById("display-commune-department")

    fetch(`https://geo.api.gouv.fr/departements`)
     .then((res) => res.json())    
     .then((data) => data.forEach(element =>{
       // console.log(element)
        var opt = document.createElement('option');
        opt.value = element.code ;
        opt.innerHTML = element.nom;
        getDepartment.appendChild(opt);
     }))
}

getDepartment()



let displayCommunesInDepartment = document.getElementById("display-commune-department")

function getCommunesByDepartment(){

    var departmentSelector = document.getElementById("department-select");
    departmentSelector.addEventListener("change", function(){
        displayCommunesInDepartment.textContent = ""
        var test = departmentSelector.value
        console.log(test)
        fetch(`https://geo.api.gouv.fr/departements/${test}/communes`)
        .then((res) => res.json())    
        .then((data) => data.forEach (element => {
            //console.log(element)
            displayCommunesInDepartment.innerHTML += `${element.nom}<br/>`
        }))
    })

}

getCommunesByDepartment()