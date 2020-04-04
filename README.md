1. Export variables
export KOBITON_USERNAME=''
export KOBITON_ACCESS_KEY=''

2. Execute commands
npm i
cd ./node_modules && git clone https://github.com/khanhdodang/nativescript-dev-appium.git
cd nativescript-dev-appium && npm install
npm run e2e -- --runType=kobiton_android --kobiton
npm run e2e -- --runType=kobiton_ios --kobiton