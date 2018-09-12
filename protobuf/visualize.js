// Run this with node visualize.js | dot -Tpng > out.png

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
      let color = field.rule === "repeated" ? 'blue' : 'black';


      // If this is a message type, draw an arrow
      if (specialTypes.indexOf(field.type) === -1){
        console.log( `${nodecount} [label="${field.name}", color="${color}"];`);
        edges.push(`${nodecount} ->  ${field.type}_dummy [lhead=${field.type}, color="${color}"];`);
      }
      // Otherwise list the type
      else {
        console.log( `${nodecount} [label="${field.name}\n(${field.type})", color="${color}"];`);
      }
    }
  }

  // Any messages are subgraphs
  if (data.messages){
    for (var message of data.messages){
      console.log(`  subgraph cluster_${message.name} {\n  label="${message.name}";\n${message.name}_dummy [style=invisible];`);
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


// http://graphs.grevian.org/graph/5097838207827968

// https://stackoverflow.com/a/2012106/4184410
