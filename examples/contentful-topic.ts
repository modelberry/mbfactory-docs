import { ContentfulAsset } from './contentful-asset'

export type TopicVariant =
  | 'block'
  | 'card'

/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful/plain"}
 * - {@type topic}
 * - {@displayField title}
 * - {@description Topic}
 * - {@name topic}
 */
export interface ContentfulTopic {
  /** @modelberry {@ignore} */
  __typename?: string
  /** @modelberry {@ignore} */
  sys?: {
    id?: string
  }

  /** @modelberry
   * - {@name Title within Contentful}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Used within Contentful, will never be displayed.}
   */
  title?: string

  /** @modelberry
   * - {@name Variant}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@helpText Display variant for this topic.}
   * - {@validations in-topic-variant}
   */
  variant?: TopicVariant

  /** @modelberry
   * - {@name Title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Title of the topic}
   */
  heading?: string

  /** @modelberry
   * - {@name Short text}
   * - {@type Text}
   * - {@widgetId multipleLine}
   * - {@helpText Short description of this topic.}
   */
  abstract?: string

  /** @modelberry
   * - {@name Media}
   * - {@type Link}
   * - {@linkType Asset}
   * - {@widgetId assetLinkEditor}
   * - {@helpText Media to show with the topic.}
   * - {@validations linkMimetypeGroup-image}
   */
  media?: ContentfulAsset
}
