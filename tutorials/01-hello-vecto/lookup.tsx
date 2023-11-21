import {
  Configuration,
  LookupApi,
  LookupRequest,
} from '@xpressai/vecto-client';

const config = new Configuration({
  accessToken: 'your-vecto-token',
});

async function lookupTextData() {
  const lookupApi = new LookupApi(config);

  const textParams: LookupRequest = {
    vectorSpaceId: 0, // update with your vector space ID
    modality: 'TEXT',
    topK: 3,
    query: 'text query',
  };

  try {
    const results = await lookupApi.lookup(textParams);
    console.log("Text lookup results: ", JSON.stringify(results, null, 2));
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
    vectorSpaceId: 0, // update with your vector space ID
    modality: 'IMAGE',
    topK: 3,
    query: imageBlob,
  };

  try {
    const results = await lookupApi.lookup(ImageParams);
    console.log("Image lookup results: ", JSON.stringify(results, null, 2));
  } catch (error) {
    console.error('Error lookup data:', error);
  }
}

lookupImageData();
