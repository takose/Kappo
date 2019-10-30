// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var recipe_pb = require('./recipe_pb.js');

function serialize_coot_CreateRecipeRequest(arg) {
  if (!(arg instanceof recipe_pb.CreateRecipeRequest)) {
    throw new Error('Expected argument of type coot.CreateRecipeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coot_CreateRecipeRequest(buffer_arg) {
  return recipe_pb.CreateRecipeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coot_CreateRecipeResponse(arg) {
  if (!(arg instanceof recipe_pb.CreateRecipeResponse)) {
    throw new Error('Expected argument of type coot.CreateRecipeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coot_CreateRecipeResponse(buffer_arg) {
  return recipe_pb.CreateRecipeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coot_GetByIdRequest(arg) {
  if (!(arg instanceof recipe_pb.GetByIdRequest)) {
    throw new Error('Expected argument of type coot.GetByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coot_GetByIdRequest(buffer_arg) {
  return recipe_pb.GetByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coot_GetByIdResponse(arg) {
  if (!(arg instanceof recipe_pb.GetByIdResponse)) {
    throw new Error('Expected argument of type coot.GetByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coot_GetByIdResponse(buffer_arg) {
  return recipe_pb.GetByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RecipeServiceService = exports.RecipeServiceService = {
  getById: {
    path: '/coot.RecipeService/GetById',
    requestStream: false,
    responseStream: false,
    requestType: recipe_pb.GetByIdRequest,
    responseType: recipe_pb.GetByIdResponse,
    requestSerialize: serialize_coot_GetByIdRequest,
    requestDeserialize: deserialize_coot_GetByIdRequest,
    responseSerialize: serialize_coot_GetByIdResponse,
    responseDeserialize: deserialize_coot_GetByIdResponse,
  },
  createRecipe: {
    path: '/coot.RecipeService/CreateRecipe',
    requestStream: false,
    responseStream: false,
    requestType: recipe_pb.CreateRecipeRequest,
    responseType: recipe_pb.CreateRecipeResponse,
    requestSerialize: serialize_coot_CreateRecipeRequest,
    requestDeserialize: deserialize_coot_CreateRecipeRequest,
    responseSerialize: serialize_coot_CreateRecipeResponse,
    responseDeserialize: deserialize_coot_CreateRecipeResponse,
  },
};

exports.RecipeServiceClient = grpc.makeGenericClientConstructor(RecipeServiceService);
