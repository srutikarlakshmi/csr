import {Client, Account, Databases} from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("657bf4fb5b0ffd89472c");

export const account = new Account(client);
export const database = new Databases(client, "658bb17ab62e4400ccc2");