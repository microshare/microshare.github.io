---
layout: docs
title: Decoding Payloads with Robots
description:
group: advanced
toc: true
---

### Decoding a message from the LPP standard

Based on the LPP specifications defined by Cayenne in [their documentation](https://mydevices.com/cayenne/docs/lora/#lora-cayenne-low-power-payload)
An output JSON format is specified in the example below.

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    var LPP = '0167FFD7067104D2FB2E0000';
    print(LPP); /* 0167FFD7067104D2FB2E0000 */

    var decodedLPP = lib.decodeCayenneLPP(LPP);
    print(decodedLPP);
    /*
    Outputs a String representation of a JsArray
    [{"channel":1,"type":"Temperature Sensor","measure":-4.1,"value":"-4.1°C"},{"channel":6,"type":"Accelerometer","measure":{"X":1.234,"Y":-1.234,"Z":0.0},"value":{"X":"1.234G","Y":"-1.234G","Z":"0.0G"}}] */

    var decodedLPPJSON = JSON.parse(decodedLPP); /* To use as JSON */

    var encodeToLpp = lib.encodeToCayenneLPP(decodedLPP);
    print(encodeToLpp); /* 0167FFD7067104D2FB2E0000 */
}
{% endhighlight %}

### Encoding/Decoding Base64 messages

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    var message = 'Hello World';

    var base64EncodedMessage = lib.btoa(message);
    print(base64EncodedMessage); /* SGVsbG8gV29ybGQ= */

    var base64DecodedMessage = lib.atob(base64EncodedMessage);
    print(base64DecodedMessage) /* Hello World */

}
{% endhighlight %}

### Translating between Decimal, Hexadecimal and Binary, Positive or Negative

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* For positive numbers */
    var positiveNumber = 423519;
    print(positiveNumber); /* 423519 */

    var decimalToBinary = lib.Dec2Bin(positiveNumber);
    print(decimalToBinary); /* 000001100111011001011111 */

    var binaryToHex = lib.Bin2Hex(decimalToBinary);
    print(binaryToHex); /* 06765F */

    var hexToDecimal = lib.Hex2Dec(binaryToHex);
    print(hexToDecimal); /* 423519 */

    var decimalToHex = lib.Dec2Hex(hexToDecimal);
    print(decimalToHex); /* 06765F */

    var hexToBinary = lib.Hex2Bin(decimalToHex);
    print(hexToBinary); /* 000001100111011001011111 */

    var binaryToDecimal = lib.Bin2Dec(hexToBinary);
    print(binaryToDecimal); /* 423519 */


    /* To encode numbers with two's complement */
    var negativeNumber = -879094;
    print(negativeNumber); /* -879094 */

    var decimalToBinary2Comp = lib.Dec2BinTwoCompl(negativeNumber);
    print(decimalToBinary2Comp); /* 111100101001011000001010 */

    var binary2CompToHex2comp = lib.Bin2Hex(decimalToBinary2Comp);
    print(binary2CompToHex2comp); /* F2960A */

    var hex2CompToDecimal = lib.Hex2SignedDec(binary2CompToHex2comp);
    print(hex2CompToDecimal); /* -879094 */

    var decimalToHex2Comp = lib.Dec2HexTwoCompl(hex2CompToDecimal);
    print(decimalToHex2Comp); /* F2960A */

    var hex2CompToBinary2comp = lib.Hex2Bin(decimalToHex2Comp);
    print(hex2CompToBinary2comp); /* 111100101001011000001010 */

    var binary2CompToDecimal = lib.Bin2SignedDec(hex2CompToBinary2comp);
    print(binary2CompToDecimal); /* -879094 */

}
{% endhighlight %}