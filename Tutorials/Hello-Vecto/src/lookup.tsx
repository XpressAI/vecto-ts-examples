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
    vectorSpaceId: process.env.VECTOR_SPACE_ID,,
    modality: 'TEXT',
    topK: 3,
    query: 'text query',
  };

  try {
    const results = await lookupApi.lookup(textParams);
    console.log(results);
  } catch (error) {
    console.error('Error lookup data:', error);
  }
}

lookupTextData();
