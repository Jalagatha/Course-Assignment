import Router from 'express';
import {course }from '../controller/getUsers';


const router=new Router();
router.get('/', getUsers);

export default router;
