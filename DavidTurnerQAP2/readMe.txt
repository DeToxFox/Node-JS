1. Run npm init : this creates a basic package.json file
2. Run npm i --save-dev nodemon : installs nodemon to automatically refresh terminal while coding, check package.json to see the "dependency" section
3. Inside package.json after "main" create "scripts": if it does not already exist, the following can be copied and pasted into package.json
  "scripts": {
    "devStart": "nodemon express.js"
  },

  and you should see this structure

  "main": "index.js",
  "scripts": {
    "devStart": "nodemon index.js"
  },
  "author": "David Turner",

  if scripts already exists do the following, NOTE a comma has to seperate the 2

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "devStart": "nodemon index.js"

  },
  4. Then run the command npm run devStart

  5. npm install date-fns --save : used for date and time

  6. npm install uuid : Universally Unique Identifiers 




