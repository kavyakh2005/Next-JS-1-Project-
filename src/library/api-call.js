const getReceipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  if (response) {
    const data = await response.json();
    return data.recipes;
  }
};

export { getReceipes };

// async function getReceipes(){
//   const response = await fetch("https://dummyjson.com/recipes");
//   if(response){
//     const data = await response.json();
//     return data.recipes
//   }
// }

const getRecipeByID = async (id) => {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (response) {
    const data = await response.json();
    return data;
  }
};

export { getRecipeByID };
