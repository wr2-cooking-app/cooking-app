const bcrypt = require("bcryptjs");

module.exports = {
    register: async (req, res) => {
        const {password, email, first_name, last_name, profile_picture} = req.body;
        const db = req.app.get("db");

        const userExists = await db.users.check_user({email});
        if (userExists[0]) {
            return res.status(400).send("The email you entered is already in use.")
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.users.register_user({password: hash, email, first_name, last_name, profile_picture});
        req.session.users = newUser[0];
        res.status(201).send(req.session.users);
    },

    login: async (req, res) => {
        const {email, password} = req.body;
        const db = req.app.get("db");

        const userExists = await db.users.check_user({email});
        if (!userExists[0]) {
            return res.status(400).send("Email not found");
        }

        const authenticated = bcrypt.compareSync(password, userExists[0].password);
        if (!authenticated) {
            return res.status(401).send("Password is incorrect. Try again.");
        }

        delete userExists[0].password;
        req.session.users = userExists[0];
        res.status(202).send(req.session.users);
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },

    user: (req, res) => {
        if (req.session.users) {
            res.status(200).send(req.session.users);
        } else {
            res.status(401).send("Please log in");
        }
    }
}