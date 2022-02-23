const btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', function(fetchCallback){
    let countryError = document.getElementById('country-error')
    countryError.innerText= '';
    const input = document.querySelector('input');
    console.log(input.value);

    const url = `https:restcountries.com/v3.1/name/${input.value}`;

    fetch(url).then(
        function (response) {
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else{
                throw 'Please try again';
            }
        }
    ).then(
        function (data) {
            let capital = document.getElementById('capital');
            console.log(capital);
            capital.innerText = data[0].capital;

            let subregion = document.getElementById('subregion');
            console.log(subregion);
            subregion.innerText = data[0].subregion;

            let nameofficial = document.getElementById('official-name');
            console.log(nameofficial);
            nameofficial.innerText = data[0].name.official;

            let population = document.getElementById('population');
            population.innerText = data[0].population;
            console.log(population);

            let flags = document.querySelector('img');
            console.log(flags);
            console.log(data[0].flags.png);
            flags.innerText.src = `https://flagcdn.com/${data[0].flags.png}.png`;
        }  
).catch(
    function (e) {
        countryError.innerText = `${input.value} Search was invalid, please try again`
    }
)
})