const db = require('../config/db');

module.exports = {

    async store(req, res) {
        const datas = {
            "address": req.body.address
        }

        try {
            const response = await db.query(`INSERT INTO address SET ?`, [datas])
            res.json(response);

        } catch (error) {
            console.error(error)
        }
    },

    async show(req, res) {
        try {
            const response = await db.query('SELECT * FROM address');
            res.json(response[0]);
        } catch (error) {
            console.error(error)
        }
    },

    async showById(req, res) {
        try {
            const id = req.params.id;
            const response = await db.query(`SELECT * FROM address WHERE id_address = ${id}`);

            res.json(response[0]);

        } catch (error) {
            console.error(error)
        }
    },

    async update(req, res) {
        try {
            let id = req.params.id;
            let data = {
                "address": req.body.address
            } 

            const response = await db.query(`UPDATE address SET ? WHERE id_address = ?`, [data, id]);
            res.json(response);

        } catch (error) {
            console.error(error)
        }
    },

    async delete(req, res) {
        try {
            const id = req.params.id;

            const response = await db.query(`DELETE FROM address WHERE id_address = ${id}`);
            res.json(response);

        } catch (error) {
            console.error(error)
        }
    }
}