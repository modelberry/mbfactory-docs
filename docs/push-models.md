# Push models

## Before

Make sure you have followed the steps at [getting
started](./getting-started.md).

## mbfactory push models

This command compiles [`examples/main.ts`](../examples/main.ts) into an
[AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) and parses the [TSDoc
tags](./tsdocs-tags-overview.md) for each interface.

For each interface with valid tags a model is created in Contentful.

```bash
mbfactory push models examples/main.ts
```

The Contentful Web App should show two models:

- page (with 4 fields)
- topic (with 5 fields)

> **NOTE** The `page` model refers to the `topic` model. The `page` model cannot
> be published until the `topic` model has been pushed.

## Next

[Push content](./push-content.md) from typescript to Contentful.

## Table of contents

- [Getting started](./getting-started.md)
- [Push models](./push-models.md)
- [Pull models](./pull-models.md)
- [Push content](./push-content.md)
- [Pull content](./pull-content.md)
- [Run as script](./run-as-script.md)
- [Experimental features](./experimental-features.md)
- [TSDoc tags overview](./tsdocs-tags-overview.md)
