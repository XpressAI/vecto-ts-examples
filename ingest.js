"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vecto_client_1 = require("@xpressai/vecto-client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = new vecto_client_1.Configuration({
    accessToken: process.env.VECTO_USER_TOKEN,
});
function indexTextData() {
    return __awaiter(this, void 0, void 0, function* () {
        const indexApi = new vecto_client_1.IndexApi(config);
        const textBlob = new Blob(['Hello Vecto']);
        const textDataParams = {
            vectorSpaceId: Number(process.env.VECTOR_SPACE_ID),
            modality: 'TEXT',
            attributes: [JSON.stringify('sample metadata')],
            input: [textBlob],
        };
        try {
            const result = yield indexApi.indexData(textDataParams);
            console.log('Text data indexed successfully:', result);
        }
        catch (error) {
            console.error('Error indexing data:', error);
        }
    });
}
indexTextData();
const fs_1 = __importDefault(require("fs"));
function indexImageData() {
    return __awaiter(this, void 0, void 0, function* () {
        const indexApi = new vecto_client_1.IndexApi(config);
        const fileContent = fs_1.default.readFileSync('bread.png');
        const imageBlob = new Blob([fileContent]);
        const ImageDataParams = {
            vectorSpaceId: Number(process.env.VECTOR_SPACE_ID),
            modality: 'IMAGE',
            attributes: [JSON.stringify('sample metadata')],
            input: [imageBlob],
        };
        try {
            const result = yield indexApi.indexData(ImageDataParams);
            console.log('Image data indexed successfully:', result);
        }
        catch (error) {
            console.error('Error indexing data:', error);
        }
    });
}
indexImageData();
