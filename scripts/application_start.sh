#!/bin/bash
sudo chmod -R 777 /home/ubuntu/dwjg-api
cd /home/ubuntu/dwjg-api

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion

node -v
npm i --save

echo $DEPLOYMENT_GROUP_NAME

if [ $DEPLOYMENT_GROUP_NAME == "preview-dwjg-deploy" ]
then
	npm run preview:stop
	DEPLOYMENT_ID="$DEPLOYMENT_ID" DEPLOY_GROUP="$DEPLOYMENT_GROUP_NAME" npm run preview:start
else
	DEPLOYMENT_ID="$DEPLOYMENT_ID" DEPLOY_GROUP="$DEPLOYMENT_GROUP_NAME" npm run production
fi