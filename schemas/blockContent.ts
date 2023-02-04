import { defineType, defineArrayMember } from 'sanity';
import { RiBallPenFill } from 'react-icons/ri';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Highlight', value: 'highlight', icon: RiBallPenFill }
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          }
        ]
      }
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true }
    }),
    defineArrayMember({
      type: 'code',
      title: 'Code with all options',
      options: {
        language: 'javascript',
        languageAlternatives: [
          { title: 'Typescript', value: 'typescript' },
          { title: 'CSS', value: 'css' },
          { title: 'BASH', value: 'bash' },
          { title: 'JSX', value: 'jsx' }
        ],
        withFilename: true
      }
    })
  ]
});