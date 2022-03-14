const  Album = require('./album_model');
const  Artist = require('./artists_model');
const create = (req, res) => {
        Album.create(req.body).then((album) => {
        console.log(album)
          res.status(201).json(album);
        });
      }
    
  


const list = (req, res) => {
    Album.findAll({
      include: [
        {
          model: Artist,
          as: "artist",
        },
      ],
    }).then((albums) => {
      res.status(200).json(albums);
    });
  };
  
  const update = (req, res) => {
    const { albumId } = req.params;
    Album.update(req.body, { where: { id: albumId } }).then(
      ([numOfRowsUpdated]) => {
        if (numOfRowsUpdated === 0) {
          res.status(404).json({ error: "The album does not exist." });
        } else {
          res.status(200).json([numOfRowsUpdated]);
        }
      }
    );
  };
  
  const deleteAlbum = (req, res) => {
    const { albumId } = req.params;
    Album.destroy({ where: { id: albumId } }).then((numOfRowsDeleted) => {
      if (numOfRowsDeleted === 0) {
        res.status(404).json({ error: "The album does not exist." });
      }
      res.status(204).json(numOfRowsDeleted);
    });
  };

  module.exports = {list,update,deleteAlbum,create};