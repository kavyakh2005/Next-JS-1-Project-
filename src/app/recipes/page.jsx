import RecipeCard from '@/Components/card';
import { getReceipes } from '@/library/api-call'
import React from 'react'

export default async function page() {
    const recipes = await getReceipes();
    return (
        <div className='w-full p-8'>
            <div className='max-w-[1240px] m-auto'>
                <h1 className='text-3xl font-bold mb-4'>Recipes</h1>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        recipes.map((recipes) => (
                            <RecipeCard
                                name={recipes.name}
                                key={recipes.id}
                                id={recipes.id}
                                image={recipes.image}
                                prepTimeMinutes={recipes.prepTimeMinutes}
                                cookTimeMinutes={recipes.cookTimeMinutes} />
                        ) )
                    }
                </div>
            </div>

        </div>
    )
}
