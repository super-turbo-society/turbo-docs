#!/bin/bash

if [ $(tput cols) -gt 99 ]; then
    echo "
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@%+++++++++++++++++%@%+++++*@@@@@#+++++*@@*+++++++++*#@@@@@@@#++++++++++*%@@@@@@@@@@@#=:: .-*%@@@@@
@#                 :@+      +@@@@:      #@               =@@@.              .#@@@@-.             +@@
@.                 #@.      %@@@%      .@=                -@@.               :@@*                 +@
@@@@@@-      *@@@@@@+      -@@@@:     .*@.      #@@:      :@.      %@@%.     +@+      .=@@%.      .@
@@@@@@      .@@@@@@@-      *@@@@.     .@%       -=-       *%                *@*      .@@@@@=      :@
@@@@@=      =@@@@@@%      .@@@@*      :@:                *@+              ..%@-      +@@@@@:      *@
@@@@@:      #@@@@@@-      =@@@%      .@@.              +@@@.      *%%-      .@.      +@@@@:      .@@
@@@@*      :@@@@@@@-                .*@-      -.      .@@@#      .**=.      *@:                 .@@@
@@@@:      %@@@@@@@@:              .%@@.     .%@       #@@.               .*@@#.              .*@@@@
@@@@:      @@@@@@@@@@%=         :*@@@@@.     :@@-      =@@:             :#@@@@@@#.          =%@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
"
fi

bin="turbo"
# Use TURBO_VERSION if set, otherwise default to 0.7.2
version="${TURBO_VERSION:-0.7.2}"

echo "Installing v${version}..."

# Determine the platform and architecture
platform=$(uname)
arch=$(uname -m)

echo "Platform: ${platform}"
echo "CPU arch: ${arch}"

# Determine the binary URL based on the platform and architecture
url="https://github.com/super-turbo-society/turbo-cli/releases/download"

# Linux
if [ "$platform" = "Linux" ]; then
    if [ "$arch" = "x86_64" ]; then
        url="${url}/${version}/${bin}-${version}-x86_64-unknown-linux-gnu.tar.gz"
    elif [ "$arch" = "aarch64" ] || [ "$arch" = "arm64" ]; then
        url="${url}/${version}/${bin}-${version}-aarch64-unknown-linux-gnu.tar.gz"
    else
        echo "Unsupported architecture: $arch on Linux"
        exit 1
    fi
# MacOS
elif [ "$platform" = "Darwin" ]; then
    if [ "$arch" = "x86_64" ]; then
        url="${url}/${version}/${bin}-${version}-x86_64-apple-darwin.tar.gz"
    elif [ "$arch" = "arm64" ] || [ "$arch" = "aarch64" ]; then
        url="${url}/${version}/${bin}-${version}-aarch64-apple-darwin.tar.gz"
    else
        echo "Unsupported architecture: $arch on MacOS"
        exit 1
    fi
# Windows
elif [[ "$platform" == MINGW64_NT* ]]; then
    if [ "$arch" = "x86_64" ]; then
        url="${url}/${version}/${bin}-${version}-x86_64-pc-windows-gnu.zip"
    else
        echo "Unsupported architecture: $arch on Windows"
        exit 1
    fi
# Other
else
    echo "Unsupported platform: $platform"
    exit 1
fi

# Download, make executable, and move the binary to /usr/local/bin
echo "Downloading release archive from ${url}..."

# Windows
if [[ "$url" == *.zip ]]; then
    rm -rf turbo.zip
    curl -#fL "$url" -o turbo.zip || {
        echo "Download failed"
        exit 1
    }
    echo "Extracting archive..."
    unzip turbo.zip -d turbo || {
        echo "Extraction failed"
        exit 1
    }
    rm -rf turbo.zip
    mv turbo/**/* turbo
    echo "Moving turbo to executables dir (/usr/local/bin)..."
    chmod +x turbo/${bin}.exe || exit 1
    mkdir -p /usr/local/bin || exit 1
    mv turbo/${bin}.exe /usr/local/bin/${bin}.exe || exit 1
    rm -rf turbo
# Linux + MacOS
else
    rm -rf turbo.tar.gz
    curl -#fL "$url" -o turbo.tar.gz || {
        echo "Download failed"
        exit 1
    }
    echo "Extracting archive..."
    tar -xvf turbo.tar.gz --strip-components=1 || {
        echo "Extraction failed"
        exit 1
    }
    rm -rf turbo.tar.gz
    echo "Moving turbo to /usr/local/bin..."
    chmod +x turbo || exit 1
    sudo mkdir -p /usr/local/bin || exit 1
    sudo mv turbo /usr/local/bin || exit 1
fi

echo ""
echo "Installation complete! ✨"
echo "Visit https://docs.turbo.computer to learn more."
echo ""
turbo help
