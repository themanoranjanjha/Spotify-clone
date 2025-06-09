import {Song} from "../models/song.model.js";
import {Album} from "../models/album.model.js";

export const createSong = async (req, res) => {
try {
  if(!req.files || !req.files.audioFile || !req.files.imageFile){
    return res.status(400).json({message: "Song and image are required"});
  }
  const {title, artist, albumId, duration} = req.body;
  const audioFile = req.files.audioFile;
  const imageFile = req.files.imageFile;

  const song = new Song({
    title,
    artist,
    audioUrl,
    imageUrl,
    albumId: albumId || null,
    duration,
  })

  await song.save();

  if(albumId){
    await Album.findByIdAndUpdate(albumId, {$push: {songs: song._id}});
  }

} catch (error) {
    
}
}  