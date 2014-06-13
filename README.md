TravellerUniverseCreationKit
============================

This is a fairly simple implementation of the system- and subsector generation rules presented in Mongoose's Traveller core rulebook. It primarily presents JSON-objects for third-parties to consume, but also provides a simple webpage for looking around your creation. 

This should hopefully be your one-stop shop for systems and subsectors.

It is implemented as a node.js application, so in order to use it for anything, you'll have to run node somewhere.

Usage: node server.js

Future:
 - Save-button should _download_ the json for the current subsystem
 - The should be a load-button that let's users _upload_ json. There must necessarily be a lot of validation so we can give sensible error-messages when it predicably fails.