#!/usr/bin/zsh

source ~/.zshrc

while :
do
    curl -X GET http://localhost:3000/dev/users
    sleep 1
done
