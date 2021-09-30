do{
    procent = parseInt(prompt("Podaj procent zawartości (0-100): ",""))
} while (procent < 0 | procent > 100 | isNaN(procent))

slupek = "<font color=\"00FF00\">"
for (i = 0; i < procent; i++){
   slupek += "|"
}
slupek +="</font> <font color=\"0000FF\">"
for ( i = procent; i < 100; i++){
    slupek +="|"
}
slupek+="</font>"
document.write("<br>"+ slupek+" = "+ procent+ "%")