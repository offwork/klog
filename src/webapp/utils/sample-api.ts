import fetch from 'isomorphic-unfetch';

export async function sampleFetchWrapper(input: any, init?: {}) {
  try {
    const data = await fetch(input, init).then(res => res.json());
    return data;

  } catch (error) {
    throw new Error(error);
  }
}