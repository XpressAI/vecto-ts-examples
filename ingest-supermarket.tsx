import * as fs from 'fs';
import { parse } from 'csv-parse';
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

type InventoryItem = {
  itemName: string;
  category: string;
  description: string;
  calories: number;
  expiryDate: string;
};

async function indexInventoryTextData(inventoryItems: InventoryItem[]) {
  const indexApi = new IndexApi(config);
  const batchSize = 10;

  for (let i = 1; i < inventoryItems.length; i += batchSize) {
    const batch = inventoryItems.slice(i, i + batchSize);

    // Create an array of Blob for each item in the batch
    const inputs = batch.map(item => new Blob([JSON.stringify(item)]));
    const attributes = batch.map(item => JSON.stringify(item));

    const textDataParams: IndexDataRequest = {
      vectorSpaceId: Number(process.env.VECTOR_SPACE_ID),
      modality: 'TEXT',
      attributes: attributes,
      input: inputs,
    };

    try {
      const result = await indexApi.indexData(textDataParams);
      console.log('Batch indexed successfully:', result);
    } catch (error) {
      console.error('Error indexing batch:', error);
    }
  }
}

const csvFilePath = 'supermarket-inventory.csv';
const headers = ['itemName', 'category', 'description', 'calories', 'expiryDate'];

const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

parse(fileContent, {
  delimiter: ';',
  columns: headers,
  fromLine: 2 // Start parsing from line 2, skipping the header row
}, (_, result) => {
  indexInventoryTextData(result);
});