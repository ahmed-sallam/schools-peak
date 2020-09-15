import { Router } from 'express'

export default (router: Router) => {
    router.get('/schools', (req, res) => {
        res.send('schools')
    })

}