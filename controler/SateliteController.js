const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");

module.exports= {
    async store (req, res) {
        const {planetId} = req.params;
        const {name, serial_number} = req.body;

        const planet = await Planet.findByPk(planetId);

        if(!planet){
            res.send("Esse planeta não existe")
        }else{
            res.send(`O planeta ${name} foi encontrado`)
        }
        

        const satelite = await Satelite.create({name, serial_number, planetId});
        return res.json(satelite);
    }
}