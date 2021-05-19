const { MeiliSearch } = require('meilisearch');
const config = require('./config');
const secretsService = require('./secrets.service');


async function getMeilisearchClient() {

    try {
        const masterKey = await secretsService.getSecretVersion(config.meilisearchMasterKeySecretName);

        const client = new MeiliSearch({
            host: config.meilisearchAddress,
            apiKey: masterKey,
        })

        return client
    } catch (error) {
        console.log("Initialisation of the MeiliSearch Client failed");
        throw error;
    }

}

module.exports = {
    getMeilisearchClient,
}

