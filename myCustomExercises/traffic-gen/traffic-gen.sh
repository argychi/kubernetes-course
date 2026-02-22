#! /bin/sh 

if [ "$#" -lt 2 ]; then 
    echo "Usage $0 <target> <interval-in-secs>"
    exit 1
fi 
TARGET = $1
INTERVAL = $2 
echo "Sending requests to $TARGET every $INTERVAL secs."

while true; do 
    REQUEST_TIME=$(date + "%Y-%m-%d %H:%M:%S")
    RESPONSE=$(curl -s "$TARGET")
    echo "[$REQUEST_TIME] $RESPONSE"
    sleep $INTERVAL
done
