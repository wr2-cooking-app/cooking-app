SELECT r.recipe_id
FROM recipe r
JOIN meal_plan mp ON r.meal_plan_id = mp.id 
JOIN users u ON mp.user_id = u.id
WHERE mp.id = ${id}
ORDER BY day;