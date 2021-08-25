const db = require('./connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.create({
        username: 'deannsandel',
        email: 'desandel@outlook.com',
        password: 'password1234'
    });

    console.log('users seeded');

    process.exit();
});