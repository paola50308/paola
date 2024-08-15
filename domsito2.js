function calcular(){

    let nombre=document.getElementById("name1").value;
    let edad=parseInt(document.getElementById("edad1").value);
    var genero = document.querySelector('input[name="sexo"]:checked').value;

//##############################################################################
    var pasatiempo=document.getElementById('depo1').checked;//
    var pasatiempoSeleccionado=pasatiempo.value;

    //obteniendo el estado civil

    var estadoCivil=document.getElementById('estadito');
    var valorestado=estadoCivil.value;

    //imprimiendo el estado civil
    alert("El estado civil es "+valorestado);

    let aumento;
    aumento=edad+10;
    if (pasatiempo==true) {

    if(genero=="masculino")
         {
    alert("excelente caballero, su edad aumentada es:"+aumento+"\n"+"A usted le encanta dormir");
    }
    else {
        alert("excelente señorita, su edad aumentada es:"+aumento+"\n"+"A usted le encanta dormir");
    }
}
else{
    if (document.getElementById('depo2').checked) {

        if(genero=="masculino")
             {
        alert("excelente caballero, su edad aumentada es:"+aumento+"\n"+"A usted le encanta bailar");
        }
        else {
            alert("excelente señorita, su edad aumentada es:"+aumento+"\n"+"A usted le encanta bailar");
        }
    }
        else {
            alert("Seleccine un pasatiempo");
    }
    }//fin calcular 


    
    var checkbox1,checkbox2;

    function seleccionar() {
        checkbox1=document.getElementById("depo1");
        checkbox2=document.getElementById("depo2");

        checkbox1.onclick = function(){
        if(checkbox1.checked == true){
        
       
        checkbox2.checked=false; }
        }
        checkbox2.onclick = function(){
        if(checkbox2.checked == true){
            
         checkbox1.checked=false; 
        }
        }
}
    
    