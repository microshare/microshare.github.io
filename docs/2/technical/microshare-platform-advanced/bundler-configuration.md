---
layout: docs
title: Incident Bundler Configuration
description: Let's take a look at how to configure an alert bundler for incidents
toc: true
---

{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail" %}

<br>

---------------------------------------

##### SUMMARY: 

1. [Microshare Incidents](./#1-microshare-incidents)
2. [Overview](./#2-overview)
3. [Default Configuration](./#3-default-configuration)
4. [Nested Configurations](./#4-nested-configurations)
5. [Using with your own configuration](./#5-using-with-your-own-configuration)
6. [Configuring Bundler for Custom event types and locations](./#6-configuring-bundler-for-custom-event-types-and-locations)


---------------------------------------

## 1. Microshare Incidents
---------------------------------------
In the Microshare data pipeline, we process our IoT data (from sensors) into events and alerts, leading to a more responsive system where motion and environmental data are transformed into alerts and action data.

An alert generates an incident that is reported to a customer as a notification. Furthermore, multiple alerts, corresponding to the same incident are bundled together by a bundler robot.

This page describes how to configure a bundler robot which will bundle certain types of alerts for a given incident.

## 2. Overview
---------------------------------------
An incident bundler robot collects multiple alerts from sensors and consolidates related alerts into a single incident. This process involves analyzing incoming alerts, identifying correlations, and grouping them based on predefined criteria which are given by the bundler robot configuration . Once the alerts are consolidated into a single incident, a notification is triggered and sent to the respective customer.

The bundler robot relies on a JSON configuration (in the configuration section) to understand how to consolidate alerts into an incident. This configuration file contains the rules and parameters that dictate how alerts should be grouped. By using this configuration format, the bundler robot can adapt to various scenarios and requirements, providing accurate and efficient incident management.

The robot code is be quite simple: 
```
function main(text, auth) {
    print("bundler_rodent")

    try{
        var bundler = require('./libs/products/bundler');
        var config = {
            "version" : "3.0.0",
        }
        bindings.auth = auth
        bundler.action(text, config)
    } catch (error) {
        print(error)
    }
}
```

You should be able to find it in your robot section. If your robot look different and refers to version 1.0.0 or 2.0.0, refers to Microshare support if you need to do any changes. 

That robot is very simple as the configuration is made in the "configs" section of the Microshare console. See following section. 


## 3. Default Configuration
---------------------------------------
To access the config you will need to access the config section in the Microshare console.  

The default configuration for the bundler robot is stored in the "Product Bundler Config" config. This configuration is linked to our product line, this is how the product are configured as sold. This configuration is used as a template for creating incidents from alerts. The configuration contains settings for different types of alerts, including their priority, title, and timing. You can't modify this shared config as it is read only and owned by Microshare. 

However you can take a look at it: 

on dev: [https://dapp.microshare.io/composer#/configs/io.microshare.config.bundler/67081107aa70d30eb2800a03](https://dapp.microshare.io/composer#/configs/io.microshare.config.bundler/67081107aa70d30eb2800a03)
on prod: [https://app.microshare.io/composer#/configs/io.microshare.config.bundler/67081107aa70d30eb2800a03](https://app.microshare.io/composer#/configs/io.microshare.config.bundler/67081107aa70d30eb2800a03)

This config will be used by your robot to create incidents from alerts. 



### Config Structure

This the example of our default config at the time of writing.
```
{
    "config": {
        "incident": {
            "priority": "10",
            "title": "New Incident"
        },
        "labels": {
            "complementaryTodo": "Respond to the $<bindings.share.event> event at $<bindings.share.currentLoc.join(\", \")>",
            "initialTodo": "Respond to the $<bindings.share.event> event at $<bindings.share.currentLoc.join(\", \")>"
        },
        "timing": {
            "globalReminderTime": "P2W",
            "globalTimeoutTime": "P3W"
        },
        "todos": []
    },
    "solutions": {
        "alert": {
            "alerts": {
                "rodent": {
                    "config": {
                        "incident": {
                            "priority": "20",
                            "title": "Rodent Incident"
                        },
                        "labels": {
                            "complementaryTodo": "Check trap at $<bindings.share.currentLoc.join(\", \")>",
                            "initialTodo": "Check trap at $<bindings.share.currentLoc.join(\", \")>"
                        },
                        "timing": {
                            "globalReminderTime": "P2W",
                            "globalTimeoutTime": "P3W"
                        },
                        "todos": [
                            "Acknowledge the rodent detection and take appropriate action."
                        ],
                        "workload": {
                            "deviceTag": "2",
                            "joinedEvent": false
                        }
                    },
                    "events": {
                        "rodent_present": {
                            "config": {}
                        }
                    }
                },
                "service": {
                    "config": {
                        "incident": {
                            "priority": "30",
                            "title": "New $<bindings.share.event> request"
                        },
                        "labels": {
                            "complementaryTodo": "Respond to the $<bindings.share.event> request at $<bindings.share.currentLoc.join(\", \")>",
                            "initialTodo": "Respond to the $<bindings.share.event> request at $<bindings.share.currentLoc.join(\", \")>"
                        },
                        "timing": {
                            "globalReminderTime": "PT4H",
                            "globalTimeoutTime": "PT3H"
                        },
                        "todos": [
                            "Acknowledge the service request and take appropriate action."
                        ],
                        "workload": {
                            "deviceTag": "4",
                            "joinedEvent": true
                        }
                    },
                    "events": {}
                }
            },
            "config": {}
        },
        "clean": {
            "alerts": {
                "feedback": {
                    "config": {},
                    "events": {
                        "clean": {
                            "config": {
                                "incident": {
                                    "priority": "15"
                                }
                            }
                        },
                        "leak": {
                            "config": {
                                "incident": {
                                    "priority": "25"
                                }
                            }
                        },
                        "paper": {
                            "config": {
                                "incident": {
                                    "priority": "15"
                                }
                            }
                        },
                        "soap": {
                            "config": {
                                "incident": {
                                    "priority": "10"
                                }
                            }
                        },
                        "toilet": {
                            "config": {
                                "incident": {
                                    "priority": "20"
                                }
                            }
                        }
                    }
                }
            },
            "config": {
                "incident": {
                    "title": "New $<bindings.share.event> request"
                },
                "labels": {
                    "complementaryTodo": "Respond to the $<bindings.share.event> request at $<bindings.share.currentLoc.join(\", \")>",
                    "initialTodo": "Respond to the $<bindings.share.event> request at $<bindings.share.currentLoc.join(\", \")>"
                },
                "timing": {
                    "globalReminderTime": "PT4H",
                    "globalTimeoutTime": "PT3H"
                },
                "todos": [],
                "workload": {
                    "deviceTag": "4",
                    "joinedEvent": true
                }
            }
        }
    },
    "version": "3.0.0"
}
```

The configuration is divided into two main sections: "config" and "solutions". The "config" section contains the default settings for incidents, including priority, title, labels, timing, and todos. The "solutions" section contains configurations for different types of alerts, such as "rodent" and "service". Each alert type has its own configuration, which can override the default settings for incidents.


## 4. Nested Configurations
---------------------------------------
In nested configurations, we have nested json objects which include configurations for different types of alerts in a nested manner.
Following is an example nested configuration for a bundler robot.

```
"config": {
    "incident": {
        "priority": "10",
        "title": "New Incident"
    },
    "labels": {
        "complementaryTodo": "Respond to the $<bindings.share.event> event at $<bindings.share.currentLoc.join(\", \")>",
        "initialTodo": "Respond to the $<bindings.share.event> event at $<bindings.share.currentLoc.join(\", \")>"
    },
    "timing": {
        "globalReminderTime": "P2W",
        "globalTimeoutTime": "P3W"
    },
    "todos": []
},
"solutions": {
    "alert": {
        "alerts": {
            "rodent": {
                "config": {
                    "incident": {
                        "priority": "20",
                        "title": "Rodent Incident"
                    },
                    "labels": {
                        "complementaryTodo": "Check trap at $<bindings.share.currentLoc.join(\", \")>",
                        "initialTodo": "Check trap at $<bindings.share.currentLoc.join(\", \")>"
                    },
                    "timing": {
                        "globalReminderTime": "P2W",
                        "globalTimeoutTime": "P3W"
                    },
                    "todos": [
                        "Acknowledge the rodent detection and take appropriate action."
                    ],
                    "workload": {
                        "deviceTag": "2",
                        "joinedEvent": false
                    }
                },
                "events": {
                    "rodent_present": {
                        "config": {}
                    }
                }
            },
            "service": {
                "config": {
                    "incident": {
                        "priority": "30",
                        "title": "New $<bindings.share.event> request"
                    },
                    "labels": {
                        "complementaryTodo": "Respond to the $<bindings.share.event> request at $<bindings.share.currentLoc.join(\", \")>",
                        "initialTodo": "Respond to the $<bindings.share.event> request at $<bindings.share.currentLoc.join(\", \")>"
                    },
                    "timing": {
                        "globalReminderTime": "PT4H",
                        "globalTimeoutTime": "PT3H"
                    },
                    "todos": [
                        "Acknowledge the service request and take appropriate action."
                    ],
                    "workload": {
                        "deviceTag": "4",
                        "joinedEvent": true
                    }
                },
                "events": {}
            }
        },
        "config": {}
    },
    "clean": {
        "alerts": {
            "feedback": {
                "config": {},
                "events": {
                    "clean": {
                        "config": {
                            "incident": {
                                "priority": "15"
                            }
                        }
                    },
                    "leak": {
                        "config": {
                            "incident": {
                                "priority": "25"
                            }
                        }
                    },
                    "paper": {
                        "config": {
                            "incident": {
                                "priority": "15"
                            }
                        }
                    },
                    "soap": {
                        "config": {
                            "incident": {
                                "priority": "10"
                            }
                        }
                    },
                    "toilet": {
                        "config": {
                            "incident": {
                                "priority": "20"
                            }
                        }
                    }
                }
            }
        },
        "config": {
            "incident": {
                "title": "New $<bindings.share.event> request"
            },
            "labels": {
                "complementaryTodo": "Respond to the $<bindings.share.event> request at $<bindings.share.currentLoc.join(\", \")>",
                "initialTodo": "Respond to the $<bindings.share.event> request at $<bindings.share.currentLoc.join(\", \")>"
            },
            "timing": {
                "globalReminderTime": "PT4H",
                "globalTimeoutTime": "PT3H"
            },
            "todos": [],
            "workload": {
                "deviceTag": "4",
                "joinedEvent": true
            }
        }
    }
},
"version": "3.0.0"
```

When a certain type of alert is received, it is matched with a nested json object until the right configuration for that type of alert is encountered.
These nested objects contain objects for different parameters within the alerts which are then matched accordingly. These alerts are matched based on the type of solution, alert and format.

Once the right config for a given alert is found, the respective fields inside the default config are over written by matching fields under this new config. The updated default config is then used by the bundler robot to create an incident from that alert.

### Working of Nested Configuration

```
"config": {
    "incident": {
        "priority": "10",
        "title": "New Incident"
    },
    "labels": {
        "complementaryTodo": "Respond to the $<bindings.share.event> event at $<bindings.share.currentLoc.join(\", \")>",
        "initialTodo": "Respond to the $<bindings.share.event> event at $<bindings.share.currentLoc.join(\", \")>"
    },
    "timing": {
        "globalReminderTime": "P2W",
        "globalTimeoutTime": "P3W"
    },
    "todos": []
},
```
This section of the shared config is the default config used for all event types.
When an event is received by the bundler, the fields inside the event are matched with nested fields in the nested configuration. Once the right configuration is found for the given event, the default shared config is overwritten by the config for that event in the nested config.

Example:
Take the config for the alert type Solutions->clean->alerts->feedback->leak. The configuration looks like:

```
"config": {
    "incident": {
        "priority": "25"
    }
}
```

This configuration is overwritten to the config for the alert as so:-

```
"config": {
    "incident": {
        "priority": "25",
        "title": "New Incident"
    },
    "labels": {
        "complementaryTodo": "Respond to the $<bindings.share.event> event at $<bindings.share.currentLoc.join(\", \")>",
        "initialTodo": "Respond to the $<bindings.share.event> event at $<bindings.share.currentLoc.join(\", \")>"
    },
    "timing": {
        "globalReminderTime": "P2W",
        "globalTimeoutTime": "P3W"
    },
    "todos": []
},
```
Notice how the priority field under the incident object is changed from 10 to 25.

### Configure by event type
We can create nested configurations that can be tailored for certain event types of your choice.

example nested config
```
"solutions": {
    "alert": {
        "alerts": {
            "rodent": {
                "config": {
                    "incident": {
                        "priority": "20",
                        "title": "Rodent Incident"
                    },
                    "labels": {
                        "complementaryTodo": "Check trap at $<bindings.share.currentLoc.join(\", \")>",
                        "initialTodo": "Check trap at $<bindings.share.currentLoc.join(\", \")>"
                    },
                    "timing": {
                        "globalReminderTime": "P2W",
                        "globalTimeoutTime": "P3W"
                    },
                    "todos": [
                        "Acknowledge the rodent detection and take appropriate action."
                    ],
                    "workload": {
                        "deviceTag": "2",
                        "joinedEvent": false
                    }
                },
                "events": {
                    "rodent_present": {
                        "config": {}
                    }
                }
            },
            "service": {
                "config": {
                    "incident": {
                        "priority": "30",
                        "title": "New $<bindings.share.event> request"
                    },
                    "labels": {
                        "complementaryTodo": "Respond to the $<bindings.share.event> request at $<bindings.share.currentLoc.join(\", \")>",
                        "initialTodo": "Respond to the $<bindings.share.event> request at $<bindings.share.currentLoc.join(\", \")>"
                    },
                    "timing": {
                        "globalReminderTime": "PT4H",
                        "globalTimeoutTime": "PT3H"
                    },
                    "todos": [
                        "Acknowledge the service request and take appropriate action."
                    ],
                    "workload": {
                        "deviceTag": "4",
                        "joinedEvent": true
                    }
                },
                "events": {}
            }
        },
        "config": {}
    },
    "clean": {
        "alerts": {
            "feedback": {
                "config": {},
                "events": {
                    "clean": {
                        "config": {
                            "incident": {
                                "priority": "15"
                            }
                        }
                    },
                    "leak": {
                        "config": {
                            "incident": {
                                "priority": "25"
                            }
                        }
                    },
                    "paper": {
                        "config": {
                            "incident": {
                                "priority": "15"
                            }
                        }
                    },
                    "soap": {
                        "config": {
                            "incident": {
                                "priority": "10"
                            }
                        }
                    },
                    "toilet": {
                        "config": {
                            "incident": {
                                "priority": "20"
                            }
                        }
                    }
                }
            }
        },
        "config": {
            "incident": {
                "title": "New $<bindings.share.event> request"
            },
            "labels": {
                "complementaryTodo": "Respond to the $<bindings.share.event> request at $<bindings.share.currentLoc.join(\", \")>",
                "initialTodo": "Respond to the $<bindings.share.event> request at $<bindings.share.currentLoc.join(\", \")>"
            },
            "timing": {
                "globalReminderTime": "PT4H",
                "globalTimeoutTime": "PT3H"
            },
            "todos": [],
            "workload": {
                "deviceTag": "4",
                "joinedEvent": true
            }
        }
    }
}
```

The provided JSON object demonstrates how nested configurations are used to manage different types of alerts and their corresponding incidents. This structure allows the incident bundler robot to match incoming alerts with the appropriate configuration, ensuring that incidents are created and managed according to predefined rules.

#### Structure Overview

- **solutions**: The top-level object that categorizes different types of solutions.
  - **alert**: A category within solutions that handles various alerts.
    - **alerts**: Contains specific alert types and their configurations.
      - **rodent**: Configuration for rodent-related alerts.
        - **config**: Defines the default configuration for rodent alerts.
        - **events**: Specific events related to rodent alerts.
          - **rodent_present**: placeholder for alerts indicating presence of a rodent.
      - **service**: Configuration for service-related alerts.
        - **config**: Defines the default config for service alerts.
        - **events**: Placeholder for additional service-related events.
    - **config**: Placeholder for additional alert configurations.

  - **clean**: A category within solutions that handles cleaning-related alerts.
    - **alerts**: Contains specific alert types and their configurations.
      - **feedback**: Configuration for feedback-related alerts.
        - **config**: Placeholder for feedback configuration.
        - **events**: Configurations for different types of events.
    - **config**: Defines the default incident settings for cleaning alerts.

### Configure by Location
```
{
    "config": {
        "labels": {
            "complementaryTodo": "$<bindings.share.event> event",
            "initialTodo": "$<bindings.share.event> event"
        },
        "todos": []
    },
    "solutions": {
        ...
    }
    "locations": [
    {
        "device": ["Executive Plaza"],
        "config": {
            "incident": {
                "priority": "100"
            }
        },
        "solutions": {
            "clean": {
                "alerts": {
                    "feedback": {
                        "config": {},
                        "events": {
                            "clean": {
                                "config": {
                                    "incident": {
                                        "priority": "80"
                                    }
                                }
                            },
                            "leak": {
                                "config": {
                                    "incident": {
                                        "priority": "80"
                                    }
                                }
                            },
                            "supplies": {
                                "config": {
                                    "incident": {
                                        "priority": "80"
                                    }
                                }
                            },
                            "toilet": {
                                "config": {
                                    "incident": {
                                        "priority": "80"
                                    }
                                }
                            }
                        }
                    }
                },
                "config": {
                    "incident": {
                        "title": "New $<bindings.share.event> request"
                    },
                    "labels": {
                        "complementaryTodo": "$<bindings.share.event> event",
                        "initialTodo": "$<bindings.share.event> event"
                    },
                    "timing": {
                        "globalReminderTime": "PT12H",
                        "globalTimeoutTime": "PT8H"
                    },
                    "todos": [],
                    "workload": {
                        "deviceTag": "3",
                        "joinedEvent": true
                    }
                }
            }
        }
    }
    ],
    "version": "3.0.0"
}
```

Location-based nested configurations enable the specification of custom settings for particular locations, allowing the default configuration to be overridden based on the specific needs of the customer. For example, in the provided configuration, there is a custom setup for the "Executive Plaza" location.

- **Global Configuration**: Contains the default configuration for all alert types
- **Location-Specific Configuration**:
  - **Executive Plaza**: Custom configuration for incidents at this location.

This structure allows for flexible and precise customization of incident management based on location-specific requirements, ensuring that each location can have tailored settings that meet its unique needs.

## 5. Using with your own configuration
---------------------------------------
To use your own configuration, you can create a new config in the config tab and set the desired configuration for the incident bundler.

Make sure to give it the recType: io.microshare.config.bundler

Ant put the content of the configuration you want to use in the content field. It could look like this:

```
{
    "config": {
        "escalation": {
            "priority": 1,
            "time": "PT20M"
        },
        "incident": {
            "priority": 0,
            "threshold": {
                "high": 100,
                "low": 50,
                "medium": 75,
                "notify": 75
            }
        },
        "solution": "clean",
        "timing": {
            "globalReminderTime": "P5D",
            "globalTimeoutTime": "P2D"
        }
    },
    "locations": [
        {
            "config": {
                "area": 10,
                "incident": {
                    "threshold": {
                        "high": 120,
                        "low": 60,
                        "medium": 90,
                        "notify": 90
                    }
                },
                "notes": "Dummy Note 1",
                "solution": "clean",
                "tour": "Demo Tour 1"
            },
            "device": [
                "Device-A1",
                "001",
                "101",
                "Type-X"
            ]
        },
        {
            "config": {
                "area": 15,
                "incident": {
                    "threshold": {
                        "high": 200,
                        "low": 100,
                        "medium": 150,
                        "notify": 150
                    }
                },
                "notes": "Dummy Note 2",
                "solution": "clean",
                "tour": "Demo Tour 2"
            },
            "device": [
                "Device-B2",
                "002",
                "202",
                "Type-Y"
            ]
        }
    ],
    "solutions": {
        "clean": {
            "alerts": {
                "feedback": {
                    "events": {
                        "clean": {
                            "config": {
                                "incident": {
                                    "priority": 10
                                },
                                "labels": {
                                    "complementaryTodo": "Action needed",
                                    "initialTodo": "Perform cleaning"
                                },
                                "todos": []
                            }
                        }
                    }
                }
            },
            "config": {
                "incident": {
                    "threshold": {
                        "high": 150,
                        "low": 75,
                        "medium": 100,
                        "notify": 100
                    }
                }
            }
        }
    },
```
{
    "config": {
        "escalation": {
            "priority": 1,
            "time": "PT20M"
        },
        "incident": {
            "priority": 0,
            "threshold": {
                "high": 100,
                "low": 50,
                "medium": 75,
                "notify": 75
            }
        },
        "solution": "clean",
        "timing": {
            "globalReminderTime": "P5D",
            "globalTimeoutTime": "P2D"
        }
    },
    "locations": [
        {
            "config": {
                "area": 10,
                "incident": {
                    "threshold": {
                        "high": 120,
                        "low": 60,
                        "medium": 90,
                        "notify": 90
                    }
                },
                "notes": "Dummy Note 1",
                "solution": "clean",
                "tour": "Demo Tour 1"
            },
            "device": [
                "Device-A1",
                "001",
                "101",
                "Type-X"
            ]
        },
        {
            "config": {
                "area": 15,
                "incident": {
                    "threshold": {
                        "high": 200,
                        "low": 100,
                        "medium": 150,
                        "notify": 150
                    }
                },
                "notes": "Dummy Note 2",
                "solution": "clean",
                "tour": "Demo Tour 2"
            },
            "device": [
                "Device-B2",
                "002",
                "202",
                "Type-Y"
            ]
        }
    ],
    "solutions": {
        "clean": {
            "alerts": {
                "feedback": {
                    "events": {
                        "clean": {
                            "config": {
                                "incident": {
                                    "priority": 10
                                },
                                "labels": {
                                    "complementaryTodo": "Action needed",
                                    "initialTodo": "Perform cleaning"
                                },
                                "todos": []
                            }
                        }
                    }
                }
            },
            "config": {
                "incident": {
                    "threshold": {
                        "high": 150,
                        "low": 75,
                        "medium": 100,
                        "notify": 100
                    }
                }
            }
        }
    },
    "version": "3.0.0"
}
```

Indeed you need to keep the same nested data format as explained in section 4.

### Changing priority of the config
Most Configurations for robots have a priority field. This priority field determines the priority of the incident that is created after bundling the incoming alerts.
We can change the priority for the default configuration and the nested configurations as needed.

#### Changing priority in existing config: 
For existing configurations, we can change the priority by tweaking the value of the priority field under the incident object of the main bundler configuration.

Using the above structure format, you can add a priority field which overrides the default configuration.
Here, the priority for solutions->clean->feedback->clean will be overridden over the default config to 10. 


## 6. Configuring Bundler for Custom event types and locations.
---------------------------------------
Using the guide for [Creating Custom Incidents](https://docs.microshare.io/docs/2/technical/microshare-platform-advanced/creating-custom-incidents/), we can trigger custom incidents that create custom tasks which may or may not be associated to a sensor alert type or location.

To write a bundler config for custom incidents, we can write a nested configuration in the same way as demonstrated above but the location names and alert types must match the ones used in the custom incidents. 

For example:- 

```
{
    "config": {
        "labels": {
            "complementaryTodo": "Custom Todo event",
            "initialTodo": "Custom todos"
        },
        "todos": []
    },
    "solutions": {
        ...
    }
    "locations": [
    {
        "device": ["Railway Station", "Platform 2"],
        "config": {
            "incident": {
                "priority": "100"
            }
        },
        "solutions": {
            "Maintenance": {
                "alerts": {
                    "feedback": {
                        "config": {},
                        "events": {
                            "clean": {
                                "config": {
                                    "incident": {
                                        "priority": "80"
                                    }
                                }
                            },
                            "track": {
                                "config": {
                                    "incident": {
                                        "priority": "80"
                                    }
                                }
                            },
                            "lights": {
                                "config": {
                                    "incident": {
                                        "priority": "80"
                                    }
                                }
                            }
                        }
                    }
                },
                "config": {}
            }
        }
    }
    ],
    "version": "3.0.0"
}
```

The above configuration is an example config for a custom location and alert type.
The custom location is Railway Station Platform 2 and the custom alert types are "clean", "track", "lights".

For custom alerts, if you have created custom rectypes, you will have to duplicate the robot code shown earlier and replace the rectype in the robot parameters with your custom rectype.


```
function main(text, auth) {
    print("bundler_rodent")

    try{
        var bundler = require('./libs/products/bundler');
        var config = {
            "version" : "3.0.0",
        }
        bindings.auth = auth
        bundler.action(text, config)
    } catch (error) {
        print(error)
    }
}
```

Then you will have to create a new config in the config tab and set the desired configuration for the incident bundler.
