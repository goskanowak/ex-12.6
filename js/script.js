const url = 'https://restcountries.eu/rest/v1/name/';
const countriesList = $('#countries');

$('#country-name').on('keypress', function(e) {
    if(e.which ==13) {
        searchCountries();
    }
});

$('#search').on('click', searchCountries);

function searchCountries() {
    let countryName = $('#country-name').val(); 
    if(!countryName.length) countryName = 'Poland'; 
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
     });
}

function showCountriesList(resp) {
    countriesList.empty();
    let respArray = Array.isArray(resp);
    if (!respArray || !resp.length) return;
    resp.forEach(function(item) { 
        $('<li>').text('Country: ' + item.name).appendTo(countriesList);
        $('<li>').text('Capital: ' + item.capital).appendTo(countriesList);
        $('<li>').text('Population: ' + item.population).appendTo(countriesList);
        $('<li>').text('Region: ' + item.region).appendTo(countriesList);
    });   
}