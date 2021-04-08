const db = require('../config/db');

module.exports = {
    async store(req, res) {
        const data = {
            "address": req.body.address
        }

        try {
            const response = await db.query(`INSERT INTO address SET ?`, [data])
            return res.json(response);
        } catch (error) {
            console.error(error);
            return res.json({ err: error });
        }
    },

    async show(req, res) {
        try {
            const response = await db.query('SELECT * FROM address');
            return res.json(response[0]);

        } catch (error) {
            console.error(error);
            return res.json({ err: error });
        }
    },

    async showById(req, res) {
        try {
            const id = req.params.id;
            const response = await db.query(`SELECT * FROM address WHERE id_address = ${id}`);
            
            return res.json(response[0]);
        } catch (error) {
            console.error(error);
            return res.json({ err: error });
        }
    },

    async update(req, res) {
        try {
            let id = req.params.id;
            let data = {
                "address": req.body.address
            } 

            const response = await db.query(`UPDATE address SET ? WHERE id_address = ?`, [data, id]);
            
            return res.json(response);
        } catch (error) {
            console.error(error);
            return res.json({ err: error });
        }
    },

    async delete(req, res) {
        try {
            const id = req.params.id;
            const response = await db.query(`DELETE FROM address WHERE id_address = ${id}`);
            
            res.json(response);
        } catch (error) {
            console.error(error);
            return res.json({ err: error });
        }
    }
}