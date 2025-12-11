const AudioContent = require("./AudioContent");

class Song extends AudioContent {
  constructor(title, genre, content, artist) {
    super(title, content);
    this.genre = genre;
    this.artist = artist;
  }
}

module.exports = Song;
