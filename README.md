# React-Native-Template

The goal of this project is to work as template for react-native applications, providing a base project structure, core dependencies and boilerplate to jumpstart development.

## Prerequisites

- Node > 7 and npm (Recommended: Use [nvm](https://github.com/creationix/nvm))
- Watchman `brew install watchman`
- React Native CLI `npm install -g react-native-cli`
- XCode > 9
- [JDK > 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Android Studio and Android SDK](https://developer.android.com/studio/index.html)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [PropTypes](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [React-Native-Config](https://github.com/luggit/react-native-config) to manage envionments.
- [React-Navigation](https://reactnavigation.org/) navigation library.
- [React-Native-Localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.
- [Redux](https://redux.js.org/) for state management.
- [Redux-Persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [Redux-Thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [Reselect](https://github.com/reactjs/reselect) the selector library for redux.
- [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) for testing.

## Usage

#### Use Template button

Click the "Use this template" button above the file list, then use the Owner drop-down menu, and select the account you want to own the repository. Creating a repository from a template has the following advantages:

- A repository created from a template starts with a single commit.
- Commits to a repository created from a template do appear in your contribution graph.
- Creating a repository from a template starts a new project quickly.

### Option #1: Using React-Native-Rename

You can start by cloning this repository and using [react-native-rename](https://github.com/junedomingo/react-native-rename). In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go.

Keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `npm install`.
- Create a `.env` file to store all your configuration constants. Remember to not commit this file, since it can store sensible information of your product.
- Run `react-native run-ios` or `react-native run-android` to start your application!

### Option #2: Copy the structure to your project

If you want to roll on your own and don't want to use this as a template, you can create your own project and then copy the `/src` folder (which has all the code of your application) and update your `index.js`.

Keep in mind that if you do this, you'll have to **install and link** all dependencies (as well as adding all the necessary native code for each library that requires it).

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `actions`: This folder contains all actions that can be dispatched to redux.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder that contains all your application components.
    - `Common`: Folder to store any common component that you use through your app (such as a generic button, textfields, etc).
    - `MyComponent`: Each component should be stored inside it's own folder, and inside it a file for its code and a separate one for the styles. Then, the `index.js` is only used to export the final component that will be used on the app.
      - `MyComponent.js`
      - `styles.js`
      - `index.js`
  - `helpers`: Folder to store any kind of helper that you have.
  - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `selectors`: Folder to store your selectors for each reducer.
  - `controllers`: Folder to store all your network and storage logic (you should have one controller per resource).
  - `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## Styleguide

For coding styling we decided to go with ESLint and [Airbnb's styleguide](https://github.com/airbnb/javascript) with a few exceptions that you can find on the [.eslintrc.json](./.eslintrc.json)

## Useful resources & Further reading

This are some posts/guides that explain some things that we use inside the project:

- [React-Native-Navigation and Redux](https://medium.com/react-native-training/explanation-of-react-native-navigation-wix-with-redux-deabcee8edfc).

For further explaining on the decisions made on this template, as well as on how to use it, please refer to the [full tutorial](./docs/Tutorial.pdf)

# How Receiptz App Works

## merchants partner with our company

Merchants give us the ability to view and utilize their transaction data.

We speak to merchant's who use the square platform. If they decide to partner with us, we go through the process of obtaining an [OAuth Token](https://developer.squareup.com/docs/oauth-api/overview) from the merchant. OAuth tokens are one time use tokens, that expire after a finite amount of time (a few minutes).

After we have partnered with a merchant, we now have the ability to make API requests to the [square merchant api](https://developer.squareup.com/us/en). Through those requests, we will be able to request data from Square, on behalf of the merchant.

## The API Calling Process - Brokendown

The quare [API Explorer](https://developer.squareup.com/explorer/square) is a great resource to show you all the endpoints of data we can potentially access. All the API requests are made on an intermittent basis. How often? TBD.

### Step 1 - Make an API call to /locations/List Locations

The object returned will look like this:

```

{
  "locations": [
    {
      "id": "4PY5QGHZJAD79",
      "name": "My Business",
      "address": {
        "address_line_1": "15 Sequero",
        "locality": "Rancho Santa Margarita",
        "administrative_district_level_1": "CA",
        "postal_code": "92688",
        "country": "US"
      },
      "timezone": "America/Los_Angeles",
      "capabilities": [
        "CREDIT_CARD_PROCESSING"
      ],
      "status": "ACTIVE",
      "created_at": "2019-12-11T04:58:54Z",
      "merchant_id": "RN6MTMDPFE3AB",
      "country": "US",
      "language_code": "en-US",
      "currency": "USD",
      "phone_number": "+1 949-842-7141",
      "business_name": "My Business",
      "type": "PHYSICAL",
      "business_hours": {},
      "business_email": "clintg94@gmail.com",
      "coordinates": {
        "latitude": 33.620689,
        "longitude": -117.621468
      },
      "mcc": "5814"
    }
  ]
}

```

### Step 2 - Make an API call to /Transactions/ List Transactions

We make this API call, using the `location_id` parameter. For each `location_ID` that was returned in the previous api call, we will make an API request.

Through this process, we will be returned an object that looks like this:

```
{
  "transactions": [
    {
      "id": "uYfnA2eWQ16nARUBNCWiitoeV",
      "location_id": "4PY5QGHZJAD79",
      "created_at": "2020-01-30T07:53:27Z",
      "tenders": [
        {
          "id": "XrwIMUDOtg8EjczBYtst1wv9vaB",
          "location_id": "4PY5QGHZJAD79",
          "transaction_id": "uYfnA2eWQ16nARUBNCWiitoeV",
          "created_at": "2020-01-30T07:53:21Z",
          "amount_money": {
            "amount": 100,
            "currency": "USD"
          },
          "processing_fee_money": {
            "amount": 19,
            "currency": "USD"
          },
          "customer_id": "DVTQ0NFKPH7ZFFAXQ8PMDEPFH8",
          "type": "CARD",
          "card_details": {
            "status": "CAPTURED",
            "card": {
              "card_brand": "MASTERCARD",
              "last_4": "0456",
              "fingerprint": "sq-1-BIU6TBHmPTXkT9sLQpW2W6i513iLLeehcRoeYQYUR-L5qqjQFQ0hz7AETeo3qA1cLw"
            },
            "entry_method": "KEYED"
          }
        }
      ],
      "refunds": [
        {
          "id": "SKxcqidgnrbJNCPzYpA6S",
          "location_id": "4PY5QGHZJAD79",
          "transaction_id": "uYfnA2eWQ16nARUBNCWiitoeV",
          "tender_id": "XrwIMUDOtg8EjczBYtst1wv9vaB",
          "created_at": "2020-01-30T07:59:44Z",
          "reason": "Accidental Charge",
          "amount_money": {
            "amount": 100,
            "currency": "USD"
          },
          "status": "APPROVED",
          "processing_fee_money": {
            "amount": 19,
            "currency": "USD"
          }
        }
      ],
      "product": "REGISTER",
      "client_id": "4B38BD50-32E2-4EE3-A56B-BA15F11362BB"
    }
```

With this information we will be using the

```

"card": {
"id": "ccof:uFfUBcvleXzBHXiO3GB",
"card_brand": "VISA",
"last_4": "5858",
"exp_month": 5,
"exp_year": 2022,
"cardholder_name": "John Doe",
"billing_address": {
"address_line_1": "123 Main Street",
"locality": "San Francisco",
"administrative_district_level_1": "CA",
"postal_code": "94103",
"country": "US"
}
}

```
