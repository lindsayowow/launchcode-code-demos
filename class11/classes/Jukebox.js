const input = require("readline-sync");

class Jukebox {
  constructor(contentList) {
    this.contentList = contentList;
  }

  runJukebox() {
    let keepGoing = true;
    do {
      const contentChoice = input.questionInt(
        "Do you want to hear music (1), podcast (2), or audiobooks (3)?"
      );
      if (contentChoice === 1) {
        const choice = input.questionInt(
          "Do you want to play all songs on shuffle (1), a single song? (2), or add a new song(3)?"
        );
        if (choice === 1) {
          this.shuffle(this.getContentByType("Song", this.contentList));
          keepGoing = false;
        } else if (choice === 2) {
          this.singleSongPlayer(this.contentList);
          keepGoing = false;
        } else if (choice === 3) {
          try {
            this.contentList.push(this.getSongInfo());
          } catch (error) {
            console.log("Song not added. Invalid data.");
          }
        }
        if (keepGoing) {
          console.log("Invalid entry. Enter 1 or 2");
        }
      } else if (contentChoice === 2) {
        this.playContent(this.getContentByType("Podcast", this.contentList)[0]);
      } else if (contentChoice === 3) {
      }
    } while (keepGoing);
  }

  getContentByType(contentType, contentList) {
    return contentList.filter((item) => item.constructor.name === contentType);
  }

  // able to play the songs
  // take in song
  // give now playing message
  // play the content
  playContent(content) {
    console.log(`Now playing: ${content.title}`);
    console.log(content.content);
  }

  // display the songs - just the title
  listSongs(songs) {
    songs.forEach((song) => console.log(song.title));
  }

  // Display list of songs
  // Get song choice
  // Play the song
  singleSongPlayer(listOfSongs) {
    this.listSongs(listOfSongs);
    const inputSongNumber = input.questionInt("What song do you want to hear?");
    this.playContent(contentList[inputSongNumber - 1]);
  }

  //Create recursive method to play all songs shuffled
  // Each run of the function should
  // 1. check how many songs in list
  // 2. if more than one, play a random song, remove it from list, call function again
  // 3. if only one song, play the last song
  shuffle(inputSongList) {
    // base case
    if (inputSongList.length === 1) {
      this.playContent(inputSongList[0]);
    } else {
      //recursive case
      const randomNumber = Math.floor(Math.random() * inputSongList.length);
      this.playContent(inputSongList[randomNumber]);
      inputSongList.splice(randomNumber, 1);
      this.shuffle(inputSongList);
    }
  }

  getSongInfo() {
    let newSong;
    try {
      const songName = input.question("What is the song name?");
      const artist = input.question("Who is the artist?");
      const content = input.question("What is the content?");
      const genre = input.question("What is the genre?");
      newSong = new Song(songName, genre, content, genre, breakyoufool);
    } catch (error) {
      console.log(`There has been an error: ${error}`);
      throw Error;
    }
    return newSong;
  }
}

module.exports = Jukebox;
