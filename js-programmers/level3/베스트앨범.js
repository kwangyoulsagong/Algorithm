function solution(genres, plays) {
  var answer = [];
  let playlist = [];
  let genreTotal = [];
  for (let i = 0; i < genres.length; i++) {
    playlist.push({ index: i, genre: genres[i], plays: plays[i] });
  }
  let playsTotal = playlist.reduce((acc, song) => {
    if (!acc[song.genre]) {
      acc[song.genre] = 0;
    }
    acc[song.genre] += song.plays;
    return acc;
  }, {});
  for (let genre in playsTotal) {
    genreTotal.push({ genre: genre, total: playsTotal[genre] });
  }
  genreTotal.sort((a, b) => b.total - a.total);
  for (let i = 0; i < genreTotal.length; i++) {
    let genre = genreTotal[i].genre;
    let songs = playlist.filter((song) => song.genre === genre);
    console.log(songs);
    songs.sort((a, b) => b.plays - a.plays || a.index - b.index);
    for (let j = 0; j < Math.min(songs.length, 2); j++) {
      answer.push(songs[j].index);
    }
  }

  return answer;
}
