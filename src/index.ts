
// This code only runs on the browser

const waiting = document.querySelector('.gdp-country--content__waiting')  as HTMLElement;
const result = document.querySelector('.gdp-country--content__result')  as HTMLElement;
result.classList.add("dissapear");

function verGDP() {
    
    const countryInput = document.getElementById('gdp-country--search__input') as HTMLInputElement;

    waiting.classList.add("dissapear");
    result.classList.remove("dissapear");
    
    // Manipulating the DOM here
    let country: string = countryInput.value.toLocaleLowerCase();

    if(country != "")
        console.log(country)
    else
        console.log("Please write a Country")

    fetch(`https://api.api-ninjas.com/v1/country?name=${country}`, {
        method: 'GET',
        headers: {
            "X-Api-Key": "9MYdKDsC8vZiKNSUhznIew==SBFkyWJmc4yPsHsd"
        }
    })
        .then(res => res.json())
        .then((data) => {
            const data_countryName: string = data[0].name;
            const data_countryGdp: string = data[0].gdp.toLocaleString("en");
            const data_countryGdpPerCapita: string = data[0].gdp_per_capita.toLocaleString("en");
            const data_iso2: string = data[0].iso2.toLocaleLowerCase();

            const getFlagContainer = document.querySelector(".gdp-country--content__result__flag") as HTMLElement;
            getFlagContainer.innerHTML = '';
            const flag = document.createElement("img");
            flag.src = `https://flagcdn.com/108x81/${data_iso2}.png`;
            flag.width = 144;
            flag.height = 108;
            flag.alt = data_countryName;
            getFlagContainer?.appendChild(flag);

            const getCountryNameContainer = document.getElementById('country-result__name') as HTMLElement;
            getCountryNameContainer.innerHTML = '';
            const country_name = document.createElement("span");
            const country_name_text = document.createTextNode(data_countryName);
            country_name.appendChild(country_name_text);
            getCountryNameContainer?.appendChild(country_name);

            const getCountrGdpContent = document.getElementById('usd-result--gdp') as HTMLElement;
            getCountrGdpContent.innerHTML = '';
            const country_gdp = document.createElement("span");
            const country_gdp_text = document.createTextNode('$' + data_countryGdp);
            country_gdp.appendChild(country_gdp_text);
            getCountrGdpContent?.appendChild(country_gdp);

            const getCountryGdpPerCapitaContent = document.getElementById('usd-result--gdp-per-capita') as HTMLElement;
            getCountryGdpPerCapitaContent.innerHTML = '';
            const country_gdperCapita = document.createElement("span");
            const country_gdperCapita_text = document.createTextNode('$' + data_countryGdpPerCapita);
            country_gdperCapita.appendChild(country_gdperCapita_text);
            getCountryGdpPerCapitaContent?.appendChild(country_gdperCapita);
        });

        

}





