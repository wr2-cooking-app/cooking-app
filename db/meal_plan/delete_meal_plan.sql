DELETE FROM recipe
where meal_plan_id = ${id};

DELETE FROM meal_plan
where id = ${id};