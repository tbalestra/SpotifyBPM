#!/bin/bash
sudo chmod -R 777 /home/ubuntu/dwjg-api
cd /home/ubuntu/dwjg-api

# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install v18.10.0
nvm use v18.10.0

# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion

npm install

if [ "$DEPLOYMENT_GROUP_NAME" == "preview" ]; then
	npm run preview
else
	npm run production
fi