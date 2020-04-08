var count=5;
var idmovie="";
var data;
function cargarDatos(q)
{
    var xhr = new XMLHttpRequest();
xhr.open('GET', "https://www.omdbapi.com/?s="+q+"&apikey=2e34619f&plot=full");
xhr.onload = function() {
    if (xhr.status === 200) {
        //alert('User\'s name is ' + xhr.responseText);
      data = JSON.parse(xhr.responseText);
        console.log(data);
        detalles="";
        for (var i = 0; i < count; i++) {
                detalles += "<tr>" +
        "<td>" + data.Search[i].Title + "</td>" +
        "<td>" + data.Search[i].Year + "</td>" +
        "<td>" + data.Search[i].imdbID+ "</td>" +
        "<td>" + data.Search[i].Type + "</td>" +
        "<td><a href='#' onclick=\"apiCallID('"+data.Search[i].imdbID+"')\"><i class=\"material-icons\">favorite</i>Click</a></td>"+
        "<td><img src=" + data.Search[i].Poster + " width="+100+" height="+80+" ></td>" +
        "</tr>";
            }
            document.getElementById("tablaDatosPersonalesDetalles").innerHTML=detalles;
    }
    else {
        console.log('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();
    
}



function apiCallID(q) {
    $.getJSON("https://www.omdbapi.com/?i="+q+"&apikey=2e34619f&plot=full").then(function(response){
    console.log(response);
    detalles=""   
        detalles += "<tr>" +
        "<td>" + response.Title + "</td>" +
        "<td>" + response.Year + "</td>" +
        "<td>" + response.imdbID+ "</td>" +
        "<td>" + response.Type + "</td>" +
        "<td>" + response.Released + "</td>" +
        "<td>" + response.Genre+ "</td>" +
        "<td>" + response.Actors + "</td>" +
        "<td>" + response.Awards + "</td>" +
        "<td>" + response.Language + "</td>" +
        "<td>" + response.Country+ "</td>" +
        "<td><img src=" + response.Poster + " width="+200+" height="+250+"></td>" +
        "</tr>";   
        document.getElementById("informacion").innerHTML=detalles;
    });      
}

function paginacion(titulo,n){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://www.omdbapi.com/?s="+titulo+"&apikey=2e34619f&page="+n);
   // http://www.omdbapi.com/?s=Batman&page=2
    xhr.onload = function() {
        if (xhr.status === 200) {
            //alert('User\'s name is ' + xhr.responseText);
          data = JSON.parse(xhr.responseText);
            console.log(data);
            detalles="";
            for (var i = 0; i < count; i++) {
                    detalles += "<tr>" +
            "<td>" + data.Search[i].Title + "</td>" +
            "<td>" + data.Search[i].Year + "</td>" +
            "<td>" + data.Search[i].imdbID+ "</td>" +
            "<td>" + data.Search[i].Type + "</td>" +
            "<td><a href='#' onclick=\"apiCallID('"+data.Search[i].imdbID+"')\">Mas De</a></td>"+
            "<td><img src=" + data.Search[i].Poster + " width="+100+" height="+50+"></td>" +
            "</tr>";
                }
                document.getElementById("tablaDatosPersonalesDetalles").innerHTML=detalles;
        }
        else {
            console.log('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();     

}







//FUNCION PARA BUSCAR POR TITULO
function apiCallTitulo(q) {
    $.getJSON("https://www.omdbapi.com/?t="+q+"&apikey=2e34619f&plot=full").then(function(response){
    console.log(response);
    detalles=""   
        detalles += "<tr>" +
        "<td>" + response.Title + "</td>" +
        "<td>" + response.Year + "</td>" +
        "<td>" + response.imdbID+ "</td>" +
        "<td>" + response.Type + "</td>" +
        "<td>" + response.Released + "</td>" +
        "<td>" + response.Genre+ "</td>" +
        "<td>" + response.Actors + "</td>" +
        "<td>" + response.Awards + "</td>" +
        "<td><img src=" + response.Poster + " width="+200+" height="+100+"></td>" +
        "</tr>";   
        document.getElementById("tablaDatosPersonalesDetalles").innerHTML=detalles;
    });      
}

 
//Funcion para buscar con Search
function apiCall(q) {
    $.get("https://www.omdbapi.com/?s="+q+"&apikey=2e34619f&plot=full",function(rawdata){
        var rawstring= JSON.stringify(rawdata);
        data = JSON.parse(rawstring);
        var count = Object.keys(data.Search).length;
            console.log(count);
            console.log(data);
        detalles=""
        for (var i = 0; i < count; i++) {
                detalles += "<tr>" +
        "<td>" + data.Search[i].Title + "</td>" +
        "<td>" + data.Search[i].Year + "</td>" +
        "<td>" + data.Search[i].imdbID+ "</td>" +
        "<td>" + data.Search[i].Type + "</td>" +
        "<td>" + data.Search[i].Released + "</td>" +
        "<td>" + data.Search[i].Genre + "</td>" +
        "<td>" + data.Search[i].Actors + "</td>" +
        "<td>" + data.Search[i].Awards + "</td>" +
        "<td><img src=" + data.Search[i].Poster + " width="+200+" height="+100+"></td>" +
        "</tr>";
            }
            document.getElementById("tablaDatosPersonalesDetalles").innerHTML=detalles;
    });
    
}



