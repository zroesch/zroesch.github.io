// let response = fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=StNlCS93Xlj0xJVWSdFm27AdrCpMxr8HvlYrQub5&sol=1000');
// let json = response.json;
// console.log(json);

fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=StNlCS93Xlj0xJVWSdFm27AdrCpMxr8HvlYrQub5&sol=1000')
    .then(response => response.text())
    .then(data => console.log(data));