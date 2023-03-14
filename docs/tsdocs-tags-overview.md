# TSDocs tags overview

## TSDoc

Mbfactory uses [TSDoc](https://github.com/microsoft/tsdoc) tags to annotate
typescript interfaces. These annotations are used to create corresponding models
in Contentful.

## Example

```ts
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type someModel}
 * - {@displayField title}
 * - {@description Some model description}
 * - {@name someModel}
 */
export interface ContentfulSomeModel {
  /** @modelberry {@ignore} */
  __typename?: string

  /** @modelberry
   * - {@name Title within Contentful}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Used within Contentful, will never be displayed.}
   */
  title?: string
}
```

## Block tag

Mbfactory uses the `@modelberry` block tag. Within the block tag, inline tags
are used to annotate the fields and interface.

## Inline tags

This is a list of valid inline tags and their use. The modelberry
plugin-contentful warns when unknown tags are used.

---

### @description

Sets the description for a field or interface.

```ts
{@description Some model description}
```

---

### @disabled

Disables a field.

```ts
{@disbaled true}
```

---

### @displayField

Sets the displayfield of an interface. Used in a list of entries.

```ts
{@displayField title}
```

---

### @ignore

Ignores a field.

```ts
{@ignore true}
```

---

### @helpText

Sets the help text for a field.

```ts
{@helpText This line helps}
```

---

### @itemsType

Sets the type of items in an array field.

```ts
{@itemsType Symbol}
```

---

### @itemsLinkType

Sets the link type of items in an array field.

```ts
{@itemsLinkType Entry}
```

---

### @itemsValidations

Sets the validation ids for items in an array field.

```ts
{@validations regexp-path unique-true}
```

---

### @linkType

Sets the link type of a field.

```ts
{@linkType Entry}
```

---

### @locale

Sets the locale for a field or interface.

```ts
{@locale en-US}
```

---

### @localized

Enables localization for a field or interface.

```ts
{@localized true}
```

---

### @name

Sets the name for a field or interface.

```ts
{@name Title}
```

---

### @omitted

Omits a field.

```ts
{@omitted true}
```

---

### @plugin

Required. Sets the plugin for an interface. Double quotes are required by the
TSDocs parser.

```ts
{@plugin "@modelberry/plugin-contentful"}
```

---

### @required

Makes a field required.

```ts
{@required true}
```

---

### @type

Required. Sets the type of a field or interface.

```ts
{@type myModel}
```

```ts
{@type Symbol}
```

---

### @validations

Sets the validation ids for a field.

```ts
{@validations linkContentType-topic}
```

---

### @widgetId

Sets the widget id for a field.

```ts
{@widgetId entryLinkEditor}
```

---

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
