var a = Number(prompt("Podaj ocenę."))
switch(a){
    case 1: document.write("Niedostateczny"); break;
    case 2: document.write("Dopuszczający"); break;
    case 3: document.write("Dostateczny"); break;
    case 4: document.write("Dobry"); break;
    case 5: document.write("Bardzo dobry"); break;
    case 6: document.write("Celujący"); break;
    default: document.write("Nie ma takiej oceny"); break;

}