# entrepreneurs-frontend

## To run the app locally 🤖

1. Clone the repo.

2. Open a terminal client.

3. Navigate to the repo root folder.

4. Copy .env.example to .env

5. Install all dependencies.

```shell
yarn
```

6. Start the server.

```shell
yarn dev
```

7. The NextJs server will start on localhost:3000.

## For information about NextJs
[NextJs-docs](https://nextjs.org/docs/getting-started)

7.1. If NextJs doesn't start running and gives an error 
```
Fetch API cannot load http://localhost:3000/api/graphql due to access control checks.
```

7.2.Create a proxy to enable CORS like so:
```
lcp --proxyUrl http://localhost:3000/api/graphql
```

7.3 Change the .env file to the newly created proxy endpoint

7.4 Return to point 6.

## For information about the Dashboard Template
[xtreme-NextJs](https://demos.wrappixel.com/premium-admin-templates/nextjs/xtreme-nextjs-dist/docs/documentation.html)