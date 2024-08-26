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

## 3. Default Configuration
---------------------------------------
The default configuration is the config that is applied to every alert encountered by the bundler. All incoming alerts are bundled into incidents by the bundler using the default configuration. 

Example Default config

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
}
```

The `config` object defines the settings and parameters for the incident bundler robot. Here is a detailed explanation of each field:

- **incident**: This object contains information about the incident itself.
  - **priority**: Specifies the priority level of the incident. A higher number indicates a higher priority.
  - **title**: The title of the incident, which will be used in notifications and reports.

- **labels**: This object contains templates for the tasks (todos) associated with the incident.
  - **initialTodo**: A template for the initial task. Similar to `complementaryTodo`, it uses placeholders to dynamically insert event and location details.
  - **complementaryTodo**: A template for a follow-up task. The placeholders `$<bindings.share.event>` and `$<bindings.share.currentLoc.join(", ")>` will be replaced with the actual event and location details when the task is created.

- **timing**: This object defines the timing parameters for reminders and timeouts.
  - **globalReminderTime**: Specifies the global reminder time using the ISO 8601 duration format. `P2W` means a reminder will be sent 2 weeks after the incident is created.
  - **globalTimeoutTime**: Specifies the global timeout time using the ISO 8601 duration format. `P3W` means the incident will time out 3 weeks after it is created if no action is taken.

- **todos**: An array that can be used to define additional tasks associated with the incident. Currently, it is empty.

This configuration allows the incident bundler robot to manage incidents effectively by setting priorities, defining task templates, and specifying timing for reminders and timeouts.

## 4. Nested Configurations
---------------------------------------
In nested configurations, we have nested json objects which include configurations for different types of alerts in a nested manner.

When a certain type of alert is received, it is matched with a nested json object until the right configuration for that type of alert is encountered.
These nested objects contain objects for different parameters within the alerts which are then matched accordingly. These alerts are matched based on the type of solution, alert and format.

Once the right config for a given alert is found, the respective fields inside the default config are over written by matching fields under this new config. The updated default config is then used by the bundler robot to create an incident from that alert.

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
        - **events**: Configuration.
          - **clean**: Configuration for clean-related feedback.
          - **leak**: Configuration for leak-related feedback.
          - **paper**: Configuration for paper-related feedback.
          - **soap**: Configuration for soap-related feedback.
          - **toilet**: Configuration for toilet-related feedback.
    - **config**: Defines the default incident settings for cleaning alerts.

#### How It Works

When an alert is received, the incident bundler robot matches it with the appropriate nested JSON object based on the type of solution, alert, and format. The robot traverses the nested structure until it finds the right configuration for the specific alert. Once the correct configuration is identified, it overrides the default configuration and uses the new settings to create an incident from the alert. This approach ensures that each type of alert is handled according to its specific requirements, providing a flexible and efficient incident management system.

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

### Configuration Details

- **Global Configuration**: Contains the default configuration for all alert types
- **Location-Specific Configuration**:
  - **Executive Plaza**: Custom configuration for incidents at this location.
      - **incident**: Sets the priority of incidents to `100`.
    - **solutions**: Contains custom nested configs for various types of alerts from "Executive Plaza"
      - **clean**: Custom settings for cleaning-related alerts.
        - **alerts**:
          - **feedback**: Configuration for feedback-related alerts.
            - **events**: Configurations for different types of events
        - **config**: Additional settings for cleaning-related incidents.

This structure allows for flexible and precise customization of incident management based on location-specific requirements, ensuring that each location can have tailored settings that meet its unique needs.

## 5. Configuring Bundler for Custom event types and locations.
Using the guide for [Creating Custom Incidents](https://docs.microshare.io/docs/2/technical/microshare-platform-advanced/creating-custom-incidents/), we can trigger custom incidents that create custom tasks which may or may not be associated to a sensor alert type or location.

To write a bundler config for custom incidents, we can write a nested configuration in the same way as demonstrated above but the location names and alert types must match the ones used in the custom incidents. 

For example:- 

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
        "device": ["Metro Station", "Platform 2"],
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
The custom location is Metro Station Platform 2 and the custom alert types are "clean", "track", "lights".
