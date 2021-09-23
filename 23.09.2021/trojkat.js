function trojkat(formularz){
    if(formularz.a.value==formularz.b.value&&formularz.b.value==formularz.c.value){
        alert("Trójkąt równoboczny")
    }
    else if(formularz.a.value==formularz.b.value||formularz.b.value==formularz.c.value||formularz.a.value==formularz.c.value){
        alert("Trójkąt równoramienny")
    }
    else if(formularz.a.value!=formularz.b.value&&formularz.b.value!=formularz.c.value){
        alert("Trójkąt różnoboczny")
    }
}