import mongoose from "mongoose";
import { song } from "../Schema/songSchema.js";
import dotenv from 'dotenv';

dotenv.config();

const songs = [
	{
		title: "Stay With Me",
		artist: "Sarah Mitchell",
		songCoverPic: "/cover-images/1.jpg",
		songAudioUrl: "/songs/1.mp3",
		duration: 46, // 0:46
	},
	{
		title: "Midnight Drive",
		artist: "The Wanderers",
		songCoverPic: "/cover-images/2.jpg",
		songAudioUrl: "/songs/2.mp3",
		duration: 41, // 0:41
	},
	{
		title: "Lost in Tokyo",
		artist: "Electric Dreams",
		songCoverPic: "/cover-images/3.jpg",
		songAudioUrl: "/songs/3.mp3",
		duration: 24, // 0:24
	},
	{
		title: "Summer Daze",
		artist: "Coastal Kids",
		songCoverPic: "/cover-images/4.jpg",
		songAudioUrl: "/songs/4.mp3",
		duration: 24, // 0:24
	},
	{
		title: "Neon Lights",
		artist: "Night Runners",
		songCoverPic: "/cover-images/5.jpg",
		songAudioUrl: "/songs/5.mp3",
		duration: 36, // 0:36
	},
	{
		title: "Mountain High",
		artist: "The Wild Ones",
		songCoverPic: "/cover-images/6.jpg",
		songAudioUrl: "/songs/6.mp3",
		duration: 40, // 0:40
	},
	{
		title: "City Rain",
		artist: "Urban Echo",
		songCoverPic: "/cover-images/7.jpg",
		songAudioUrl: "/songs/7.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Desert Wind",
		artist: "Sahara Sons",
		songCoverPic: "/cover-images/8.jpg",
		songAudioUrl: "/songs/8.mp3",
		duration: 28, // 0:28
	},
	{
		title: "Ocean Waves",
		artist: "Coastal Drift",
		songCoverPic: "/cover-images/9.jpg",
		songAudioUrl: "/songs/9.mp3",
		duration: 28, // 0:28
	},
	{
		title: "Starlight",
		artist: "Luna Bay",
		songCoverPic: "/cover-images/10.jpg",
		songAudioUrl: "/songs/10.mp3",
		duration: 30, // 0:30
	},
	{
		title: "Winter Dreams",
		artist: "Arctic Pulse",
		songCoverPic: "/cover-images/11.jpg",
		songAudioUrl: "/songs/11.mp3",
		duration: 29, // 0:29
	},
	{
		title: "Purple Sunset",
		artist: "Dream Valley",
		songCoverPic: "/cover-images/12.jpg",
		songAudioUrl: "/songs/12.mp3",
		duration: 17, // 0:17
	},
	{
		title: "Neon Dreams",
		artist: "Cyber Pulse",
		songCoverPic: "/cover-images/13.jpg",
		songAudioUrl: "/songs/13.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Moonlight Dance",
		artist: "Silver Shadows",
		songCoverPic: "/cover-images/14.jpg",
		songAudioUrl: "/songs/14.mp3",
		duration: 27, // 0:27
	},
	{
		title: "Urban Jungle",
		artist: "City Lights",
		songCoverPic: "/cover-images/15.jpg",
		songAudioUrl: "/songs/15.mp3",
		duration: 36, // 0:36
	},
	{
		title: "Crystal Rain",
		artist: "Echo Valley",
		songCoverPic: "/cover-images/16.jpg",
		songAudioUrl: "/songs/16.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Neon Tokyo",
		artist: "Future Pulse",
		songCoverPic: "/cover-images/17.jpg",
		songAudioUrl: "/songs/17.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Midnight Blues",
		artist: "Jazz Cats",
		songCoverPic: "/cover-images/18.jpg",
		songAudioUrl: "/songs/18.mp3",
		duration: 29, // 0:29
	},
];

console.log("songSeeds.js is being executed...");

const seedSongs = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);

		// Clear existing songs
		await song.deleteMany({});

		// Insert new songs
		await song.insertMany(songs);

		console.log("Songs seeded successfully!");
	} catch (error) {
		console.error("Error seeding songs:", error);
	} finally {
		mongoose.connection.close();
	}
};

seedSongs();
