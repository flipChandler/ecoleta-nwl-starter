function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( response =>  response.json() ) // .then( (response) => { return response.json()} )
        .then( states => {
            for ( const state of states ) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        });
}

populateUFs(); // não se esqueça de chamar a função


function getCities(event) {
    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");

    const ufValue = event.target.value;

    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    fetch(url)
        .then( response =>  response.json() ) // .then( (response) => { return response.json()} )
        .then( cities => {
            for ( const city of cities ) {
                citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
            }

            citySelect.disabled = false;
        });
}











 document
    .querySelector("select[name=uf]") // procure o select que tem o name uf
    .addEventListener("change", getCities)
/*     // retorna um objeto chamado promise
fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(
    function(res) { 
        return res.json()
    }).then(function(data){
        console.log(data);
    }); */