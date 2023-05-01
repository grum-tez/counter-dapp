# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive

# # Install software properties commons
# RUN apt-get install software-properties-common gnupg -y
# # Add PPA with Tezos binaries
# RUN add-apt-repository -y 'deb http://ppa.launchpad.net/serokell/tezos/ubuntu bionic main'
# RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 37B8819B7D0D183812DCA9A8CE5A4D8933AE7CBB 
# RUN apt-get update -y && apt-get install -y tezos-client

# Install software properties commons and add PPA with Tezos binaries
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y software-properties-common gnupg \
    && add-apt-repository -y 'deb http://ppa.launchpad.net/serokell/tezos/ubuntu bionic main' \
    && apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 37B8819B7D0D183812DCA9A8CE5A4D8933AE7CBB \
    && apt-get update -y 
    # && apt-get install -y tezos-client


# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages

# RUN su node -c "npm install -g @completium/completium-cli"