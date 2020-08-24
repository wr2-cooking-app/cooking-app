SELECT r.id, r.recipe_id, r.meal_plan_id, r.time, r.day, r.title, mp.user_id, mp.name
FROM recipe r
JOIN meal_plan mp ON r.meal_plan_id = mp.id 
JOIN users u ON mp.user_id = u.id
WHERE mp.id = ${id}
ORDER BY day;