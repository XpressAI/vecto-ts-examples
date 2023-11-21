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

async function textLookup(query: string, promptInjection: string = "condiments for " + query) {
  const lookupApi = new LookupApi(config);

  // Update the query with the promptInjection
  const updatedQuery = promptInjection + " " + query;

  const params: LookupRequest = {
    vectorSpaceId: Number(process.env.VECTOR_SPACE_ID),
    modality: 'TEXT',
    topK: 5,
    query: updatedQuery,
  };

  try {
    const results = await lookupApi.lookup(params);
    console.log("Text lookup results: ", JSON.stringify(results, null, 2));
  } catch (error) {
    console.error('Error lookup data:', error);
  }
}

// Example usage
textLookup("hotdogs");