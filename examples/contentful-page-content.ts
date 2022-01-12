import { ContentfulPage } from './contentful-page'
export const page: ContentfulPage[] = [
  {
    sys: { id: '3wWpPqjuzpaH48GH8pfC1K' },
    title: 'Home',
    path: '/',
    pageTopic: { sys: { id: 'my-content-id' } },
    text: {
      json: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'heading-1',
            content: [
              { nodeType: 'text', value: 'Modelberry', marks: [], data: {} },
            ],
            data: {},
          },
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: 'This is a small demo.',
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: 'embedded-entry-block',
            content: [],
            data: {
              target: {
                sys: {
                  id: 'my-content-id',
                  type: 'Link',
                  linkType: 'Entry',
                },
              },
            },
          },
        ],
      },
    },
  },
]
