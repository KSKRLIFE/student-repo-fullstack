/** Exercise 04 - API **/

const url = 'https://restcountries.com/v3.1/all';

// Add your code here


async function getData(url) {
    let response = await fetch(url);
    let data = await response.json();
    var list = document.getElementById('results');
    data.forEach(element => {
        var data = element.name.common + " - " + element.population.toLocaleString();
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(data));
        list.appendChild(entry);
    });            
}
getData(url);