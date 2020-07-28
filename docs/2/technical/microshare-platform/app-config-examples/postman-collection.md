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
		"_postman_id": "cbfd5910-81a1-46b2-af2f-d16ab76d89a0",
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
								"value": "fcaca4a0002b7821d7f998d829797848af7a6b1925c4f5534b033e96d48c17d14af58593384df78f0699a1ce865fb4640584504d88e3c044672df0f6e70963ec8c6c661fb796cc0acdfd9319615e873366f6675560b02cef17da79b103c468dc189c5888564ff7b65181f8ea1eb60402732a684e46c7f0ce5a948e73fba8beec405c3f96d77368bdb1a022aef0680ffab7dd367fa68b0c9a1cc641e47bc4b1944e562284c284c5a8a6bd342d02ec0cc1ecd93ac4420c05cc0003e90a598f63d55cf2f9f32fd815cf1584780c7a65b3c176a4b158f463db5265c13ec06a61b58fa324902fe2611037f6fd211c474a1dea6d8443b194be9d892279cd1e5d9b10622ac8dddf241acea52d6f092d418da67154598cdec437159f5c5f140fb33ab851b91606f659d375de877fd818813a772dbb0715d0db4780f60bcdf55502d02c045b16fbff65f1228c52a943e89ad9eb2bce3c442abff71d010b12264667ac06d146168dfa51e12302c7e51ea7ae7cac32c422d000fea7059d5d8cc69e03d38f8d68cc5e7bdafbd41844618692ad02e1e956ac4a0710aa43d4e9416e737878374a9c4fbb8272b37eba350a031ff3fff640b30ae32a13c44b9cfd73e5455662a2c66684163bbca6faa2998cfce57896b5ac7a58813429618fa1b3a8664ce11667da21e11ef40909c7c03cfcdc2b95498f1beda4707888ec11c774b1d82c7e815c8c8863b71b5cc8e8e8bb226a8a8dc5441d993c35ade82482a69ebce2711f8556591e034998d92fe352abd850c919bf027d06222331e1873d7c26ea3f80bc4139ec8e47de60faab4bad9060d8eb00fae6ee21d1c7a56dbbacb5b8e9b688f266c36a70fe491453b3c9a10ecfc10e9e352bb50dfab8dc3e67d63e7616c2292f8db85a348e43f1a67c9fd215289cb8672aea409deeede9cdb38c24b6b87ac3270f9291620f872e253da933a1437c84e0fb6b4b"
							},
							{
								"key": "Content-Type",
								"type": "text",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\"name\":\"Comcast Actility IoT Test\", \"recType\":\"pipe\",\n\"desc\":\"Pipe link to import Comcast IoT sample data from the Actility gateway\", \n\"data\":{ \"email\" : \"guest@point.io\", \"targetId\" : \"5e6ce6b62b0000636ad81a38\" , \"targetType\" : \"app\"} \n}"
						},
						"url": {
							"raw": "{{wfhostname}}/links2?Authorization=fcaca4a0002b7821d7f998d829797848af7a6b1925c4f5534b033e96d48c17d14af58593384df78f0699a1ce865fb4640584504d88e3c044672df0f6e70963ec8c6c661fb796cc0acdfd9319615e873366f6675560b02cef17da79b103c468dc189c5888564ff7b65181f8ea1eb60402732a684e46c7f0ce5a948e73fba8beec405c3f96d77368bdb1a022aef0680ffab7dd367fa68b0c9a1cc641e47bc4b1944e562284c284c5a8a6bd342d02ec0cc1ecd93ac4420c05cc0003e90a598f63d55cf2f9f32fd815cf1584780c7a65b3c176a4b158f463db5265c13ec06a61b58fa324902fe2611037f6fd211c474a1dea6d8443b194be9d892279cd1e5d9b10622ac8dddf241acea52d6f092d418da67154598cdec437159f5c5f140fb33ab851b91606f659d375de877fd818813a772dbb0715d0db4780f60bcdf55502d02c045b16fbff65f1228c52a943e89ad9eb2bce3c442abff71d010b12264667ac06d146168dfa51e12302c7e51ea7ae7cac32c422d000fea7059d5d8cc69e03d38f8d68cc5e7bdafbd41844618692ad02e1e956ac4a0710aa43d4e9416e737878374a9c4fbb8272b37eba350a031ff3fff640b30ae32a13c44b9cfd73e5455662a2c66684163bbca6faa2998cfce57896b5ac7a58813429618fa1b3a8664ce11667da21e11ef40909c7c03cfcdc2b95498f1beda4707888ec11c774b1d82c7e815c8c8863b71b5cc8e8e8bb226a8a8dc5441d993c35ade82482a69ebce2711f8556591e034998d92fe352abd850c919bf027d06222331e1873d7c26ea3f80bc4139ec8e47de60faab4bad9060d8eb00fae6ee21d1c7a56dbbacb5b8e9b688f266c36a70fe491453b3c9a10ecfc10e9e352bb50dfab8dc3e67d63e7616c2292f8db85a348e43f1a67c9fd215289cb8672aea409deeede9cdb38c24b6b87ac3270f9291620f872e253da933a1437c84e0fb6b4b",
							"host": [
								"{{wfhostname}}"
							],
							"path": [
								"links2"
							],
							"query": [
								{
									"key": "Authorization",
									"value": "fcaca4a0002b7821d7f998d829797848af7a6b1925c4f5534b033e96d48c17d14af58593384df78f0699a1ce865fb4640584504d88e3c044672df0f6e70963ec8c6c661fb796cc0acdfd9319615e873366f6675560b02cef17da79b103c468dc189c5888564ff7b65181f8ea1eb60402732a684e46c7f0ce5a948e73fba8beec405c3f96d77368bdb1a022aef0680ffab7dd367fa68b0c9a1cc641e47bc4b1944e562284c284c5a8a6bd342d02ec0cc1ecd93ac4420c05cc0003e90a598f63d55cf2f9f32fd815cf1584780c7a65b3c176a4b158f463db5265c13ec06a61b58fa324902fe2611037f6fd211c474a1dea6d8443b194be9d892279cd1e5d9b10622ac8dddf241acea52d6f092d418da67154598cdec437159f5c5f140fb33ab851b91606f659d375de877fd818813a772dbb0715d0db4780f60bcdf55502d02c045b16fbff65f1228c52a943e89ad9eb2bce3c442abff71d010b12264667ac06d146168dfa51e12302c7e51ea7ae7cac32c422d000fea7059d5d8cc69e03d38f8d68cc5e7bdafbd41844618692ad02e1e956ac4a0710aa43d4e9416e737878374a9c4fbb8272b37eba350a031ff3fff640b30ae32a13c44b9cfd73e5455662a2c66684163bbca6faa2998cfce57896b5ac7a58813429618fa1b3a8664ce11667da21e11ef40909c7c03cfcdc2b95498f1beda4707888ec11c774b1d82c7e815c8c8863b71b5cc8e8e8bb226a8a8dc5441d993c35ade82482a69ebce2711f8556591e034998d92fe352abd850c919bf027d06222331e1873d7c26ea3f80bc4139ec8e47de60faab4bad9060d8eb00fae6ee21d1c7a56dbbacb5b8e9b688f266c36a70fe491453b3c9a10ecfc10e9e352bb50dfab8dc3e67d63e7616c2292f8db85a348e43f1a67c9fd215289cb8672aea409deeede9cdb38c24b6b87ac3270f9291620f872e253da933a1437c84e0fb6b4b"
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
							"raw": "{{wfhostname}}/links2/:id?details=true&page=1&Authorization=fcaca4a0002b7821d7f998d829797848af7a6b1925c4f5534b033e96d48c17d1152f9cfd93eedea827c3bdc0aacc1a47d90264bb358ed22eb86ccfd4d823acee8c6c661fb796cc0acdfd9319615e873366f6675560b02cef17da79b103c468dc189c5888564ff7b65181f8ea1eb60402732a684e46c7f0ce5a948e73fba8beec405c3f96d77368bdb1a022aef0680ffab7dd367fa68b0c9a1cc641e47bc4b1944e562284c284c5a8a6bd342d02ec0cc1ecd93ac4420c05cc0003e90a598f63d51df8d981c55a9caab3fe65e4ab2784665867a8a2b133f7ff9e8c9d8c73a1402815d0da4aed3fced3728c92d7bde252932285d887a859cac021278e38608c9b422c867b525162fb58177fc792955d6eac7882457cd7adee3ad1738c4c32911ab5f847f01ddbbe708b98fec1b73981b4a177a538ea02161add3881bdc66af33837d91a7f84c87b97a6e17faa3f9f8fcb5580f8dd56460aabb56ce642e97e2cc13c59586c9735954366cd77831a70d36400224640f9cf2c1e668818d83648e5e009e3426a31070705c89f1e8926f2a3f40a674df05c22f2617a79bad2cd41583680fceb0418e4670e1f6ebf10b6ead4ba4bc3c81baf6157bf1c4db588e9a39beddd54c39495ea1407b8b18371dd3ec413bf4defd2776fb3c5589f5b45a587539bce804bb6465fa6c4bdf25d53da7148cff1ad69114b69bc98380cb87664239a64d7da99c829c7bcbf8039751e875f2e87aea5211df203aa9760c12e84e2308b63128ce1882bceb4e390e2125d26e8ae19ba9cc444742bc7c39141a145190bab33eef421f13b41792277c1f091f4949accb82f5eea6b7922bc94fc1d3f413584a9e59c2269bec484fb96a0e7aebe73df61e3d9447d92fd04fe3fc54ebe8ed34a1aa6cd336bad7f602fd8ee80cd46f9b094c261d48165ed3b87ad2842393bf40857331f3f2aba9171e3d262020a6b62113080",
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
									"value": "fcaca4a0002b7821d7f998d829797848af7a6b1925c4f5534b033e96d48c17d1152f9cfd93eedea827c3bdc0aacc1a47d90264bb358ed22eb86ccfd4d823acee8c6c661fb796cc0acdfd9319615e873366f6675560b02cef17da79b103c468dc189c5888564ff7b65181f8ea1eb60402732a684e46c7f0ce5a948e73fba8beec405c3f96d77368bdb1a022aef0680ffab7dd367fa68b0c9a1cc641e47bc4b1944e562284c284c5a8a6bd342d02ec0cc1ecd93ac4420c05cc0003e90a598f63d51df8d981c55a9caab3fe65e4ab2784665867a8a2b133f7ff9e8c9d8c73a1402815d0da4aed3fced3728c92d7bde252932285d887a859cac021278e38608c9b422c867b525162fb58177fc792955d6eac7882457cd7adee3ad1738c4c32911ab5f847f01ddbbe708b98fec1b73981b4a177a538ea02161add3881bdc66af33837d91a7f84c87b97a6e17faa3f9f8fcb5580f8dd56460aabb56ce642e97e2cc13c59586c9735954366cd77831a70d36400224640f9cf2c1e668818d83648e5e009e3426a31070705c89f1e8926f2a3f40a674df05c22f2617a79bad2cd41583680fceb0418e4670e1f6ebf10b6ead4ba4bc3c81baf6157bf1c4db588e9a39beddd54c39495ea1407b8b18371dd3ec413bf4defd2776fb3c5589f5b45a587539bce804bb6465fa6c4bdf25d53da7148cff1ad69114b69bc98380cb87664239a64d7da99c829c7bcbf8039751e875f2e87aea5211df203aa9760c12e84e2308b63128ce1882bceb4e390e2125d26e8ae19ba9cc444742bc7c39141a145190bab33eef421f13b41792277c1f091f4949accb82f5eea6b7922bc94fc1d3f413584a9e59c2269bec484fb96a0e7aebe73df61e3d9447d92fd04fe3fc54ebe8ed34a1aa6cd336bad7f602fd8ee80cd46f9b094c261d48165ed3b87ad2842393bf40857331f3f2aba9171e3d262020a6b62113080"
								}
							],
							"variable": [
								{
									"key": "id",
									"value": "5e6fddd82b00009827d81abb"
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
							"raw": "{{wfhostname}}/links2?details=true&page=1&Authorization=fcaca4a0002b7821d7f998d829797848af7a6b1925c4f5534b033e96d48c17d1152f9cfd93eedea827c3bdc0aacc1a47d90264bb358ed22eb86ccfd4d823acee8c6c661fb796cc0acdfd9319615e873366f6675560b02cef17da79b103c468dc189c5888564ff7b65181f8ea1eb60402732a684e46c7f0ce5a948e73fba8beec405c3f96d77368bdb1a022aef0680ffab7dd367fa68b0c9a1cc641e47bc4b1944e562284c284c5a8a6bd342d02ec0cc1ecd93ac4420c05cc0003e90a598f63d51df8d981c55a9caab3fe65e4ab2784665867a8a2b133f7ff9e8c9d8c73a1402815d0da4aed3fced3728c92d7bde252932285d887a859cac021278e38608c9b422c867b525162fb58177fc792955d6eac7882457cd7adee3ad1738c4c32911ab5f847f01ddbbe708b98fec1b73981b4a177a538ea02161add3881bdc66af33837d91a7f84c87b97a6e17faa3f9f8fcb5580f8dd56460aabb56ce642e97e2cc13c59586c9735954366cd77831a70d36400224640f9cf2c1e668818d83648e5e009e3426a31070705c89f1e8926f2a3f40a674df05c22f2617a79bad2cd41583680fceb0418e4670e1f6ebf10b6ead4ba4bc3c81baf6157bf1c4db588e9a39beddd54c39495ea1407b8b18371dd3ec413bf4defd2776fb3c5589f5b45a587539bce804bb6465fa6c4bdf25d53da7148cff1ad69114b69bc98380cb87664239a64d7da99c829c7bcbf8039751e875f2e87aea5211df203aa9760c12e84e2308b63128ce1882bceb4e390e2125d26e8ae19ba9cc444742bc7c39141a145190bab33eef421f13b41792277c1f091f4949accb82f5eea6b7922bc94fc1d3f413584a9e59c2269bec484fb96a0e7aebe73df61e3d9447d92fd04fe3fc54ebe8ed34a1aa6cd336bad7f602fd8ee80cd46f9b094c261d48165ed3b87ad2842393bf40857331f3f2aba9171e3d262020a6b62113080",
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
									"value": "fcaca4a0002b7821d7f998d829797848af7a6b1925c4f5534b033e96d48c17d1152f9cfd93eedea827c3bdc0aacc1a47d90264bb358ed22eb86ccfd4d823acee8c6c661fb796cc0acdfd9319615e873366f6675560b02cef17da79b103c468dc189c5888564ff7b65181f8ea1eb60402732a684e46c7f0ce5a948e73fba8beec405c3f96d77368bdb1a022aef0680ffab7dd367fa68b0c9a1cc641e47bc4b1944e562284c284c5a8a6bd342d02ec0cc1ecd93ac4420c05cc0003e90a598f63d51df8d981c55a9caab3fe65e4ab2784665867a8a2b133f7ff9e8c9d8c73a1402815d0da4aed3fced3728c92d7bde252932285d887a859cac021278e38608c9b422c867b525162fb58177fc792955d6eac7882457cd7adee3ad1738c4c32911ab5f847f01ddbbe708b98fec1b73981b4a177a538ea02161add3881bdc66af33837d91a7f84c87b97a6e17faa3f9f8fcb5580f8dd56460aabb56ce642e97e2cc13c59586c9735954366cd77831a70d36400224640f9cf2c1e668818d83648e5e009e3426a31070705c89f1e8926f2a3f40a674df05c22f2617a79bad2cd41583680fceb0418e4670e1f6ebf10b6ead4ba4bc3c81baf6157bf1c4db588e9a39beddd54c39495ea1407b8b18371dd3ec413bf4defd2776fb3c5589f5b45a587539bce804bb6465fa6c4bdf25d53da7148cff1ad69114b69bc98380cb87664239a64d7da99c829c7bcbf8039751e875f2e87aea5211df203aa9760c12e84e2308b63128ce1882bceb4e390e2125d26e8ae19ba9cc444742bc7c39141a145190bab33eef421f13b41792277c1f091f4949accb82f5eea6b7922bc94fc1d3f413584a9e59c2269bec484fb96a0e7aebe73df61e3d9447d92fd04fe3fc54ebe8ed34a1aa6cd336bad7f602fd8ee80cd46f9b094c261d48165ed3b87ad2842393bf40857331f3f2aba9171e3d262020a6b62113080"
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
									"value": "5981f3c946e0fb00203b3796"
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
									"value": "5981f3c946e0fb00203b3796"
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
						"id": "d8ababa3-2c2e-45e9-b881-708e0167263d",
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				},
				{
					"listen": "test",
					"script": {
						"id": "36bc535a-5f84-4db7-85f6-02dfd4b038db",
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