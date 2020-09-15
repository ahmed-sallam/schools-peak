import { Router } from 'express'
import { getAllModules } from '../controllers/module'

export default (router: Router) => {
    router.get('/modules', getAllModules)

}