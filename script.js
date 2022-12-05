//variable
var temp,
maxtemp,
mintemp,
desc,
wind,
hum,
main,
day,night;

//weather
var x=[
"clear sky",
"broken clouds",
"scattered clouds",
"smoke",
"shower rain",
"mist",
"thunderstorm",
"rain",
"snow",
"drizzle"];

//source
var y=[
"icons/sunny.png",
"icons/snow.png",
"icons/overcast.png",
"icons/fog.png",
"icons/cloudy.png",
"icons/tornado.png",
"icons/fog.png",
"icons/shower.png",
"icons/rain.png",
"icons/thunderstrom.png",
"icons/snow.png",
"icons/fog.png",
];

var z=[
 "icons/clear.png",  
 "icons/cloudy-night.png",
 "icons/cloudy.png",
 "icons/tornado.png",
 "icons/fog.png",
 "icons/shower.png",
 "icons/night-rain.png",
 "icons/thunderstrom.png",
 "icons/snow.png",
 "icons/fog.png",
];

function weather(input){
var city=input;
//alert(city);

var im=document.querySelector('#icons');
var myurl="https://api.openweathermap.org/data/2.5/weather?";
var key="87734d9568c77bf1edb80871d1b0a96f";
var url=myurl+"appid="+key+"&units=metric&q="+city;

fetch(url)
.then(function(response){
    console.log(response);
   return response.json(); 
})
.then(function(data){
    console.log(data);
    temp=data.main.temp;//celcius value
    document.querySelector('#deg').innerHTML=Math.round(temp)+"&deg;C";
    mintemp=data.main.temp_min;
    document.querySelector('#min').innerHTML=Math.round(mintemp)+"&deg;C";
    maxtemp=data.main.temp_max;
    document.querySelector('#max').innerHTML="/" + Math.round(maxtemp)+"&deg;C";
    wind=data.wind.speed;
    document.querySelector('#wind').innerHTML= Math.round(wind)+"mph";
    hum=data.main.humidity;
    document.querySelector('#humidity').innerHTML= hum + "%";
    desc=data.weather[0].description;
    document.querySelector("#description").innerHTML=desc;

    var dn=data.dt//current date day or night (millisecond value this is jan 1997 start)
    //alert(dn);
    day=data.sys.sunrise;
    night=data.sys.sunset;
    //alert(day+" "+night)
    if(dn>=night){
        //alert("Night");
        switch (desc){
            // case cloud:
            // im.src=y[2];
            case x[0]:
            im.src=z[0];
            break;  

            case x[1]:
            im.src=z[1];
            break; 

            case x[2]:
            im.src=z[2];
            break;    
            
            case x[3]:
            im.src=z[3];
            break ;

            case x[4]:
            im.src=z[4];
            break  ; 

            case x[5]:
            im.src=z[5];
            break; 

            case x[6]:
            im.src=z[6];
            break ; 

            case x[7]:
            im.src=z[7];
             break ; 
        }
    }
    else if(dn>=day){
        //alert("day");
        switch (desc){
            // case cloud:
            // im.src=y[2];
            case x[0]:
            im.src=y[0];
            break  ;  

            case x[1]:
            im.src=y[1];
            break; 

            case x[2]:
            im.src=y[2];
            break;    
            
            case x[3]:
            im.src=y[3];
            break ;

            case x[4]:
            im.src=y[4];
            break  ; 

            case x[5]:
            im.src=y[5];
            break; 

            case x[6]:
            im.src=y[6];
            break ; 

            case x[7]:
            im.src=y[7];
             break  ; 
    }
}
})
.catch(err=>console.log(err));
}
//function end

function con(detector){
    if(detector=="fahrenheit"){//fahrenhit arrgument use in html file
        var far=(temp * 9/5)+32;//celcius to fahren
        document.querySelector('#deg').innerHTML=Math.round(far)+"&deg;F";
        var farmin=(mintemp * 9/5)+32;
        document.querySelector('#min').innerHTML=Math.round(farmin)+"&deg;F";
        var farmax=(maxtemp * 9/5)+32;
        document.querySelector('#max').innerHTML="/" + Math.round(farmax)+"&deg;F";
    }
    else{
        document.querySelector('#deg').innerHTML=Math.round(temp)+"&deg;C";
        document.querySelector('#min').innerHTML=Math.round(mintemp)+"&deg;C";
        document.querySelector('#max').innerHTML="/" + Math.round(maxtemp)+"&deg;C";

        
    }
}