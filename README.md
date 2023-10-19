# Chat Web App | Daily Commit Challenge | Project 4

I am challenging myself to make a commit daily. This will at the very least, get me coding daily and increasing my skills. 

Each day, I will tackle an easy/medium difficult project. I will be uploading all my code to [my GitHub profile](https://github.com/willbushie). My goal is to code daily (and hopefully make at least one commit). As long as I'm coding daily and improving my skills, then this challenge is a success.

*Please Note: These projects will sometimes have very little commits (someimtes even only one). This is for simple developemnt and I would use more commits with a higher complexity project.*

## Project Goals

This project is a chat application. The goal is to create a full stack application that users can use for real time messaging. I'm using a lot of technologies that I am not familiar with in this project. 

- [ ] Setup Docker for easy local development and easy deployment. 
- [ ] Setup React & Node.js. 
- [ ] Users can log in (authentication).
- [ ] 


# How To Run

Utilizing Docker, runnning this code is very straightforward. The project contains a `docker-compose.yml` file which contians all configuration for the containers. Just run the below commands once the codebase is installed. 

## Setting Up The Environemnt

*Note: The various `node_modules` directories will not be included in source control. As of now, there are no directions on how to setup this project on another machine. I will update this documentation in the future with directions on how to do so. Those directions will be found here.*

## Starting The Containers
Here is the command needed to start both the frontend and the backend containers:
```
/* the -d option will start the containers and give control of command line back to user. */
$ docker-compose up -d
```

To stop and remove the container once you are done, run this command:
```
$ docker-compose down
```

To get a list of running containers, use this command: 
```
$ docker ps
```

Here are the links to view on a browser once everything is up and running:
- [Backend](http://localhost:4000/)
- [Frontend](http://localhost:3000/)

*Note: For easy identification, the backend container created is called `chat_api_backend` and the frontend container is called `chat_client_frontend`.*

## Running Without Docker

It is recommended to take advantage of docker to run this codebase. However, if that is not desired, here is how you should run the 

To start the server (backend):
```
/* Starting in the root directory, move to the api folder */
$ cd ./api

/* Start the server with npm - viewable at https://localhost:4000*/
$ npm run start
```

To start the client (frontend):
```
/* Starting in the root directory, move to the api folder */
$ cd ./client

/* Start the server with npm - viewable at https://localhost:3000*/
$ npm run start
```

## Project Dependencies

Here is a list of packages and resources that are needed for the codebase to function.

- Docker ([Docs](https://docs.docker.com/) | [Download](https://www.docker.com/get-started/)) - Recomended, but not necessary
- Node.js ([Docs](https://nodejs.org/en/docs) | [Download](https://nodejs.org/en/download))
- [Express.js](https://expressjs.com/)
- [React](https://react.dev/)

# Takeaways

Here are the things I learned and took away from this project.

## Steps & Time To Complete

Here are the steps I took to accomplish this project. 

1. Start the README and Git (5 min).
2. Setup Docker for developement (2 hrs).
3. Troubleshoot React Hot Reloading not working (2 hrs).
4. Design super basic frontend for testing (2 hrs).

**Total project time (including coding & research): **

## What I Learned

A list of things that I learned during this project.

- 

## Resources

These are some of the guides/tutorials I followed to help me learn the technologies used in this project. 

- [Dockerizing React & Node.js web application](https://dev.to/andrewbaisden/how-to-use-docker-in-your-node-and-react-applications-597e)
- [`npx create-react-app myapp` command not working](https://stackoverflow.com/questions/53657920/i-cant-install-react-using-npx-create-react-app)
- [React Hot Reload not working in Docker Container - Stack Overflow Solution](https://stackoverflow.com/a/72478714)
- 

## Contact

If you'd like to contact me, you can reach me at my email [here](mailto:willbushie@gmail.com).