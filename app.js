//Inicio pagina
document.write("<div><h1>Coloreado de grafos</h1><h3>Oscar Noe Ortiz Barba <br> Análisis y diseño de algoritmos</h3></div><br>");
//clase vertice
function vertice(id_nodo, nombre, grado, gradoError, color, ady){
  this.id_nodo = id_nodo;
  this.nombre = nombre;
  this.gradoError = gradoError;
  this.color = color;
  this.ady = ady;
  this.grado = ady.length;
}

//Clase grafo
function grafo(v, msj){
  this.v = v;
  document.write(msj);
}

function agregarGradoError(g){

}

function mostrarGrafo(g){
  console.log(g.v);

  document.write("<table><th>id_nodo</th><th>Nombre</th><th>Grado</th><th>Grado de error</th><th>Color</th><th>Adyacencia(id)</th>");

  for(var i = 0; i<g.v.length; i++){
    document.write("<tr><td>" + g.v[i].id_nodo +"</td>");
    document.write("<td>" + g.v[i].nombre + "</td>");
    document.write("<td>" + g.v[i].grado + "</td>");
    document.write("<td>" + g.v[i].gradoError + "</td>");
    document.write("<td>" + g.v[i].color + "</td>");
    document.write("<td>");
    for(var j = 0;j<g.v[i].ady.length;j++){
      document.write(g.v[i].ady[j] + " ");
    }
    document.write("</td>");
    document.write("</tr>");
  }
  document.write("</table>");
}

/*Caso 1 de grafo*/
//creacion de vertices
var vG1 = [];
vG1.push(new vertice(0, "ID", 0, 0, "No asignado", [1, 2, 3, 4, 5, 7]));
vG1.push(new vertice(1, "WA", 0, 0, "No asignado", [0, 4]));
vG1.push(new vertice(2, "MT", 0, 0, "No asignado", [0, 3]));
vG1.push(new vertice(3, "WY", 0, 0, "No asignado", [0, 2, 5, 6]));
vG1.push(new vertice(4, "OR", 0, 0, "No asignado", [0, 1, 7, 8]));
vG1.push(new vertice(5, "UT", 0, 0, "No asignado", [0, 3, 6, 7, 9]));
vG1.push(new vertice(6, "CO", 0, 0, "No asignado", [3, 5, 10]));
vG1.push(new vertice(7, "NV", 0, 0, "No asignado", [0, 4, 5, 8, 9]));
vG1.push(new vertice(8, "CA", 0, 0, "No asignado", [4, 7, 9]));
vG1.push(new vertice(9, "AZ", 0, 0, "No asignado", [5, 7, 8, 10]));
vG1.push(new vertice(10, "NM", 0, 0, "No asignado", [6, 9]));

var g1 = new grafo(vG1, "<p>Grafo generado caso 1:<p><br>");

mostrarGrafo(g1);

document.write("<br><p>Coloreado de nodos:</p><br>");

//generamos el nuevo grafo ordenado

g1 = new grafo(this.g1.v.sort(((a, b) => b.grado - a.grado)), "");

agregarGradoError(g1);

mostrarGrafo(g1);
