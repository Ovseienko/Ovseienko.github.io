function Ghost() {
    var colors = ['white', "yellow", "purple", "red"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
}