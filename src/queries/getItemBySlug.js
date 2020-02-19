// import "core-js/stable";
// import "regenerator-runtime/runtime";

import { sendQuery } from 'surge-graphql'

export const getItemBySlug = (slug) => {

var url = "http://localhost:3000/graphql";

var query = 
    `{
      itemOne(filter: {slug: \"${slug}\"}) {
        name
        image
        properties
        slug
      }
    }`;

  return sendQuery(url, query);
}