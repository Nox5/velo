var markerClusters = {};
var stationEnCours = {};
var listStation = [];
var listMarker = [];

//Gestion de la carte 
const newMap = new Map(mapid, 45.750000, 4.850000, 12);
newMap.request(creationOfMarkers); //je fais le request et s'il est ok je commence la crea des marqueurs


function creationOfMarkers() {
    markerClusters = L.markerClusterGroup();
    listStation.forEach(element => {
        const marker = new Marker(element); //marqueur est une instance de la classe Marqueur
        listMarker.push(marker);
    });
    newMap.map.addLayer(markerClusters);
}



function leDetailDeLaStation() {
    const mrDetailStation = new DetailStation();
    mrDetailStation.cliqueSurUnMarqueur();
}


function veloNonDisponible() {
    document.forms["general"].hidden = false;
    document.getElementById('texte').style.display = "none";
}

function veloDisponible() {
    document.forms["general"].hidden = true;
    document.getElementById('texte').innerHTML = "Aucun vélo disponible"
}



































/*class Map{

    constructor(mapId, lat, lng, zoom){
        this.mapId = mapId;
        this.latView = lat;
        this.lngView = lng;
        this.zoom = zoom;
        this.map = L.map('mapid').setView([this.latView, this.lngView], this.zoom);//initialisation de la map
        this.api = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=10000&facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state";
        this.tileLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1Ijoibm94eCIsImEiOiJjanVqaHVzYjUwcmhqM3luN25mcnp0ZHJxIn0.L3yP3h3v0uRxLFe6wttJ0A'
        });
        this.tileLayer.addTo(this.map);//ajout du design de la map
        this.initCluster();

    }


        initCluster() {
            $.get(this.api, (data, status) => {

                let markerClusters = L.markerClusterGroup();
        
                //Création d'une boucle afin de placer les marqueurs        
                for (let i = 0; i < data.records.length; i++) {
                    const marker = L.marker([data.records[i]["geometry"]["coordinates"][1], data.records[i]["geometry"]["coordinates"][0]]);
                    marker.bindPopup(document.getElementById("name").innerHTML = data.records[i]["fields"]["station_name"]);
        
                    //Récupération des infos pour le tableau
                    markerClusters.addLayer(marker);

                    marker.on('click', function(){

                        document.getElementById('detailstation').style.display = "block";
                        document.getElementById('mapid').style.width = "50%";

                        
                        if(data.records[i]["fields"]["nbebike"] != 0) {
                            console.log('ici');
                            veloNonDisponible();
                        }

                        else {
                            console.log('ici2');
                            veloDisponible();
                        }
                        
                        stationEnCours = data.records[i];
                        console.log(stationEnCours);
                        document.getElementById("name").innerHTML = data.records[i]["fields"]["station_name"];
                        
        
                        document.getElementById('check').addEventListener('click', () =>{
                            document.getElementById("texte").innerHTML ="Vous avez réservé un vélo à la station : " + data.records[i]["fields"]["station_name"] + " au nom de " + localStorage.getItem('nom') + " " + localStorage.getItem('prenom');
                        });

                        document.getElementById("place").innerHTML = data.records[i]["fields"]["nbedock"];
                        document.getElementById("dispo").innerHTML = data.records[i]["fields"]["nbebike"]; 
 
                    });
                }
                    this.map.addLayer(markerClusters);  
            });
        }
        
}*/









//Creation de la carte
//const mymap = L.map('mapid').setView([48.866667, 2.333333], 12);

//Ajout de l'API MAPBOX
/*L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoibm94eCIsImEiOiJjanVqaHVzYjUwcmhqM3luN25mcnp0ZHJxIn0.L3yP3h3v0uRxLFe6wttJ0A'
})*/
//.addTo(mymap);



//Utilisation de l'api 
//const api = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=10000&facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state";

/*$( document ).ready(function() {
    
    $.get(this.api, function(data, status){

        let markerClusters = L.markerClusterGroup();

        //Création d'une boucle afin de placer les marqueurs        
        for (let i = 0; i < data.records.length; i++) {
            const marker = L.marker([data.records[i]["geometry"]["coordinates"][1], data.records[i]["geometry"]["coordinates"][0]]);
            marker.bindPopup(document.getElementById("name").innerHTML = data.records[i]["fields"]["station_name"]);

            //Récupération des infos pour le tableau
            markerClusters.addLayer(marker);
            marker.on('click', function(){
                document.getElementById("name").innerHTML = data.records[i]["fields"]["station_name"];

                document.getElementById('check').addEventListener('click', function(){
                document.getElementById("laStation").innerHTML = data.records[i]["fields"]["station_name"];
                });

                document.getElementById("place").innerHTML = data.records[i]["fields"]["nbedock"];
                document.getElementById("dispo").innerHTML = data.records[i]["fields"]["nbebike"];   
            });
        }
            mymap.addLayer(markerClusters);  
    });
});*/