function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res =>  res.json() ) // .then( (response) => { return response.json()} )
        .then( states => {
            for ( const state of states ) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        });
}

populateUFs(); // não se esqueça de chamar a função









 document
    .querySelector("select[name=uf]") // procure o select que tem o name uf
    .addEventListener("change", () => {
        console.log("mudei");
    })

/*     // retorna um objeto chamado promise
fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(
    function(res) { 
        return res.json()
    }).then(function(data){
        console.log(data);
    }); */