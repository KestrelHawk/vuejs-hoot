const { getCollection } = require("./utils/astraClient");

exports.handler = async function (event) {
    const collection = await getCollection("users");

    try {
        const res = await collection.find({});
        const userPacks = Object.keys(res).map((key) => res[key]);

        return {
            statusCode: 200,
            body: JSON.stringify(userPacks),
            headers: {
                'Content-type': 'application/json',
            },
        };
    } catch (e) {
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify(e),
        };
    }
};