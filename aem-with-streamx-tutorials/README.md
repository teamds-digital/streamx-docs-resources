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


# StreamX OSGi bundles

* StreamX Connectors

| Dependency                                           | Version    |
|------------------------------------------------------|------------|
| `+dev.streamx:ingestion-client:jar+`                 | `+0.0.7+`  |
| `+dev.streamx:streamx-connector-sling:jar+`          | `+0.0.5+`  |
| `+dev.streamx:streamx-connector-aem:jar+`            | `+0.0.3+`  |
| `+dev.streamx:streamx-connector-aem-blueprints:jar+` | `+0.0.3+`  |

* StreamX Connectors' dependencies

| Dependency                                              | Version     |
|---------------------------------------------------------|-------------|
| `+org.apache.avro:avro:jar+`                            | `+1.11.3+`  |
| `+com.fasterxml.jackson.core:jackson-annotations:jar+`  | `+2.15.3+`  |
| `+com.fasterxml.jackson.core:jackson-core:jar+`         | `+2.15.3+`  |
| `+com.fasterxml.jackson.core:jackson-databind:jar+`     | `+2.15.3+`  |
| `+org.jsoup:jsoup:jar+`                                 | `+1.16.1+`  |

# StreamX OSGi configuration

The _OSGi_ configuration in the package contains the appropriate configuration
for default _StreamX Service Mesh_ installations for _We.Retail sample application_,
so that content replicated by activation will also be ingested into StreamX.
The following _OSGi_ configuration entries has been created
under `+/apps/streamx-aem-tutorials/osgiconfig/config.author+`
(http://localhost:4502/crx/de/index.jsp#/apps/streamx-aem-tutorials/osgiconfig/config.author)[AEM author - CRXDE]

| Configuration                                                                                           | Property             | Description                                                                | Default value                                |
|---------------------------------------------------------------------------------------------------------|----------------------|----------------------------------------------------------------------------|----------------------------------------------|
| `dev.streamx.sling.connector.impl.StreamxPublicationServiceImpl.cfg.json`                               | `enabled`            | Enables _StreamX Connector_ to ingest content into _StreamX_               | `true`                                       |
| `dev.streamx.sling.connector.impl.StreamxClientFactoryImpl.cfg.json`                                    | `streamxUrl`         | Defines where the _StreamX REST Ingestion_ service listens                 | `http://localhost:8080`                      |
| `dev.streamx.aem.connector.blueprints.PagePublicationHandler.cfg.json`                                  | `pages.path.regexp`  |                                                                            | Handles _We.Retail_ pages during publication |`^/content/we-retail/.+`|
| `dev.streamx.aem.connector.blueprints.AssetPublicationHandler.cfg.json`                                 | `assets.path.regexp` | Handles _We.Retail_ assets during publication                              | `^/content/dam/we-retail/.+`                 |
| `org.apache.sling.jcr.base.internal.LoginAdminWhitelist.fragment-streamx-connector-blueprints.cfg.json` | `whitelist.bundles`  | Enables `+streamx-connector-aem-blueprints+` to create administrative user | `streamx-connector-aem-blueprints`           |
| `org.apache.sling.jcr.base.internal.LoginAdminWhitelist.fragment-streamx-connector-blueprints.cfg.json` | `whitelist.name`     | Enables `+streamx-connector-aem-blueprints+` to create administrative user | `streamx-connector-aem-blueprints`           |


If you prefer, you can also view the configuration in http://localhost:4502/system/console/configMgr[AEM author - Adobe Experience Manager Web Console Configuration]
by searching for `+dev.streamx+`.
