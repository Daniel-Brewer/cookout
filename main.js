const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];
function grill (currentObject) {
	for (let i = 0; i < currentObject.length; i++) {
		let foodToCook = uncookedFood[i];
        // Modify the food so that it is cooked
        foodToCook.cooked = true;
console.log("foodToCook", foodToCook);
        // Put the cooked food into the appropriate array
        cookedFood.push(foodToCook);
}
}

grill(uncookedFood)
console.log(cookedFood);



// Your task is to iterate over the array of uncookedFood and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.