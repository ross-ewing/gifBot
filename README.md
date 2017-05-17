# Quick Start Guide
Run npm install -

Get the user_id of the facebook account you wish to send to.
  - go to friends page
  - view the source code
  - search for friends name
  - look for user_id and copy the value


Make the highlighted edits to the index.js file

run the file and send a gif -

To make the experience more enjoyable - add to crontab and run hourly

Please note:
If you wish to run this from an aws lambda - you need to use a VPC so make the request local otherwise you will be blocked from Facebook pending your next login.

Enjoy :)
