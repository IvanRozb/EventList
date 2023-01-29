import { MongoClient } from "mongodb";

export async function connectDatabase() {
	return await MongoClient.connect(
		"mongodb+srv://IvanRozb:Y8pwlm5vLucjprn3@cluster0.mcgcxdw.mongodb.net/events?retryWrites=true&w=majority"
	);
}

export async function insertDocument(client, collection, document) {
	const db = client.db();

	return await db.collection(collection).insertOne(document);
}

export async function getAllDocuments(client, collection, sort) {
	const db = client.db();

	return await db.collection(collection).find().sort(sort).toArray();
}
