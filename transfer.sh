#!/bin/zsh

KEY_FILE="/Users/vyushenko/src/aws/default-key-pair.pem"

SERVER1=ec2-35-91-130-213.us-west-2.compute.amazonaws.com
SERVER2=ec2-52-88-6-57.us-west-2.compute.amazonaws.com

SERVER1_USER=ubuntu@${SERVER1}
SERVER2_USER=ubuntu@${SERVER2}

# LOCAL_PATH_PREFIX=aws-cognito-quicksight-auth
LOCAL_PATH_PREFIX=.

scp -i $KEY_FILE $LOCAL_PATH_PREFIX/index.html $LOCAL_PATH_PREFIX/auth.js $LOCAL_PATH_PREFIX/jwt-decode.js ${SERVER1_USER}:~/.
scp -i $KEY_FILE $LOCAL_PATH_PREFIX/index.html $LOCAL_PATH_PREFIX/auth.js $LOCAL_PATH_PREFIX/jwt-decode.js ${SERVER2_USER}:~/.

ssh -i $KEY_FILE ${SERVER1_USER} 'sudo mv auth.js index.html jwt-decode.js /usr/app/http-root/.'
ssh -i $KEY_FILE ${SERVER2_USER} 'sudo mv auth.js index.html jwt-decode.js /usr/app/http-root/.'
