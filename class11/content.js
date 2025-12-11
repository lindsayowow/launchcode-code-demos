const Song = require("./classes/Song.js");
const Podcast = require("./classes/Podcast.js");
const Audiobook = require("./classes/AudioBook.js");

const contentList = [
  new Song("Golden", "K-Pop", "We're going up...", "Huntrix"),
  new Song("Rise Up", "Unknown", "I rise like the day...", "Andra Day"),
  new Song("Tom Sawyer", "Classic Rock", "Today's Tom Sawyer...", "Rush"),
  new Podcast(
    "Giggly Squad",
    25,
    "Hannah Burner and Paige DeSorbo",
    "Welcome to the Giggly Squad!"
  ),
  new Podcast(
    "Therapy for Black Girls",
    42,
    "Dr. Joy",
    "Welcome to Therapy for Black Girls!"
  ),
  new Audiobook(
    "Wind and Truth",
    "The wind was true!",
    "Brandon Sanderson",
    500,
    35,
    "Fantasy"
  ),
];

module.exports = {
  contentList,
};
