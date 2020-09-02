# SETTING UP INITIAL ENVIRONMENTS
Specifically intended for the Lighthouse Labs bootcamp virtual machine, this document details the steps and commands to install a node JS environment, including mocha chai for unit testing, and creating the initial git repository.

## NODE
### make sure running node 10.20.1
* `node -v`

### if not node 10.20.1 then list all ver available
* `nvm ls` 

### nvm use 10.20.1 set the default
* `nvm alias default 10.20.1`

### establish dependencies and create package,json
* `npm init -y`

## ESLINT
* `npm install eslint --save-dev`

## UNIT TESTING
### MOCHA / CHAI
* `npm install mocha chai --save-dev`

### update test variable in package.json "scripts": {
* `"test": "./node_modules/mocha/bin/mocha"`

## CHOKIDAR
* `npm install chokidar --save-dev`
---------------------------------
### update test variable in package.json "scripts": {
* `"test": "CHOKIDAR_USEPOLLING=1 ./node_modules/mocha/bin/mocha --watch",`

## NODEMON
* `npm install nodemon --save-dev`
---------------------------------
### update start variable in package.json "scripts": {
* `"start": "./node_modules/.bin/nodemon -L express_server.js",`

## MORGAN
* `npm install morgan --save-dev`
---------------------------------
* `const morgan = require("morgan");`
* `app.use(morgan('dev'));`

## EXPRESS
* `npm install express`
-----------------------
* `const express  = require("express");`
* `const app = express();`
* `const port = process.env.PORT || 3000;`
* `app.use(express.urlencoded({ extended: false }));`
* `app.set('view engine', 'ejs');`
* `app.listen(port, function (){console.log(`Server running at port: ${port}`);});`
* `app.get('/', (req, res) => {res.send('hello');});`

## GIT
### Create a new repository on the command line
#### commit package.json and mocha chai before coding starts
* `git init`
* `touch .gitignore`
* *add node_modules/ to .gitignore*`
* `touch README.md`
* *add h1 title and brief description in README.md*
* `git commit -m "first commit"`
* `git branch -M master`
* `git remote add origin git@github.com:[YOUR-GITHUB-USERNAME/NEW-REPO-NAME].git`
* `git push -u origin master`

### Clone existing directory
* `git clone https://github.com/[YOUR-GITHUB-USERNAME/NEW-REPO-NAME].git`

### Using GIT during development
* `git status`
* `git add` for new files or `git checkout` to remove files
* `git update .`
* `git commit .`
* `git push -u origin master`
