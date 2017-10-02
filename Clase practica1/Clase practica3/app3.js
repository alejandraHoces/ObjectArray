//Sort (+ Binary Search)
var numbers=[4,2,3,1];

var selectionSort = function (arrayNumb){
for (var i=0; i< 3 ; i++){
  //if ( numbers[i]>numbers[i+1] ){
    var min = arrayNumb[i];
    //numbers[i]=numbers[i+1];
for (var j=i+1;j<3 ; j++)
  if(arrayNumb[j]<arrayNumb[min])
    min=j;
    var auxiliar=arrayNumb[min];
    arrayNumb[min]=arrayNumb[i];
    arrayNumb[i]=auxiliar;




  }
return arrayNumb
 }
console.log(selectionSort(numbers));
