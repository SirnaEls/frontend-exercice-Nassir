let displayCommune = document.getElementById('display-commune')

fetch('https://geo.api.gouv.fr/communes?')
    .then(res => res.json())
    .then(data => displayCommune.textContent = data[0].nom)
