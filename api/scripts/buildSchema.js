var fs = require('fs-extra');
var path = require('path');
var graphql = require('graphql').graphql;
var graphqlUtil = require('graphql/utilities');
var Schema = require('../schemas');

var introspectionQuery = graphqlUtil.introspectionQuery;
var printSchema = graphqlUtil.printSchema;

async function buildSchema() {
    await fs.ensureFile(path.join(__dirname, '../data/schema.graphql.json'));
    await fs.ensureFile(path.join(__dirname, '../data/schema.graphql'));

    fs.writeFileSync(
        path.join(__dirname, '../data/schema.graphql.json'),
        JSON.stringify(await graphql(Schema, introspectionQuery), null, 2)
    );

    fs.writeFileSync(
        path.join(__dirname, '../data/schema.graphql.txt'),
        printSchema(Schema)
    );
}

async function run() {
    await buildSchema();
    console.log('Schema build complete!');
}

run().catch(e => {
    console.log(e);
    process.exit(0);
});