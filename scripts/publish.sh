#!/bin/bash
# Publish script for Tasker AI packages

set -e

echo "Publishing Tasker AI packages..."

# Get version from first argument
VERSION=${1:-0.1.0}

echo "Version: $VERSION"

# Publish CLI
echo "Publishing @tasker-ai/cli..."
cd packages/cli
npm version $VERSION
npm publish --access public
cd ../..

# Publish SDK
echo "Publishing @tasker-ai/sdk..."
cd packages/sdk
npm version $VERSION
npm publish --access public
cd ../..

# Publish Skills
echo "Publishing @tasker-ai/skills..."
cd packages/skills
npm version $VERSION
npm publish --access public
cd ../..

echo "All packages published successfully!"
