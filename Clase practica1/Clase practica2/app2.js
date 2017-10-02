//Scorekeeper 2
//Escribe un objeto que contenga el nombre de tus amigas con puntaje 0
var scores={
  merilyn:0,
  yosmery:0,
  claudia:0
};
//funcion que asigna el puntaje y suma el puntaje ganado
var assignmentOfPoints = function (name,points){

scores[name]= scores[name]+points;
return scores=scores;

}
console.log(scores);

assignmentOfPoints('claudia',400);
assignmentOfPoints('yosmery',300);
assignmentOfPoints('merilyn',200);

//sumando el puntaje
var addingPoints = function (objet){
  var add = scores['merilyn']+scores['yosmery']+scores['claudia'];
  console.log(add);
}
addingPoints(scores)//900
