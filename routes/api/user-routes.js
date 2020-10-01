const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

//set up get and post routes

router
    .route('/')
    .get(getAllUsers)
    .post(createUser); 

//set up get and post routes for Id specific routes

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;