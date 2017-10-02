//EJERCICIO1-SUM

//creando array
/*var range = function (start ,end ){
  var inicioFin=[];
  var a =end-start;
  for (var i=0; i<=a;i++){
  inicioFin.push(start+i) ;
  }
  return inicioFin
}
console.log(range(1,10))

//sumando los valos del array
var sum = function(array){
var total=0;
  for(var j=0;j<array.length;j++){
    total += array[j];
  }
  return total
}
console.log(sum(range(1,10)));*/

// modificar la funcion de rango

/*var range = function (start ,end, step ){
  var inicioFin=[];
    var result= 0;
  var a =end-start;
  for (var i=0; i<=a;i++){

  inicioFin.push(start+result) ;
  result+=step;
  }
  return inicioFin
}
console.log(range(8,10,2));*/



var range = function (start ,end ,step){
  if (step>1){
var inicioFin=[];
  var a =end-start;
  for (var i=0; i<=a;i+=step){
  inicioFin.push(start+i) ;
  }
  //return inicioFin
}

  else if (start>end){
    var inicioFin=[];
      var a =start-end;
      for (var j=0; j<a;j=j+step){
      inicioFin.push(start-j) ;
      }
      //return inicioFin
    }
    else {
      var inicioFin=[];
        var a =end-start;
        for (var i=0; i<=a;i++){
        inicioFin.push(start+i) ;
        }
      //  return inicioFin

    }
    return inicioFin
}

//console.log(range(1,10));
//console.log(range(1,10,2));
console.log(range(5,1,2));//5,4,3,2 (star-0, star-1,star-2,star-if=end)
//console.log(range(9,2,0));



//console.log (points(scores));
/*var dog=[1,2,3];
var brothers=[1,2];

var areArrayisSame =function (array1,arra2){
  if(array1===array2){
    console.log(true);
  }else{
    console.log(false);
  }
}
areArrayisSame(dog,brothers)*/
