const { request, response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const { datosRequestToken } = require('../middlewares/validar-jwt');


const crearUsuario = async( req = request , res = response ) => {
    
    const { name , email, password } = req.body;

    try {

        // Verificar si no existe un correo igual
        const usuario = await Usuario.findOne ({ email: email });
        if( usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con es email'
            })
        }
        // Crear usuario con el modelo
        const dbUser = new Usuario( req.body )
        
        // Hashear la contraseña
        const salt = bcrypt.genSaltSync( 10 ); // 10 vueltas
        dbUser.password = bcrypt.hashSync( password, salt );
    
        // Generar un JWT
        const token = await generarJWT(dbUser.id, dbUser.name, dbUser.email);
    
        // Creas usuario de Bd
        await dbUser.save();
        //Generar respuesta exitosa
        return res.status(201).json({
            ok:true,
            uid: dbUser.id,
            name,
            email: dbUser.email,
            token
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    
    
    }
};


const loginUsuario = async( req = request, res = response ) => {
   
   
    const { email, password } = req.body;

    try {

        const dbUser = await Usuario.findOne( {email});

        if (!dbUser){
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            })
        }

        // confirmar si el password hace match
        const validPassword = bcrypt.compareSync( password, dbUser.password )

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'El password no valido'
            })
        }

        //Generar el JWT
        const token = await generarJWT( dbUser.id, dbUser.name, dbUser.email );

        //respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            token
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        });
        
    };

};


const revalidarToken = async(req = request, res = response) => {
    
   const respuesta = datosRequestToken();
   const uid = respuesta.uidToken;
   const name = respuesta.nameToken;
   const email = respuesta.emailToken;

   console.log ( uid, name );
   const token = await generarJWT( uid, name, email );

    return res.json({
        ok: true,
        uid,
        name,
        email,
        token
    });
};


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};