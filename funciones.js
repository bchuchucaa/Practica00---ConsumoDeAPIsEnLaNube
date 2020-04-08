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
        detalles += 
        "<tr>"+
        "<th>Titulo</th>"+
        "<th>Anio</th>"+
        "<th>imdbID</th>"+
        "<th>Tipo</th>"+
        "<th>Creada</th>"+
        "<th>Genero</th>"+
        "<th>Actores</th>"+
        "<th>Premios</th>"+
        "<th>Idioma</th>"+
        "<th>Pais</th>"+
        "<th>Imagen</th>"+
        "</tr>"+
        "<tr>" +
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

function paginacion(titulo,n,contador){
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://www.omdbapi.com/?s="+titulo+"&apikey=2e34619f&page="+n);
   // http://www.omdbapi.com/?s=Batman&page=2
    xhr.onload = function() {
        if (xhr.status === 200) {
            //alert('User\'s name is ' + xhr.responseText);
          data = JSON.parse(xhr.responseText);
            console.log(data);
            detalles="";
            for (var i = contador; i < contador+5; i++) {
                    detalles += "<tr>" +
            "<td>" + data.Search[i].Title + "</td>" +
            "<td>" + data.Search[i].Year + "</td>" +
            "<td>" + data.Search[i].imdbID+ "</td>" +
            "<td>" + data.Search[i].Type + "</td>" +
            "<td><a href='#' onclick=\"apiCallID('"+data.Search[i].imdbID+"')\"><i class=\"material-icons\">favorite</i>Mas </a></td>"+
            "<td><img src=" + data.Search[i].Poster + " width="+100+" height="+80+"></td>" +
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
var page=2;
function paginacionv2(titulo){
    page=page+1;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://www.omdbapi.com/?s="+titulo+"&apikey=2e34619f&page="+page);
   // http://www.omdbapi.com/?s=Batman&page=2
    xhr.onload = function() {
        if (xhr.status === 200) {
            //alert('User\'s name is ' + xhr.responseText);
          data = JSON.parse(xhr.responseText);
            console.log(data);
            detalles="";
            for (var i = 0; i < 5; i++) {
                    detalles += "<tr>" +
            "<td>" + data.Search[i].Title + "</td>" +
            "<td>" + data.Search[i].Year + "</td>" +
            "<td>" + data.Search[i].imdbID+ "</td>" +
            "<td>" + data.Search[i].Type + "</td>" +
            "<td><a href='#' onclick=\"apiCallID('"+data.Search[i].imdbID+"')\"><i class=\"material-icons\">favorite</i>Mas </a></td>"+
            "<td><img src=" + data.Search[i].Poster + " width="+100+" height="+80+"></td>" +
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


