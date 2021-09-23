var a = Number(prompt("Jaki jest dzisiaj dzień tygodnia?"));
if (a>=1&&a<=5){
    document.write("Dzień roboczy")
}
else if (a==6||a==7){
    document.write("Weekend")
}
else {
    document.write("Błąd")
}