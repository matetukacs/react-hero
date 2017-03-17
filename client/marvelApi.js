import md5 from 'js-md5';
import { } from './config';

const buildParams = () => {

  const timestamp = + new Date;

  return [
    {
      name: "ts",
      value: timestamp
    },
    {
      name: "apikey",
      value: process.env.MARVEL_API_KEY;
    },
    {
      name: "hash",
      value: md5(timestamp + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_API_KEY)
    }
  ]
  .reduce( (paramsString, currParam) => {
    return paramsString + `${currParam.name}=${currParam.value}&`;
  }, '?')
  .slice(0,-1); //remove last "&" character
}

export const fetchComics = () => {
    return fetch(comicsApiEndpoint + buildParams(), {
			headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
		})
		.then( res => res.json() )
    .then( jsonRes => jsonRes.data.results);
}
