const Cap = require("../models/Cap");
const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");
const Spaceship = require("../models/Spaceship");

// Has one
// Planet.hasOne(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
// Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" });

//Has Many
Planet.hasMany(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" });


Cap.belongsToMany(Spaceship, {
  foreingKey: "capId",
  through: "capSpaceship",
  as: "spaceships",
});

Spaceship.belongsToMany(Cap, {
  foreingKey: "spaceshipId",
  through: "capSpaceship",
  as: "caps",
});

module.exports = { Planet, Satelite };