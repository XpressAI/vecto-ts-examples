import {
  Configuration,
  IndexApi,
  IndexDataRequest,
} from '@xpressai/vecto-client';

const config = new Configuration({
  accessToken: 'your-vecto-token',
});

async function indexTextData() {
  const indexApi = new IndexApi(config);
  const textBlob = new Blob(['Hello Vecto']);

  const textDataParams: IndexDataRequest = {
    vectorSpaceId: 0, // update with your vector space ID
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

import fs from 'fs';

async function indexImageData() {
  const indexApi = new IndexApi(config);
  const fileContent = fs.readFileSync('bread.png');
  const imageBlob = new Blob([fileContent]);

  const ImageDataParams: IndexDataRequest = {
    vectorSpaceId: 0, // update with your vector space ID
    modality: 'IMAGE',
    attributes: [JSON.stringify('sample metadata')],
    input: [imageBlob],
  };

  try {
    const result = await indexApi.indexData(ImageDataParams);
    console.log('Image data indexed successfully:', result);
  } catch (error) {
    console.error('Error indexing data:', error);
  }
}

indexImageData();
