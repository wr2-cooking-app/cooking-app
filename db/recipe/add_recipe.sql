INSERT INTO recipe (
    recipe_id,
    meal_plan_id,
    day,
    time,
    title
) VALUES (
    ${recipeId},
    ${mealPlanId},
    ${day},
    ${time},
    ${title}
);