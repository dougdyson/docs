# SETTING UP INITAL ENVIRONMENTS
This document details the steps and commands to install a node JS environment, including mocha chai for unit testing, and creating the initial git repository.

## NODE
### 1. node -v make sure running node 10.20.1
* `node -v`

### 1.1 if not node 10.20.1 then list all ver available
* `nvm ls` 

### 1.2 nvm use 10.20.1 set the default
* `nvm alias default 10.20.1`

### 2. establish dependencies and create package,json
* `npm init -y`

## UNIT TESTING
### 3. install mocha and chai
* `npm install mocha chai --save-dev`

### 4. update test variable in package.json "scripts": {
* `"test": "./node_modules/mocha/bin/mocha"`

## GIT
### 5. Create a new repository on the command line
#### commit package.json and mocha chai before coding starts
* `git init`
* `touch .gitignore`
* *add node_modules/ to .gitignore*`
* `git touch README.md`
* *add h1 title and brief description in README.md*
* `git commit -m "first commit"`
* `git remote add origin [git@github.com:HatHeadNinja/[repo-name].git]`
* `git push -u origin master`

### Clone existing directory
* `git clone [git@github.com:HatHeadNinja/[repo-name].git]`

### Using GIT during development
* `git status`
* `git add / checkout`
* `git update .`
* `git commit .`
* `git push -u origin master`
