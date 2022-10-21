/** Exercise 04 - API **/

const url = 'https://restcountries.com/v3.1/all';

// Add your code here

<<<<<<< HEAD
getData(url);
=======
>>>>>>> 845f736f84a11346e07d1b694f1008bfe268cde5

async function getData(url) {
    let response = await fetch(url);
    let data = await response.json();
<<<<<<< HEAD
    data.sort((a, b) => a.name.common > b.name.common);
=======
>>>>>>> 845f736f84a11346e07d1b694f1008bfe268cde5
    var list = document.getElementById('results');
    data.forEach(element => {
        var data = element.name.common + " - " + element.population.toLocaleString();
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(data));
        list.appendChild(entry);
    });            
}
getData(url);