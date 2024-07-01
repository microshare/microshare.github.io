---
layout: docs
title: Incident Data Format
description: Let's take a look at the Microshare™ incident data structure.
toc: true
---




{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}

## 1. Microshare incident
---------------------------------------

To understand better what is an incident please refer to the page [](../microshare-platform-advanced/incident.md).

## 2. Microshare incident data format
---------------------------------------

Here is an example of a piece of data, we will then breeak down the different elements. 

```
    {
    "alert": "rodent",
    "config": {
      "id": "not-specified",
      "originAssignee": [
        "name1@test.com",
        "name2@test.com",
        "admin@test.com"
      ],
      "recType": "not-specified",
      "steps": [
        "accept",
        "do",
        "done"
      ]
    },
    "current": {
      "assignee": [
        "name1@test.com",
        "admin@test.com"
      ],
      "cancelee": "",
      "claimee": "",
      "count": 1,
      "geolocation": null,
      "workflow": {
        "process": {
          "start": "2024-01-09T14:07:03.214Z",
          "status": "open"
        },
        "userTask": {
          "name": "done",
          "start": "2024-01-09T16:03:52.453Z",
          "status": "open"
        }
      }
    },
    "event": "rodent_present",
    "history": [
      {
        "assignee": [
          "name1@test.com",
          "name2@test.com",
          "admin@test.com"
        ],
        "cancelee": "",
        "claimee": "",
        "count": 1,
        "geolocation": null,
        "workflow": {
          "process": {
            "duration": 116,
            "end": "2024-01-09T16:03:52.453Z",
            "start": "2024-01-09T14:07:03.214Z",
            "status": "open"
          },
          "userTask": {
            "duration": 116,
            "end": "2024-01-09T16:03:52.453Z",
            "name": "accept",
            "start": "2024-01-09T14:07:03.214Z",
            "status": "claimed"
          }
        }
      },
      {
        "assignee": [
          "name1@test.com",
          "name2@test.com",
          "admin@test.com"
        ],
        "cancelee": "",
        "claimee": "",
        "count": 1,
        "geolocation": null,
        "workflow": {
          "process": {
            "duration": 116,
            "end": "2024-01-09T16:03:56.507Z",
            "start": "2024-01-09T14:07:03.214Z",
            "status": "open"
          },
          "userTask": {
            "duration": 0,
            "end": "2024-01-09T16:03:56.507Z",
            "name": "do",
            "start": "2024-01-09T16:03:52.453Z",
            "status": "claimed"
          }
        }
      }
    ],
    "meta": {
      "device": [
        "Clapham Junction",
        "Microshare Office",
        "Dumpster",
        "Trap 1"
      ],
      "global": [
        "Microshare",
        "demo",
        "solutions",
        "pest"
      ],
      "iot": {
        "iso_time": "2024-01-09T14:07:03.214Z",
        "time": "2024-01-09T16:03:56.573Z"
      },
      "product": {
        "alert": "rodent",
        "brand": "eversmart",
        "event": "rodent_present",
        "solution": "alert"
      },
      "source": [],
      "workflow": {
        "process": {
          "id": "7224237",
          "version": "1.0.1"
        }
      }
    },
    "origin": [
      {
        "data": {
          "initiator": true,
          "robot": "659d56ab2fefeaaaaa1e6ce7",
          "tags": [
            "Microshare",
            "demo",
            "solutions",
            "pest",
            "Clapham Junction",
            "Microshare office",
            "Dumpster",
            "Trap 1"
          ],
          "time": "2024-01-09T14:07:02.451Z"
        },
        "id": "659d53062fefeaaaaa1e6b19",
        "recType": "io.microshare.event.alert.rodent"
      },
      {
        "data": {
          "initiator": false,
          "robot": "659d56ab2fefeaaaaa1e6ce7",
          "tags": [
            "Microshare",
            "demo",
            "solutions",
            "pest",
            "Clapham Junction",
            "Microshare office",
            "Dumpster",
            "Trap 2"
          ],
          "time": "2024-01-09T15:00:10.161Z"
        },
        "id": "659d5f7a2fefeaaaaa1e70ea",
        "recType": "io.microshare.event.alert.rodent"
      }
    ],
    "solution": "alert",
    "time": "2024-01-09T16:03:56.573Z",
    "todos": [
      {
        "isChecked": false,
        "item": "Acknowledge the incident at Clapham Junction,Microshare Office,Dumpster,Trap 1 and take appropriate action."
      },
      {
        "isChecked": false,
        "item": "Complementary event at Clapham Junction,Microshare Office,Dumpster,Trap 2"
      }
    ],
    "version": "1.0"
  }

```


### A. Microshare incident data format -- config
---------------------------------------

```
    "config": {
      "id": "not-specified",
      "originAssignee": [
        "name1@test.com",
        "name2@test.com",
        "admin@test.com"
      ],
      "recType": "not-specified",
      "steps": [
        "accept",
        "do",
        "done"
      ]
    }
```
#### originAssignee

Based on the subscription configuration (defined through the Notification Management app), all people with a subscription will be added to a generated incident. They will eventually receive a notification if the criteria they subscribed to match the status of the incident. However, being assigned to an incident does not necessarily mean they will be notified.

#### steps

Some configurations can allow the incident to be a 1 or 2 steps process instead of the default 3 steps process:

**Accept**: An individual needs to "accept" (or claim) the incident work. Once they do, they will be officially assigned to handle the incident.

**Do**: After being assigned, the individual indicates when they start "doing" the actual task.

**Done**: The individual works on resolving the task and signals when the work is completed or "done".

The incident can take other statuses like complete, cancel, etc., but these three steps require human action, and the name of each step is meant to represent what the user can do at that stage.


### B. Microshare incident data format -- current
---------------------------------------

```
    "current": {
      "assignee": [
        "name1@test.com",
        "admin@test.com"
      ],
      "cancelee": "",
      "claimee": "",
      "count": 1,
      "geolocation": null,
      "workflow": {
        "process": {
          "start": "2024-01-09T14:07:03.214Z",
          "status": "open"
        },
        "userTask": {
          "name": "done",
          "start": "2024-01-09T16:03:52.453Z",
          "status": "open"
        }
      }
    }
```

What's the current status of the incident ? 

#### assignee

Who are the current assignees at this stage? Now that people may have interacted with the incident, the assignees may have changed compared to the original ones at the incident's creation (config.originAssignee).

#### cancelee

If someone cancels an incident, his/her email address will be listed here.

#### claimee

The person who last took action on the incident will be considered our claimee (who claimed the action required on the incident).

#### geolocation

If the person acting on the incident is using the ReactM application, we will keep track of their geolocation when they act on the incident.

#### workflow.process

This section shows the status of the whole process (incident): when it started and what its status is now (open/cancel/timeout/complete).

#### workflow.userTask

The user task name refers to which step (config.steps) of the process we are on. It also defines when this step started and what its status is now (open if the process is open, or different if the process isn't open anymore).


### C. Microshare incident data format -- history
---------------------------------------

This is an array of the different steps this current incident has been through. You will find here a schema similar to what has been explained above. Indeed, when someone claims a step and the incident moves to the next step, we simply take a snapshot of some of the current fields and save it in the "history" array.


```
    "history": [
      {
        "assignee": [
          "name1@test.com",
          "name2@test.com",
          "admin@test.com"
        ],
        "cancelee": "",
        "claimee": "",
        "count": 1,
        "geolocation": null,
        "workflow": {
          "process": {
            "duration": 116,
            "end": "2024-01-09T16:03:52.453Z",
            "start": "2024-01-09T14:07:03.214Z",
            "status": "open"
          },
          "userTask": {
            "duration": 116,
            "end": "2024-01-09T16:03:52.453Z",
            "name": "accept",
            "start": "2024-01-09T14:07:03.214Z",
            "status": "claimed"
          }
        }
      },
      {
        "assignee": [
          "name1@test.com",
          "name2@test.com",
          "admin@test.com"
        ],
        "cancelee": "",
        "claimee": "",
        "count": 1,
        "geolocation": null,
        "workflow": {
          "process": {
            "duration": 116,
            "end": "2024-01-09T16:03:56.507Z",
            "start": "2024-01-09T14:07:03.214Z",
            "status": "open"
          },
          "userTask": {
            "duration": 0,
            "end": "2024-01-09T16:03:56.507Z",
            "name": "do",
            "start": "2024-01-09T16:03:52.453Z",
            "status": "claimed"
          }
        }
      }
    ],
```

### D. Microshare incident data format -- meta

The meta data is explained on the page [Microshare Standards](https://docs.microshare.io/docs/2/technical/data-format/microshare-standards/#d-metaiot). We will explain here the extra fields appearing for the incident.

```
"product": {
    "alert": "rodent",
    "brand": "eversmart",
    "event": "rodent_present",
    "solution": "alert"
},
"source": [],
"workflow": {
    "process": {
        "id": "7224237",
        "version": "1.0.1"
    }
}
```

#### product

This section defines the relationship between the incident and its affiliated product. Currently, all incidents are related to the Eversmart Alert solution, and the alert here is a rodent alert that led to an incident.


#### workflow

We keep track of our process id to follow the BPM status here.

### D. Microshare incident data format -- origin

This section defines all the events that led to this incident's creation and escalation. It's an array of elements.

```
    {
        "data": {
          "initiator": true,
          "robot": "659d56ab2fefeaaaaa1e6ce7",
          "tags": [
            "Microshare",
            "demo",
            "solutions",
            "pest",
            "Clapham Junction",
            "Microshare office",
            "Dumpster",
            "Trap 1"
          ],
          "time": "2024-01-09T14:07:02.451Z"
        },
        "id": "659d53062fefeaaaaa1e6b19",
        "recType": "io.microshare.event.alert.rodent"
      },
      {
        "data": {
          "initiator": false,
          "robot": "659d56ab2fefeaaaaa1e6ce7",
          "tags": [
            "Microshare",
            "demo",
            "solutions",
            "pest",
            "Clapham Junction",
            "Microshare office",
            "Dumpster",
            "Trap 2"
          ],
          "time": "2024-01-09T15:00:10.161Z"
        },
        "id": "659d5f7a2fefeaaaaa1e70ea",
        "recType": "io.microshare.event.alert.rodent"
      }
```

Here you can see that the tags from both events aren't for the exact same location. Indeed, we can decide to bundle alerts for an exact location (one device) or a higher level like a site, a building, a floor, an area, etc. This is part of the configuration capabilities. The id, recType, and robot id, help to determine the source of the incident and its bundling for backward traceability.

#### initiator

The initiator field determines which of these events was the one that led to the incident's creation, versus other events that have been bundled.

### E. Microshare incident data format -- todos

The todos is the list of actions "to do" to resolve the incident. Every time a new event is received and bundled into the incident, we add it as an extra todo.

```
    "todos": [
      {
        "isChecked": false,
        "item": "Acknowledge the incident at Clapham Junction,Microshare Office,Dumpster,Trap 1 and take appropriate action."
      },
      {
        "isChecked": false,
        "item": "Complementary event at Clapham Junction,Microshare Office,Dumpster,Trap 2"
      }
    ]
```
