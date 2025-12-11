const AudioContent = require("./AudioContent");

// Audiobooks
// title, author, duration, num chapters, genre, content
class Audiobook extends AudioContent {
  constructor(title, content, author, duration, numChapters, genre) {
    super(title, content);
    this.author = author;
    this.duration = duration;
    this.numChapters = numChapters;
    this.genre = genre;
  }
}

module.exports = Audiobook;
