## HOW TO RUN

In one terminal, run `mongodb`

```less
rm -rf /Users/karthikprasanna/data/db
mkdir -p /Users/karthikprasanna/data/db
mongod --dbpath /Users/karthikprasanna/data/db
```

In another terminal, run the backend

```less
cd backend
npm install
npm start
```

In another terminal, run the frontend

```less
cd frontend
npm install
npm start
```
