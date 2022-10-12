#!/bin/bash
sudo chmod -R 777 /home/ubuntu/dwjg-api
cd /home/ubuntu/dwjg-api

npm install

if [ "$DEPLOYMENT_GROUP_NAME" == "preview" ]; then
	npm run preview
else
	npm run production
fi