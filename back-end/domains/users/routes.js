import {Router} from 'express';
import { conectDB } from '../../config/db.js';
import User from './model.js';
import brypt from 'bcryptjs';

const router = Router();
const bryptSalt = brypt.genSaltSync();





router.get('/', async(req, res) => {
    conectDB();
    try{
        const userDoc = await User.find();
        res.json(userDoc);

    }catch(error){
        res.status(500).json({error: 'Erro ao buscar usuários'});
    }


});
router.post('/', async(req, res) => {
    conectDB();
    const {name ,email,password} = req.body;
    const encryptedPassword = brypt.hashSync(password, bryptSalt);
    try{
        const newUserDoc = await User.create({
            name,
            email,
            password: encryptedPassword,});
        res.json(newUserDoc);

    }catch(error){
        res.status(500).json({error: 'Erro ao criar usuário'});
    }
});


export default router;
