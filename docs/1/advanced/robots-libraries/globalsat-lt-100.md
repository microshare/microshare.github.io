---
layout: docs
title: Decoding Globalsat LT-100
description:
group: advanced
toc: true
---

Based on the [Globalsat LT-100 GPS device format specifications](/assets/pdf/Globalsat LT-100 format .pdf).
Use the code below in your Robot.

{% highlight js %}
// Payload expected in Hexadecimal

function parsePayload(payload){
    // print('payload: ' + payload);
    
    function bitsToInt(bits){
        var result = 0;
        bits.forEach(function(bite, index){
            result += bite*Math.pow(2, Math.abs(index-bits.length+1));
        });
        return result;
    }

    var hexToBite= {"0":"0000","1":"0001","2":"0010","3":"0011","4":"0100","5":"0101","6":"0110","7":"0111","8":"1000","9":"1001","A":"1010","B":"1011","C":"1100","D":"1101","E":"1110","F":"1111","a":"1010","b":"1011","c":"1100","d":"1101","e":"1110","f":"1111"};

    var payloadByte = "";
    payload.split('').forEach(function(char, index){
        payloadByte += hexToBite[char];
    });

    var parsedPayload = {};

    var GPSFixStatusCode = bitsToInt(payloadByte.substring(8,11).split(''));
    if (GPSFixStatusCode === 0){
        parsedPayload.GPSFixStatus = "not fix";
    } else if (GPSFixStatusCode == 1){
        parsedPayload.GPSFixStatus = "2D";
    } else if (GPSFixStatusCode == 3){
        parsedPayload.GPSFixStatus = "3D";
    } else {
        parsedPayload.GPSFixStatus = "N/A";
    }

    var reportTypeCode = bitsToInt(payloadByte.substring(11,16).split(''));
    if (reportTypeCode == 2){
        parsedPayload.reportType = "Periodic mode report";
    } else if (reportTypeCode == 4){
        parsedPayload.reportType = "Motion mode static report";
    } else if (reportTypeCode == 5){
        parsedPayload.reportType = "Motion mode moving report";
    } else if (reportTypeCode == 6){
        parsedPayload.reportType = "Motion mode static to motion report";
    } else if (reportTypeCode == 7){
        parsedPayload.reportType = "Motion mode moving to static report";
    } else if (reportTypeCode == 14){
        parsedPayload.reportType = "SOS alarm report";
    } else if (reportTypeCode == 15){
        parsedPayload.reportType = "Low battery alarm report";
    } else if (reportTypeCode == 17){
        parsedPayload.reportType = "Power on(temperature)";
    } else if (reportTypeCode == 19){
        parsedPayload.reportType = "Power off(low battery)";
    } else if (reportTypeCode == 20){
        parsedPayload.reportType = "Power off(temperature)";
    } else {
        parsedPayload.reportType = "N/A";
    }

    parsedPayload.battery = bitsToInt(payloadByte.substring(16,24).split('')) + "%";

    var invertedLat = "";
    if (payloadByte.charAt(24) == '1'){
        payloadByte.substring(24,56).split('').forEach(function(bite, index){
             //if negative temperature, need to use the two's complement of the payload
             invertedLat += Math.abs(1 - bite);
        });
        parsedPayload.lat = -bitsToInt(invertedLat.split(''))*0.000001;
    } else {
        parsedPayload.lat = bitsToInt(payloadByte.substring(24,56).split(''))*0.000001;
    }

    var invertedLng = "";
    if (payloadByte.charAt(56) == '1'){
        payloadByte.substring(56,88).split('').forEach(function(bite, index){
            //if negative temperature, need to use the two's complement of the payload
             invertedLng += Math.abs(1 - bite);
        });
        parsedPayload.lng = -bitsToInt(invertedLng.split(''))*0.000001;
    } else {
        parsedPayload.lng = bitsToInt(payloadByte.substring(56,88).split(''))*0.000001;
    }

    print('parsedPayload: ' + JSON.stringify(parsedPayload, null, "\t"));
    return parsedPayload;
}
{% endhighlight %}