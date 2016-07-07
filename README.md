
##npm install & npm start

### 07/07/2016
  finished search page 
### 07/05/2016 
  finished manager module(update, add , delete)

###Suggestion about Restful api
   1. I don't think  it's friendly to response null result when the response is null by request.
      I prefer that empty array return the [] and null response return {} or something. It's strange that when I call an api, there is no response even the status is '200'.

   2. It's terrible that puts the app_secret into header. It's not safe. Maybe we can use Md5 or RSA to encrpt the sensitive data.




