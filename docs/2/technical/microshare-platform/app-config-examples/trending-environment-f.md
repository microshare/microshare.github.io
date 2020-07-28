---
layout: docs
title: Trending Desk Environment F JSON
description: 
toc: true
---

---------------------------------------

The following is JSON example code for a Trending Desk Environment F App.

{% highlight java %}

{
	"appTitle": "Trending Environment F",
  "navOptions": [
    {
      "title": "Realtime Desk Availability",
      "link": "https://dapp.microshare.io/apps/view/5e0f8cd22b0000d1c2607d32"
    },
    {
      "title": "Realtime Room Availability",
      "link": "https://dapp.microshare.io/apps/view/5e2b627d2b000057df94a667"
		},
		{
      "title": "Trending Environment",
      "link": "https://dapp.microshare.io/apps/view/5de835881d0000dbbc8310c6"
    },
    {
      "title": "Trending Environment F",
      "link": "https://dapp.microshare.io/apps/view/5e0a72cc2b00009401607cbb"
    },
    {
      "title": "Trending Air Quality",
      "link": "https://dapp.microshare.io/apps/view/5e0a75502b00006002607cc0"
    },
    {
      "title": "Trending Refrigerator",
      "link": "https://dapp.microshare.io/apps/view/5e0f6d2a2b0000dcb7607d27"
    },
    {
      "title": "Trending Access Usage",
      "link": "https://dapp.microshare.io/apps/view/5e0fa0842b00008dc9607d36"
    },
    {
      "title": "Trending Desk Availability",
      "link": "https://dapp.microshare.io/apps/view/5e0e1f632b00006e43607cff"
    },
    {
      "title": "Trending Usage",
      "link": "https://dapp.microshare.io/apps/view/5e0e02e92b00004339607ceb"
    },
    {
      "title": "Trending Feedback 3",
      "link": "https://dapp.microshare.io/apps/view/5e1742252b00001ce1e2ae7c"
    },
    {
      "title": "Trending Feedback 5",
      "link": "https://dapp.microshare.io/apps/view/5e172aa52b00006568607e16"
    }
  ],
	"": "optional parameters",
	"getRecType": "io.microshare.fm.master.agg",
	"headerLogo": "https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/header.png",
	"headerSecondaryLogo": "",
	"footerLogo": "https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/footer.png",
	"axisFormat": "EEE HH:mm",
	"location1": "Building",
	"location2": "Floor",
	"location3": "Location",
	"useWeekendColorBan": true,
	"startOfWorkDay": 6,
	"endOfWorkDay": 20,
	"colorOfThresholdBand": "green",
	"colorOfOffHoursBand": "blue",
	" ": "end optional parameters",
	
  "dataRecType": "io.microshare.environment.unpacked",
	"dataContext": "general",
	"query1variable": "5de82ed946e0fb0029137eaa",
	"query2variable": "5de82f0346e0fb00284f92c0",
	"query3variable": "5de82f8f46e0fb00284f92fd",
  "charts": [
    {
      "fieldName": "temp",
			"": "optional parameters",
      "convertTempToFahrenheit": true,
      "minIdeal": 68,
      "maxIdeal": 73,
      "maxMin": 50,
      "minMax": 85
    },
    {
      "fieldName": "humidity",
			"": "optional parameters",
      "minIdeal": 30,
      "maxIdeal": 50,
      "maxMin": 0,
      "minMax": 100
		}
	],
	"selectionOptions": [
		{
			"name": "Haverhill",
			"floors": [
				{
					"name": "1st Floor",
					"locations": [
						"A",
						"B",
						"C"
					]
				},
				{
					"name": "2nd Floor",
					"locations": [
						"A",
						"B",
						"C"
					]
				},
				{
					"name": "3rd Floor",
					"locations": [
						"A",
						"B",
						"C"
					]
				}
			]
		},
		{
			"name": "London",
			"floors": [
				{
					"name": "1st Floor",
					"locations": [
						"A",
						"B",
						"C"
					]
				},
				{
					"name": "2nd Floor",
					"locations": [
						"A",
						"B",
						"C"
					]
				},
				{
					"name": "3rd Floor",
					"locations": [
						"A",
						"B",
						"C"
					]
				}
			]
		}
	]
}

{% endhighlight %}