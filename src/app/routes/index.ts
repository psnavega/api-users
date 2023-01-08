import express from 'express';
import user from './user';

const routes = (app) => {
    app.route('/health').get((req, res) => {
        res.status(200).send({title:"API working perfectly!"})
    })

    app.use(
        express.json(),
        user,
    )

}

export default routes;