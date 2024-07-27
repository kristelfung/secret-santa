# Secret Santa
A secret santa generator without signup or email, built in React and bootstrapped with [create-react-app](https://github.com/facebook/create-react-app). Live demo available at [https://linksecretsanta.netlify.app/](https://linksecretsanta.netlify.app/).

## Installing
Clone or download the repository onto your local machine. Navigate to the directory, and run:

```
yarn install
```

Additionally, you will have to create a key for crypto-js in a environment file, such as an `.env.local` file. The key is called REACT_APP_ENCRYPT_KEY and it needs to be 16 digits of characters or numbers. For example:

```
REACT_APP_ENCRYPT_KEY = 123456789abcdefg
```

## Running the App

Run the development server like so:

```
yarn start
```
