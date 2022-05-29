#!/bin/bash
rm -rf ./pages/repos/*
node ./generate_repos_index.mjs
exit 0
