#!/bin/bash

bin="turbo"
version="0.7.1"

# Check for command line flag '--alpha' to set the version to alpha
for arg in "$@"
do
    case $arg in
        --alpha)
        version="0.7.1"  # Set the version to alpha when the flag is passed
        shift # Remove processed argument
        ;;
    esac
done

# Determine the platform and architecture
platform=$(uname)
arch=$(uname -m)

# Determine the binary URL based on the platform and architecture
url="https://github.com/super-turbo-society/turbo-cli/releases/download"
if [ "$platform" = "Linux" ]; then
    if [ "$arch" = "x86_64" ]; then
        url="${url}/${version}/${bin}-${version}-x86_64-unknown-linux-gnu.tar.gz"
    else
        echo "Unsupported architecture: $arch on Linux"
        echo "Ask @makegamesfast on Twitter to stop being lazy and compile a turbo-cli $arch Linux binary for you 😅"
        exit 1
    fi
elif [ "$platform" = "Darwin" ]; then
    if [ "$arch" = "x86_64" ]; then
        url="${url}/${version}/${bin}-${version}-x86_64-apple-darwin.tar.gz"
    elif [ "$arch" = "arm64" ] || [ "$arch" = "aarch64" ]; then
        url="${url}/${version}/${bin}-${version}-aarch64-apple-darwin.tar.gz"
    else
        echo "Unsupported architecture: $arch on macOS"
        exit 1
    fi
elif [[ "$platform" == MINGW64_NT* ]]; then
    if [ "$arch" = "x86_64" ]; then
        url="${url}/${version}/${bin}-${version}-x86_64-pc-windows-gnu.zip"
    else
        echo "Unsupported architecture: $arch on Windows"
        exit 1
    fi    
else
    echo "Unsupported platform: $platform"
    exit 1
fi

# Download, make executable, and move the binary to /usr/local/bin
echo "Downloading release from ${url}..."
if [[ "$url" == *.zip ]]; then
    curl -L "$url" > turbo.zip
    unzip turbo.zip -d turbo
    mv turbo/**/* turbo
    rm -rf turbo.zip
    chmod +x turbo/${bin}.exe
    mkdir -p /usr/local/bin
    mv turbo/${bin}.exe /usr/local/bin/${bin}.exe
    rm -rf turbo
else
    curl -L "$url" > turbo.tar.gz
    tar -xvf turbo.tar.gz --strip-components=1
    rm -rf turbo.tar.gz
    chmod +x turbo
    sudo mkdir -p /usr/local/bin
    sudo mv turbo /usr/local/bin
fi