const { createClient } = require("@astrajs/collections");

let astraClient = null;

const getAstraClient = async () => {
    if (astraClient === null) {
        astraClient = await createClient(
            {
                astraDatabaseId: process.env.ASTRA_DB_ID,
                astraDatabaseRegion: process.env.ASTRA_DB_REGION,
                applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
            },
            60000
        );
    }
    return astraClient;
};

const getCollection = async (col) => {
    const documentClient = await getAstraClient();
    return documentClient
        .namespace(process.env.ASTRA_DB_KEYSPACE)
        .collection(col);
};

module.exports = { getAstraClient, getCollection };