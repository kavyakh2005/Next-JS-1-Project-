import { getRecipeByID } from '@/library/api-call';
import React from 'react'

export default async function page({ params }) {
    const { recipe_slug } = params;
    console.log(recipe_slug);

    const data = await getRecipeByID(recipe_slug)
    console.log(data)



    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Top Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* Image */}
                <div>
                    <img
                        src={data.image}
                        alt={data.name}
                        className="w-full h-80 object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Info */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
                    <p className="text-gray-600 mb-4">{data.cuisine} • {data.difficulty}</p>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                        <span className="px-3 py-1 bg-gray-100 rounded">
                            ⏱ Prep: {data.prepTimeMinutes} min
                        </span>
                        <span className="px-3 py-1 bg-gray-100 rounded">
                            🔥 Cook: {data.cookTimeMinutes} min
                        </span>
                        <span className="px-3 py-1 bg-gray-100 rounded">
                            🍽 Servings: {data.servings}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 rounded">
                            🔋 {data.caloriesPerServing} cal/serving
                        </span>
                    </div>

                    <p className="font-semibold text-yellow-600">
                        ⭐ {data.rating} ({data.reviewCount} reviews)
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {data.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ingredients */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">📝 Ingredients</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {data.ingredients.map((ing, idx) => (
                        <li key={idx}>{ing}</li>
                    ))}
                </ul>
            </section>

            {/* Instructions */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">👨‍🍳 Instructions</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    {data.instructions.map((step, idx) => (
                        <li key={idx}>{step}</li>
                    ))}
                </ol>
            </section>

            {/* Meal Type */}
            <section>
                <h2 className="text-xl font-bold mb-3">🍴 Meal Type</h2>
                <div className="flex gap-2">
                    {data.mealType.map((meal, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm"
                        >
                            {meal}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );


}
