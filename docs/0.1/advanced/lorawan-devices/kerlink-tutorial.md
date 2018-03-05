---
layout: docs
title: Route packets from Kerlink SPN to Microshare
description:
group: advanced
toc: true
---

In this configuration, we assume that you have followed the [quick start](../../getting-started-quick-start). You should know how to generate a Pipe Token, and what a recType is.

To route all new packets recevied by a Kerlink gateway to your microshare.io account:

* Login to your Kerlink SPN
* Go to Configuration -> Service (on the left hand side tabs)

* There will be 3 fields to fill in as shown below:
1. in hostname, enter `https://api.microsahre.io`
2. in port `443`
3. in path enter `/share/:recType/token/:pipeToken/` and replace `:recType` by the record type you have selected for this data, and `:pipeToken` by the pipe token you have generated.

* All packets should be redirected to your microshare account, and stored with the selected recType
* If it doesn't seem to be the case, open the Logs tab on the SPN. One of the logs menu should indicate if there is an error on packet routing.
