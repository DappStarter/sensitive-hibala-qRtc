require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net public harvest basic force sell'; 
let testAccounts = [
"0x83463db1719412415fa990f8fa8eaade7f8649b501ff7f659741f26df7743d7a",
"0xf162c1e23dd9e1d7e51036529d3dc0bc70e97dacf8e9dbfd878f833bf9f15daf",
"0x0885911dcf37d0cabd74e142d7f6143d8540cd2a2abeef4d957dec43bc670fb0",
"0x7da51b1e727c2bb42bb94d6a33bf29f58880a35b8639df218071ed880d1c0553",
"0xeb2798e31a5306356810ae3c90e61631b9b3c4e37e13bc599ea03b9f8861b16a",
"0x67cf10e3f2767c91e11665d0ea566d4aa0ffc7db033536bba0a1fcfd376d2f2c",
"0xce817c17fe8079872e17b5a327de7c027a6d2442977df340f97a9f7e436ac7f6",
"0x81b0d0aa9aee49d14e9933ce20ca7dbc928bdcd75cf4a9c93990110adb09520f",
"0x02c16ffd2aa678b6080886b151c8ab13ee8ad66e9cd51c1161aa1bcc97d8ecc5",
"0x16193ff04ad5eb79de272e8080b25f45f842c692ac1f903e4733a8ddc856ca90"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

