## HOW DOES THIS WORK?

Welp, first of all there are two frontends, the one you see at [Pet Tracker](https://pet-tracker.eldy.io/)

And then also one running on a server somewhere that is spoofing localhost:3000

CoolCats API allows CORS from localhost on port 3000, so I created an express server
that uses selinium to query my spoof server and get the data from the api call
return it back to my express server, which returns to the frontend. So its a proxy!

Anyways, the item rarity data is build from my index.js file which I built from some 
snapshots of marketplace rarity data. Check out my tweet to learn more about how I THINK
item rarity works.

[Twitter Post](https://twitter.com/eldor4747/status/1514835063782862849?s=20&t=19WsG-MjZ_AJbnFO5OMYcQ)

To run this project, welp, god help you if you try XD