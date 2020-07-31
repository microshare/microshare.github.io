---
layout: docs
title: Example Postman JSON Calls for Guest App 
description: 
toc: true
---

---------------------------------------

Links Postman Collection Example call code for a guest app. 


{% highlight java %}

{
	"info": {
		"_postman_id": "cbfd5910-81a1-46b2-af2f-d16ab7????",
		"name": "Links",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Links Copy",
			"item": [
				{
					"name": "Create Links2",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"type": "text",
								"value": "fcaca4a0????"
							},
							{
								"key": "Content-Type",
								"type": "text",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\"name\":\"Comcast Actility IoT Test\", \"recType\":\"pipe\",\n\"desc\":\"Pipe link to import Comcast IoT sample data from the Actility gateway\", \n\"data\":{ \"email\" : \"guest@microshare.io\", \"targetId\" : \"5e6ce6b62b0000636ad8????\" , \"targetType\" : \"app\"} \n}"
						},
						"url": {
							"raw": "{{wfhostname}}/links2?Authorization=fcaca4a0????",
							"host": [
								"{{wfhostname}}"
							],
							"path": [
								"links2"
							],
							"query": [
								{
									"key": "Authorization",
									"value": "fcaca4a0????"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Get Links2 by Id",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "{{wfhostname}}/links2/:id?details=true&page=1&Authorization=fcaca4a0????",
							"host": [
								"{{wfhostname}}"
							],
							"path": [
								"links2",
								":id"
							],
							"query": [
								{
									"key": "details",
									"value": "true"
								},
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "perPage",
									"value": "2",
									"disabled": true
								},
								{
									"key": "Authorization",
									"value": "fcaca4a0????"
								}
							],
							"variable": [
								{
									"key": "id",
									"value": "5e6fddd82b00009827d8????"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Get All Links2",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "{{wfhostname}}/links2?details=true&page=1&Authorization=fcaca4a0????",
							"host": [
								"{{wfhostname}}"
							],
							"path": [
								"links2"
							],
							"query": [
								{
									"key": "details",
									"value": "true"
								},
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "perPage",
									"value": "2",
									"disabled": true
								},
								{
									"key": "Authorization",
									"value": "fcaca4a0????"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Update Links2",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"name\": \"new name from PUT\",\n  \"desc\": \"PUT an update\",\n  \"data\": {\n    \"resourceType\": \"objs\",\n    \"resourceId\": \"*\",\n    \"ownerUser\": \"email@owner.io\",\n    \"ownerOrg\": \"io.microshare\",\n    \"ownerApp\": \"*\",\n    \"callingUser\": \"*\",\n    \"callingOrg\": \"&\",\n    \"callingApp\": \"*\",\n    \"callingRole\": \"*\",\n    \"callingLoc\": 172.23,\n    \"operations\": [\n      \"Read\",\n      \"Execute\"\n    ]\n  }\n}"
						},
						"url": {
							"raw": "{{wfhostname}}/links2/:id",
							"host": [
								"{{wfhostname}}"
							],
							"path": [
								"links2",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "5981f3c946e0fb00203b????"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete Links2 by Id",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"_id\": \"betternotchange\",\n  \"id\": \"nochange\",\n  \"name\": \"new name from PUT\",\n  \"desc\": \"PUT an update\",\n  \"recType\": \"shouldnotsee\",\n  \"data\": {\n    \"resourceType\": \"objs\",\n    \"resourceId\": \"*\",\n    \"ownerUser\": \"email@owner.io\",\n    \"ownerOrg\": \"io.microshare\",\n    \"ownerApp\": \"*\",\n    \"callingUser\": \"*\",\n    \"callingOrg\": \"*\",\n    \"callingApp\": \"*\",\n    \"callingRole\": \"*\",\n    \"callingLoc\": 172.23,\n    \"operations\": [\n      \"Read\",\n      \"Execute\"\n    ]\n  }\n}"
						},
						"url": {
							"raw": "{{wfhostname}}/links2/:id",
							"host": [
								"{{wfhostname}}"
							],
							"path": [
								"links2",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "5981f3c946e0fb00203b????"
								}
							]
						}
					},
					"response": []
				}
			],
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"id": "d8ababa3-2c2e-45e9-b881-708e0167????",
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				},
				{
					"listen": "test",
					"script": {
						"id": "36bc535a-5f84-4db7-85f6-02dfd4b0????",
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				}
			]
		}
	]
}

{% endhighlight %}