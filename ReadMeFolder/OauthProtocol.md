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

After being signed in, click on the plus button under "Applications".

![Oauth1](./assets/Oauth1.png)

Type in "ReceiptzApp" into the input field. Then click save.

![Oauth2](./assets/Oauth2.png)

### Step 3 - Open up the ReceiptzApp Application

At this point, the merchant will go into the ReceiptzApp Application.

![Oauth3](./assets/Oauth3.png)

### Step 4 - Head into the Oauth Production section.

From there, click on "production", and then click on "Oauth".

![Oauth4](./assets/Oauth4.png)

### Step 5 - Fill in criteria and and create authorization code.

Type into the Production Redirect URL section: http://receiptzapp.com. Then click save.

![Oauth5](./assets/Oauth5.png)

### Step 6 - Create an Authorization Code and set permissions.

#### Part 1

In order to create the Oauth token we need an Authorization Code first. In order to create an Authorization Code, the merchant will open up another browser and type the URL into the browser.

`https://connect.squareup.com/oauth2/authorize?client_id={APPLICATION_ID}&scope=MERCHANT_PROFILE_READ+PAYMENTS_READ+CUSTOMERS_READ+ORDERS_READ`

The part that says `{APPLICATION_ID}` is going to be replaced with the ReceiptzApp application id. You can find that on the Oauth page in the picture above, labeled under `"Production Application ID"`, directly under `"Production Redirect URL"`.

The part of the url that says `MERCHANT_PROFILE_READ+PAYMENTS_READ+CUSTOMERS_READ+ORDERS_READ` is the set of permissions we will be accessing from the merchant data. We need to be have those permissions enabled for this Receiptz to work.

#### Part 2

Now that you just went to the webpage above, take a look at the URL. You should see something like this:

`https://receiptzapp.com/?code=sq0cgp-acwU1y8hUJpd2YuCBQ_fjw&response_type=code#_=_`

Keep this on hand! The part of the URL to the right of `https://receiptzapp.com/?code=` and to the left of `&response_type=code#_=_` is the authorization token.
