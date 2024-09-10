
const express = require("express");
const cors = require("cors");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
      origin: "http://localhost:3000/",
  }
});
const port = process.env.PORT || 8000;
const fs = require('node:fs');
app.use(express.json());


let test;
let contents;
let testing;
let patient;
let patients;
let timeouts = [];
let token;
let webex;

global.window = {};
global.window.location = {};
global.window.navigator = {
    userAgent: 'test'
};
global.window.setTimeout = setTimeout;
// global.Webex = {};

const Webex = require('webex');
// Bearer Access Token on killerwat79@gmail.com From https://developer.webex.com/docs/getting-started
webex = (window.webex = Webex.init({
  credentials: {
    access_token: "YTk0MjQ1ODItZjY2My00NjhmLWE1ZTgtZDAyY2U4OWUxNWY5MThjYTVhNDAtMzI0_P0A1_a04d7df2-886e-41da-ba2e-33e948411748" 
  }
}));

 webex.meetings.register();
  
  
  let existingMeetings;
// Sync Meetings From Server
webex.meetings.syncMeetings().then(() => {
  // Existing meetings live in the meeting collection
  existingMeetings = webex.meetings.getAllMeetings();
  console.log(existingMeetings);    
});

