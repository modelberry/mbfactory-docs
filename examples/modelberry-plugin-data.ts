// SOMEWHAT IMPORTANT NOTE
// =======================
//
// Tthe code below is passed to the plugin as a string and without scope. The
// code must be in javascript. This means:
//
// - variables cannot be used
// - typescript cannot be used inside the object
//

import { ModelberryPluginData } from '@modelberry/plugin-contentful'
export const modelberryPluginData: ModelberryPluginData = {
  '@modelberry/plugin-contentful': {
    validations: {
      'linkContentType-topic': { linkContentType: ['topic'] },
      'regexp-path': {
        message: 'Please use a valid path: /this/is/a/valid/path/with/:slug',
        regexp: {
          pattern: '^\\/[a-z0-9:\\._/~%\\-\\+&\\#\\?!=\\(\\)@]*$',
          flags: '',
        },
      },
      'unique-true': { unique: true },
      'in-topic-variant': {
        in: ['block', 'card'],
      },
      'linkMimetypeGroup-image': { linkMimetypeGroup: ['image'] },
      richText: {
        nodes: {
          'embedded-entry-block': [
            {
              linkContentType: ['topic'],
              message: null,
            },
          ],
        },
      },
      enabledMarks: {
        enabledMarks: ['bold', 'italic', 'underline', 'code'],
        message: 'Only bold, italic, underline, and code marks are allowed',
      },
      enabledNodeTypes: {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'heading-4',
          'heading-5',
          'heading-6',
          'ordered-list',
          'unordered-list',
          'hr',
          'blockquote',
          'embedded-entry-block',
          'embedded-asset-block',
          'hyperlink',
          'entry-hyperlink',
          'asset-hyperlink',
        ],
        message: 'inline entries are not allowed',
      },
    },
  },
}
