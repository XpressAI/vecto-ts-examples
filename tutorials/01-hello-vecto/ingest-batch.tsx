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

    const foodItems = [
        { name: 'Bread', description: 'A staple food made from flour and water.' },
        { name: 'Apple', description: 'A sweet, edible fruit.' },
        { name: 'Cheese', description: 'A dairy product derived from milk.' },
        { name: 'Tomato', description: 'A red or yellowish fruit with a juicy pulp.' },
        { name: 'Chicken', description: 'A domestic fowl kept for its eggs or meat.' },
        { name: 'Rice', description: 'A cereal grain, staple food in many parts of the world.' },
        { name: 'Pasta', description: 'A type of Italian noodle dish.' },
        { name: 'Fish', description: 'An aquatic animal, important source of protein.' },
        { name: 'Banana', description: 'A long curved fruit with a yellow skin.' },
        { name: 'Potato', description: 'A starchy plant tuber, a staple food.' }
    ];

    // Create arrays for blobs and attributes
    const blobs = foodItems.map(item => new Blob([item.name]));
    const attributes = foodItems.map(item => JSON.stringify({ name: item.name, description: item.description }));

    const textDataParams: IndexDataRequest = {
        vectorSpaceId: Number(process.env.VECTOR_SPACE_ID),
        modality: 'TEXT',
        attributes: attributes,
        input: blobs,
    };

    try {
        const result = await indexApi.indexData(textDataParams);
        console.log('Food items indexed successfully:', result);
    } catch (error) {
        console.error('Error indexing food items:', error);
    }
}

indexTextData();