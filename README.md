# Apollo Strapi POC (Frontend)
Location based search proof of concept using Typescript, NextJS, Apollo, Strapi & JWT

So far: 
- Filterable list of items, driven by filters in the URL params   
- Leaflet map instance aggregating items based on source location    
- Login or Create account logic via JWT and GraphQL mutations   
- Netlify serverless lambda library to manage server side authentication gate.   



## Making it work
Inspired by: https://strapi.io/blog/build-a-blog-with-next-react-js-strapi-and-apollo     

#### Strapi db & deploys 
https://dev.to/hayleycodes/deploying-a-strapi-project-on-heroku-1aba     
https://github.com/strapi/strapi-starter-blog/blob/master/config/env/production/database.js     
https://www.netlify.com/blog/2020/08/11/deploy-a-strapi-and-react-blog-on-netlify/           
https://strapi.io/documentation/3.0.0-beta.x/guides/databases.html#sqlite-installation        
https://github.com/strapi/strapi/issues/2334        
https://www.mstweaks.com/strapi-with-mongodb-and-mongodb-atlas/        
https://docs.netlify.com/configure-builds/environment-variables     

#### Auth with strapi
https://medium.com/ovrsea/token-authentication-with-react-and-apollo-client-a-detailed-example-a3cc23760e9           
https://strapi.io/documentation/3.0.0-beta.x/guides/auth-request.html     

#### Typescript & Apollo
https://www.apollographql.com/docs/react/development-testing/static-typing/        
https://www.apollographql.com/blog/getting-started-with-typescript-and-apollo-a9aa2c7dcf87/           

#### General Graphql
https://graphql.org/learn/queries/       
https://www.apollographql.com/blog/the-concepts-of-graphql-bc68bd819be3/     

#### Apollo + SSR
https://dev.to/angad777/setting-up-apollo-graphql-in-next-js-with-server-side-rendering-45l5         
https://dev.to/alexandrg/how-to-setup-apollo-client-in-order-to-perform-graphql-queries-with-nextjs-41fe         

#### NextJS with Strapi & Apollo
https://nec.is/writing/graphql-with-apollo-react-and-nextjs/       
https://strapi.io/blog/strapi-next-setup         

#### Apollo Caching
https://towardsdatascience.com/updating-apolloclient-cache-and-re-rendering-data-4537c11c6daf        
https://www.apollographql.com/blog/first-impressions-with-apollo-client-3-2ae2a069ab2f/        
https://www.apollographql.com/docs/react/caching/cache-interaction/            
https://www.apollographql.com/blog/first-impressions-with-apollo-client-3-2ae2a069ab2f/         

#### Strapi send email
https://strapi.io/documentation/v3.x/plugins/email.html#programmatic-usage        
https://medium.com/@kainikhil/send-emails-using-strapi-%EF%B8%8F-24184071de21        
https://stackoverflow.com/questions/56112400/send-emails-using-strapi        
https://www.npmjs.com/package/sendmail        

#### Cloudinary integration
https://medium.com/@jasong84/configuring-cloudinary-with-strapi-3-1-4-6dbddc721617         
https://jaredude.wordpress.com/2020/08/04/getting-started-with-strapi-and-cloudinary-new-npm-package/     

#### Location Data
https://foursquare.com/developers/apps/E5B4ADENUZLKZRSUONNZP2EJTXPIYDF0Y24L5EN1F3BNZIMM/settings           

#### Strapi authenticated users
https://www.drewtown.dev/post/using-strapi-policies-to-create-editable-user-profiles/
