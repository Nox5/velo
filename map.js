class Map {
    
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
    }


    request(callback) {
        var request = new XMLHttpRequest();//Créer un nouvel objet de type xmlhttprequest (objet ajax)
        request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {//permet de verifier si la requete s'est bien deroulee
            var response = JSON.parse(this.responseText);//la methode json.parse permet de transformer le texte json en reponse javascript objet
            listStation = response;
            //console.log(response);
            callback();
            }
        }
        request.open("GET","https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=3af2d23b7aef4d9f925d3f93e3f297ce35f07ead");//demande d'ouverture de connexion vers le service web
        request.send();//envoie de la requete au service web
    }
    
}