## stocks

#### Requirements

- You need an api key for the alphavantage api.
- node.js installed on your machine

#### Setup


1) set the following environment variables

In Linux/OSX

```
  export ALPHAVANTAGE_KEY=<your alphavantage key>
  export PORT=<port>
  export STOCKS_DOMAIN=<ip or valid host>
```
In Windows

```
  setx ALPHAVANTAGE_KEY=<your alphavantage key>
  setx STOCKS_PORT=<port>
  setx STOCKS_DOMAIN=<ip or valid host>
```

2) install dependencies
```
npm install
```

3) Run server

``` 
node server.js
```



