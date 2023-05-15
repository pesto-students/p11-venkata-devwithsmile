const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
};

memo = {};

function getTempForCity(city_name) {
    
    if (memo[city_name]) {
        return (memo[city_name] +" memoised");      
    }
    return memo[city_name] = temperatureData[city_name] ;

    
}

temp = getTempForCity('London');
console.log(temp);

temp = getTempForCity('London');
console.log(temp);