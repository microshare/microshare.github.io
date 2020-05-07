---
layout: docs
title: Decoding Adeunis Demonstrator V1.1
description:
group: advanced/lorawan-devices
toc: true
---

Based on the [Adeunis Demonstrator V1.1 specifications](/assets/pdf/ARF8084BA_UG_LoRaWAN_Demonstrator_PROVIDER_V1.2.pdf)

Use the code below in a Robot to decode the Adeunis Payload:

{% highlight js %}

//Payload is expected to be a binary String
function decodePayload(binPayload){
    // Will check elements one at a time, 
    // and pass what's left of the payload each time
    var status = binPayload.substring(0, 8);
    var payloadLeft = binPayload.substring(8);
    
    if (status.substring(0,1) === "1"){
        print('temp is here');
        processedRecord.temperature = parseTemperature(payloadLeft);
        processedRecord.temperatureUnit = "C"; 
        payloadLeft = payloadLeft.substring(8);
    }
    
    if (status.substring(1,2) === "1"){
        print('accelerometer activated');
    }
    
    if (status.substring(2,3) === "1"){
        print('button pushed');
    }
    
    if (status.substring(3,4) === "1"){
        print('GPS is here');
        processedRecord.latitude = parseLatitude(payloadLeft);
        payloadLeft = payloadLeft.substring(32);
        processedRecord.longitude = parseLongitude(payloadLeft);
        payloadLeft = payloadLeft.substring(32);
    }
}

function parseTemperature(binPayload) {
    return lib.Bin2SignedDec(binPayload.substring(0,8));
}

function parseLatitude(binPayload) {
    print(binPayload);
    var latitude = "";
    latitude += lib.Bin2Dec(binPayload.substring(0,4));
    latitude += lib.Bin2Dec(binPayload.substring(4,8));
    latitude += "°";
    latitude += lib.Bin2Dec(binPayload.substring(8,12));
    latitude += lib.Bin2Dec(binPayload.substring(12,16));
    latitude += ".";
    latitude += lib.Bin2Dec(binPayload.substring(16,20));
    latitude += lib.Bin2Dec(binPayload.substring(20,24));
    latitude += lib.Bin2Dec(binPayload.substring(24,28));
    latitude += "0";
    if (binPayload.charAt(31) == '0'){
        latitude += "N";
    } else {
        latitude += "S";
    }
        
    return latitude;
}

function parseLongitude(binPayload) {
    var longitude = "";
    
    longitude += lib.Bin2Dec(binPayload.substring(0,4));
    longitude += lib.Bin2Dec(binPayload.substring(4,8));
    longitude += lib.Bin2Dec(binPayload.substring(8,12));
    longitude += "°";
    longitude += lib.Bin2Dec(binPayload.substring(12,16));
    longitude += lib.Bin2Dec(binPayload.substring(16,20));
    longitude += ".";
    longitude += lib.Bin2Dec(binPayload.substring(20,24));
    longitude += lib.Bin2Dec(binPayload.substring(24,28));
    longitude += "0";
    if (binPayload.charAt(31) == '0'){
        longitude += "E";
    } else {
        longitude += "W";
    }
        
    return longitude;
}
{% endhighlight %}
