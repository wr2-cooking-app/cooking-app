SELECT r.recipe_id
FROM recipe r
JOIN meal_plan mp ON r.meal_plan_id = mp.id
WHERE mp.id = $1;