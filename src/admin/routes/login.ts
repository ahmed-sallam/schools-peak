import { Router } from 'express'

export default (router: Router) => {
    router.get('/login', (req, res) => {
        res.render('admin/login')
    })

}