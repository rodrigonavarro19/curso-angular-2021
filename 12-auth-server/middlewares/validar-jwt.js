const { response, request } = require("express");
const jwt = require('jsonwebtoken');

let uidToken;
let nameToken;
let emailToken;

const validarJWT = (req = request, res = response, next) => {

    const token = req.header('x-token');

    if ( !token ){
        return res.status(401).json({
            ok: false,
            msg: 'No existe token'
        })
    }

    try {

       const { uid, name, email } = jwt.verify( token, process.env.SECRET_JWT_SEED );
       console.log (uid , name, email)
       
       uidToken = uid;
       nameToken = name;
       emailToken = email 

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido',
        })
        
    }


    //todo OK
    next();
}

const datosRequestToken = () => {
    return {uidToken , nameToken, emailToken }
}


module.exports = {
    validarJWT,
    datosRequestToken
}