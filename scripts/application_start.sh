#!/bin/bash
sudo chmod -R 777 /home/ubuntu/dwjg-api
cd /home/ubuntu/dwjg-api

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion

node -v
npm install

if [ "$DEPLOYMENT_GROUP_NAME" == "preview" ]; then
	npm run preview
else
	npm run production
fi