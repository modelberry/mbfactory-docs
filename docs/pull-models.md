# Pull models

## Before

Make sure you have followed the steps at [getting started](./getting-started.md)
and that you have defined some models in Contentful. Look at [push
models](./push-models.md) if you have not.

## mbfactory pull models

This command fetches all models from Contentful and builds an
[AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) for each. The AST's
are written as typescript source files to the `my-models-folder`.

```bash
mbfactory pull models @modelberry/plugin-contentful/plain my-models-folder
```

`my-models-folder` should contain these files:

- `main.ts` (single entry point for pushing models)
- `contentful-page.ts`
- `contentful-topic.ts`
- `contentful-asset.ts` (fixed ContentfulAsset type)
- `contentful-reference.ts` (optional ContentfulReference type)

## Next

[Pull content](./pull-content.md) from Contentful to typescript.

## Table of contents

- [Getting started](./getting-started.md)
- [Push models](./push-models.md)
- [Pull models](./pull-models.md)
- [Push content](./push-content.md)
- [Pull content](./pull-content.md)
- [Run as script](./run-as-script.md)
- [Experimental features](./experimental-features.md)
- [TSDoc tags overview](./tsdocs-tags-overview.md)
