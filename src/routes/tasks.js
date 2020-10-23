const router = require('express').Router();


router.get('/getTask',(req, res) => {
    res.send('Peticion GET')
  })

router.post('/addTask',(req, res) => {
    res.send('Peticion POST')
})

router.put('/updateTask',(req, res) => {
    res.send('Peticion PUT')
})

router.delete('/deleteTask',(req, res) => {
    res.send('Peticion DELETE')
})

module.exports = router;