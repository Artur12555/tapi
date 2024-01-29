import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLFloat,
    GraphQLScalarType,
  } from 'graphql';
  
  import { generateBread } from './dataGenerators/generateBread';
  import { generateBatch } from './dataGenerators/generateBatch';
  import { generateBakery } from './dataGenerators/generateBakery';
  
  const DateType = new GraphQLScalarType({
    name: 'Date',
    serialize(value) {
      return value.toISOString();
    },
  });
  
  const BreadType = new GraphQLObjectType({
    name: 'Bread',
    fields: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      price: { type: GraphQLFloat },
      batchNumber: { type: GraphQLString },
    },
  });
  
  const BatchType = new GraphQLObjectType({
    name: 'Batch',
    fields: {
      id: { type: GraphQLInt },
      bakery: { type: GraphQLString },
      bakingDay: { type: GraphQLString },
      batchNumber: { type: GraphQLString },
      startTime: { type: DateType },
      endTime: { type: DateType },
    },
  });
  
  const BakeryType = new GraphQLObjectType({
    name: 'Bakery',
    fields: {
      id: { type: GraphQLInt },
      company: { type: GraphQLString },
      bakery: { type: GraphQLString },
    },
  });
  
  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      bread: {
        type: BreadType,
        args: { id: { type: GraphQLInt } },
        resolve(parent, args) {
          return generateBread(args.id);
        },
      },
      breads: {
        type: new GraphQLList(BreadType),
        resolve() {
          return [generateBread(1), generateBread(2)];
        },
      },
      batch: {
        type: BatchType,
        args: { id: { type: GraphQLInt } },
        resolve(parent, args) {
          return generateBatch(args.id);
        },
      },
      bakery: {
        type: BakeryType,
        args: { id: { type: GraphQLInt } },
        resolve(parent, args) {
          return generateBakery(args.id);
        },
      },
    },
  });
  
  export const schema = new GraphQLSchema({
    query: RootQuery,
  });
  