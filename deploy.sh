#!/bin/bash

# Parse arguments
ENV=$1
TAG=$2

# List of environments to deploy to
DEPLOY_ENVS=("dev" "staging")

# Validate arguments
if [ -z "$ENV" ] || [ -z "$TAG" ]; then
  echo "Usage: deploy.sh <env> <tag>"
  exit 1
fi

# If we're not deploying to this environment, exit
# TODO: Re-enable ui deploys
# if [[ ! " ${DEPLOY_ENVS[@]} " =~ " ${ENV} " ]]; then
  echo "Not deploying to $ENV"
# fi

export REQUIRE_PASSWORD="keSoIxw3IACKdSGl"
export DOMAIN_PREFIX="storybook"

# Deploy storybook
./scripts/deploy-static.sh ./dist/storybook/ui $ENV storybook $TAG