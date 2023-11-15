import {
  Configuration,
  IndexApi,
  IndexDataRequest,
} from '@xpressai/vecto-client';

import dotenv from 'dotenv';
dotenv.config();

const config = new Configuration({
  accessToken: process.env.VECTO_USER_TOKEN,
});

async function indexTextData() {
  const indexApi = new IndexApi(config);
  const textBlob = new Blob(['Hello Vecto']);

  const textDataParams: IndexDataRequest = {
    vectorSpaceId: process.env.VECTOR_SPACE_ID,
    modality: 'TEXT',
    attributes: [JSON.stringify('sample metadata')],
    input: [textBlob],
  };

  try {
    const result = await indexApi.indexData(textDataParams);
    console.log('Text data indexed successfully:', result);
  } catch (error) {
    console.error('Error indexing data:', error);
  }
}

indexTextData();

async function indexImageData() {
  const indexApi = new IndexApi(config);
  const textBlob = new Blob(['Hello Vecto']);

  const textDataParams: IndexDataRequest = {
    vectorSpaceId: process.env.VECTOR_SPACE_ID,
    modality: 'TEXT',
    attributes: [JSON.stringify('sample metadata')],
    input: [textBlob],
  };

  try {
    const result = await indexApi.indexData(textDataParams);
    console.log('Text data indexed successfully:', result);
  } catch (error) {
    console.error('Error indexing data:', error);
  }
}

indexImageData();
