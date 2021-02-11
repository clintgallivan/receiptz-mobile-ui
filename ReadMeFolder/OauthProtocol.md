# Process of having a merchant give Receiptz an Oauth Token

In order for a merchant to give us approval to access information from about their customers, receipt information, order information and payment information, there are a few steps. These are all required in order for our process to work properly. By requesting the merchants' customer's payment information, we are able to cross reference a few criteria with our Receiptz app user's information. Specifically what we will be accessing is this group of of data:

```
"card": {
  "card_brand": "MASTERCARD",
  "last_4": "0456",
  "exp_month": 8,
  "exp_year": 2022,
  "fingerprint": "sq-1-BIU6TBHmPTXkT9sLQpW2W6i513iLLeehcRoeYQYUR-L5qqjQFQ0hz7AETeo3qA1cLw",
  "card_type": "CREDIT",
  "prepaid_type": "NOT_PREPAID",
  "bin": "519955"
},
```

With this object, we will cross check this information, with information about our users, in our user database. If there is a match, we will make another API request on behalf of the merchant, using the Oauth token that the merchant will be able to provide us.

## How to retrieve an Oauth token

### Step 1 - The merchant signs into their square developer portal

Have the merchant sign into their [square developer portal](https://squareup.com/login?app=developer&return_to=https://developer.squareup.com/apps) by using their merchant login credentials.

### Step 2 - The Merchant should add an Application called "ReceiptzApp"
