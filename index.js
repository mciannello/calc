// var  botones = ['(',')','x!','x²', '√', '√', 'sin','cos', 'tg', 'x³', 'raiz cub', 'xn', '1', '2', '3', '/', '%', 'In', '4', '5', '6', '*', 'log', 'e', '7', '8', '9', '-',
// 'AC', '=', '.', '0' ,'𝜋', '+', 'MR',''];


var  botones = ['(', 'sen', '1', '4','7','.',')','cos', '2', '5','8','0' , 'x!','tg','3', '6', '9', '𝜋','x²','x³','/','*','-',  '+','√', '³√', '%','log','AC','MR', '√', 'xⁿ',  'In',  'e', '='];
let nombres= ['par1', 'sen', 'uno', 'cuatro','siete','punto','par2','cos', 'dos', 'cinco','ocho','cero' , 'x!','tg','tres', 'seis', 'nueve', 'pi','cuadrado','cubo','dividido','por','menos',  'mas','raiz', 'cubica', 'porcentaje','log','AC','MR', 'raiz2', 'alan',  'In',  'e', 'igual'];
let boto="";
let resultado= document.querySelector('.resultado');


    // for (let i = 0; i <= botones.length ; i++ ){
    //     document.getElementById("botonera").innerHTML = boton;
    //        if (botones[i] !="=") {
    //         boton += "<button>"+ botones[i] +"</button>";
    //       }else{
    //         boton += "<button class='igual'>"+ botones[i] +"</button>";
    //       }
          
    // }

   
/*     botones.forEach(function(boton){
      if (boton !=="=") {
                 boto += "<button id="+boton+">"+ boton +"</button>";
                 
              }else {
                boto += "<button class='igual'>"+ boton +"</button>";  
              }
              document.getElementById("botonera").innerHTML = boto;
         
          });
 */
 const botonera =document.querySelector(".botonera");   
   botones.forEach ((boton,index) => {
      const li =document.createElement ('li');
       // console.log(index);
        li.setAttribute('id',nombres [index] );
       li.textContent =boton;
       botonera.appendChild (li);
       li.addEventListener('click', function(){
        resultado.innerHTML =  boton;
       })
       });
      

