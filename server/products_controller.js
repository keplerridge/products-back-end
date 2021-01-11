module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.read_products()
        .then(product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({ errorMessage: 'Sorry for the error, we are working to fix it.' });
            console.log(err)
          });
    },
    getOne: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.read_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({ errorMessage: 'Sorry for the error, we are working to fix it.' });
            console.log(err)
          });
    },
    create: (req, res) => {
        const db = req.app.get('db');
        const {name, description, price, image_url} = req.body;

        db.create_product([name, description, price, image_url])
        .then(() => res.status(200))
        .catch(err => {
            res.status(500).send({ errorMessage: 'Sorry for the error, we are working to fix it.' });
            console.log(err)
          });
    },
    update: (req, res) => {
        const db = req.app.get('db');
        const {params, query} = req;

        db.update_product([params.id, query.desc])
        .then(() => res.status(200))
        .catch(err => {
            res.status(500).send({ errorMessage: 'Sorry for the error, we are working to fix it.' });
            console.log(err)
          });
    },
    delete: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_product(id)
        .then(() => res.status(200))
        .catch(err => {
            res.status(500).send({ errorMessage: 'Sorry for the error, we are working to fix it.' });
            console.log(err)
          });
    }
}