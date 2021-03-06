import React from "react";

const RecipeItems = (props) => {
  const { name, image, ingredientLines } = props;
  return (
    
      <div class="card py-2 text-center">
        <img
          src={image}
          alt=""
          className="img-fluid w-50 mx-auto rounded-circle"
        />
        <div class="card-body">
          <h4>{name}</h4>
        </div>
        <ul className="list-group list-group=flush">
          {ingredientLines.map((ingredient) => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul>
      </div>
    
  );
};

export default RecipeItems;