const AudioContent = require("./AudioContent");

// Add podcasts
// title, episode number, host, content
class Podcast extends AudioContent {
  constructor(title, episodeNumber, host, content) {
    super(title, content);
    this.episodeNumber = episodeNumber;
    this.host = host;
  }
}

module.exports = Podcast;
