class Typer {
  constructor() {
    this.text = "";
    this.accessCountimer = null;
    this.index = 0;
    this.speed = 2;
    this.file = "";
  }

  init = () => {
    this.accessCountimer = setInterval(() => {
      this.updLstChr();
    }, 500);

    // read a local file
    fetch(this.file)
      .then((response) => response.text())
      .then((text) => {
        this.text = text;
      });
  };

  updLstChr = () => {
    const cont = this.content();

    // draw the cursor
    if (cont.substring(cont.length - 1) == "|") {
      document.getElementById("console").innerHTML = document
        .getElementById("console")
        .innerHTML.substring(0, cont.length - 1);
    } else {
      this.write("|");
    }
  };

  content = () => {
    return document.getElementById("console").innerHTML;
  };

  write = (str) => {
    document.getElementById("console").innerHTML =
      document.getElementById("console").innerHTML + str;
  };

  addText = () => {
    if (this.text) {
      const cont = this.content();

      this.index += this.speed;
      const text = this.text.substring(0, this.index);

      document.getElementById("console").innerHTML = text;
    }
  };
}
