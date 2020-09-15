import { Router } from 'express'

export default (router: Router) => {
    router.get('/settings', (req, res) => {
        res.render('admin/setting', { title: "Settings" })
    })

}