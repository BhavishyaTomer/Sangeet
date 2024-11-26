import mongoose from "mongoose";
import { song } from "../Schema/songSchema.js";
import dotenv from 'dotenv';
import { album } from "../Schema/albumSchema.js";


dotenv.config();

const seedDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);

		// Clear existing data
		await album.deleteMany({});
		await album.deleteMany({});

		// First, create all songs
		const createdSongs = await song.insertMany([
			{
				title: "City Rain",
				artist: "Urban Echo",
				songCoverPic: "/cover-images/7.jpg",
				songAudioUrl: "/songs/7.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 39, // 0:39
			},
			{
				title: "Neon Lights",
				artist: "Night Runners",
				songCoverPic: "/cover-images/5.jpg",
				songAudioUrl: "/songs/5.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 36, // 0:36
			},
			{
				title: "Urban Jungle",
				artist: "City Lights",
				songCoverPic: "/cover-images/15.jpg",
				songAudioUrl: "/songs/15.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 36, // 0:36
			},
			{
				title: "Neon Dreams",
				artist: "Cyber Pulse",
				songCoverPic: "/cover-images/13.jpg",
				songAudioUrl: "/songs/13.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 39, // 0:39
			},
			{
				title: "Summer Daze",
				artist: "Coastal Kids",
				songCoverPic: "/cover-images/4.jpg",
				songAudioUrl: "/songs/4.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 24, // 0:24
			},
			{
				title: "Ocean Waves",
				artist: "Coastal Drift",
				songCoverPic: "/cover-images/9.jpg",
				songAudioUrl: "/songs/9.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 28, // 0:28
			},
			{
				title: "Crystal Rain",
				artist: "Echo Valley",
				songCoverPic: "/cover-images/16.jpg",
				songAudioUrl: "/songs/16.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 39, // 0:39
			},
			{
				title: "Starlight",
				artist: "Luna Bay",
				songCoverPic: "/cover-images/10.jpg",
				songAudioUrl: "/songs/10.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 30, // 0:30
			},
			{
				title: "Stay With Me",
				artist: "Sarah Mitchell",
				songCoverPic: "/cover-images/1.jpg",
				songAudioUrl: "/songs/1.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 46, // 0:46
			},
			{
				title: "Midnight Drive",
				artist: "The Wanderers",
				songCoverPic: "/cover-images/2.jpg",
				songAudioUrl: "/songs/2.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 41, // 0:41
			},
			{
				title: "Moonlight Dance",
				artist: "Silver Shadows",
				songCoverPic: "/cover-images/14.jpg",
				songAudioUrl: "/songs/14.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 27, // 0:27
			},
			{
				title: "Lost in Tokyo",
				artist: "Electric Dreams",
				songCoverPic: "/cover-images/3.jpg",
				songAudioUrl: "/songs/3.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 24, // 0:24
			},
			{
				title: "Neon Tokyo",
				artist: "Future Pulse",
				songCoverPic: "/cover-images/17.jpg",
				songAudioUrl: "/songs/17.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 39, // 0:39
			},
			{
				title: "Purple Sunset",
				artist: "Dream Valley",
				songCoverPic: "/cover-images/12.jpg",
				songAudioUrl: "/songs/12.mp3",
				plays: Math.floor(Math.random() * 5000),
				duration: 17, // 0:17
			},
		]);

		// Create albums with references to song IDs
		const albums = [
			{
				title: "Urban Nights",
				artist: "Various Artists",
				albumCoverPic: "/albums/1.jpg",
				releaseYear: 2024,
				song: createdSongs.slice(0, 4).map((song) => song._id),
			},
			{
				title: "Coastal Dreaming",
				artist: "Various Artists",
				albumCoverPic: "/albums/2.jpg",
				releaseYear: 2024,
				song: createdSongs.slice(4, 8).map((song) => song._id),
			},
			{
				title: "Midnight Sessions",
				artist: "Various Artists",
				albumCoverPic: "/albums/3.jpg",
				releaseYear: 2024,
				song: createdSongs.slice(8, 11).map((song) => song._id),
			},
			{
				title: "Eastern Dreams",
				artist: "Various Artists",
				albumCoverPic: "/albums/4.jpg",
				releaseYear: 2024,
				song: createdSongs.slice(11, 14).map((song) => song._id),
			},
		];

		// Insert all albums
		const createdAlbums = await album.insertMany(albums);

		// Update songs with their album references
		for (let i = 0; i < createdAlbums.length; i++) {
			const album = createdAlbums[i];
			const albumSongs = albums[i].song;

			await song.updateMany({ _id: { $in: albumSongs } }, { albumId: album._id });
		}

		console.log("Database seeded successfully!");
	} catch (error) {
		console.error("Error seeding database:", error);
	} finally {
		mongoose.connection.close();
	}
};

seedDatabase();
