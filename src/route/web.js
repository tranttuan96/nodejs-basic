import express from 'express';
import homeController from '../controller/homeController';
let router = express.Router();


const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage)

    router.get('/detail/user/:userId', homeController.getDetailPage)

    router.post('/create-new-user', homeController.createNewUser)

    router.get('/about', (req, res) => {
        res.send('hello')
    })
    return app.use('/', router)
}

export default initWebRoute;