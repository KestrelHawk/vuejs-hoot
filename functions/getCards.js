const { getCollection } = require("./utils/astraClient");
const { packBuilder } = require("./utils/packBuilder");
const { createUser } = require("./utils/createUser");

exports.handler = async function (event) {
    const collection = await getCollection("cards");

    try {
        const res = await collection.find({});
        let pack = packBuilder(Object.keys(res).map((key) => res[key]));
        
        //create user entry
        console.log("Creating User Entry...");
        createUser({
            "username": JSON.parse(event.body).name,
            "pack": pack
        })

        return {
            statusCode: 200,
            body: JSON.stringify(pack),
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
