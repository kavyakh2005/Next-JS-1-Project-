import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecipeCard({ id, name, image, prepTimeMinutes, cookTimeMinutes } ) {
    return (
        <div className="cursor-pointer border rounded-lg shadow hover:shadow-lg p-4 bg-white">
            {/* Image */}
            <Link href={`/recipe/${id}`}>
                <Image
                    height={300}
                    width={300}
                    src={image}
                    alt={name}
                    className="rounded-md mb-3 w-full h-48 object-cover"
                />
            </Link>


            {/* Title */}
            <h3 className="font-semibold text-lg mb-2">{name}</h3>

            {/* Details */}
            <div className="text-sm text-gray-600 space-y-1">
                <p>⏱️ Prep Time: {prepTimeMinutes} min</p>
                <p>🔥 Cook Time: {cookTimeMinutes} min</p>
            </div>
        </div>
    )
}
