# Intro

The pre-built `streamx-aem.all-1.0.2.zip` AEM package contains the required OSGi bundles and sample OSGi configuration
for StreamX integration.
The next section contains the required steps if you wish to build the AEM package from sources.

## Prerequisites

* JDK 8+
* A running AEM author instance with at least service pack `6.5.17` installed

## Build and install the package from sources

1. Open a terminal and navigate to the `sources` folder
2. Based on your operating system, execute one of the following command to build and install the package (the package will be created as `sources/target/streamx-aem.all-<version>.zip`) 

* Linux/macOS

```shell
 ./mvnw clean install -D aem.port=4502 -P autoInstallSinglePackage
```

* Windows

```shell
 .\mvnw.cmd clean install -D aem.port=4502 -P autoInstallSinglePackage
```
