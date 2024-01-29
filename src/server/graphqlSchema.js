"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const generateBread_1 = require("./dataGenerators/generateBread");
const generateBatch_1 = require("./dataGenerators/generateBatch");
const generateBakery_1 = require("./dataGenerators/generateBakery");
const DateType = new graphql_1.GraphQLScalarType({
    name: 'Date',
    serialize(value) {
        return value.toISOString();
    },
});
const BreadType = new graphql_1.GraphQLObjectType({
    name: 'Bread',
    fields: {
        id: { type: graphql_1.GraphQLInt },
        name: { type: graphql_1.GraphQLString },
        price: { type: graphql_1.GraphQLFloat },
        batchNumber: { type: graphql_1.GraphQLString },
    },
});
const BatchType = new graphql_1.GraphQLObjectType({
    name: 'Batch',
    fields: {
        id: { type: graphql_1.GraphQLInt },
        bakery: { type: graphql_1.GraphQLString },
        bakingDay: { type: graphql_1.GraphQLString },
        batchNumber: { type: graphql_1.GraphQLString },
        startTime: { type: DateType },
        endTime: { type: DateType },
    },
});
const BakeryType = new graphql_1.GraphQLObjectType({
    name: 'Bakery',
    fields: {
        id: { type: graphql_1.GraphQLInt },
        company: { type: graphql_1.GraphQLString },
        bakery: { type: graphql_1.GraphQLString },
    },
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        bread: {
            type: BreadType,
            args: { id: { type: graphql_1.GraphQLInt } },
            resolve(parent, args) {
                return (0, generateBread_1.generateBread)(args.id);
            },
        },
        breads: {
            type: new graphql_1.GraphQLList(BreadType),
            resolve() {
                return [(0, generateBread_1.generateBread)(1), (0, generateBread_1.generateBread)(2)];
            },
        },
        batch: {
            type: BatchType,
            args: { id: { type: graphql_1.GraphQLInt } },
            resolve(parent, args) {
                return (0, generateBatch_1.generateBatch)(args.id);
            },
        },
        bakery: {
            type: BakeryType,
            args: { id: { type: graphql_1.GraphQLInt } },
            resolve(parent, args) {
                return (0, generateBakery_1.generateBakery)(args.id);
            },
        },
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
