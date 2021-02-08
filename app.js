
const searchFood = () => {

    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))


}

const displayFood = food => {  

  const foodContainer = document.getElementById('food-container');    
    foodContainer.innerHTML = '';

    food.forEach(item => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'single-result'
        foodDiv.innerHTML = ` 
        <img src =" ${item.strMealThumb}" onclick="getRecipe('${item.idMeal}')";>
        <h6 onclick="getRecipe('${item.idMeal}')";>${item.strMeal}</h6>    
            
        `;
        foodContainer.appendChild(foodDiv);

    });



}

const getRecipe = foodRcp => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodRcp}`
    fetch(url)
        .then(res => res.json())
        .then(data => detailFoodInfo(data));

}

const detailFoodInfo = data => {
    console.log(data)
    const rcpItem = data.meals[0];
    const recipeDiv = document.getElementById('foodRcp');
    recipeDiv.innerHTML = `
       <img src ="${rcpItem.strMealThumb}"> 
       <h4> Meal: ${rcpItem.strMeal}  
       <h4> Area:${rcpItem.strArea}</h4>
       <h4> Category:${rcpItem.strCategory}</h4>
       <h4> Ingredient:</h4>
       <p>${rcpItem.strIngredient1}</p> 
       <p> ${rcpItem.strIngredient2}</p> 
       <p> ${rcpItem.strIngredient3}</p> 
       <p> ${rcpItem.strIngredient4}</p> 
       <p> ${rcpItem.strIngredient5}</p> 
       <p> ${rcpItem.strIngredient6}</p> 
       <p> ${rcpItem.strIngredient7}</p> 
       <p> ${rcpItem.strIngredient8}</p> 
       <p> ${rcpItem.strIngredient9}</p> 
       <p> ${rcpItem.strIngredient10}</p> 
         
    
    `
}



