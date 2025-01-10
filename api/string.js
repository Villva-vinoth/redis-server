const router = require('express').Router();


// understanding the string commands with user data

router.get('/', (req, res) => {
    res.send('string');
});


module.exports = router;