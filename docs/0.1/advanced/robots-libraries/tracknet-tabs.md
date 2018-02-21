---
layout: docs
title: Decoding TrackNet Tabs V1.1
description:
group: advanced
toc: true
---

Based on the [TrackNet Tabs specifications V1.1](/assets/pdf/Tabs.Sensors.Application.Payload.Specification.V1.1.pdf)
Output JSON formats are specifieds in the example below.

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* Tabs Healthy Home Sensor Device*/
    var healthyHomeSensorPayload = "00BA343338184A03";

    var decodedHealthyHomeSensorPayload = lib.decodeTabsHealthyHomeSensor(healthyHomeSensorPayload);
    print(decodedHealthyHomeSensorPayload);
    /*
    Outputs a String representation of a JSON Object
    {"VOCLabelled":"842ppb","CO2":6200,"Battery":73,"TempLabelled":"20°C","VOC":842,"RH":51,"RHLabelled":"51%","BatteryVoltageLabelled":"3.5V","Temp":20,"BatteryVoltage":3.5,"CO2Labelled":"6200ppm","BatteryLabelled":"73%","Status":0}
    */

    var decodedHHSJSON = JSON.parse(decodedHealthyHomeSensorPayload); /* To use as JSON */


    /* Tabs Door and Window Device*/
    var doorAndWindowPayload = "00BA050500242E10";

    var decodedDoorAndWindowPayload = lib.decodeTabsDoorAndWindowSensor(doorAndWindowPayload);
    print(decodedDoorAndWindowPayload);
    /*
    Outputs a String representation of a JSON Object
    {"TimeLabelled":"5minutes","Battery":73,"TempLabelled":"-27°C","Count":1060388,"BatteryVoltageLabelled":"3.5V","Temp":-27,"BatteryVoltage":3.5,"BatteryLabelled":"73%","Time":5,"Status":"closed"}
    */

    var decodedDAWJSON = JSON.parse(decodedDoorAndWindowPayload); /* To use as JSON */


    /* Tabs Motion Sensor Device*/
    var motionSensorPayload = "00BA050500242E10";

    var decodedMotionSensorPayload = lib.decodeTabsMotionSensor(motionSensorPayload);
    print(decodedMotionSensorPayload);
    /*
    Outputs a String representation of a JSON Object
    {"TimeLabelled":"5minutes","Battery":73,"TempLabelled":"-27°C","Count":1060388,"BatteryVoltageLabelled":"3.5V","Temp":-27,"BatteryVoltage":3.5,"BatteryLabelled":"73%","Time":5,"Status":"free"}
    */

    var decodedMSJSON = JSON.parse(decodedMotionSensorPayload); /* To use as JSON */


    /* Tabs Object Locator Device*/
    var objectLocatorPayload = "00BA050AA06102331885BB";

    var decodedObjectLocatorPayload = lib.decodeTabsObjectLocator(objectLocatorPayload);
    print(decodedObjectLocatorPayload);
    /*
    Outputs a String representation of a JSON Object
    {"Battery":73,"Lon":-75.163597,"Lat":39.952394,"LatLabelled":"39.952394°","TempLabelled":"-27°C","Accuracy":128,"LonLabelled":"-75.163597°","BatteryVoltageLabelled":"3.5V","Temp":-27,"AccuracyLabelled":"128m","BatteryVoltage":3.5,"BatteryLabelled":"73%","Status":"GNSS fix OK"}
    */

    var decodedOLJSON = JSON.parse(decodedObjectLocatorPayload); /* To use as JSON */
}
{% endhighlight %}