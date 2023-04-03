"use strict";
// This code only runs on the browser
const waiting = document.querySelector('.gdp-country--content__waiting');
const result = document.querySelector('.gdp-country--content__result');
result.classList.add("dissapear");
function verGDP() {
    const countryInput = document.getElementById('gdp-country--search__input');
    waiting.classList.add("dissapear");
    result.classList.remove("dissapear");
    // Manipulating the DOM here
    let country = countryInput.value.toLocaleLowerCase();
    if (country != "")
        console.log(country);
    else
        console.log("Please write a Country");
    fetch(`https://api.api-ninjas.com/v1/country?name=${country}`, {
        method: 'GET',
        headers: {
            "X-Api-Key": "9MYdKDsC8vZiKNSUhznIew==SBFkyWJmc4yPsHsd"
        }
    })
        .then(res => res.json())
        .then((data) => {
        const data_countryName = data[0].name;
        const data_countryGdp = data[0].gdp.toLocaleString("en");
        const data_countryGdpPerCapita = data[0].gdp_per_capita.toLocaleString("en");
        const data_iso2 = data[0].iso2.toLocaleLowerCase();
        const getFlagContainer = document.querySelector(".gdp-country--content__result__flag");
        getFlagContainer.innerHTML = '';
        const flag = document.createElement("img");
        flag.src = `https://flagcdn.com/108x81/${data_iso2}.png`;
        flag.width = 144;
        flag.height = 108;
        flag.alt = data_countryName;
        getFlagContainer === null || getFlagContainer === void 0 ? void 0 : getFlagContainer.appendChild(flag);
        const getCountryNameContainer = document.getElementById('country-result__name');
        getCountryNameContainer.innerHTML = '';
        const country_name = document.createElement("span");
        const country_name_text = document.createTextNode(data_countryName);
        country_name.appendChild(country_name_text);
        getCountryNameContainer === null || getCountryNameContainer === void 0 ? void 0 : getCountryNameContainer.appendChild(country_name);
        const getCountrGdpContent = document.getElementById('usd-result--gdp');
        getCountrGdpContent.innerHTML = '';
        const country_gdp = document.createElement("span");
        const country_gdp_text = document.createTextNode('$' + data_countryGdp);
        country_gdp.appendChild(country_gdp_text);
        getCountrGdpContent === null || getCountrGdpContent === void 0 ? void 0 : getCountrGdpContent.appendChild(country_gdp);
        const getCountryGdpPerCapitaContent = document.getElementById('usd-result--gdp-per-capita');
        getCountryGdpPerCapitaContent.innerHTML = '';
        const country_gdperCapita = document.createElement("span");
        const country_gdperCapita_text = document.createTextNode('$' + data_countryGdpPerCapita);
        country_gdperCapita.appendChild(country_gdperCapita_text);
        getCountryGdpPerCapitaContent === null || getCountryGdpPerCapitaContent === void 0 ? void 0 : getCountryGdpPerCapitaContent.appendChild(country_gdperCapita);
    });
}
