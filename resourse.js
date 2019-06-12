class RedResource {
    
    constructor() {
        this.el = document.createElement('div');
        this.x = 100 + "px";
        this.y =  100 + "px";
        this.el.className = "redresource";
        document.body.insertBefore(this.el, document.body.firstChild);
    }

    draw() {
        this.el.style.top = this.y;
        this.el.style.left = this.x;
    }
}

class EnemyRedResource {
    
    constructor() {
        this.el = document.createElement('div');
        this.x = (document.body.offsetWidth) - 100 + "px";
        this.y =  100 + "px";
        this.el.className = "redresource";
        document.body.insertBefore(this.el, document.body.firstChild);
    }

    draw() {
        this.el.style.top = this.y;
        this.el.style.left = this.x;
    }
}