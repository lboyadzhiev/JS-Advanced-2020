/*
    4. Store Catalogue
You have to create a sorted catalogue of store products. You will be given the products’ names and prices. You need to order them by alphabetical order. 
Input
The input comes as array of strings. Each element holds info about a product in the following format:
“{productName} : {productPrice}”
The product’s name will be a string, which will always start with a capital letter, and the price will be a number. You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
Output
As output you must print all the products in a specified format. They must be ordered exactly as specified above. The products must be divided into groups, by the initial of their name. The group’s initial should be printed, and after that the products should be printed with 2 spaces before their names. For more info check the examples.
*/

function solve(input) {
   let catalogue = {};

   input.map(x => {
      let [name, price] = x.split(' : ');
      price = Number(price);
      let initial = name[0];

      if (!catalogue.hasOwnProperty(initial)) {
         catalogue[initial] = {};
      }

      let products = catalogue[initial];
      products[name] = price;
   })

   Object.keys(catalogue)
      .sort((a, b) => a.localeCompare(b))
      .map(x => {
         console.log(x);
         Object.keys(catalogue[x])
            .sort((a, b) => a.localeCompare(b))
            .map(y => {
               console.log(` ${y}: ${catalogue[x][y]}`)
            })
      });
}

solve(
   [
      'Appricot : 20.4',
      'Fridge : 1500',
      'TV : 1499',
      'Deodorant : 10',
      'Boiler : 300',
      'Apple : 1.25',
      'Anti-Bug Spray : 15',
      'T-Shirt : 10'
   ]
);