const { getCollection } = require("./utils/astraClient");
const { packBuilder } = require("./utils/packBuilder");

exports.handler = async function () {
    const collection = await getCollection();

    try {
        const res = await collection.find({});
        let pack = packBuilder(Object.keys(res).map((key) => res[key]));
        
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