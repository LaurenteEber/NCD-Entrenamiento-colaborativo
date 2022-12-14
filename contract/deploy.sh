#!/bin/sh

./build.sh

if [ $? -ne 0 ]; then
  echo ">> Error building contract"
  exit 1
fi

echo ">> Deploying contract"

# https://docs.near.org/tools/near-cli#near-dev-deploy

near dev-deploy --wasmFile ./target/wasm32-unknown-unknown/release/ncd_entrenamiento_colaborativo.wasm


# near deploy with my accountId ncd-entrenamiento-colaborativo_ia.eber.testnet --wasmFile ./target/wasm32-unknown-unknown/release/ncd_entrenamiento_colaborativo.wasm
