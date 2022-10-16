#!/bin/bash
sudo chmod -R 777 /home/ubuntu/dwjg-api
cd /home/ubuntu/dwjg-api

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

npm install

if [ "$DEPLOYMENT_GROUP_NAME" == "preview" ]; then
	npm run preview
else
	npm run production
fi