
import { sendQuery } from 'surge-graphql'

const url = "http://localhost:3000/graphql";

export const getRecentItems = () => sendQuery(url, 
    `{
      itemMany(limit: 10) {
        name
        image
        properties
        slug
        _id
      }
    }`);