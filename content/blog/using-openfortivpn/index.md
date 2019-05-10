---
title: "How to install and use Openfortivpn on Linux"
date: "2019-05-09T18:46:37.121Z"
img: "forticlient-logo.jpg"
description: "How to install and use openfotivpn on linux to connect to fortinet vpn"
id: 1
backgroundColor: "#8bd6f6"
---
## Introduction
Some of us have the need to use a **Fortissl VPN** to connect to their company network or maybe for privacy reasons anywhays, it's doesn't matters.

The fact is I've seen that a lot of people tend to use some clients like the **fortisslvpn-client** to connect to those VPN's and I've used those kind of clients in the past too, but I had many many problems with then like suddenly lose my configurations or had the client to stop working after a system update.

To solve that I moved from those clients to **openfortivpn** and in this post I'm going to show how you can install and use **openfortivpn** on linux and put an end to the headaches caused by those antiquated clients.

## Instalation 
I'll give examples using two very popular linux distributions **Arch** and **Ubuntu** keep in mind that the installation process explained below can be used in a **Ubuntu** or **Arch** based distribution without big problems.

### Arch Linux:
For the porpouse of this post I'll use **yay** which is a very good and enjoyable AUR helper but fell free to use your favorite AUR helper.
<br>
run the following commands: 
```bash
$ yay -Syy openfortivpn
```
### Ubuntu:
run the following commands: 
```bash
$ sudo apt install openfortivpn
```

## Configuration
Once you've finished the installation you'll need to configure the **openfortivpn** dont worry it's super easy and will take just a few steps to be done.

### The config file
To avoid the need of have to type your user and password throug the command line every time you can edit the **openfortivpn** config file and put your own configuration there, the file is located at:

```bash
/etc/openfortivpn/config
```

So go ahead and open the file with **sudo** with your text editor

```bash
$ sudo vim /etc/openfortivpn/config
```

The file content will be like that:

```bash
host =
port =
username =
password =
```

Preaty easy to know what to do now right ?
You'll have to fill each field with the apropriate information like in the example below:

```bash
host = your.fortivpnserver.com
port = 10443
username = john.doe
password = passwd123
```

Some times you want to fill the password field with a pin + real time generated token, if that's your case delete the **password** field from the file and **openfortivpn** will ask for the password to you when you use it.

### Trusted-cert config

Some times you can have the following problem:
```bash
ERROR:  Gateway certificate validation failed, and the certificate digest in not in the local whitelist. If you trust it, rerun with:
ERROR:      --trusted-cert 6389a2c37974a6fc74763a2b6090asdfasdfw970ce21390df15ceeadcdce990dfd7
ERROR:  or add this line to your config file:
ERROR:      trusted-cert = 6389a2c37974a6fc74763a2b6090asdfasdfw970ce21390df15ceeadcdce990dfd7
ERROR:  Gateway certificate:
ERROR:      subject:
ERROR:          C=US
ERROR:          ST=California
ERROR:          L=Sunnyvale
ERROR:          O=Fortinet
ERROR:          OU=FortiGate
ERROR:          CN=FG800C3913802045
ERROR:          emailAddress=support@fortinet.com
ERROR:      issuer:
ERROR:          C=US
ERROR:          ST=California
ERROR:          L=Sunnyvale
ERROR:          O=Fortinet
ERROR:          OU=Certificate Authority
ERROR:          CN=support
ERROR:          emailAddress=support@fortinet.com
ERROR:      sha256 digest:
ERROR:  6389a2c37974a6fc74763a2b6090asdfasdfw970ce21390df15ceeadcdce990dfd
INFO:   Closed connection to gateway.
```
In order to solve that you can copy the **trusted-cert** showed to you and put that in your config file.

```bash
host = your.fortivpnserver.com
port = 10443
username = john.doe
password = passwd123 
trusted-cert = 6389a2c37974a6fc74763a2b6090asdfasdfw970ce21390df15ceeadcdce990dfd
```
## Running

Once you followed the steps above all you have to do to run the **openfortivpn** is:

```bash
$ sudo openfortivpn
```

Please if you had problems running **openfotivpn** after read this small tutorial please tell me you can leave a comment our email me through the contact form and I'll do my best to help you.