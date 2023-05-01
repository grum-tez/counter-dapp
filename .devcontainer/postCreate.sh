#!/bin/sh
sudo apt-get install -y tezos-client \
&& npm install -g @completium/completium-cli \
&& completium-cli init \
&& completium-cli mockup init