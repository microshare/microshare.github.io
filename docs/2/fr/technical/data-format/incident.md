---
layout: docs
title: Format de données Incident
description: Découvrez la structure des données d'incident Microshare™
lang: fr
translation_of: docs/2/technical/data-format/incident.md
translations:
  en: /docs/2/technical/data-format/incident
  fr: /docs/2/fr/technical/data-format/incident
toc: true
---


{% include image.html url="/assets/img/banner-2.jpg" description="vignette 2" %}

## 1. Incident Microshare
---------------------------------------

Pour mieux comprendre ce qu'est un incident, consultez la page [](../microshare-platform-advanced/incident.md).

## 2. Format de données d'incident Microshare
---------------------------------------

Voici un exemple de donnée. Nous détaillerons ensuite les différents éléments.

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
          "Microshare Office",
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
          "Microshare Office",
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
      "item": "Acknowledge the incident at Clapham Junction, Microshare Office, Dumpster, Trap 1 and take appropriate action."
    },
    {
      "isChecked": false,
      "item": "Complementary event at Clapham Junction, Microshare Office, Dumpster, Trap 2"
    }
  ],
  "version": "1.0"
}
```

### A. Format de données d'incident Microshare — config
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

Sur la base de la configuration d'abonnement (définie via l'application Notification Management), toutes les personnes disposant d'un abonnement seront ajoutées à un incident généré. Elles recevront éventuellement une notification si les critères auxquels elles se sont abonnées correspondent au statut de l'incident. Cependant, être assigné à un incident ne signifie pas nécessairement qu'une notification sera envoyée.

#### steps

Certaines configurations permettent à l'incident de suivre un processus en 1 ou 2 étapes au lieu du processus par défaut en 3 étapes :

**Accept** : une personne doit « accepter » (ou revendiquer) le travail lié à l'incident. Une fois cela fait, elle sera officiellement assignée pour traiter l'incident.

**Do** : après avoir été assignée, la personne indique quand elle commence à « faire » la tâche réelle.

**Done** : la personne travaille à la résolution de la tâche et signale quand le travail est terminé ou « fait ».

L'incident peut prendre d'autres statuts comme complete, cancel, etc., mais ces trois étapes nécessitent une action humaine, et le nom de chaque étape est destiné à représenter ce que l'utilisateur peut faire à ce stade.

### B. Format de données d'incident Microshare — current
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

Quel est le statut actuel de l'incident ?

#### assignee

Qui sont les assignés actuels à ce stade ? Maintenant que des personnes ont pu interagir avec l'incident, les assignés peuvent avoir changé par rapport aux assignés d'origine à la création de l'incident (config.originAssignee).

#### cancelee

Si quelqu'un annule un incident, son adresse e-mail sera listée ici.

#### claimee

La personne qui a effectué la dernière action sur l'incident sera considérée comme notre claimee (celui ou celle qui a revendiqué l'action requise sur l'incident).

#### geolocation

Si la personne qui agit sur l'incident utilise l'application ReactM, nous conserverons sa géolocalisation lorsqu'elle agit sur l'incident.

#### workflow.process

Cette section affiche le statut de l'ensemble du processus (incident) : quand il a commencé et quel est son statut actuel (open/cancel/timeout/complete).

#### workflow.userTask

Le nom de la tâche utilisateur indique à quelle étape (config.steps) du processus nous nous trouvons. Il définit également quand cette étape a commencé et quel est son statut actuel (open si le processus est ouvert, ou différent si le processus n'est plus ouvert).

### C. Format de données d'incident Microshare — history
---------------------------------------

Il s'agit d'un tableau des différentes étapes par lesquelles cet incident est passé. Vous y trouverez un schéma similaire à ce qui a été expliqué ci-dessus. En effet, lorsqu'une personne revendique une étape et que l'incident passe à l'étape suivante, nous prenons simplement un instantané de certains champs de current et l'enregistrons dans le tableau « history ».

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

### D. Format de données d'incident Microshare — meta

Les métadonnées sont expliquées sur la page [Standards Microshare](https://docs.microshare.io/docs/2/fr/technical/data-format/microshare-standards/#d-metaiot). Nous expliquons ici les champs supplémentaires pour l'incident.

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

Cette section définit la relation entre l'incident et le produit associé. Actuellement, tous les incidents sont liés à la solution Eversmart Alert, et l'alerte ici est une alerte rongeur qui a conduit à un incident.

#### workflow

Nous conservons ici l'identifiant de notre processus pour suivre le statut BPM.

### D. Format de données d'incident Microshare — origin

Cette section définit tous les événements qui ont conduit à la création et à l'escalade de cet incident. Il s'agit d'un tableau d'éléments.

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
      "Microshare Office",
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
      "Microshare Office",
      "Dumpster",
      "Trap 2"
    ],
    "time": "2024-01-09T15:00:10.161Z"
  },
  "id": "659d5f7a2fefeaaaaa1e70ea",
  "recType": "io.microshare.event.alert.rodent"
}
```

Vous pouvez voir ici que les tags des deux événements ne correspondent pas exactement au même emplacement. En effet, nous pouvons décider de regrouper les alertes pour un emplacement précis (un appareil) ou à un niveau supérieur comme un site, un bâtiment, un étage, une zone, etc. Cela fait partie des capacités de configuration. L'id, le recType et l'id du robot permettent de déterminer la source de l'incident et son regroupement pour une traçabilité en amont.

#### initiator

Le champ initiator détermine lequel de ces événements a conduit à la création de l'incident, par opposition aux autres événements qui ont été regroupés.

### E. Format de données d'incident Microshare — todos

Les todos constituent la liste des actions « à faire » pour résoudre l'incident. Chaque fois qu'un nouvel événement est reçu et regroupé dans l'incident, nous l'ajoutons comme todo supplémentaire.

```
"todos": [
  {
    "isChecked": false,
    "item": "Acknowledge the incident at Clapham Junction, Microshare Office, Dumpster, Trap 1 and take appropriate action."
  },
  {
    "isChecked": false,
    "item": "Complementary event at Clapham Junction, Microshare Office, Dumpster, Trap 2"
  }
]
```
