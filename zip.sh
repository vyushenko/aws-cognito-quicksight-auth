#!/bin/zsh

cd lambda-src && zip -r ../lambda.zip . -x "*.DS_Store" && cd ..aws