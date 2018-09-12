'use strict';

var rootData = require('./mini.json');

var nodecount = 1;

var edges = [];
var defNodes = [];


const specialTypes = ['double', 'float', 'int32', 'int64', 'uint32', 'uint64', 'sint32', 'sint64',
                   'fixed32', 'fixed64', 'sfixed32', 'sfixed64', 'bool', 'string', 'bytes']


function recurse(data){
  // All fields are nodes. These nodes are numbered sequentially. defNodes are named.
  if (data.fields){
    for (var field of data.fields){
      nodecount++;
      console.log( `${nodecount} [label="${field.name}"];`);

      // If this is a message type, add an edge
      if (specialTypes.indexOf(field.type) === -1){
        let color;

        if (field.rule === "optional"){
          color = "grey"
        }
        else if (field.rule === "repeated"){
          color = "blue"
        }
        else {
          color = "black"
        }
        edges.push(`${nodecount} ->  ${field.type} [color="${color}"];`);
      }
    }
  }

  // Any messages are subgraphs
  if (data.messages){
    for (var message of data.messages){
      console.log(`  subgraph cluster_${message.name} {\n  label="${message.name}";`);
            recurse(message)
      console.log('}')
    }
  }
}



// Print the prolog
console.log("digraph {");

// Recursively print the body
recurse(rootData);

// Add in all those edges
for (var edge of edges){
  console.log(edge);
}

// Print the epilog
console.log("}");

/*
http://graphs.grevian.org/graph/5097838207827968


digraph {
    subgraph cluster_0 {
        label="Subgraph A";
        a;
        b;
        c;
        subgraph cluster_2 {
               label="inner";
               x;
               y;
        }
    }
f;
    subgraph cluster_1 {
        label="Subgraph B";
d;
e;

    }

a -> b;
}
*/

// https://stackoverflow.com/a/2012106/4184410
