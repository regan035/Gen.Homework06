var searchBtn = $("#search");
var cityList = $("#city-list");




// $(document).ready(function(){




$("#search").click(function(result){

    var cityEl = $("#city").val();
    var APIkey = "3744579bd802d039a5031e6ef3051381";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityEl + "&units=imperial&appid=" + APIkey;

    $.ajax({
        url: queryURL,
        method: "GET"
    });
    console.log(cityEl); 
    console.log(queryURL);
    console.log(result);
    event.preventDefault();

    $(".name").html("<h4>" + cityEl + " Weather Details</h4>");
    $(".temp").text("Temperature(F): " + result.main.temp);
    $(".humidity").text("Humidity: " + result.main.humidity);
    $(".speed").text("Temperature (F) " + result.wind.speed);
})

// })
