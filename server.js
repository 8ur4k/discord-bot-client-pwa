const express = require("express");
const app = express();
const socket = require("socket.io");
require("dotenv").config();

const server = app.listen(process.env.PORT || 3000);
const io = socket.listen(server);

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/views/index.html");
});

const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  initializeSocket();
});

function initializeSocket() {
  console.log(`Logged in as ${client.user.username}`);
  client.user.setActivity("'`'-.,_,.='``'-.,_,.", {
    type: "STREAMING",
    url: "https://www.twitch.tv/8ur4kk_",
  });
}

io.on("connect", (socket) => {
  console.log("Socket connected");

  socket.on("alert-mode", () => {
    console.log("ALERT!");
  });

  client.on("message", (msg) => {
    const message = msg.content.toLowerCase();
    if (msg.channel.type == "dm") {
      return msg.author.send("8ur4k Lewis#0001");
    }

    if (message == ".notif") {
      socket.emit("notif");
    }
  });
});

client.login(process.env.TOKEN);
