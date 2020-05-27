---
layout: docs
title: Simple Requests
description: 
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Write Data](./#1-write-data)
2. [Read Data](./#2-read-data)
3. [From a postman call to a piece of code](./#3-from-a-postman-call-to-a-piece-of-code)

---------------------------------------

## 1. Write data

* From the Postman collection, open the request `Shares -> Create one Share`.

* Click on `Params`, next to the `Send` button, to edit the recType Value. The recType is the category, or id, under which the data is stored in microshare. You usually have one recType per data stream (per IoT gateway, or IoT device if you can differentiate them).

* Enter you own recType there, by using your `firstName.lastName` combination.
**Tip**: For IoT data streams, we usually compose a recType based on the data's origin, using a schema from the most general to more specific. For example, if your IoT streams is from a TrackNet device, going through a Kerlink gateway, physically located in Philadelphia in the US, the recType can be: `us.philadelphia.kerlink.tracknet`

* Click on the `Body` tab, under the Params zone, and write any JSON body there, for example `{"Test":"Data"}`.

* Click `Send`

* A confirmation message will be sent, indicating that the data was successfully written to Microshare. It returns metadata usable with other API calls.

## 2. Read data

* From the Postman collection, open the request `Shares -> Get Shares by recType` to configure it.
* Click on `Params`, next to the `Send` button, to edit the recType Value. Specify the recType you used in the Write query.
* Click `Send`. 
Ther response of the request is a view of all the data stored under the specified recType. Part of the displayed metadata is your login and API key, showing that YOU are the owner of that data:
{% include image.html url="/assets/img/get-share-call-3.png" description="Senet data in microshare example" %}

* If you execute Write request again, and then the Read, the number of records increases as you have created a new record. The microshare metadata tells you how many pages of records you have, and the total number of records (platform wide) stored under this recType.

**Note**: The `totalCount` value can be higher than the total number of records you own.  This is because another user could be storing data under the same recType. Don't worry, you will only see your data, and the other users will only see their data, unless you have created Rules to share your data.

Rules are an advanced feature of the platform, and are described in the ADVANCED section at the end of this quick start.

* You can use the request `Shares -> Get Latest Shares by recType`, that returns only the very last record created under this recType.

* For more information on how to setup a IoT data stream from a web platform using this API, check our [IoT documentation](../../advanced/lorawan-devices/). 


## 3. From a postman call to a piece of code