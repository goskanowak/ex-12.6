let url = 'https://restcountries.eu/rest/v1/name/';
let countriesList = $('#countries');

$('#country-name').keypress(function(e) {
    if(e.which ==13) {
        searchCountries();
    }
});

$('#search').on('click', searchCountries);

function searchCountries() {
    let countryName = $('#country-name').val(); // zanim wywołamy wyszukiwanie, pobieramy watrość wpisaną przez użytkownika
    if(!countryName.length) countryName = 'Poland'; // warunek czy pole nie jest puste jak puste- to warośćdomyślna Poland
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
     });
}

function showCountriesList(resp) {
    countriesList.empty(); // wyczyszczenie listy krajów po poprzednim zapytaniu
    resp.forEach(function(item) { //metoda forEach, iteruje po każdym elemencie tablicy resp
        $('<li>').text(item.name).appendTo(countriesList);
        $('<p>').text(item.capital).appendTo(countriesList);
        });
}