import {
  Configuration,
  LookupApi,
  LookupRequest,
} from '@xpressai/vecto-client';

import dotenv from 'dotenv';
dotenv.config();

const config = new Configuration({
  accessToken: process.env.VECTO_USER_TOKEN,
});

async function lookupTextData() {
  const lookupApi = new LookupApi(config);

  const textParams: LookupRequest = {
    vectorSpaceId: Number(process.env.VECTOR_SPACE_ID),
    modality: 'TEXT',
    topK: 3,
    query: 'text query',
  };

  try {
    const results = await lookupApi.lookup(textParams);
    console.log("Text lookup results: ", results);
  } catch (error) {
    console.error('Error lookup data:', error);
  }
}

lookupTextData();


import fs from 'fs';

async function lookupImageData() {
  const lookupApi = new LookupApi(config);
  const fileContent = fs.readFileSync('bread.png');
  const imageBlob = new Blob([fileContent]);
  
  const ImageParams: LookupRequest = {
    vectorSpaceId: Number(process.env.VECTOR_SPACE_ID),
    modality: 'IMAGE',
    topK: 3,
    query: imageBlob,
  };

  try {
    const results = await lookupApi.lookup(ImageParams);
    console.log("Image lookup results: ", results);
  } catch (error) {
    console.error('Error lookup data:', error);
  }
}

lookupImageData();
