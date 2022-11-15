const { Router } =require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Crear un nuevo usuario
router.post( '/new',[
    check('name' , 'El Usuario no puede estar en blanco').not().isEmpty(),
    check('email','El Email es Obligatorio').isEmail(),
    check('password','El Password es Obligatorio').isLength({min: 6}),
    validarCampos
] ,crearUsuario );

// Login de Usuario
router.post( '/',[
    check('email','El Email es Obligatorio').isEmail(),
    check('password','El Password es Obligatorio').isLength({min: 6}),
    validarCampos
], loginUsuario );

// Validar y revalidar token
router.get( '/renew', validarJWT , revalidarToken);


module.exports = router;