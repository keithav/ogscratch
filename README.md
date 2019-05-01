# ogscratch

The goal of this project was to find a way to make it easier to connect local artists to potential buyers. To do this, we wrote a fullstack application that allows users to create an account, submit art, and browse art relative to their location. 

<h1>
Database
</h1>

The database is hosted on an Elephant SQL database which should be interchangable by those who fork this project so the querys used to create the tables can be provided upon request

There are a total of 4 tables used:
  <ul>
  <li>testauth: basic account creation table for the testAPI included</li>
  <li>Sessions: used to send data relative to the user (no way to automatically delete sessions as of now)</li>
  <li>accounts: similar to testauth but with added rows relevant to the site</li>
  <li>art: stores all art and required info including coordinates</li>
  </ul>
  

<h1>TestAPI</h1>

In order to get more familiar with the code, we included a basic tool to test authentication.

There are three routes that are used, two being POST and one being a GET
  <ul>
  <h3>POST</h3>
  <li>testauth - used to store an account into the database, creates a JWT cookie, then creates a session which is stored in the sesssions table</li>
  <li>testsignin - verifies username and password, creates a JWT cookie (if it's not in the client's cookies), then makes a session(unless a session is in the DB already)</li>
  <h3>GET</h3>
  <li>getallart - querys DB to send all rows in the art table</li>
  </ul>
  
  in the test api, post requests should be in the form of a JSON object like to:
  
  ```
  {
    "username": "example_string",
    "password": "plaintext_string"
  }
  ```
  
  password will be encrypted in the backend before being stored into the DB so make sure to use simple passwords while testing
  
When logging in, errors relative to the error will be send back in the form of a json object (example):
```
{
  "error": "invalid username" 
}
```
<h4>Error handling </h4>

With this in place, our error checking system works where the rest of the middleware in a request will be ignored with the error being sent instead

When successfully logging in/creating an account, an object will be sent with the row of the new user as well as other extras relating to SQL

<h1>Important details</h1>

In the "productionAPI," some of the controllers look similar but behave differently

<h3> testQueryController.testSignIn </h3>

Used to lookup a valid username stored in the database
`queryController.signIn` behaves identical except for the fact that the query is called on a different table

testSignIn: `SELECT * FROM testAuth...` 

signIn: `SELECT * FROM accounts...`


<h3> Misc. </h3>

There is a middleware method in the `testQueryController` that isn't used but can be implemented in a GET/POST to test our method of fetching art based on lng/lat GPS distance
  <ul>
    <h2>testQueryController.testDistance</h2>
    expected input (JSON):

      `{
        "lng":/*float val (reccomend to use browserAPI in frontend or Google Maps for postman to grab these coordinates)*/,
        "lat":/*float val (   "      "   "     "       "      "     "       "      "     "     "   "    "        "    )*/,
        "distance": /*int val in miles*/
      }
      `
  </ul>
  <ul>
expected ouput: list of artwork rows from art table less than the distance provided
<br>
backend console message:
   
       +++++ Pulled array of artwork within ${req.body.distance} miles

   </ul>
   
<h4>DISCLAIMER</h4>

Although we did use the pythagorean theorem formula to measure distance beteen two points, WE DO NOT THINK THAT THE EARTH IS FLAT... we just didn't have enough time to apply the haversine formula to the SQL query
