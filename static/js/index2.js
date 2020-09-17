class Typer {
    constructor() {
        this.text = null;
        this.accessCountimer = null;
        this.index = 0;
        this.speed = 2;
        this.file = "";
        this.accessCount = 0;
        this.deniedCount = 0;
    }

    init = () => {
        this.accessCountimer = setInterval(() => {
            this.updLstChr();
        }, 5000);
    }

    updLstChr = () => {
        //document.getElementById(console).innerHTML = '456'
        const cont = this.content();
        console.log(cont)
    }

    content = () => {
        return document.getElementById("console").innerHTML
    }
}

window.onload = () => {
    const typer = new Typer()
    typer.init()
}