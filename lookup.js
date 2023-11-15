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
function lookupTextData() {
    return __awaiter(this, void 0, void 0, function* () {
        const lookupApi = new vecto_client_1.LookupApi(config);
        const textParams = {
            vectorSpaceId: Number(process.env.VECTOR_SPACE_ID),
            modality: 'TEXT',
            topK: 3,
            query: 'text query',
        };
        try {
            const results = yield lookupApi.lookup(textParams);
            console.log("Text lookup results: ", results);
        }
        catch (error) {
            console.error('Error lookup data:', error);
        }
    });
}
lookupTextData();
const fs_1 = __importDefault(require("fs"));
function lookupImageData() {
    return __awaiter(this, void 0, void 0, function* () {
        const lookupApi = new vecto_client_1.LookupApi(config);
        const fileContent = fs_1.default.readFileSync('bread.png');
        const imageBlob = new Blob([fileContent]);
        const ImageParams = {
            vectorSpaceId: Number(process.env.VECTOR_SPACE_ID),
            modality: 'IMAGE',
            topK: 3,
            query: imageBlob,
        };
        try {
            const results = yield lookupApi.lookup(ImageParams);
            console.log("Image lookup results: ", results);
        }
        catch (error) {
            console.error('Error lookup data:', error);
        }
    });
}
lookupImageData();
