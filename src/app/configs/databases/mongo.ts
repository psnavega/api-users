import mongoose, { ConnectOptions } from 'mongoose';

const mongoURI = process.env.MONGO_URI;

export async function connectToMongoDb(): Promise<void> {
	try {
		await mongoose.connect(`${mongoURI}`, options as ConnectOptions);

		console.log('Mongo - Connected successfully');
	} catch (e: unknown) {
		console.log('Mongo - No connected');
		throw e;
	}
}