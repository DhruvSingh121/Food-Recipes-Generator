const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".searchInput");
const recipeContainer = document.querySelector(".recipe-container");

// function to get recipies
const fetchRecipies = async (query) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const response = await data.json();
  console.log(response);
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchValue = searchInput.value.trim();
  fetchRecipies(searchValue);
});
