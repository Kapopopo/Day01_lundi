let hamSands = 0
let tunaSands = 0
let vegeSands = 0

while (breadCount >= 2 && hamCount >= 1) {
    breadCount -= 2;
    hamCount -= 1;
    hamSands += 1;
    }
    while (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2) { 
    breadCount -= 2;
    tunaCount -= 1;
    saladCount -= 2;
    tunaSands += 1;
    }
    while (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2) { 
    breadCount -= 2;
    saladCount -= 1;
    tomatoCount -= 2;
    vegeSands += 1;
    }

   displayThisText("Ham Sandwiches " + hamSands)
   displayThisText("Tuna Sandchwiches " + tunaSands)
   displayThisText("Vegetarian Sandchwiches " + vegeSands)

   displayIngredients(breadCount + hamCount + tunaCount + saladCount + tomatoCount)