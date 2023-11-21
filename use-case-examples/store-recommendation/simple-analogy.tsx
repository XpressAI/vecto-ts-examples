import {
    Configuration,
    LookupApi,
    LookupWithDynamicAnalogyRequest
} from '@xpressai/vecto-client';

import dotenv from 'dotenv';
dotenv.config();

const config = new Configuration({
  accessToken: process.env.VECTO_USER_TOKEN,
});

async function textAnalogy(query: string, start: string, end: string) {
  const lookupApi = new LookupApi(config);

  const startBlob = new Blob([start]);
  const endBlob = new Blob([end]);

  const params: LookupWithDynamicAnalogyRequest = {
    vectorSpaceId: Number(process.env.VECTOR_SPACE_ID),
    modality: 'TEXT',
    topK: 5,
    query: query,
    start: [startBlob],
    end: [endBlob],
  };

  try {
      const results = await lookupApi.lookupWithDynamicAnalogy(params);
      console.log("Text analogy results: ", JSON.stringify(results, null, 2));
  } catch (error) {
    console.error('Error analogy data:', error);
  }
}

// Example usage
textAnalogy("hotdog", "burger", "ketchup");