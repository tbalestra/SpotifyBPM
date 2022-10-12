#!/bin/bash

DIR="/home/ubuntu/dwjg-api"
if [ -d "$DIR" ]; then
	echo "${DIR} exists"
else
	echo "Creating ${DIR}"
	mkdir ${DIR}