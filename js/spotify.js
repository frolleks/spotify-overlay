const urlParams = new URLSearchParams(window.location.search);
const accessToken = urlParams.get("accessToken");

function fetchCurrentlyPlaying() {
  fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const title = document.getElementById("song-title");
      const artist = document.getElementById("song-artist");
      const albumCover = document.getElementById("album-cover");

      title.innerText = data.item.name;
      artist.innerText = data.item.artists.map((a) => a.name).join(", ");
      albumCover.src = data.item.album.images[2].url;
    });
}

setInterval(fetchCurrentlyPlaying, 2000);
