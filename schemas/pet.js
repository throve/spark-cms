// schemas/pet.js
export default {
  name: 'startUpData',
  type: 'document',
  title: 'Startup Data',
  fields: [
    {
      name: 'startupName',
      type: 'string',
      title: 'Startup Name',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        accept: 'image/svg+xml', // Specify that this field accepts SVG files
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'websitePreview',
      title: 'Website Preview Desktop',
      type: 'image',
      options: {
        accept: 'image/webp', // Specify that this field accepts SVG files
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'desktopSpotlight',
      title: 'Desktop Spotlight',
      type: 'image',
      options: {
        accept: 'image/webp', // Specify that this field accepts SVG files
      },
    },
    {
      name: 'startupDescription',
      title: 'Startup Description',
      type: 'text',
      description: 'Description of the startup (multi-line text)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              'FinTech',
              'Health',
              'ProTech',
              'Mental_Health',
              'CleanTech',
              'AI',
              'TravelTech',
              'Productivity',
              'Ecommerce',
              'Career',
              'Web3',
              'Tech',
              'Others',
              // Add more options if needed
            ],
          },
        },
      ],
      description: 'Category associated with the startup',
      validation: (Rule) => Rule.required(),
      initialValue: ['FinTech'], // Default value for categories
    },
    {
      name: 'mobileScreens',
      title: 'Mobile Screens',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'screen',
              title: 'Screen',
              type: 'string',
              description: 'Name of the mobile screen',
            },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'id',
                      title: 'ID',
                      type: 'string',
                    },
                    {
                      name: 'flow',
                      title: 'Flow',
                      type: 'string',
                    },
                    {
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                    },
                    {
                      name: 'assets',
                      title: 'Assets',
                      type: 'array',
                      of: [{type: 'string'}],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'fullHomepage',
      title: 'Full Homepage',
      type: 'image',
      options: {
        accept: 'image/webp', // Specify that this field accepts SVG files
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDesktop',
      title: 'Short Desktop',
      type: 'image',
      options: {
        accept: 'image/webp', // Specify that this field accepts SVG files
      },
    },
    {
      name: 'longMobile',
      title: 'Long Mobile',
      type: 'image',
      options: {
        accept: 'image/webp', // Specify that this field accepts SVG files
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'startupName',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'mobileWebsitePreview',
      title: 'Mobile Website Preview',
      type: 'image',
      options: {
        accept: 'image/webp', // Specify that this field accepts SVG files
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mobileWebsite',
      title: 'Mobile Website',
      type: 'image',
      options: {
        accept: 'image/webp', // Specify that this field accepts SVG files
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'websiteLink',
      type: 'string',
      title: 'Website Link',
    },
    {
      name: 'subCategory',
      title: 'Sub Category',
      type: 'string',
      description: 'Fintech category',
      options: {
        list: [
          'DigitalBanking',
          'FinanceManagement',
          'Insurance',
          'CrossBorder',
          'Funding',
          'CreditCard',
          'PaymentProcessor',
          'DigitalPayments',
          'Bnpl',
          'P2plending',
          'CreditScore',
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'spotlight',
      title: 'Spotlight',
      type: 'boolean',
      description: 'Mark as spotlight (true/false)',
      validation: (Rule) => Rule.required(),
      initialValue: false, // Initial value for the spotlight field
    },

    {
      name: 'careers',
      title: 'Careers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
            {
              name: 'length',
              title: 'Length',
              type: 'string',
            },
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Design', value: 'design' },
                  { title: 'Product Management', value: 'Product Management' },
                  // Add more options if needed
                ],
              },
             
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'brandColor',
      title: 'Brand Color',
      type: 'string',
      description: 'Select the brand color',
      validation: (Rule) => Rule.required(),

      initialValue: '#fff', // Initial value for the brandColor field (white color)
    },
    {
      name: 'career',
      title: 'Career',
      type: 'boolean',
      description: 'Display the careers of this startup? (true/false)',
      validation: (Rule) => Rule.required(),
      initialValue: false, // Initial value for the spotlight field
    },
    {
      name: 'updated',
      title: 'Updated',
      type: 'boolean',
      description: 'Was their website recently chnaged?',
      // validation: Rule => Rule.required(),
      initialValue: true, // Initial value for the spotlight field
    },
  ],
}
