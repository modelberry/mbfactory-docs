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
mbfactory pull content @modelberry/plugin-contentful/plain my-models-folder
```

`my-models-folder` should contain these files:

- `main-content.ts` (single entry point for pushing content)
- `contentful-page-content.ts`
- `contentful-topic-content.ts`

## Next

[TSDoc tags overview](./tsdocs-tags-overview.md).

## Table of contents

- [Getting started](./getting-started.md)
- [Push models](./push-models.md)
- [Pull models](./pull-models.md)
- [Push content](./push-content.md)
- [Pull content](./pull-content.md)
- [TSDoc tags overview](./tsdocs-tags-overview.md)
