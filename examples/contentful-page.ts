import { ContentfulAsset } from './contentful-asset'
import { ContentfulTopic } from './contentful-topic'

/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful/plain"}
 * - {@type page}
 * - {@displayField title}
 * - {@description Page}
 * - {@name page}
 */
export interface ContentfulPage {
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
   * - {@name Page URL}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Example: /this/is/my/url}
   * - {@validations regexp-path unique-true}
   */
  path?: string

  /** @modelberry
   * - {@name Page topic}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@helpText Pagina topic dat wodt gebruikt als eerste topic op de pagina, als pagina title en voor SEO}
   * - {@validations linkContentType-topic}
   */
  pageTopic?: ContentfulTopic

  /** @modelberry
   * - {@name Tekst}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@helpText Eenvoudig opgemaakte tekstveld met kopjes en afbeeldingen}
   * - {@validations enabledMarks enabledNodeTypes richText}
   */
  text?: {
    json?: any
    links?: {
      assets: {
        block: ContentfulAsset[]
        hyperlink: ContentfulAsset[]
      }
      entries?: {
        block: any[]
        hyperlink: any[]
        inline: any[]
      }
    }
  }
}
