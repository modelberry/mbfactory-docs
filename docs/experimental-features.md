# Experimental features

## Experimental

New features are developed with a `experimental-` prefix to the command.

## mbfactory pull-diff models

This command compiles [`examples/main.ts`](../examples/main.ts) into an
[AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) and parses the [TSDoc
tags](./tsdocs-tags-overview.md) for each interface.

Next it pulls all content types from Contentful.

The command shows the local source files and which changes are required for two
equal environments.

```bash
mbfactory experimental-pull-diff models ./examples/main.ts
```

Runnning this command with the examples being pushed shows no changes for the
two content types.

```txt
topic (no changes)
page (no changes)
```

Make a change somewhere and run the command again. The `--yes` option could save
a key press.

## mbfactory push-diff models

Same as the `pull-dif` command but shows the changes required to the content
types defined at Contentful.

```bash
mbfactory experimental-push-diff models ./examples/main.ts
```

## mbfactory pull-diff conent

Not yet implemented

## mbfactory push-diff conent

Not yet implemented

## Next

[TSDoc tags overview](./tsdocs-tags-overview.md).

## Table of contents

- [Getting started](./getting-started.md)
- [Push models](./push-models.md)
- [Pull models](./pull-models.md)
- [Push content](./push-content.md)
- [Pull content](./pull-content.md)
- [Run as script](./run-as-script.md)
- [Experimental features](./experimental-features.md)
- [TSDoc tags overview](./tsdocs-tags-overview.md)
