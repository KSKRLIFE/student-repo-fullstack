const express = require('express');
const axios = require('axios');
const { json } = require('stream/consumers');
const { response } = require('express');
const app = express();
const port = process.env.PORT || 5001;
let countryData = [];

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.com/v3.1/all';

// Add your code here
axios.get(url)
    .then(response => {
        // Handle response
        console.log(response.data);
        countryData = response.data; 
        countryData.sort((a, b) => a.name.common > b.name.common); 
    })
    .catch(err => {
        // Handle errors
        console.error(err);
    });
//json = response.json();
app.get('/', (req, res) => {
  // render pug template for the index.html file

  res.render('index', {
    heading: 'Countries of the World',
    main: 'Welcome to this application. Using the REST Countries API, we will be showing the countries and capitals of the world, the most populous countries in the world, and the number of countries in each region of the world',
  });
});

app.get('/capitals', (req, res) => {
  // map the output array to create an array with country names and capitals
  // check for empty data in the output array

  //let countries = ['Afghanistan', 'Aland Islands', 'Albania'];
 
    
  
  
  let countries = [ ];
  for (var i=0; i < countryData.length; i++){
    var country = `${countryData[i].name.common?countryData[i].name.common:'Not found'} - ${countryData[i].capital?countryData[i].capital:'Not found'}`;
    countries.push(country);
  }
  countries.sort();
  res.render('page', {
    heading: 'Countries and Capitals',
    results: countries,
  });
});


app.get('/populous',(req, res) => {
  // filter the output array for the countries with population of 50 million or more
  // sort the resulting array to show the results in order of population
  // map the resulting array into a new array with the country name and formatted population

  //let populous = ['China', 'India', 'United States of America'];
  

  let populous = [];
  for (var i=0; i < countryData.length; i++){
    if(countryData[i].population >= 50000000){
    var population = `${countryData[i].name.common} - ${countryData[i].population.toLocaleString()}`;
    populous.push(population);
    }
    }
    populous.sort((a,b) => a.population > b.population); 
  res.render('page', {
    heading: 'Most Populous Countries',
    results: populous,
  });
});

app.get('/regions', (req, res) => {
  // reduce the output array in a resulting object that will feature the numbers of countries in each region
  // disregard empty data from the output array

  
  let elements = [];
  const countOccurrences = (arr) =>
  arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
  for (var i = 0; i < countryData.length; i++) {
    elements.push(countryData[i].region);
  }
  
  var result = countOccurrences(elements);
  let regions = [];
  for (const [key, value] of Object.entries(result)) {
    if (key !== "") {
      regions.push(`${key}: ${value}`);
    }
  }

  res.render('page', {
    heading: 'Regions of the World',
    results: regions,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
