import {
    Configuration,
    LookupApi,
    LookupWithDynamicAnalogyRequest
} from '@xpressai/vecto-client';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';

dotenv.config();

const config = new Configuration({
  accessToken: process.env.VECTO_USER_TOKEN,
});

async function textAnalogy(query: string, starts: string[], ends: string[]) {
  const lookupApi = new LookupApi(config);

  const startBlobs = starts.map(start => new Blob([start]));
  const endBlobs = ends.map(end => new Blob([end]));

  const params: LookupWithDynamicAnalogyRequest = {
    vectorSpaceId: Number(process.env.VECTOR_SPACE_ID),
    modality: 'TEXT',
    topK: 3,
    query: query,
    start: startBlobs,
    end: endBlobs,
  };

  try {
    const results = await lookupApi.lookupWithDynamicAnalogy(params);
    console.log("Text analogy results: ", JSON.stringify(results, null, 2));
  } catch (error) {
    console.error('Error analogy data:', error);
  }
}

function processCSV() {
  const fileContent = readFileSync('food-condiments.csv', { encoding: 'utf-8' });
  const records = parse(fileContent, {
    delimiter: ';',
    columns: true
  }) as { Item: string; Dish: string }[]; 

  const starts = records.map(record => record.Item);
  const ends = records.map(record => record.Dish);

  textAnalogy("hotdog", starts, ends);
}

processCSV();
