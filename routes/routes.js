const router = require('express').Router();
const AutoControler = require('../auto/autoControler')




router.get('/', (req, res) => { 
    res.send('Hello world!')
});

router.get('/auto', AutoControler.getModel);
router.post('/auto', AutoControler.saveModel);
router.delete('/auto', AutoControler.deleteModelbyId);
router.patch('/auto', AutoControler.filterByMileage);
router.patch('/auto', AutoControler.filterByYear);
router.patch('/auto', AutoControler.filterByGearbox);
// router.patch('/auto', AutoControler.sortByMileage);



module.exports = router;