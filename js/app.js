
const loadCountris = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => dispalyCountry(data))
}


const dispalyCountry = countris => {
    // for(const c of country){
        // console.log(countris)
    // }
    const cardContainer = document.getElementById("card-container")
    countris.forEach(country => {
        // console.log(country)
       const div = document.createElement("div")
       div.innerHTML = `
         <div class="card w-96 bg-primary text-primary-content">
        <div class="card-body">
            <h2 class="card-title">Name: ${country.name.common}</h2>
            <p>Capital: ${country.capital}</p>
            <div class="card-actions justify-end">
            <button onclick="countryDetails('${country.cca2}')" class="btn"><a href="#details-container">Details</a></button>
            </div>
        </div>
        </div>
       
       `
        cardContainer.appendChild(div)
    })
};

const countryDetails = (code) =>{
    const codeURL = `https://restcountries.com/v3.1/alpha/${code}`

    fetch(codeURL)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
}

const displayCountryDetails = data =>{

    const detailsContainer = document.getElementById("details-container")
    detailsContainer.innerHTML =``

        data.forEach(details => {
            console.log(details)
            const div = document.createElement("div")
            div.innerHTML =`
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="${details.flags.png}" alt="Shoes" /></figure>
                <div id="top" class="card-body">
                  <h2 class="card-title">Name: ${details.name.common}</h2>
                  <h2 class="card-title">Continents: ${details.continents}</h2>
                  <p>Population: ${details.population}</p>
                  <div class="card-actions justify-end">
                    <a class="btn btn-primary" href="${details.maps.googleMaps}">Find Map </a>
                  </div>
                </div>
              </div>
            `
            detailsContainer.appendChild(div)
        } )
}
loadCountris()