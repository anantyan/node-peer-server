const express = require("express");
const {ExpressPeerServer} = require("peer");

const app = express()

const server = app.listen(process.env.PORT || '9000')
const peerServer = ExpressPeerServer(server, {
    path: "/assets"
})

app.use("/peer", peerServer)