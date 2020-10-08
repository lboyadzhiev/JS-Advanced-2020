/*
    6. System Components
You will be given a register of systems with components and subcomponents. You need to build an ordered database of all the elements that have been given to you.
The elements are registered in a very simple way. When you have processed all of the input data, you must print them in a specific order. For every System you must print its components in a specified order, and for every Component, you must print its Subcomponents in a specified order.
The Systems you’ve stored must be ordered by amount of components, in descending order, as first criteria, and by alphabetical order as second criteria. The Components must be ordered by amount of Subcomponents, in descending order.
Input
The input comes as array of strings. Each element holds data about a system, a component in that system, and a subcomponent in that component. If the given system already exists, you should just add the new component to it. If even the component exists, you should just add the new subcomponent to it. The subcomponents will always be unique. The input format is:
“{systemName} | {componentName} | {subcomponentName}” 
All of the elements are strings, and can contain any ASCII character. The string comparison for the alphabetical order is case-insensitive.
Output
As output you need to print all of the elements, ordered exactly in the way specified above. The format is:
“{systemName}
 |||{componentName}
 |||{component2Name}
 ||||||{subcomponentName}
 ||||||{subcomponent2Name}
 {system2Name} 
 ...”
*/

function solve(input) {
   let components = {};

   input.map(x => {
      let [system, component, subcomponent] = x.split(' | ');

      if (!components.hasOwnProperty(system)) {
         components[system] = {};
      }
      let info = components[system];

      if (!info.hasOwnProperty(component)) {
         info[component] = [];
      }
      info[component].push(subcomponent);
   });

   Object.entries(components).sort((a, b) => {
      return Object.entries(b[1]).length - Object.entries(a[1]).length || a[0].localeCompare(b[0])
   }).map(x => {
      console.log(x[0]);
      Object.entries(x[1]).sort((a, b) => {
         return b[1].length - a[1].length;
      }).map(y => {
         console.log(`|||${y[0]}`);
         y[1].map(el => {
            console.log(`||||||${el}`);
         })
      })
   })
}

solve(
   [
      'SULS | Main Site | Home Page',
      'SULS | Main Site | Login Page',
      'SULS | Main Site | Register Page',
      'SULS | Judge Site | Login Page',
      'SULS | Judge Site | Submittion Page',
      'Lambda | CoreA | A23',
      'SULS | Digital Site | Login Page',
      'Lambda | CoreB | B24',
      'Lambda | CoreA | A24',
      'Lambda | CoreA | A25',
      'Lambda | CoreC | C4',
      'Indice | Session | Default Storage',
      'Indice | Session | Default Security'
   ]
)