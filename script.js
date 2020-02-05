var searchBtn = $("#search");
var cityList = $("#city-list");




// $(document).ready(function(){




$("#search").click(function(event){

    var cityEl = $("#city").val().replace(/ /g, "+");
    var APIkey = "3744579bd802d039a5031e6ef3051381";
    var queryURLcurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + cityEl + "&units=imperial&appid=" + APIkey;

    $.ajax({
        url: queryURLcurrent,
        method: "GET"
    }). then(function(result){
        console.log(result);
        $(".name").html("<h4>" + cityEl + " Weather Details</h4>");
        $(".temp").text("Temperature(F): " + result.main.temp);
        $(".humidity").text("Humidity: " + result.main.humidity);
        $(".speed").text("Temperature (F) " + result.wind.speed);
    });
    console.log(cityEl); 
    console.log(queryURLcurrent);
    console.log(event);
    event.preventDefault();

   
})

// })
