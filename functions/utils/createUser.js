const { getCollection } = require("./astraClient");

const createUser = async (payload) => {
    const collection = await getCollection("users");

    try {
        console.log("Creating User Entry...", payload);
        const res = await collection.create(payload);
        
        return {
            statusCode: 200,
            body: JSON.stringify(res),
            headers: {
                'Content-type': 'application/json',
            },
        };
    } catch (e) {
        console.log("ERROR CREATING USER");
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify(e),
        };
    }
};

module.exports = { createUser };
