// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
function insertElementAtStart(element_name){
    if (shoppingCart.includes(element_name)){
        console.log(element_name, "Already added")
        console.log(shoppingCart);
    } else {
        let index = 0;

        shoppingCart.splice(index, 0, element_name);
        console.log(shoppingCart);
    }
}

insertElementAtStart("Meat");


// add Sugar at the end of your shopping cart if it has not been already added
function insertElementAtEnd(element_name){
    if (shoppingCart.includes(element_name)){
        console.log(element_name, "Already added");
        console.log(shoppingCart);
    } else {
        shoppingCart.push(element_name);
        console.log(shoppingCart);
    }
}

insertElementAtEnd("Sugar");

// remove 'Honey'
function removeElement(element_name){
    if (shoppingCart.includes(element_name)){
        let index = shoppingCart.indexOf(element_name);
        shoppingCart.splice(index,1);
        console.log(shoppingCart);
    } else {
        console.log(element_name, "Not found")
        console.log(shoppingCart);
    }
}

removeElement("Honey");

// modify Tea to 'Green Tea'
function modifyElement(element_name, element_Updatedname){
    if (shoppingCart.includes(element_name)){
        let index = shoppingCart.indexOf(element_name);
        shoppingCart.splice(index, 1, element_Updatedname);
        console.log(shoppingCart);
    } else {
        console.log(element_name, "Not found");
        shoppingCart.push(element_Updatedname);
        console.log(shoppingCart);
    }
}

modifyElement("Tea", "Green Tea");