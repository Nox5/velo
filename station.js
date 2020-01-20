class Station {

    constructor(element, onClickCallback) {
        this.adress = element.name;
        this.latitude = element.position.lat;
        this.longitude = element.position.lng;
        this.nombreVelo = element.available_bikes;
        this.nombreDePlace = element.available_bike_stands;
        this.status = element.status;
        this.onClickCallback = onClickCallback;
        this.marker = null;
        this.stationData = element;
        this.marker = L.marker([this.latitude,this.longitude], {icon: this.getMapIcon()});
        this.marker.addTo(newMap.map);
        this.marker.on('click', (e) => {
            onClickCallback(this);
        });
    }


    getName() {
        return this.stationData.name;
    }


    getAdress() {
        return this.stationData.address;
    }


    getStatus () {
        return this.stationData.status;
    }


    getAvailableBikes () {
        return this.stationData.available_bikes;
    }


    getAvailableBikesStands () {
        return this.stationData.available_bike_stands;
    }


    getMapIcon() {
        if(this.status === "OPEN" && this.nombreVelo === 0) {
            return new L.Icon({
                iconUrl: 'images/marker-icon-orange.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });
        }
        if(this.status === "CLOSED") {
            return new L.Icon({
                iconUrl: 'images/marker-icon-red.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });
        }
        return new L.Icon({
            iconUrl: 'images/marker-icon-green.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
    }

    
    colorStatus() {
        if(this.status === "CLOSED"){
            return "red";
            
        }else{
            return "green"; 
        } 
    }
}