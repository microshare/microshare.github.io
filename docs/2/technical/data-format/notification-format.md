---
layout: docs
title: Notification Data
description: Here is the content of a notification piece of data triggering our notification sytem.
toc: true
---

{% include image.html url="/assets/img/thumbnail-8.jpg" height="900" width="900" description="thumbnail 2" %}


<br>

---------------------------------------

##### SUMMARY: 

{replace this section with the whole summary}
1. [Notification Data](./#1-notification-data)

---------------------------------------

## 1. Notification Data
---------------------------------------

The Notification System Data Format is used to trigger notifications whenever new data with this format is received. The data contains information about incidents and other relevant details, including the title, body, and device information. The format follows a JSON structure and contains the following fields:

- `change`: Indicates whether the incident has changed (1) or not (0).
- `current`: Contains the current details of the incident, including the title, body, message template, and recipient.
- `event`: Indicates the type of event that triggered the notification.
- `history`: Contains the history of the incident.
- `label`: The label of the incident.
- `meta`: Contains metadata about the incident, such as the device information and the source of the data.
- `time`: The timestamp of the incident.

## Usage

To use the Notification System Data Format, follow these steps:

1. Send data with this format to the notification system.
2. The notification system will trigger a notification based on the data received.

## Fields

### `change`

Indicates whether the incident has changed (1) or not (0).

### `current`

