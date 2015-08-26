// Mocha Validation tests

require("../../components/index")();
var chai = require("chai"),
    expect = chai.expect;

var Crypt = require("../../lib/utils/crypt");

describe("encrypt-decrypt", function() {

    beforeEach(function() {

        console.log("Init-Encryption");

    });

    describe("encrypt-decrypt cipher sync", function() {

        it("encrypt-decrypt cipher", function () {

            var cipherText = "Hacking is illegal";

            var encryptedCipherText = Crypt.encrypt(cipherText);

            var decryptedCipherText = Crypt.decrypt(encryptedCipherText);

            expect(cipherText).to.equal(decryptedCipherText);

        });
    });

    afterEach(function() {

    });
});
