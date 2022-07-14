# Getting started

## Requirements

Mbfactory requires [Node.js](https://nodejs.org) version 16 or higher.

## Install

```bash
npm install -g @modelberry/mbfactory @modelberry/plugin-contentful
```

## Check for succesful install

```bash
mbfactory --help
```

## Clone this repo

```bash
git clone git@github.com:modelberry/mbfactory-docs.git
```

## Setup environment

Rename [`template.env.development`](../template.env.development) to: `.env.development`

Edit the env file and set:

- `CONTENTFUL_PERSONAL_ACCESS_TOKEN` ([where can I find this?](https://www.contentful.com/help/personal-access-tokens/#how-to-get-a-personal-access-token-the-web-app))
- `CONTENTFUL_SPACE_ID` ([where can I find this?](https://www.contentful.com/help/find-space-id/))

## Typescript compiler API

Mbfactory uses the [Typescript compiler API](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API) which requires a valid `tsconfig.json`. Use the empty [`tsconfig.json`](../tsconfig.json) in this repository or create your own.

## Next

[Push models](./push-models.md) from typescript to Contentful.

## Table of contents

- [Getting started](./getting-started.md)
- [Push models](./push-models.md)
- [Pull models](./pull-models.md)
- [Push content](./push-content.md)
- [Pull content](./pull-content.md)
- [Run as script](./run-as-script.md)
- [Experimental features](./experimental-features.md)
- [TSDoc tags overview](./tsdocs-tags-overview.md)
