rm -rf dist
npm install
npm run build 
npm run generate

docker image rm rithom-crm
docker build ./ -t rithom-crm