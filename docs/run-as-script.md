# Run as script

## Package.json

Mbfactory can run as a script entry from package.json. This repository has a
[scripts section](../package.json#L10) as an example.

## Run a script

To run the scripts, first install the packages:

```bash
npm install
```

To run the `push-models` script:

```bash
npm run push-models
```

To run the `push-models` script with parameters:

```bash
npm run push-models -- --filter topic
```

To show all configured scripts:

```bash
npm run
```

## Next

[Experimental features](./experimental-features.md)

## Table of contents

- [Getting started](./getting-started.md)
- [Push models](./push-models.md)
- [Pull models](./pull-models.md)
- [Push content](./push-content.md)
- [Pull content](./pull-content.md)
- [Diff models](./diff-models.md)
- [Run as script](./run-as-script.md)
- [Experimental features](./experimental-features.md)
- [TSDoc tags overview](./tsdocs-tags-overview.md)
