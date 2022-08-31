# Diff models

## Before

Make sure you have followed the steps at [getting
started](./getting-started.md).

## mbfactory pull-diff models

This command compiles [`examples/main.ts`](../examples/main.ts) into an
[AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) and parses the [TSDoc
tags](./tsdocs-tags-overview.md) for each interface.

Next it pulls all content types from Contentful.

The command shows how the local source files will change when pulling models.
The command does not make any changes.

```bash
mbfactory pull-diff models ./examples/main.ts
```

Runnning this command with the example models being pushed shows no changes for
the two content types.

```txt
topic (no changes)
page (no changes)
```

Make a change somewhere and run the command again. The `--yes` option could save
a key press.

## mbfactory push-diff models

Same as the `pull-dif` command but shows how the remote content types will
change when pushing models. The command does not make any changes.

```bash
mbfactory push-diff models ./examples/main.ts
```

## Next

[Run as script](./run-as-script.md)

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
