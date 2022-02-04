window.onload = function () {

    function buscaCep(dadosCep){
        for(let campo in dadosCep){
            if(document.querySelector(`#${campo}`)){
               document.querySelector(`#${campo}`).value  = dadosCep[campo]
            }
        }
    }

    let Cep = async function (cep) {
        let url = `https://viacep.com.br/ws/${cep}/json/`
        try {
            let dadosFetch = await fetch(url)
            let dadosJson = await dadosFetch.json()
            buscaCep(dadosJson)
        } catch (error) {
            alert(error)
        }
    }

    const btnBuscar = document.querySelector("#button")
    const caixaCep = document.querySelector("#cep")

    btnBuscar.addEventListener('click', function () {
        Cep(caixaCep.value)
    })
}
