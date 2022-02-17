const router = require("express").Router();

// TODO: Implement the /dishes routes needed to make the tests pass

// create method for /dishes
// creates a new dish and assigns id
// returns 400 if name is missing
// returns 400 if name is empty
// returns 400 if description is missing
// returns 400 if image_url is missing
// returns 400 if image_url is empty
// returns 400 if price is missing
// returns 400 if price is zero
// returns 400 if price is less than zero

// read method for /dishes
// returns an existing dish
// returns 404 for non-existent dish

// update method for /dishes
// returns 404 if dish does not exist
// updates the dish
// returns 400 if data.id does not match :dishId in the route
// updates the dish if data.id is miessing even though it does not match: dishId in the route
// updates the dish if data.id is empty, even though it does not match :dishId in the route
// updates the dish if data.id is null, even though it does not match :dishId in the route
// updates the dish if data.id is undefined, even though it does not match :dishId in the route
// returns 400 if the name is missing
// returns 400 if name is empty
// returns 400 if description is missing
// returns 400 if description is empty
// returns 400 if image_url is missing
// returns 400 if image_url is empty
// returns 400 if price is missing
// returns 400 if price is not a number
// returns 400 if price is zero
// returns 400 if price is less than zero

// delete method for /dishes
// returns 405 for existing dish
// returns 405 for non-existent dish

// list method for /dishes
// returns list of dishes

module.exports = router;
