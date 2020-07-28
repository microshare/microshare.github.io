---
layout: docs
title: AWS Kinesis Data Stream Integration
description: 
toc: true
---


---------------------------------------

##### SUMMARY : 

1. [Overview](./#1-overview)
2. [Setup](./#2-setup)
3. [Requirements](./#3-requirements)
4. [Kinesis Data Stream Setup](./#4-kinesis-data-stream-setup)
5. [IAM User Setup](./#5-iam-user-setup)
6. [IAM Role – Internal Access by Firehose [Optional]](./#6-iam-role--internal-access-by-firehose-optional)
7. [Kinesis Data Firehose [Optional]](./#7-kinesis-data-firehose-optional)
8. [Setup References](./#8-setup-references)
8. [Security](./#9-security)


---------------------------------------



## 1. Overview
---------------------------------------

AWS Kinesis Data Stream Integration is a streaming data integration that pushes data from the Smart Network into a client's AWS tenancy in real-time. Data is typically made available to an Kinesis Data Stream with sub-second latency to ensure that event handling and analytics are feed with the most current state of the measured space. AWS Kinesis Data Stream Integration creates a pathway to advanced storage, visualization, and analytics in the AWS Cloud ecosystem from the Microshare Smart Network. 


## 2. Setup
---------------------------------------

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image001.png" width="800" description="aws kinesis" %}

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image002.png" width="800" description="aws kinesis" %}

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image003.png" width="800" description="aws kinesis" %}

## 3. Requirements
---------------------------------------

* A.     Kinesis Data Stream (1 or more) (for receiving records)
* B.     IAM API-Only User – Externally accessible (for injecting records)
* C.     IAM Role – Internal-use only (for reading and forwarding records)
* D.     Kinesis Data Firehose (1 or more) (for forwarding and storing records)

 

## 4. Kinesis Data Stream Setup
---------------------------------------

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image004.png" width="800" description="aws kinesis" %}


AWS Kinesis Data Stream setup requires only an estimation for the number of open shards supported by the Data Stream. The Shard Estimator may be useful to help compute volume needs. An average record size for the Microshare Smart Network is 1024 bytes (1k) though your use-case may require larger record sizes.

 

## 5. IAM User Setup
---------------------------------------
 
{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image005.png" width="800" description="aws kinesis" %}


Name the AWS User descriptively in compliance with your internal standards.

Grant minimum necessary permissions via Group, Custom Policy, or by Attach existing policies as mandated by your internal standards. Suggestions for setting Permissions are provided below for guidance. The absolute minimum policy would allow the new user to perform PutRecord & PutRecords actions on the specific resource created above.

 

**Basic Recommendation: Fastest, but less secure.**

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image006.png" width="800" description="aws kinesis" %}


**Advanced Recommendation: More steps, but more secure.**

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image007.png" width="800" description="aws kinesis" %}

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image008.png" width="800" description="aws kinesis" %}
 
`Just copy and paste :`

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "kinesis:PutRecord",
                "kinesis:PutRecords"
            ],
            "Resource": "arn:aws:kinesis:*:373439459043:stream/*"
        }
    ]
}
```
 
{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image009.png" width="800" description="aws kinesis" %}
 

At the success screen, use the “Download .csv” button to capture the unique credentials for the new user. Be careful to store and transmit the resulting file in a secure fashion. These are access credentials stored in plain text and are vulnerable to leak.

Your Microshare Service or Support contact will need the .csv file. It is recommended that this information be sent securely via GPG encrypted email or through an encrypted chat connection using keybase.io.

 

## 6. IAM Role – Internal Access by Firehose [Optional]
---------------------------------------

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image010.png" width="800" description="aws kinesis" %}

This role will be granted to the AWS Kinesis Data Firehose that will be created in the next step. It should be separate from the policy used to grant access to the Externally Accessible user in the step above. This role will need access to the Kinesis Data Stream resources and the target system resources. In the example above, the Role grants access to AmazonS3. This role may qualify for tighter restrictions in compliance with your internal policies and standards.

## 7. Kinesis Data Firehose [Optional]
---------------------------------------

The Kinesis Data Firehouse facility is the easiest way to move data from the Kinesis Data Stream. Direct consumption of the Kinesis Data Stream is covered in Amazon documentation and is beyond the scope of this document.

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image011.png" width="800" description="aws kinesis" %}



Provide a unique name for your Data Firehose instance. It may be convenient to use the same name that was used in Step A with the source destination appended. (eg. your-unique-stream-name => your-unique-stream-name-to-s3) Chose naming that complies with your internal policies.

Select the radio button and select the name of the Data Stream in the drop-down to indicate that the source will be the Kinesis Data Stream created in the steps above.

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image012.png" width="800" description="aws kinesis" %}

 

Default selections are safe for the record conversion. However, if data transformation is called for in your data processing architecture, record conversion functions may be provided to modify the data as it passed from the Data Stream to the storage endpoint by the Data Firehose. This will typically be required when the data is expected to fit into an existing or optimized data format in an endpoint such as Elastic Search with a more defined schema.


{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image013.png" width="800" description="aws kinesis" %}

 

.

The Select Destination section shows the options available as standard for the Kinesis Data Firehose. Select a storage end-point that meets your analytic architecture. You may setup multiple Kinesis Data Firehose instances for a single Kinesis Data Stream to send the real-time data to more than one end-point simultaneously. The simplest choice to get started, will be to select S3.

Default values are safe to select for most of these settings for S3. You must either select or ‘Create new’ to allocate a bucket for the delivery of decrypted data from the Data Stream.


{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image014.png" width="800" description="aws kinesis" %}



Default values are safe to select for most of these settings. In the Permissions section, click the ‘Create new or choose’ button. In the dialog that results, select the IAM Role that you created in the step above and click the “Allow” button. Provide tags to make identifying the capabilities simpler in accordance with your internal procedures.

The final step will ask for review. Click create to proceed to resource provisioning.

## 8. Setup References
---------------------------------------

[https://docs.aws.amazon.com/streams/latest/dev/introduction.html](https://docs.aws.amazon.com/streams/latest/dev/introduction.html)

[https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html](https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html)

 

## 9. Security
---------------------------------------

As with most AWS facilities, Kinesis supports authentication and authorization using revocable IAM user credentials and access policies which allow the client full control over the write permissions for the Data Stream and positively identifies the Smart Network access. Data is encrypted on the network and at rest by default with Data Streams. Because the Smart Network originates outside of the corporate networks, Network Security restrictions on write operations are not possible on the inbound network endpoint.

 

#### Security References

[https://docs.aws.amazon.com/streams/latest/dev/server-side-encryption.html](https://docs.aws.amazon.com/streams/latest/dev/server-side-encryption.html)

[https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html](https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html)