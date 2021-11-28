require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remind arrow grid arctic orange gather'; 
let testAccounts = [
"0x0448cd5f3899a8222b9b8551b63ff2dcca463e0bce1faaba51072f75f26fe92d",
"0x858e11a65a6445387b5f3514e6fdcb78257abdf1fccc51afcdddac3a0bcd1e50",
"0x546fdac7084244f9272e69825487439d89d536bdef247be02426c8a86480143b",
"0x0374fbe4e83f3d709e14c1a06fa8931e86cbda70cc37d0d18a45da6b30ea1bcc",
"0xefc655ff3aaf4d272076ab3aebc8d597406ff8cc41ad8475a6190aaeac188161",
"0xa53a997a2b85d3d1adedc712e6ea470bcd460b816dd1fa9738830c9877c876ed",
"0x0239dbe0f4deee77684ef0e4a93a54aad2b7ab65fa9e8eb0020b65a1141d2867",
"0xe14d7522bf0680eff88705b9712eff78e5dcd07bd13e79f40bea174a1d9b85b2",
"0xebdbcb46ef7210a5c51b9aa803c573f21bc9a1c23203d59c3f1a04edbf459454",
"0x9a684d3a704b7c5b5d65124672cc1172a910a6ec182a40397931ca8aa52f7f2a"
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

