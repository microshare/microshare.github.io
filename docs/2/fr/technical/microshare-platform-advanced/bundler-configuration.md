---
layout: docs
title: Configuration du Bundler d'incidents
description: Découvrez comment configurer un bundler d'alertes pour les incidents
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/bundler-configuration.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/bundler-configuration
  fr: /docs/2/fr/technical/microshare-platform-advanced/bundler-configuration
---
{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail" %}

<br>

---------------------------------------

##### SOMMAIRE : 

1. [Incidents Microshare](./#1-microshare-incidents)
2. [Vue d'ensemble](./#2-overview)
3. [Robot avec configuration par défaut](./#3-robot-with-default-configuration)
    - A. [Remplacement de la configuration par défaut](./#a-overriding-default-configuration)
4. [Configurations imbriquées](./#4-nested-configurations)
    - A. [Fonctionnement de la configuration imbriquée](./#a-working-of-nested-configuration)
    - B. [Configurer par type d'événement](./#b-configure-by-event-type)
    - C. [Configurer par emplacement](./#c-configure-by-location)
5. [Mise à jour des configurations Robot](./#5-updating-robot-configs)
    - A [Modifier la priorité de la configuration](./#a-changing-priority-of-the-config)
6. [Configurer le Bundler pour des types d'événements et emplacements personnalisés](./#5-configuring-bundler-for-custom-event-types-and-locations)

---------------------------------------

## 1. Incidents Microshare
---------------------------------------
Dans le pipeline de données Microshare, nous transformons les données IoT (provenant des capteurs) en événements et alertes, ce qui permet un système plus réactif où les données de mouvement et environnementales deviennent des alertes et des données d'action.

Une alerte génère un incident signalé au client sous forme de notification. De plus, plusieurs alertes correspondant au même incident sont regroupées par un robot bundler.

Cette page décrit comment configurer un robot bundler qui regroupera certains types d'alertes pour un incident donné.

## 2. Vue d'ensemble
---------------------------------------
Un robot bundler d'incidents collecte plusieurs alertes des capteurs et consolide les alertes liées en un seul incident. Ce processus implique l'analyse des alertes entrantes, l'identification des corrélations et le regroupement selon des critères prédéfinis fournis par la configuration du robot bundler. Une fois les alertes consolidées en un seul incident, une notification est déclenchée et envoyée au client concerné.

Le robot bundler s'appuie sur une configuration JSON pour comprendre comment consolider les alertes en incident. Ce fichier de configuration contient les règles et paramètres qui dictent comment les alertes doivent être regroupées. Grâce à ce format de configuration, le robot bundler peut s'adapter à divers scénarios et exigences, offrant une gestion d'incidents précise et efficace.

## 3. Robot avec configuration par défaut
---------------------------------------
La configuration par défaut est celle appliquée à chaque alerte rencontrée par le bundler. Toutes les alertes entrantes sont regroupées en incidents par le bundler à l'aide de la configuration par défaut. 

Exemple de robot avec configuration par défaut

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

L'objet `config` définit les paramètres du robot bundler d'incidents.
Ce guide vous accompagne uniquement dans l'écriture de configurations pour les robots bundler. Pour en savoir plus sur la création de robots, consultez le [guide Robots](https://docs.microshare.io/docs/2/fr/technical/microshare-platform-advanced/robots-guide/) et la [bibliothèque Robots](https://docs.microshare.io/docs/2/fr/technical/microshare-platform-advanced/robots-library/)

Le champ version indique la version de la configuration bundler, qui dans ce cas est "2.0.0".

### Remplacement de la configuration par défaut
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
Un exemple de configuration partagée par défaut pour toutes les alertes peut ressembler à ceci.

Nous pouvons remplacer certaines parties de cette configuration en passant notre propre configuration personnalisée à l'objet "config" du robot bundler comme illustré ci-dessous.
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
La configuration dans l'objet config remplace la configuration partagée par défaut pour les champs respectifs. 
Le fonctionnement des configurations imbriquées est expliqué dans les sections suivantes.

Note : Pour trouver la configuration par défaut de votre compte, accédez à l'onglet d'accueil et cliquez sur le menu hamburger à droite. Faites défiler puis sélectionnez exit to console :
{% include image.html url="/assets/img/bundlerConf/image2.png" description="thumbnail-2" %}

Ensuite, accédez à la section views et recherchez la vue "Bundler Shared Config". 
Ouvrez cette vue et accédez à l'onglet static json. Vous y trouverez la configuration par défaut de votre compte.
{% include image.html url="/assets/img/bundlerConf/image3.png" description="thumbnail-3" %} 

## 4. Configurations imbriquées
---------------------------------------
Dans les configurations imbriquées, nous avons des objets JSON imbriqués qui incluent des configurations pour différents types d'alertes de manière hiérarchique.
Voici un exemple de configuration imbriquée pour un robot bundler.

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

Lorsqu'un certain type d'alerte est reçu, il est associé à un objet JSON imbriqué jusqu'à trouver la bonne configuration pour ce type d'alerte.
Ces objets imbriqués contiennent des objets pour différents paramètres au sein des alertes, qui sont ensuite associés en conséquence. Ces alertes sont associées selon le type de solution, d'alerte et de format.

Une fois la bonne configuration trouvée pour une alerte donnée, les champs respectifs de la configuration par défaut sont écrasés par les champs correspondants de cette nouvelle configuration. La configuration par défaut mise à jour est ensuite utilisée par le robot bundler pour créer un incident à partir de cette alerte.

### Fonctionnement de la configuration imbriquée

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
Cette section de la configuration partagée est la configuration par défaut utilisée pour tous les types d'événements.
Lorsqu'un événement est reçu par le bundler, les champs de l'événement sont associés aux champs imbriqués de la configuration imbriquée. Une fois la bonne configuration trouvée pour l'événement donné, la configuration partagée par défaut est écrasée par la configuration de cet événement dans la config imbriquée.

Exemple :
Prenons la configuration pour le type d'alerte Solutions->clean->alerts->feedback->leak. La configuration ressemble à :

```
"config": {
    "incident": {
        "priority": "25"
    }
}
```

Cette configuration est fusionnée dans la configuration de l'alerte comme suit :-

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
Remarquez comment le champ priority sous l'objet incident passe de 10 à 25.

### Configurer par type d'événement
Nous pouvons créer des configurations imbriquées adaptées à certains types d'événements de votre choix.

exemple de configuration imbriquée
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

L'objet JSON fourni montre comment les configurations imbriquées sont utilisées pour gérer différents types d'alertes et leurs incidents correspondants. Cette structure permet au robot bundler d'incidents d'associer les alertes entrantes à la configuration appropriée, garantissant que les incidents sont créés et gérés selon des règles prédéfinies.

#### Structure Vue d'ensemble

- **solutions** : L'objet de niveau supérieur qui catégorise différents types de solutions.
  - **alert** : Une catégorie au sein des solutions qui gère diverses alertes.
    - **alerts** : Contient des types d'alertes spécifiques et leurs configurations.
      - **rodent** : Configuration pour les alertes liées aux rongeurs.
        - **config** : Définit la configuration par défaut pour les alertes rongeurs.
        - **events** : Événements spécifiques liés aux alertes rongeurs.
          - **rodent_present** : espace réservé pour les alertes indiquant la présence d'un rongeur.
      - **service** : Configuration pour les alertes liées au service.
        - **config** : Définit la configuration par défaut pour les alertes de service.
        - **events** : Espace réservé pour des événements de service supplémentaires.
    - **config** : Espace réservé pour des configurations d'alertes supplémentaires.

  - **clean** : Une catégorie au sein des solutions qui gère les alertes liées au nettoyage.
    - **alerts** : Contient des types d'alertes spécifiques et leurs configurations.
      - **feedback** : Configuration pour les alertes liées au feedback.
        - **config** : Espace réservé pour la configuration feedback.
        - **events** : Configurations pour différents types d'événements.
    - **config** : Définit les paramètres d'incident par défaut pour les alertes de nettoyage.

### Configurer par emplacement
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

Les configurations imbriquées par emplacement permettent de spécifier des paramètres personnalisés pour des lieux particuliers, permettant de remplacer la configuration par défaut selon les besoins spécifiques du client. Par exemple, dans la configuration fournie, il existe une configuration personnalisée pour l'emplacement « Executive Plaza ».

- **Configuration globale** : Contient la configuration par défaut pour tous les types d'alertes
- **Configuration spécifique à l'emplacement** :
  - **Executive Plaza** : Configuration personnalisée pour les incidents à cet emplacement.

Cette structure permet une personnalisation flexible et précise de la gestion des incidents selon les exigences de chaque emplacement, garantissant que chaque lieu dispose de paramètres adaptés à ses besoins uniques.

## 5. Mise à jour des configurations Robot
---------------------------------------
Pour trouver les robots existants, quittez vers la console comme indiqué à la section 3 et accédez à l'onglet Robots.
Vous y trouverez tous les robots actifs et inactifs de votre compte.
{% include image.html url="/assets/img/bundlerConf/image4.png" description="thumbnail-4" %} 

Une fois un robot actif ouvert, vous trouverez les paramètres du robot comme illustré.
{% include image.html url="/assets/img/bundlerConf/image5.png" description="thumbnail-5" %} 
Notez ici le champ rectype. Le robot ouvert ne prendra des données que de ce rectype. Ouvrez le robot écrit pour les alertes de votre rectype souhaité.
Par exemple : le rectype io.microshare.event.alert.feedback est pour les alertes feedback, ce qui signifie que le robot ne fonctionne que pour les alertes feedback.

Après avoir trouvé le bon robot, vous trouverez la configuration de ce robot dans la section script comme illustré ci-dessous
{% include image.html url="/assets/img/bundlerConf/image6.png" description="thumbnail-6" %}

Une fois l'objet config trouvé, vous pouvez modifier la configuration du robot.

### Modifier la priorité de la configuration
La plupart des configurations de robots ont un champ priority. Ce champ détermine la priorité de l'incident créé après le regroupement des alertes entrantes.
Nous pouvons modifier la priorité de la configuration par défaut et des configurations imbriquées selon les besoins.

#### Modifier la priorité dans une configuration existante : 
Pour les configurations existantes, nous pouvons modifier la priorité en ajustant la valeur du champ priority sous l'objet incident de la configuration bundler principale.
{% include image.html url="/assets/img/bundlerConf/image7.png" description="thumbnail-7" %} 

#### Créer une nouvelle configuration et définir la priorité.
Si l'objet config du robot est vide, vous pouvez ajouter votre propre configuration et définir un niveau de priorité souhaité qui remplacera la configuration par défaut existante.

Par exemple :
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
En utilisant le format de structure ci-dessus, vous pouvez ajouter un champ priority qui remplace la configuration par défaut.
Ici, la priorité pour solutions->clean->feedback->supplies sera remplacée par rapport à la config par défaut à 10. 
{% include image.html url="/assets/img/bundlerConf/image8.png" description="thumbnail-8" %} 

## 6. Configurer le Bundler pour des types d'événements et emplacements personnalisés.
---------------------------------------
En utilisant le guide [Création d'incidents personnalisés](https://docs.microshare.io/docs/2/fr/technical/microshare-platform-advanced/creating-custom-incidents/), nous pouvons déclencher des incidents personnalisés qui créent des tâches personnalisées qui peuvent ou non être associées à un type d'alerte capteur ou à un emplacement.

Pour écrire une configuration bundler pour des incidents personnalisés, nous pouvons écrire une configuration imbriquée de la même manière que démontré ci-dessus, mais les noms d'emplacement et types d'alerte doivent correspondre à ceux utilisés dans les incidents personnalisés. 

Par exemple :- 

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

La configuration ci-dessus est un exemple de configuration pour un emplacement et un type d'alerte personnalisés.
L'emplacement personnalisé est Railway Station Platform 2 et les types d'alerte personnalisés sont "clean", "track", "lights".

Pour les alertes personnalisées, si vous avez créé des rectypes personnalisés, vous devrez mettre à jour le rectype personnalisé dans les paramètres du robot comme indiqué ci-dessous.
{% include image.html url="/assets/img/bundlerConf/image1.png" description="thumbnail-1" %}
(remplacez la partie surlignée par votre rectype personnalisé)

Ensuite, vous devrez écrire votre propre robot personnalisé avec la configuration bundler et le rectype ci-dessus.
