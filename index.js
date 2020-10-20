/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Oct 21 2020 04:39:15 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const { PeerServer } = require("peer"),
  os = require("os");

PeerServer({ port: 9000, path: "/" });

const networkInterfaces = os.networkInterfaces();
let SERV_URL = networkInterfaces.eth0[0].address;
console.log(`Peer Server on port: ${process.env.PORT}`);
