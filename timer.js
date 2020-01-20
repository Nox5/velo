class Timer {

    constructor(secondes, htmlId) {
        this.secondes = secondes;
        //this.call = call;
        this.htmlId = document.getElementById(htmlId);
    }
    
    
    init(){
        this.calcMinute();
        this.calcSeconde();
        this.start();
    }
    

    start(){
        this.interval = setInterval( () =>{
            this.secondes--;
            if(this.secondes > 0){
                this.calcMinute();
                this.calcSeconde();
                this.htmlId.innerHTML ="Il vous reste" + " " + this.minute + "m " + this.seconde + "s " + "avant expiration de cette réservation";
                return;
            }
            this.stop();
            this.htmlId.innerHTML = "Fin du délai de réservation";   
        }, 1000);
       
    }


    stop(){
        clearInterval(this.interval);
    }


    calcMinute(){
        this.minute = Math.floor(this.secondes/60);
        return this.minute;
        
    }


    calcSeconde() {
        this.seconde = Math.floor(this.secondes-(this.minute*60));
        return this.seconde;
        
    }
}
