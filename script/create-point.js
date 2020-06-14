document
    .querySelector("select[name=uf]") // procure o select que tem o name uf
    .addEventListener("change", () => {
        console.log("mudei");
    })
// retorna um objeto chamado promise
fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(
    function(res) { 
        return res.json()
    }).then(function(data){
        console.log(data);
    });