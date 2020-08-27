UPDATE meal_plan
SET name = ${name}
WHERE id = ${id};

SELECT id, name FROM meal_plan
WHERE id = ${id};