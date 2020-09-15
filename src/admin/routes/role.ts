import { Router } from 'express'

export default (router: Router) => {
    router.get('/roles', (req, res) => {
        res.send('roles')
    })

}