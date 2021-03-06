const Spot = require('../models/Spot');

module.exports = {

  async index(req, res) {
    const { tech } = req.query;
    
    const spots = await Spot.find({ techs: tech });
    res.json(spots);
  },
  
  async store(req, res) {
    const { filename } = req.file;
    const { company, price, techs } = req.body;
    const { user_id } = req.headers;

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      price,
      techs: techs.split(','),
    });
    res.json(spot);
  }
}