// application that can take a list of songs and play them
// ideally, I want the user to select what song they want to hear
// Everything should be in functions

// list of songs
// array of songs (songs are objects)
// song object fields: title, genre, content, artist

const Jukebox = require("./classes/Jukebox.js");
const content = require("./content.js");

const musicPlayer = new Jukebox(content.contentList);

musicPlayer.runJukebox();
