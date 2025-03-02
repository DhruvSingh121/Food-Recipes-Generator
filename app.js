const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".searchInput");
const recipeContainer = document.querySelector(".recipe-container");

// function to get recipies
const fetchRecipies = async (query) => {
  recipeContainer.innerHTML = "<h2>Fetching Recipes...</h2>";
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const response = await data.json();

  recipeContainer.innerHTML = "";
  response.meals.forEach((meal) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
    <img src ="${meal.strMealThumb}">
    <h3>${meal.strMeal}</h3>
    <p>${meal.strArea} Dish</p>
    <p>${meal.strCategory}</p>
    `;
    const button = document.createElement("button");
    button.textContent = "View Recipe";
    recipeDiv.appendChild(button);
    // button.addEventListener("click",()=>{

    // })
    recipeContainer.appendChild(recipeDiv);
  });
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchValue = searchInput.value.trim();
  fetchRecipies(searchValue);
});
