//Inicio pagina
document.write("<div><h1>Coloreado de grafos</h1><h3>Oscar Noe Ortiz Barba <br> Análisis y diseño de algoritmos</h3></div><br>");
//clase vertice
function vertice(id_nodo, nombre, grado, gradoError, color){
  this.id_nodo = id_nodo;
  this.nombre = nombre;
  this.grado = grado;
  this.gradoError = gradoError;
  this.color = color;
}

//Clase grafo
function grafo(v, msj){
  this.v = v;
  document.write(msj);
}

function mostrarGrafo(g){
  console.log(g.v);

  document.write("<table><th>id_nodo</th><th>Nombre</th><th>Grado</th><th>Grado de error</th><th>Color</th>");

  for(var i = 0; i<g.v.length; i++){
    document.write("<tr><td>" + g.v[i].id_nodo +"</td>");
    document.write("<td>" + g.v[i].nombre + "</td>");
    document.write("<td>" + g.v[i].grado + "</td>");
    document.write("<td>" + g.v[i].gradoError + "</td>");
    document.write("<td>" + g.v[i].color + "</td></tr>");
  }
  document.write("</table>");
}

/*Caso 1 de grafo*/
//creacion de vertices
var vG1 = [];
vG1.push(new vertice(0, "ID", 0, 0, "No asignado"));
vG1.push(new vertice(1, "WA", 0, 0, "No asignado"));
vG1.push(new vertice(2, "MT", 0, 0, "No asignado"));
vG1.push(new vertice(3, "WY", 0, 0, "No asignado"));
vG1.push(new vertice(4, "OR", 0, 0, "No asignado"));
vG1.push(new vertice(5, "UT", 0, 0, "No asignado"));
vG1.push(new vertice(6, "CO", 0, 0, "No asignado"));
vG1.push(new vertice(7, "NV", 0, 0, "No asignado"));
vG1.push(new vertice(8, "CA", 0, 0, "No asignado"));
vG1.push(new vertice(9, "AZ", 0, 0, "No asignado"));
vG1.push(new vertice(10, "NM", 0, 0, "No asignado"));

var g1 = new grafo(vG1, "<p>Grafo generado caso 1:<p><br>");

mostrarGrafo(g1);
