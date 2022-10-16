#!/bin/bash


curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install v18.10.0
nvm use v18.10.0

DIR="/home/ubuntu/dwjg-api"
if [ -d "$DIR" ]; then
	echo "${DIR} exists"
else
	echo "Creating ${DIR}"
	mkdir ${DIR}
fi