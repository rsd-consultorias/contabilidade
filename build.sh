clear
# # Services/integracoes
# cd ./services/integracoes
# echo '######################## Building Services/Integracoes ########################'
# rm -rf ./src/infra/grpc/*.* && rm -rf ./build/infra/grpc/*.*
# # npm audit fix --force
# npm i
# npx grpc_tools_node_protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=grpc_js:./src/infra/grpc --js_out=import_style=commonjs,binary:./src/infra/grpc --grpc_out=grpc_js:./src/infra/grpc -I /Users/rafaeldias/Repositories/github/contabilidade integracoes.proto
# npx tsc
# cp -R ./src/infra/grpc ./build/infra

# Core
cd ./core
echo '######################### Building Core ##########################'
npm audit fix --force
npm i
npx tsc

# Contabilidade-API
cd ../contabilidade-api
echo '######################### Building Contabilidade API ##########################'
# rm -rf ./src/infra/grpc/*.* && rm -rf ./build/infra/grpc/*.*
npm audit fix --force
npm i
# npx grpc_tools_node_protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=grpc_js:./src/infra/grpc --js_out=import_style=commonjs,binary:./src/infra/grpc --grpc_out=grpc_js:./src/infra/grpc -I /Users/rafaeldias/Repositories/github/contabilidade integracoes.proto
npx tsc
# cp -R ./src/infra/grpc ./build/infra

# # Front End
# cd ../contabilidade-frontend
# pwd
# echo '############################# Building Front End ##############################'
# # npm audit fix --force
# npm i
# ng build --base-href /
