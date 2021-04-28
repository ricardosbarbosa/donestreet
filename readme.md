# DoneStreet
## home project and code review
- We are building a jobs board website. We will be displaying developer jobs for several cities around the world
- The user should be able to select a city from this list (Chicago, San Francisco, Phoenix, London, Beijing, Paris)
- The user should be able to select a job description from this list (Javascript, Java, Python, React, Ruby, Go)
- When the user selects a city or selects a job description the list of jobs should update to match the user's selections
- There should be a frontend and a backend. The frontend should communicate to the backend via a REST API
- The backend should fetch the jobs from Github's public jobs API (eg. https://jobs.github.com/positions?description=javascript&location=san+francisco)
- The backend should have a database. The database should have one table called `searches` which stores a record of each job search. The `searches` table columns should include time, description, location and ip address of the user.
- You may use any languages and frameworks that you like

# how to run the project

1. clone the project

```
git clone git@github.com:ricardosbarbosa/donestreet.git
cd donestreet
```

2. install the depedencies
once this is a mono repo project the following command will install the frontend and the backend depedencies
```
yarn install
```

3. start the frontend and backend concurrently
the following command should start the backend and frontend together
```
yarn start
```

if this does not work for you try to start each project separately :
- backend
```
cd backend
yarn install
yarn start
```

- frontend
```
cd frontend
yarn install
yarn start
```
