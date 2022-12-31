import express from "express";

const routes = (app) => {
    app.route('/health').get((req, res) => {
        res.status(200).send({titulo:"Patrick Navega API working perfectly!"})
    })

    app.use(
        express.json(),
    )

}

export default routes;