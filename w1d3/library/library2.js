var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

//printPlayLists: prints a list of all playlists, in the form:
///////////////// p01: Coding Music - 2 tracks
// ////////////// p02: Other Playlist - 1 tracks
  printPlaylists: function () {
    var objKey = Object.keys(library.playlists);
    for (i = 0; i < objKey.length; i++) {

    console.log(objKey[i] + ": " + library.playlists[objKey[i]].name + " - " + library.playlists[objKey[i]].tracks.length + " tracks" );
    }
  },
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function () {
    var objKey = Object.keys(library.tracks);
    var playid = library.tracks
    for (i = 0; i < objKey.length; i++) {

    console.log(objKey[i] + ": " + library.tracks[objKey[i]].name + " by " + library.tracks[objKey[i]].artist + " (" + library.tracks[objKey[i]].album + ")");

    }

  // ...
  }
};

library.printTracks();