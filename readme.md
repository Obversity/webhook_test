# Purpose

A simple way to log webhooks from remote services locally.

# Installation

Clone the repo, install packages and run the server

```
npm install
node index.js
```

In a new terminal, install [ngrok](https://ngrok.com/) and run locally on port 3030

```
ngrok http 3030
```

Copy the url it gives you and configure it for the webhook you want to send. 


The url will look something like this:

```
https://a5d3269becc5.ngrok.io
```

We can test this URL like so:

```
curl -X POST -H "Content-Type: application/json" -d '{"hello": "world" }' -i https://a5d3269becc5.ngrok.io
```

You should now see `{"hello": "world" }` logged in the terminal that you ran your node server (`node index.js`).

If this works, you should now be able to trigger webhooks from the service and see them locally!

## Debugging

If you stop and restart the node server at any point (for example if changing a port), you may need to restart ngrok
and reconfigure the service with the new URL.

 

