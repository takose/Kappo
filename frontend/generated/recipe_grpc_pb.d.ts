// package: coot
// file: recipe.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as recipe_pb from "./recipe_pb";

interface IRecipeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getById: IRecipeServiceService_IGetById;
    createRecipe: IRecipeServiceService_ICreateRecipe;
}

interface IRecipeServiceService_IGetById extends grpc.MethodDefinition<recipe_pb.GetByIdRequest, recipe_pb.GetByIdResponse> {
    path: string; // "/coot.RecipeService/GetById"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<recipe_pb.GetByIdRequest>;
    requestDeserialize: grpc.deserialize<recipe_pb.GetByIdRequest>;
    responseSerialize: grpc.serialize<recipe_pb.GetByIdResponse>;
    responseDeserialize: grpc.deserialize<recipe_pb.GetByIdResponse>;
}
interface IRecipeServiceService_ICreateRecipe extends grpc.MethodDefinition<recipe_pb.CreateRecipeRequest, recipe_pb.CreateRecipeResponse> {
    path: string; // "/coot.RecipeService/CreateRecipe"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<recipe_pb.CreateRecipeRequest>;
    requestDeserialize: grpc.deserialize<recipe_pb.CreateRecipeRequest>;
    responseSerialize: grpc.serialize<recipe_pb.CreateRecipeResponse>;
    responseDeserialize: grpc.deserialize<recipe_pb.CreateRecipeResponse>;
}

export const RecipeServiceService: IRecipeServiceService;

export interface IRecipeServiceServer {
    getById: grpc.handleUnaryCall<recipe_pb.GetByIdRequest, recipe_pb.GetByIdResponse>;
    createRecipe: grpc.handleUnaryCall<recipe_pb.CreateRecipeRequest, recipe_pb.CreateRecipeResponse>;
}

export interface IRecipeServiceClient {
    getById(request: recipe_pb.GetByIdRequest, callback: (error: grpc.ServiceError | null, response: recipe_pb.GetByIdResponse) => void): grpc.ClientUnaryCall;
    getById(request: recipe_pb.GetByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipe_pb.GetByIdResponse) => void): grpc.ClientUnaryCall;
    getById(request: recipe_pb.GetByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipe_pb.GetByIdResponse) => void): grpc.ClientUnaryCall;
    createRecipe(request: recipe_pb.CreateRecipeRequest, callback: (error: grpc.ServiceError | null, response: recipe_pb.CreateRecipeResponse) => void): grpc.ClientUnaryCall;
    createRecipe(request: recipe_pb.CreateRecipeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipe_pb.CreateRecipeResponse) => void): grpc.ClientUnaryCall;
    createRecipe(request: recipe_pb.CreateRecipeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipe_pb.CreateRecipeResponse) => void): grpc.ClientUnaryCall;
}

export class RecipeServiceClient extends grpc.Client implements IRecipeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getById(request: recipe_pb.GetByIdRequest, callback: (error: grpc.ServiceError | null, response: recipe_pb.GetByIdResponse) => void): grpc.ClientUnaryCall;
    public getById(request: recipe_pb.GetByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipe_pb.GetByIdResponse) => void): grpc.ClientUnaryCall;
    public getById(request: recipe_pb.GetByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipe_pb.GetByIdResponse) => void): grpc.ClientUnaryCall;
    public createRecipe(request: recipe_pb.CreateRecipeRequest, callback: (error: grpc.ServiceError | null, response: recipe_pb.CreateRecipeResponse) => void): grpc.ClientUnaryCall;
    public createRecipe(request: recipe_pb.CreateRecipeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipe_pb.CreateRecipeResponse) => void): grpc.ClientUnaryCall;
    public createRecipe(request: recipe_pb.CreateRecipeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipe_pb.CreateRecipeResponse) => void): grpc.ClientUnaryCall;
}
