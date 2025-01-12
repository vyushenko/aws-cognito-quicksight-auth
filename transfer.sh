#!/bin/zsh

KEY_FILE="/Users/vyushenko/src/aws/default-key-pair.pem"

SERVER1=ec2-54-244-180-253.us-west-2.compute.amazonaws.com
SERVER2=ec2-52-42-77-154.us-west-2.compute.amazonaws.com

SERVER1_USER=ubuntu@${SERVER1}
SERVER2_USER=ubuntu@${SERVER2}

# LOCAL_PATH_PREFIX=aws-cognito-quicksight-auth
LOCAL_PATH_PREFIX=.

scp -i $KEY_FILE $LOCAL_PATH_PREFIX/aws-cognito-sdk.min.js $LOCAL_PATH_PREFIX/amazon-cognito-auth.min.js $LOCAL_PATH_PREFIX/index.html $LOCAL_PATH_PREFIX/auth.js $LOCAL_PATH_PREFIX/jwt-decode.js ${SERVER1_USER}:~/.
scp -i $KEY_FILE $LOCAL_PATH_PREFIX/aws-cognito-sdk.min.js $LOCAL_PATH_PREFIX/amazon-cognito-auth.min.js $LOCAL_PATH_PREFIX/index.html $LOCAL_PATH_PREFIX/auth.js $LOCAL_PATH_PREFIX/jwt-decode.js ${SERVER2_USER}:~/.

ssh -i $KEY_FILE ${SERVER1_USER} 'sudo mv aws-cognito-sdk.min.js amazon-cognito-auth.min.js auth.js index.html jwt-decode.js /usr/app/http-root/.'
ssh -i $KEY_FILE ${SERVER2_USER} 'sudo mv aws-cognito-sdk.min.js amazon-cognito-auth.min.js auth.js index.html jwt-decode.js /usr/app/http-root/.'
