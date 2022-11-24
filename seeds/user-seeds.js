const { User } = require('../models');

const userData = [
    {
        username: "chris_s",
        twitter: "chris",
        github: "chris",
        email: "chriss@gmail.com",
        password: "password1"
    },
    {
        username: "remy10",
        twitter: "remy10",
        github: "remy10",
        email: "remy@gmail.com",
        password: "password2"
    },
    {
        username: "katsu_s",
        twitter: "katsu21",
        github: "katsu21",
        email: "katsu@gmail.com",
        password: "password3"
    },
    {
        username: "silas_s",
        twitter: "silas 32",
        github: "silas32",
        email: "silas@gmail.com",
        password: "password4"
    },
    {
        username: "kato_s",
        twitter: "kato43",
        github: "kato43",
        email: "kato@gmail.com",
        password: "password5"
    },
    {
        username: "will_bur",
        twitter: "willbur",
        github: "willbur",
        email: "will@gmail.com",
        password: "password6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;