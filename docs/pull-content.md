# Pull content

## Before

Make sure you have followed the steps at [getting started](./getting-started.md)
and that you have some content in Contentful. Look at [push
content](./push-models.md) if you have not.

## mbfactory pull content

This command fetches all entries from Contentful and builds an
[AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) for each content type.
The AST's are written as typescript source files to the `my-models-folder`.

```bash
mbfactory pull content @modelberry/plugin-contentful my-models-folder
```

`my-models-folder` should contain these files:

- `main-content.ts` (single entry point for pushing content)
- `contentful-page-content.ts`
- `contentful-topic-content.ts`

## Pulling content with entry links

Content entry links are handled as described [here](https://github.com/modelberry/factory/blob/main/packages/plugin-contentful/src/commands/pull-content/README.md).

## Next

[Diff models](./diff-models.md)

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
