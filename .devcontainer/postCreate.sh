#!/bin/sh
sudo apt-get update && export DEBIAN_FRONTEND=noninteractive \
&& sudo apt-get install -y software-properties-common gnupg \
&& sudo add-apt-repository -y 'deb http://ppa.launchpad.net/serokell/tezos/ubuntu bionic main' \
&& sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 37B8819B7D0D183812DCA9A8CE5A4D8933AE7CBB \
&& sudo apt-get update -y \
&& sudo apt-get install -y tezos-client \
&& npm install -g @completium/completium-cli \
&& completium-cli init \
&& completium-cli mockup init \
&& npm i \
&& cd contracts \
&& npm i