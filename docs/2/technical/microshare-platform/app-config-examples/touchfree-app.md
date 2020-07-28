---
layout: docs
title: Touchfree App JSON
description: 
toc: true
---

---------------------------------------

The following is an example of JSON code for a Touchfree App.


{% highlight java %}

{
  "appTitle": "Touchfree Feedback",
  "": "optional parameters",
  "footerLogo": "https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/footer.png",
  "headerLogo": "https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/header.png",
  "headerSecondaryLogo": "",
  "backboardRecType": "io.microshare.config.backboard",
  "getRecType": "io.microshare.fm.master.agg",
  "dataRecType": "io.microshare.feedback.event.meta",
  "dataContext": "toilet",
  "queryId": "5e74cd8b46e0fb0028a3bd03",  
  " ": "end optional parameters",
  "backboardRules": [
      {
          "metaTags": [
              "bed"
          ],
          "backboardId": "5ea048da46e0fb0029a7244e"
      },
      {
          "metaTags": [
              "toilet"
          ],
          "backboardId": "5ea0488146e0fb002a074145"
      },
      {
          "metaTags": [
              "room"
          ],
          "backboardId": "5ea0495946e0fb002a0741ae"
      }
  ]
}

{% endhighlight %}