var searchBtn = $("#search");
var cityList = $("#city-list");





// $(document).ready(function(){




$("#search").click(function(event){

    
    var cityEl = $("#city").val().replace(/ /g, "+");
    var APIkey = "3744579bd802d039a5031e6ef3051381";
    var queryURLcurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + cityEl + "&units=imperial&appid=" + APIkey;
    var queryURL5days = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityEl +"&units=imperial&appid=3503fc388e7292f68673f33ffe6f8294";
    var date = moment().add(10, 'days').calendar(); 
    var img = img
    
    $.ajax({
        url: queryURLcurrent,
        method: "GET"
    }). then(function(result){
        console.log(result);
        $(".name").text(cityEl + date);
        $(".description").text("Weather: "+ result.weather[0].main);
        $(".temp").text("Temperature(F): " + result.main.temp);
        $(".humidity").text("Humidity: " + result.main.humidity);
        $(".speed").text("Wind Speed: " + result.wind.speed);

    });

    $.ajax({
        url: queryURL5days,
        method: "GET"
    }).then(function (result) {
        console.log(result);
        $(".date0").text(result.list[0].sys.dt_txt);
        $(".icon0").text();
        $(".temp0").text("Temp: " + result.list[0].main.temp);
        $(".humidity0").text("Humudity: " + result.list[0].main.humidity);
        $(".date1").text();
        $(".icon1").text();
        $(".temp1").text("Temp: " + result.list[1].main.temp);
        $(".humidity1").text("Humudity: " + result.list[1].main.humidity);
        $(".date2").text();
        $(".icon2").text();
        $(".temp2").text("Temp: " + result.list[2].main.temp);
        $(".humidity2").text("Humudity: " + result.list[2].main.humidity);
        $(".date3").text();
        $(".icon3").text();
        $(".temp3").text("Temp: " + result.list[3].main.temp);
        $(".humidity3").text("Humudity: " + result.list[3].main.humidity); 
        $(".date4").text();
        $(".icon4").text();
        $(".temp4").text("Temp: " + result.list[4].main.temp);
        $(".humidity4").text("Humudity: " + result.list[4].main.humidity);
        
    });
   
    event.preventDefault();

   
})


// })
