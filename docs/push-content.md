# Push content

## Before

Make sure you have [pushed models](./push-models.md) before pushing content.

## mbfactory push content

This command compiles [`examples/main-content.ts`](../examples/main-content.ts)
into an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) and filters
out all arrays that are defined as `export const var: any[]`

Data found is created as content in Contentful.

```bash
mbfactory push content examples/main-content.ts
```

The Contentful Web App should show two entries:

- Home (of type page)
- Modelberry (of type topic)

> **NOTE** The `Home` entry refers to the `Modelberry` entry. The `Home` entry
> cannot be published until the `Modelberry` entry has been pushed.

## Pushing content with entry links

Content entry links are handled as described [here](https://github.com/modelberry/factory/blob/main/packages/plugin-contentful/src/push-content/README.md).

## Next

[Pull models](./pull-models.md) from Contentful to typescript.

## Table of contents

- [Getting started](./getting-started.md)
- [Push models](./push-models.md)
- [Pull models](./pull-models.md)
- [Push content](./push-content.md)
- [Pull content](./pull-content.md)
- [TSDoc tags overview](./tsdocs-tags-overview.md)
