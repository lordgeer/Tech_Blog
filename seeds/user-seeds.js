const { User } = require('../models');

const userData = [
  {
    username: "RebelEngineer47",
    password: "RebelForever1!"
  },
  {
    username: "TrooperTK421",
    password: "vadersucks1"
  },
  {
    username: "IncomCorpOfficial",
    password: "password1234"
  },
  {
    username: "L3-37",
    password: "FREEDOMFORALLMYRREATHERENINBONDS"
  },
];

const seedUser = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;