var yellow = document.querySelectorAll("a[href*='com'], a[href*='http']");
for(i=0;i<yellow.length;i++){
  yellow[i].className = "external";
}
document.querySelector("a[href*='internal']").classList.remove("external");
