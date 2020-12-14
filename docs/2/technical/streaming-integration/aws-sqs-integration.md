---
layout: docs
title: AWS SQS Integration
description: 
toc: true
---

---------------------------------------
{% include image.html url="\assets\img\aws.jpg"  description="aws" %}

#### Summary:
1. [Overview](./#1-overview)
2. [Necessary Information](./#2-necessary-information)
3. [Basic Architecture](./#3-basic-architecture)
4. [Set up](./#4-set-up)
5. [Security](./#5-security)

---------------------------------------


## 1. Overview
---------------------------------------

AWS SQS Integration is a streaming data integration that pushes data from the Smart Network into a client's AWS tenancy in real-time. Data is typically made available to an SQS queue with sub-second latency to ensure that event handling and analytics are feed with the most current state of the measured space. AWS SQS Integration creates a pathway to advanced storage, visualization, and analytics in the AWS Cloud ecosystem from the Microshare Smart Network. 

## 2. Necessary Information 
---------------------------------------

In order to configure the AWS SQS Integration for you, your support contact will need the dedicated credentials via .csv file as well as the URL value found on the Details tab of your SQS queue. More information is included below. 

## 3. Basic Architecture
---------------------------------------

The typical architecture for streaming data within the AWS environment using the AWS SQS Integration will leverage either AWS SNS to create a publish/subscribe infrastructure and/or AWS Lambda functions triggered by the arrival of new queue messages.  

### Architecture References

[https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-subscribe-queue-sns-topic.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-subscribe-queue-sns-topic.html)

<br>
[https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-lambda-function-trigger.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-lambda-function-trigger.html)

## 4. Setup
---------------------------------------

### A. Requirements

<br>
**1.** SQS (1 or more) (for receiving records) 
<br>
**2.** IAM API-Only User – Externally accessible (for injecting records) 

### B. SQS Setup

{% include image.html url="\assets\img\aws-sqs\sqs1.png" description="aws sqs 1 " %}

{% include image.html url="\assets\img\aws-sqs\sqs2.png" description="aws sqs 2 " %}

AWS SQS Integration supports both Standard and Fifo Queue types but Fifo is recommended as it most closely mirrors the ordered nature of the inbound stream. It is possible, but unlikely, that the volume of streaming data will exceed the through-put supported by Fifo queues.  Fifo queues use deduplication and message grouping. Deduplication ensures that only one record is maintained for any given Microshare record key.  

{% include image.html url="\assets\img\aws-sqs\sqs3.png" description="aws sqs 3 " %}

### C. IAM User Setup

{% include image.html url="\assets\img\aws-sqs\sqs4.png" description="aws sqs 4 " %}

Name the AWS User descriptively in compliance with your internal standards. 

Grant minimum necessary permissions via Group, Custom Policy, or by Attach existing policies as mandated by your internal standards. Suggestions for setting Permissions are provided below for guidance. The absolute minimum policy would allow the new user to perform SendMessage & SendMessageBatch actions on the specific resource (ARN) created above.  

### D. Basic Recommendation: Fastest, but less secure.

{% include image.html url="\assets\img\aws-sqs\sqs5.png" description="aws sqs 5 " %}


{% include image.html url="\assets\img\aws-sqs\sqs6.png" description="aws sqs 6" %}

### E. Advanced Recommentation: More steps, but more secure.


{% include image.html url="\assets\img\aws-sqs\sqs7.png" description="aws sqs 7 " %}


{% include image.html url="\assets\img\aws-sqs\sqs8.png" description="aws sqs 8 " %}

{% highlight java %}
{ 

    "Version": "2012-10-17", 

    "Statement": [ 

        { 

            "Sid": "VisualEditor0", 

            "Effect": "Allow", 

            "Action": [ 

                "sqs:SendMessageBatch", 

                "sqs:SendMessage" 

            ], 

            "Resource": "arn:aws:sqs:us-east-1:3345234625673:dev-microshare-test.fifo" 

        } 

    ] 

} 
{% endhighlight %}

{% include image.html url="\assets\img\aws-sqs\sqs9.png" description="aws sqs 9 " %}

At the success screen, use the “Download .csv” button to capture the unique credentials for the new user. Be careful to store and transmit the resulting file in a secure fashion. These are access credentials stored in plain text and are vulnerable to leak. 

Your Microshare Service or Support contact will need the .csv file. It is recommended that this information be sent securely via GPG encrypted email or through an encrypted chat connection using keybase.io.  

### F. Setup References

[https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-setting-up.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-setting-up.html)

[https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-getting-started.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-getting-started.html)

## 5. Security
---------------------------------------
As with most AWS facilities, SQS supports authentication and authorization using revocable IAM user credentials and access policies which allow the client full control over the write permissions for the SQS queue and positively identifies the Smart Network access. Data is encrypted on the network by default with SQS and can be configured to encrypt at REST within AWS. Because the Smart Network originates outside of the corporate networks, Network Security restrictions on write operations are not possible on the inbound network endpoint.  

### Security References

[https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-security.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-security.html)


 



