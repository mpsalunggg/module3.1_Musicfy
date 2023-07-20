const songs = require('./data/songs')
const artists = require('./data/artists')
const popularSongs = require('./data/popularSongs')
const addData = require('./config/db')

const addSongs = async (song) => {
  await addData('songs', song)
}
const addArtists = async (artist) => {
  await addData('artists', artist)
}
const addPopularSongs = async (popularSong) => {
  await addData('popularSongs', popularSong)
}

const generateCollection = async () => {
  try {
    await addSongs(songs)
    await addArtists(artists)
    await addPopularSongs(popularSongs)

    console.log('Ketiga data Collection berhasil ditambahkan!')
  } catch (error) {
    console.error('Terjadi kesalahan:', error)
  }
}

generateCollection()
