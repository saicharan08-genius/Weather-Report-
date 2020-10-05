Bot.send("Hello!! I am a weather predictor Bot. Please enter the name of your city! ");
async function respond(inputText){
    var temperature;
    var city=inputText;
    temperature=await getTemperature(city);
    Bot.send("The current temperature in "+city+" is "+temperature+" °C");
}
 
async function getTemperature(cityName){
    var  result = await CampK12.fetch("GET", "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=37d99f4c8bd8fa96d4509c54c8a262d7");  
    var temperature=result.main.temp;
    var tempInCelsius=parseInt(temperature-273.15);
    return tempInCelsius;
}
