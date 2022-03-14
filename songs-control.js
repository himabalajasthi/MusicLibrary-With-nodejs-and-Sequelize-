const  Album = require('./album_model');
const  Artist = require('./artists_model');
const  Song = require('./songs_model');


const list = (req, res) => {
    Song.findAll({
      include: [
        {
          model: Artist,
          as: "artist",
        },
        {
          model: Album,
          as: "album",
        },
      ],
    }).then((songs) => {
      res.status(200).json(songs);
    });
  };
  

  module.exports = {list};
  