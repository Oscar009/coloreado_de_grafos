//Inicio pagina
document.write(
  "<br><div><h1>Coloreado de grafos</h1><h3>Oscar Noe Ortiz Barba <br> Análisis y diseño de algoritmos</h3></div><br>"
);
//clase vertice
function vertice(id_nodo, nombre, gradoError, color, ady) {
  this.id_nodo = id_nodo;
  this.nombre = nombre;
  this.gradoError = gradoError;
  this.color = color;
  this.ady = ady;
  this.grado = ady.length;
}

//Clase grafo
function grafo(v, msj) {
  this.v = v;
  document.write(msj);
}

//algoritmo coloreado de Grafos
function coloreadoGrafo(g, numeroColores) {
  //limpieza de atributo gradoError por si ya se uso el mismo grafo pero con diferente entrada de color
  for (var i = 0; i < g.v.length; i++) g.v[i].color = "No asignado";
  //Ordenamos el grafo de mayor a menor por grado
  g.v.sort((a, b) => b.grado - a.grado);
  //Agregamos grado de error para cada nodo
  for (var i = 0; i < g.v.length; i++) {
    //grado de nodo + # de vertices adyacentes con igual o mayor grado
    g.v[i].gradoError = g.v[i].grado;
    //ciclo para nodos adyacentes y su grado de error - sacar lista adyacente
    for (var j = 0; j < g.v[i].ady.length; j++) {
      //console.log(g.v[i].ady[j]);
      var aux = g.v[i].ady[j]; //valor de la lista de adyacencia
      for (var k = 0; k < g.v.length; k++) {
        //si el nodo del valor de la lista de adyacencia tiene mayor o igual grado sumar
        if (g.v[k].id_nodo == aux && g.v[k].grado >= g.v[i].grado)
          g.v[i].gradoError += 1;
      }
      //fin de lista de adyacencia
    }
  }
  //si el grado de error se le resta uno y es igual al grado significa que es unico
  for (var i = 0; i < g.v.length; i++) {
    var estadistica = 0;
    for (var j = 0; j < g.v.length; j++) {
      if (g.v[i].grado == g.v[j].grado) estadistica++;
    }
    if (estadistica == 1) g.v[i].gradoError = "-";
  }
  //asignacion de colores
  //orden de colores en arreglo

  var colores = ["Blue", "Red", "Green", "Yellow"];
}

function mostrarGrafo(g) {
  document.write(
    "<table><th>id_nodo</th><th>Nombre</th><th>Grado</th><th>Grado de error</th><th>Color</th><th>Adyacencia(id)</th>"
  );

  for (var i = 0; i < g.v.length; i++) {
    document.write("<tr><td>" + g.v[i].id_nodo + "</td>");
    document.write("<td>" + g.v[i].nombre + "</td>");
    document.write("<td>" + g.v[i].grado + "</td>");
    document.write("<td>" + g.v[i].gradoError + "</td>");
    document.write("<td>" + g.v[i].color + "</td>");
    document.write("<td>");
    for (var j = 0; j < g.v[i].ady.length; j++) {
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
vG1.push(new vertice(0, "ID", 0, "No asignado", [1, 2, 3, 4, 5, 7]));
vG1.push(new vertice(1, "WA", 0, "No asignado", [0, 4]));
vG1.push(new vertice(2, "MT", 0, "No asignado", [0, 3]));
vG1.push(new vertice(3, "WY", 0, "No asignado", [0, 2, 5, 6]));
vG1.push(new vertice(4, "OR", 0, "No asignado", [0, 1, 7, 8]));
vG1.push(new vertice(5, "UT", 0, "No asignado", [0, 3, 6, 7, 9]));
vG1.push(new vertice(6, "CO", 0, "No asignado", [3, 5, 10]));
vG1.push(new vertice(7, "NV", 0, "No asignado", [0, 4, 5, 8, 9]));
vG1.push(new vertice(8, "CA", 0, "No asignado", [4, 7, 9]));
vG1.push(new vertice(9, "AZ", 0, "No asignado", [5, 7, 8, 10]));
vG1.push(new vertice(10, "NM", 0, "No asignado", [6, 9]));

let g1 = new grafo(vG1, "<p>[*]Grafo generado caso 1, 2, 3, 4:<p><br>");

mostrarGrafo(g1);

document.write(
  "<br><p>->Coloreado caso 1:</p><br><p>Numero de colores: 1</p><br>"
);

coloreadoGrafo(g1, 1);

mostrarGrafo(g1);

/*Caso 2 de grafo*/
//se usan mismos nodos de grafo 1

document.write(
  "<br><p>->Coloreado caso 2:</p><br><p>Numero de colores: 2</p><br>"
);

coloreadoGrafo(g1, 2);

mostrarGrafo(g1);

/*Caso 3 de grafo*/
//se usan mismos nodos de grafo 1

document.write(
  "<br><p>->Coloreado caso 3:</p><br><p>Numero de colores: 3</p><br>"
);

coloreadoGrafo(g1, 3);

mostrarGrafo(g1);

/*Caso 4 de grafo*/
//se usan mismos nodos de grafo 1

document.write(
  "<br><p>->Coloreado caso 4:</p><br><p>Numero de colores: 4</p><br>"
);

coloreadoGrafo(g1, 4);

mostrarGrafo(g1);

/*Caso 5 de grafo*/
//creación de vertices
var vG2 = [];

vG2.push(new vertice(0, "A", 0, "No asignado", [1, 3, 4, 5, 6]));
vG2.push(new vertice(1, "B", 0, "No asignado", [0, 2, 3, 4, 5]));
vG2.push(new vertice(2, "C", 0, "No asignado", [1, 4, 5]));
vG2.push(new vertice(3, "D", 0, "No asignado", [0, 1, 4, 5, 6]));
vG2.push(new vertice(4, "E", 0, "No asignado", [0, 1, 2, 3, 6]));
vG2.push(new vertice(5, "F", 0, "No asignado", [0, 1, 2, 3, 6]));
vG2.push(new vertice(6, "G", 0, "No asignado", [0, 3, 4, 5]));

let g2 = new grafo(vG2, "<p>[*]Grafo generado caso 5:<p><br>");

mostrarGrafo(g2);

document.write(
  "<br><p>->Coloreado caso 5:</p><br><p>Numero de colores: 4</p><br>"
);

coloreadoGrafo(g2, 4);

mostrarGrafo(g2);

document.write("<br><br>");
