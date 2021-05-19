const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const client = new SecretManagerServiceClient();

async function getSecretVersion(secretName) {
    const [version] = await client.accessSecretVersion({ name: secretName, });
    const payload = version.payload.data.toString();
    return payload
}

module.exports = {
    getSecretVersion,
}