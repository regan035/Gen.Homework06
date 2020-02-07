var searchBtn = $("#search");
var cityList = $("#city-list");
var APIkey = "3744579bd802d039a5031e6ef3051381";




// $(document).ready(function(){




$("#search").click(function(event){

    
    var cityElPlus = $("#city").val().replace(/ /g, "+");
    var cityEl = $("#city").val();

    var cityDiv = $("<li>");
    cityDiv.text(cityEl);
    cityDiv.attr("class","cityListItem");
    $("#city-list").append(cityDiv)

    var queryURLcurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + cityEl + "&units=imperial&appid=" + APIkey;
    var queryURL5days = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityEl +"&units=imperial&appid=3503fc388e7292f68673f33ffe6f8294";
    var date = moment().format("MMMM Do YYYY, h:mm a");
    var img = img
    
    $.ajax({
        url: queryURLcurrent,
        method: "GET"
    }). then(function(result){
        console.log(result);
        $(".name").text(cityEl + " " + date);
        $(".description").text("Weather: "+ result.weather[0].main);
        $(".temp").text("Temperature(F): " + result.main.temp);
        $(".humidity").text("Humidity: " + result.main.humidity);
        $(".speed").text("Wind Speed: " + result.wind.speed);
        
        $(".icon").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            result.weather[0].icon +
            "@2x.png")

        uvSearch(result.coord.lon, result.coord.lat)
        
    });

    $.ajax({
        url: queryURL5days,
        method: "GET"
    }).then(function (result) {
        console.log(result);
        $(".date0").text(moment(result.list[0].dt_txt).format("MMM Do YY"));
        $(".icon0").attr("src", "http://openweathermap.org/img/wn/" + result.list[0].weather[0].icon + ".png");
        $(".temp0").text("Temp: " + result.list[0].main.temp);
        $(".humidity0").text("Humudity: " + result.list[0].main.humidity);
        $(".date1").text(moment(result.list[8].dt_txt).format("MMM Do YY"));
        $(".icon1").attr("src", "http://openweathermap.org/img/wn/" + result.list[8].weather[0].icon + ".png");
        $(".temp1").text("Temp: " + result.list[8].main.temp);
        $(".humidity1").text("Humudity: " + result.list[8].main.humidity);
        $(".date2").text(moment(result.list[16].dt_txt).format("MMM Do YY"));
        $(".icon2").attr("src", "http://openweathermap.org/img/wn/" + result.list[16].weather[0].icon + ".png");
        $(".temp2").text("Temp: " + result.list[16].main.temp);
        $(".humidity2").text("Humudity: " + result.list[16].main.humidity);
        $(".date3").text(moment(result.list[24].dt_txt).format("MMM Do YY"));
        $(".icon3").attr("src", "http://openweathermap.org/img/wn/" + result.list[24].weather[0].icon + ".png");
        $(".temp3").text("Temp: " + result.list[24].main.temp);
        $(".humidity3").text("Humudity: " + result.list[24].main.humidity); 
        $(".date4").text(moment(result.list[32].dt_txt).format("MMM Do YY"));
        $(".icon4").attr("src", "http://openweathermap.org/img/wn/" + result.list[32].weather[0].icon + ".png");
        $(".temp4").text("Temp: " + result.list[32].main.temp);
        $(".humidity4").text("Humudity: " + result.list[32].main.humidity);
        
    });
   
    event.preventDefault();

})

function uvSearch(lon, lat){

    var queryUV = `http://api.openweathermap.org/data/2.5/uvi?appid=${APIkey}&lat=${lat}&lon=${lon}`
    //var queryUV = `http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat=` + lat + `&lon={lon}`

    $.ajax({
        url: queryUV,
        method: "GET"
    }).then(function(result){
        console.log(result)
        $(".uvIndex").text("UV Index:"+result.value);
    })
}
// })
