const express= require('express');

const router= express.Router();

router.get('/tracks', (req,res) => {

    const data= ['Hola','Mundo']
       res.send({data})

})


module.exports= router;