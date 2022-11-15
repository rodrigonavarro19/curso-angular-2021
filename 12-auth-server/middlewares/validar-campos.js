const { request, response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req = request , res = response, next) =>{

    const errors = validationResult( req );

    if (!errors.isEmpty()){
        console.log(errors.array())
         return res.status(404).json({
             ok: false,
             errors: errors.mapped()
         });
    }; 

    next();
}


module.exports = {
    validarCampos
};