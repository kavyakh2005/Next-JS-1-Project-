import RecipeCard from "@/Components/card";
import { getReceipes } from "@/library/api-call";

export default async function RecipesPage() {
  const recipes = await getReceipes();
  // console.log(recipes);
  
  const topRecipes = recipes.slice(0, 4);
  const featureRecipes = recipes.slice(4, 8);
  const trendingRecipes = recipes.slice(8, 12);
  console.log(topRecipes, featureRecipes, trendingRecipes);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 1) Top Section (Text + Large Image) */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to My Recipes</h1>
          <p className="text-gray-600 mb-4">
            Discover delicious recipes from around the world. Easy to cook,
            tasty to eat!
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Explore Now
          </button>
        </div>
        <div>
          <img
            src="https://picsum.photos/600/400"
            alt="Top Recipe"
            className="rounded-xl shadow-lg w-full h-96 object-cover"
          />
        </div>
      </section>

      {/* 2) Top Recipes */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Top Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {topRecipes.map((recipes) => (
            <RecipeCard key={recipes.id} name={recipes.name} image={recipes.image} prepTimeMinutes={recipes.prepTimeMinutes} cookTimeMinutes={recipes.cookTimeMinutes}/>
          ))}
        </div>
      </section>

      {/* 3) Featured Recipes */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featureRecipes.map((recipes) => (
            <RecipeCard key={recipes.id} name={recipes.name} image={recipes.image} prepTimeMinutes={recipes.prepTimeMinutes} cookTimeMinutes={recipes.cookTimeMinutes}/>
          ))}
        </div>
      </section>

      {/* 4) Trending Recipes */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Trending Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trendingRecipes.map((recipes) => (
            <RecipeCard key={recipes.id} name={recipes.name} image={recipes.image} prepTimeMinutes={recipes.prepTimeMinutes} cookTimeMinutes={recipes.cookTimeMinutes}/>
          ))}
        </div>
      </section>
    </div>
  );
}
