clear
# Core
cd ./core
echo '################################ NPM Install Core ################################'
npm audit fix --force
npm install

# Services/integracoes
cd ../../services/integracoes
echo '######################## NPM Install Services/Integracoes ########################'
npm audit fix --force
npm install

# Contabilidade-API
cd ../../contabilidade-api
echo '######################### NPM Install Contabilidade API ##########################'
npm audit fix --force
npm install

# Front End
cd ../front-end
pwd
echo '############################# NPM Install Front End ##############################'
npm audit fix --force
npm install
