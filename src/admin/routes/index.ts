import { Router } from 'express'
import login from './login';
import module from './module';
import role from './role';
import school from './school';
import settings from './setting'

export const adminRouter = Router()

settings(adminRouter);
login(adminRouter)
module(adminRouter)
role(adminRouter);
school(adminRouter);
