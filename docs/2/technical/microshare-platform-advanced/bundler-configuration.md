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
3. [Robot with default configuration](./#3-robot-with-default-configuration)
    - A. [Overriding default configuration](./#a-overriding-default-configuration)
4. [Nested Configurations](./#4-nested-configurations)
    - A. [Working of Nested Configuration](./#a-working-of-nested-configuration)
    - B. [Configure by event type](./#b-configure-by-event-type)
    - C. [Configure by Location](./#c-configure-by-location)
5. [Updating Robot configs](./#5-updating-robot-configs)
    - A [Changing priority of the config](./#a-changing-priority-of-the-config)
6. [Configuring Bundler for Custom event types and locations](./#5-configuring-bundler-for-custom-event-types-and-locations)

---------------------------------------

## 1. Microshare Incidents
---------------------------------------
In the Microshare data pipeline, we process our IoT data (from sensors) into events and alerts, leading to a more responsive system where motion and environmental data are transformed into alerts and action data.

An alert generates an incident that is reported to a customer as a notification. Furthermore, multiple alerts, corresponding to the same incident are bundled together by a bundler robot.

This page describes how to configure a bundler robot which will bundle certain types of alerts for a given incident.

## 2. Overview
---------------------------------------
An incident bundler robot collects multiple alerts from sensors and consolidates related alerts into a single incident. This process involves analyzing incoming alerts, identifying correlations, and grouping them based on predefined criteria which are given by the bundler robot configuration . Once the alerts are consolidated into a single incident, a notification is triggered and sent to the respective customer.

The bundler robot relies on a JSON configuration to understand how to consolidate alerts into an incident. This configuration file contains the rules and parameters that dictate how alerts should be grouped. By using this configuration format, the bundler robot can adapt to various scenarios and requirements, providing accurate and efficient incident management.

## 3. Robot with default configuration
---------------------------------------
The default configuration is the config that is applied to every alert encountered by the bundler. All incoming alerts are bundled into incidents by the bundler using the default configuration. 

Example robot with default config

```
function main(text, auth) {
    print("bundler_rodent")
    try{
        var bundler = require('./libs/products/bundler');
        var config = {
            "version" : "2.0.0"
        }
        bindings.auth = auth
        bundler.action(text, config)
    } catch (error) {
        print(error)
    }
}
```

The `config` object defines the settings and parameters for the incident bundler robot.
This guide only walks you through writing configurations for bundler robots. To learn more about creating robots, refer to the [Robots Guide](https://docs.microshare.io/docs/2/technical/microshare-platform-advanced/robots-guide/) and [Robots Library](https://docs.microshare.io/docs/2/technical/microshare-platform-advanced/robots-library/)

The version field denotes the version of the bundler configuration, which in this case is "2.0.0".

### Overriding default configuration
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
    "version": "2.0.0"
}
```
A sample default shared configuration for all alerts may look like this.

We can override certain parts of this configuration by passing our own custom configuration to the "config" object of the bundler robot as demonstrated below.
```
function main(text, auth) {
    print("bundler_rodent")
    
    try {
        var bundler = require('./libs/products/bundler');
        var config = {
            "version": "2.0.0",
            "config": {
                "incident": {
                    "priority": "5",
                    "title": "Critical Incident"
                },
                "todos": [
                    "Acknowledge the incident immediately.",
                    "Contact the relevant team."
                ]
            },
            "solutions": {
                "alert": {
                    "alerts": {
                        "rodent": {
                            "config": {
                                "incident": {
                                    "priority": "10",
                                    "title": "Urgent Rodent Incident"
                                },
                                "todos": [
                                    "Inspect the area for rodents.",
                                    "Set up additional traps."
                                ]
                            }
                        }
                    }
                }
            }
        };
        bindings.auth = auth;
        bundler.action(text, config);
    } catch (error) {
        print(error);
    }
}
```
The configuration in the config object overrides the default shared configuration for the respective fields. 
The working of nested configurations is explained in further sections.

Note: To find the default configuration for your account, go to the home tab and click the hamburger menu on the right. Then scroll down and select exit to console:
{% include image.html url="/assets/img/bundlerConf/image2.png" description="thumbnail-2" %}

Next, go to the views section and search for "Bundler Shared Config" view. 
Open that view and go to the static json tab in that view. There you should find the default configuration for your account.
{% include image.html url="/assets/img/bundlerConf/image3.png" description="thumbnail-3" %} 

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
"version": "2.0.0"
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
    "version": "2.0.0"
}
```

Location-based nested configurations enable the specification of custom settings for particular locations, allowing the default configuration to be overridden based on the specific needs of the customer. For example, in the provided configuration, there is a custom setup for the "Executive Plaza" location.

- **Global Configuration**: Contains the default configuration for all alert types
- **Location-Specific Configuration**:
  - **Executive Plaza**: Custom configuration for incidents at this location.

This structure allows for flexible and precise customization of incident management based on location-specific requirements, ensuring that each location can have tailored settings that meet its unique needs.

## 5. Updating Robot configs
---------------------------------------
To find existing robots, exit to console as shown in section 3 and go to the Robots tab.
There you can find all the active and inactive robots running for your account.
{% include image.html url="/assets/img/bundlerConf/image4.png" description="thumbnail-4" %} 

Once you open an active robot, you will find settings for the robot as shown.
{% include image.html url="/assets/img/bundlerConf/image5.png" description="thumbnail-5" %} 
Here, take a note of the rectype field. The robot you have opened will take data only from that rectype. Open the robot that is written for alerts from your desired rectype.
For example: the rectype io.microshare.event.alert.feedback is for feedback alerts which means the robot works only for feedback alerts.

After you find the right robot, you can find the configuration for that robot in the script section as shown below
{% include image.html url="/assets/img/bundlerConf/image6.png" description="thumbnail-6" %}

Once you find the config object, you can make changes to the robot config.

### Changing priority of the config
Most Configurations for robots have a priority field. This priority field determines the priority of the incident that is created after bundling the incoming alerts.
We can change the priority for the default configuration and the nested configurations as needed.

#### Changing priority in existing config: 
For existing configurations, we can change the priority by tweaking the value of the priority field under the incident object of the main bundler configuration.
{% include image.html url="/assets/img/bundlerConf/image7.png" description="thumbnail-7" %} 

#### Creating a new config and setting the priority.
If the config object in the robot is empty, you can add your own config and set a desired priority level which will override the existing default configuration.

For example:
```
function main(text, auth) {
    print("bundler_rodent")
    
    try {
        var bundler = require('./libs/products/bundler');
        var config = {
            "version": "2.0.0",
            "config": {
                "incident": {
                    "priority": "5",
                    "title": "Critical Incident"
                },
                "todos": [
                    "Add some todos"
                ]
            },
            "solutions": {
                "clean": {
                    "feedback": {
                        "supplies": {
                            "config": {
                                "incident": {
                                    "priority": "10",
                                    "title": "Urgent Rodent Incident"
                                }
                            }
                        }
                    }
                }
            }
        };
        bindings.auth = auth;
        bundler.action(text, config);
    } catch (error) {
        print(error);
    }
}
```
Using the above structure format, you can add a priority field which overrides the default configuration.
Here, the priority for solutions->clean->feedback->supplies will be overridden over the default config to 10. 
{% include image.html url="/assets/img/bundlerConf/image8.png" description="thumbnail-8" %} 

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
    "version": "2.0.0"
}
```

The above configuration is an example config for a custom location and alert type.
The custom location is Railway Station Platform 2 and the custom alert types are "clean", "track", "lights".

For custom alerts, if you have created custom rectypes, you will have to update the custom rectype in the robot settings as highlighted below.
{% include image.html url="/assets/img/bundlerConf/image1.png" description="thumbnail-1" %}
(replace the highlighted part with your custom rectype)

Then You will have to write your own custom robot with the above bundler configuration and rectype.
