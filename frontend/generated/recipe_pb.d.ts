// package: coot
// file: recipe.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class GetByIdRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByIdRequest): GetByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByIdRequest;
    static deserializeBinaryFromReader(message: GetByIdRequest, reader: jspb.BinaryReader): GetByIdRequest;
}

export namespace GetByIdRequest {
    export type AsObject = {
        id: number,
    }
}

export class GetByIdResponse extends jspb.Message { 

    hasRecipe(): boolean;
    clearRecipe(): void;
    getRecipe(): Recipe | undefined;
    setRecipe(value?: Recipe): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetByIdResponse): GetByIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByIdResponse;
    static deserializeBinaryFromReader(message: GetByIdResponse, reader: jspb.BinaryReader): GetByIdResponse;
}

export namespace GetByIdResponse {
    export type AsObject = {
        recipe?: Recipe.AsObject,
    }
}

export class CreateRecipeRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRecipeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRecipeRequest): CreateRecipeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRecipeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRecipeRequest;
    static deserializeBinaryFromReader(message: CreateRecipeRequest, reader: jspb.BinaryReader): CreateRecipeRequest;
}

export namespace CreateRecipeRequest {
    export type AsObject = {
        title: string,
    }
}

export class CreateRecipeResponse extends jspb.Message { 

    hasRecipe(): boolean;
    clearRecipe(): void;
    getRecipe(): Recipe | undefined;
    setRecipe(value?: Recipe): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRecipeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRecipeResponse): CreateRecipeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRecipeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRecipeResponse;
    static deserializeBinaryFromReader(message: CreateRecipeResponse, reader: jspb.BinaryReader): CreateRecipeResponse;
}

export namespace CreateRecipeResponse {
    export type AsObject = {
        recipe?: Recipe.AsObject,
    }
}

export class Recipe extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getTitle(): string;
    setTitle(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Recipe.AsObject;
    static toObject(includeInstance: boolean, msg: Recipe): Recipe.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Recipe, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Recipe;
    static deserializeBinaryFromReader(message: Recipe, reader: jspb.BinaryReader): Recipe;
}

export namespace Recipe {
    export type AsObject = {
        id: number,
        title: string,
    }
}
