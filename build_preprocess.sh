#!/bin/bash
rm -rf ./pages/repos/*
npx ts-node --skipProject ./generate_repos_index.ts
exit 0
