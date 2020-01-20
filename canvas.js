class Canvas {

    constructor(elementId, laSouris, leDoigt) {
        this.laSouris = laSouris;
        this.leDoigt = leDoigt; 
        this.drawX = 0;
        this.drawY = 0;
        this.lastX = -1;
        this.lastY = -1;
        this.mouseactive = false;
        this.ctx = null;
        this.canva = document.getElementById(elementId);
        this.init = () => { //Création du canva
            this.ctx = this.canva.getContext('2d');
            this.calibrate(canva); //Permet d'adapter le calibrage du canva lorsque la fenêtre est redimentionnée
            this.canva.addEventListener('click', (e) => {
                this.draw(e.offsetX, e.offsetY);
                this.draw(canva.clientWidth / 2, canva.clientHeight / 2)
            });
            this.canva.width = canva.clientWidth; //Permet au canva de s'adapter à la taille définit en css et non celle par defaut
            this.canva.height = canva.clientHeight; //Permet au canva de s'adapter à la taille définit en css et non celle par defaut
            this.ctx.fillStyle = '#fff'; //Couleur du fond
            this.ctx.lineWidth = 2; //Epaisseur du trait
            this.ctx.strokeStyle = '#2d3436'; //Couleur du trait
            this.ctx.lineCap = 'round'; //Extrémité du trait
            this.draw(); //Dessiner
            this.erase(); //Pour effacer le contenu du canvas
        };


        this.calibrate = (can) => {
            can.width = can.clientWidth;
            can.height = can.clientHeight;
        }
        window.addEventListener('resize', (e) => {
            this.calibrate(canva)
        }); //Fait appelle à la fonction calibrate lors du resize(changement de dimenssion de la fenêtre)


        this.getMousePos = (e) => { //Pour position de la souris
            if (e.offsetX) {
                this.drawX = e.offsetX; //Position sur l'axe X
                this.drawY = e.offsetY; //Position sur l'axe y
            } else if (e.layerX) {
                this.drawX = e.layerX; //Retourne les coordonnées sur l'axe verticale sur l'event en cours
                this.drawY = e.layerY; //Retourne les coordonnées sur l'axe horizontale sur l'event en cours
            }
        }


        this.getTouchPos = (e) => { //Pour avoir la position du doigt (smartphone tablette)
            if (e.touches) {
                if (e.touches.length == 1) {
                    var touch = e.touches[0];
                    this.drawX = touch.pageX - touch.target.offsetLeft;
                    this.drawY = touch.pageY - touch.target.offsetTop;
                }
            }
        }


        this.drawLine = (x, y) => { //Pour dessiner des traits
            if (this.lastX == -1) { //Si c'est un nouveau chemin
                this.lastX = x; //Le premier point et le point du clic
                this.lastY = y;
            }
            this.ctx.beginPath(); //Debut du chemin
            this.ctx.moveTo(this.lastX, this.lastY); //point de départ
            this.ctx.lineTo(x, y); //Tracé de la ligne
            this.lastX = x;
            this.lastY = y;
            this.ctx.stroke();
        }


        this.draw = () => {
            this.canva.addEventListener("mousedown", (e) => {
                this.mouseDown = true; //Quand le bouton de la souris est down
                this.getMousePos(e); //On regarde sa position
                this.drawLine(this.drawX, this.drawY); //On commence à dessiner
                console.log('signature souris');
            }, false);
        }


        this.canva.addEventListener('mousemove', (e) => {
            this.getMousePos(e); //Quand la souris bouge
            if (this.mouseDown === true) { //On regarde si le bouton est down
                this.drawLine(this.drawX, this.drawY); //s'il l'est on dessine
            }
        }, false);


        window.addEventListener('mouseup', () => { // Quand le bouton de la souris n'est plus down
            this.mouseDown = false; // La souris n'est plus down
            this.lastX = -1; // La dernière position de la souris est -1 pour indiquer qu'il y a un nouveau chemin
            this.lastY = -1;
        }, false);


        // Même chose mais pour les tablettes et smartphones
        this.canva.addEventListener('touchstart', (e) => {
            this.getTouchPos(e); //Quand la doigt bouge
            this.drawLine(this.drawX, this.drawY); //on dessine
            e.preventDefault(); //Empéche l'evenement par défaut d'être pris en compte
            console.log('signature doigt');  
        }, false);

    
        this.canva.addEventListener('touchmove', (e) => {
            this.getTouchPos(e); //Quand la doigt bouge
            this.drawLine(this.drawX, this.drawY); //on dessine
            e.preventDefault(); //Empéche l'evenement par défaut d'être pris en compte  
        }, false);


        this.canva.addEventListener('touchend', (e) => {
            this.lastX = -1; //Recupération de la derniere position - 1
            this.lastY = -1;
        }, false);


        this.erase = () => { // Pour effacer le canvas
            $('#effaceCanva').on('click', () => {
                this.ctx.clearRect(0, 0, canva.width, canva.height); // Efface le contenu du canvas
            });
        }
        this.init();
    }
}
