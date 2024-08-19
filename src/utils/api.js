const API_ID = process.env.REACT_APP_API_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

export function fetchRecipes(food = "") {
  food = food.trim();
const ID = "97a2f5f3"
const KEY = "8454b59f84927c427301ad65a832f474	"
  return fetch(
    `https://api.edamam.com/search?q=${food}&app_id=${ID}&app_key=${KEY}`
  )
    .then(res => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe));
}
