module.exports.part1 = (data) => {
  let foods = getFoods(data);
  let ingredients = getIngredientsSet(foods);
  let allergens = getAllergens(foods, ingredients);
  determineAllergenIngredientMapping(foods, allergens);
  const nonAllergicIngredients = getNonAllergicIngredients(
    ingredients,
    allergens
  );
  return countAppearancesOfNonAllergicIngredients(
    foods,
    nonAllergicIngredients
  );
};

module.exports.part2 = (data) => {
  return data.length;
};

function getFoods(data) {
  return data
    .map((food) => food.split(" (contains "))
    .map((food) => ({
      ingredients: new Set(food[0].split(" ")),
      allergens: new Set(food[1].slice(0, -1).split(", ")),
    }));
}

function getIngredientsSet(foods) {
  const ingredients = new Set();
  for (let food of foods) {
    for (let ingredient of food.ingredients) {
      ingredients.add(ingredient);
    }
  }
  return ingredients;
}

function getAllergens(foods, ingredients) {
  const allergens = {};
  for (let food of foods) {
    for (let allergen of food.allergens) {
      allergens[allergen] = new Set(ingredients);
    }
  }
  return allergens;
}

function determineAllergenIngredientMapping(foods, allergens) {
  for (let [allergen, ingredients] of Object.entries(allergens)) {
    for (let food of foods) {
      if (!food.allergens.has(allergen)) {
        continue;
      }
      for (let ingredient of new Set(ingredients)) {
        if (!food.ingredients.has(ingredient)) {
          ingredients.delete(ingredient);
        }
      }
    }
  }
}

function getNonAllergicIngredients(ingredients, allergens) {
  let nonAllergicIngredients = new Set(ingredients);
  for (let ingredients of Object.values(allergens)) {
    for (let ingredient of ingredients) {
      nonAllergicIngredients.delete(ingredient);
    }
  }
  return nonAllergicIngredients;
}

function countAppearancesOfNonAllergicIngredients(
  foods,
  nonAllergicIngredients
) {
  let appearances = 0;
  for (let food of foods) {
    for (let ingredient of food.ingredients) {
      appearances += nonAllergicIngredients.has(ingredient);
    }
  }
  return appearances;
}
