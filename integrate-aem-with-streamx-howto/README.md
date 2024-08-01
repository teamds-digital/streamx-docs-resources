# Intro

The pre-built `streamx-aem.all-1.0.2.zip` AEM package contains the required OSGi bundles and sample OSGi configuration
for StreamX integration.
The next section contains the required steps if you wish to build the AEM package from sources.

## Prerequisites

* JDK 8+
* A running AEM author instance with at least service pack `6.5.17` installed

## Build the package from sources

1. Open a terminal and navigate to the `sources` folder
2. Based on your operating system, execute one of the following command to build the package

* Linux/macOS

```shell
 ./mvnw clean package
```

* Windows

```shell
 .\mvnw.cmd clean package
```

# Deploy the package

Depending on your preferences, use one of the following methods to deploy the package to AEM

* Upload and install the generated `sources/target/streamx-aem.all-<version>.zip` package through the author instance's
  CRX Package Manager UI
* Deploy it through Maven by running one of the following commands, depending on your operating system

```shell
 ./mvnw install -P autoInstallSinglePackage
```

* Windows

```shell
 .\mvnw.cmd install -P autoInstallSinglePackage
```

The previous Maven command uses defaults that apply to standard AEM installations, but you can customize the access by passing the
following system properties to Maven

| Property       | Default value | Example for overwrite     | 
|----------------|---------------|---------------------------|
| aem.host       | localhost     | -Daem.host=192.168.1.111  |
| aem.port       | 4502          | -Daem.port=5502           |
| vault.user     | admin         | -Dvault.user=admin123     |
| vault.password | admin         | -Dvault.password=admin123 |