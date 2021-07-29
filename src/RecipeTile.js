import React from 'react';
import './RecipeTile.css';

export default function RecipeTile({ recipe }) {
    return (
        // recipe["recipe"]["image"].match(/\.(jpg|jpeg|gif|png)$/) != null && (
        <div className="recipeTile">
            <img className="recipeTile_img" alt="" src={recipe["recipe"]["image"]} />
            <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>
        </div>
    )
    // );
}
