# What to get from API

## Recipe search API

> https://api.spoonacular.com/recipes/search?

### Params

- Query
- APIkey
- EVENTUALLY:
  - Intolerences
  - Diet
  - Cuisine

## Get Recipe Information API

> https://api.spoonacular.com/recipes/{id}/information

### Params

- API key
- includeNutrition
  - `false` for now

## Search autocomplete API

> https://api.spoonacular.com/recipes/autocomplete?

### Params

- API key
- query
- number (10)
