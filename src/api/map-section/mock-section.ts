import {
  dataSectionType,
  sectionContent,
  sectionGridImg,
  sectionGridText,
  sectionSobre,
} from './type-map-section';

export const sectionMock: dataSectionType = [
  {
    id: 1,
    __component: 'section.section-sobre',
    title: 'JANUARY BRINGS US FIREFOX 85',
    descricao:
      'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
    img: {
      data: {
        id: 2,
        attributes: {
          name: 'javascript.svg',
          alternativeText: null,
          caption: null,
          width: 1030,
          height: 730,
          formats: null,
          hash: 'javascript_4e2c47b0a6',
          ext: '.svg',
          mime: 'image/svg+xml',
          size: 30.31,
          url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706397481/javascript_4e2c47b0a6.svg',
          previewUrl: null,
          provider: 'cloudinary',
          provider_metadata: {
            public_id: 'javascript_4e2c47b0a6',
            resource_type: 'image',
          },
          createdAt: '2024-01-27T23:18:06.691Z',
          updatedAt: '2024-01-27T23:29:36.381Z',
        },
      },
    },
    metadata: {
      id: 1,
      id_title: 'JANUARY',
      backgroud: true,
    },
  },
  {
    id: 1,
    __component: 'section.section-texto',
    title: 'NEWS COVERAGE AND SOME SURPRISES',
    decription: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the',
            type: 'text',
          },
          {
            text: ' machine’s performance',
            type: 'text',
            underline: true,
          },
          {
            text: '. This post details some background information on the experience of porting Firefox to run natively on these CPUs.',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: '',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept o',
            type: 'text',
          },
          {
            bold: true,
            text: 'f Universal Binaries.',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: '',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.',
            type: 'text',
            italic: true,
          },
        ],
      },
    ],
    metadata: {
      id: 5,
      id_title: 'NEWS-COVERAGE-AND-SOME-SURPRISES',
      backgroud: false,
    },
  },
  {
    id: 2,
    __component: 'section.section-grid',
    title: 'MY GRID',
    description: 'Uma breve descrição.',
    metadata: {
      id: 3,
      id_title: 'MY-GRID',
      backgroud: true,
    },
    text_grid: [
      {
        id: 1,
        title: 'Teste 1',
        descricao:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
      },
      {
        id: 2,
        title: 'Teste 2',
        descricao:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
      },
      {
        id: 3,
        title: 'Teste 3',
        descricao:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
      },
    ],
    img_grid: [
      {
        id: 7,
        img: {
          data: {
            id: 7,
            attributes: {
              name: 'photo-1680964258021-4219e28d2481.jpg',
              alternativeText: null,
              caption: null,
              width: 360,
              height: 360,
              formats: {
                thumbnail: {
                  ext: '.jpg',
                  url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398409/thumbnail_photo_1680964258021_4219e28d2481_010c376755.jpg',
                  hash: 'thumbnail_photo_1680964258021_4219e28d2481_010c376755',
                  mime: 'image/jpeg',
                  name: 'thumbnail_photo-1680964258021-4219e28d2481.jpg',
                  path: null,
                  size: 5.73,
                  width: 156,
                  height: 156,
                  provider_metadata: {
                    public_id: 'thumbnail_photo_1680964258021_4219e28d2481_010c376755',
                    resource_type: 'image',
                  },
                },
              },
              hash: 'photo_1680964258021_4219e28d2481_010c376755',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 27.04,
              url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398410/photo_1680964258021_4219e28d2481_010c376755.jpg',
              previewUrl: null,
              provider: 'cloudinary',
              provider_metadata: {
                public_id: 'photo_1680964258021_4219e28d2481_010c376755',
                resource_type: 'image',
              },
              createdAt: '2024-01-27T23:33:31.061Z',
              updatedAt: '2024-03-10T12:25:41.871Z',
            },
          },
        },
      },
    ],
  },
  {
    id: 1,
    __component: 'section.section-grid',
    title: 'GALLERY',
    description: 'Uma breve descrição.',
    metadata: {
      id: 4,
      id_title: 'GALLERY',
      backgroud: false,
    },
    text_grid: [
      {
        id: 4,
        title: 'teste o strapi',
        descricao: 'já tem um tempo que eu não machos nisto.',
      },
    ],
    img_grid: [
      {
        id: 1,
        img: {
          data: {
            id: 8,
            attributes: {
              name: 'photo-1596919130649-af13105143ad.jpg',
              alternativeText: null,
              caption: null,
              width: 360,
              height: 360,
              formats: {
                thumbnail: {
                  ext: '.jpg',
                  url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398410/thumbnail_photo_1596919130649_af13105143ad_1047dd0db0.jpg',
                  hash: 'thumbnail_photo_1596919130649_af13105143ad_1047dd0db0',
                  mime: 'image/jpeg',
                  name: 'thumbnail_photo-1596919130649-af13105143ad.jpg',
                  path: null,
                  size: 7.74,
                  width: 156,
                  height: 156,
                  provider_metadata: {
                    public_id: 'thumbnail_photo_1596919130649_af13105143ad_1047dd0db0',
                    resource_type: 'image',
                  },
                },
              },
              hash: 'photo_1596919130649_af13105143ad_1047dd0db0',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 35.77,
              url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398410/photo_1596919130649_af13105143ad_1047dd0db0.jpg',
              previewUrl: null,
              provider: 'cloudinary',
              provider_metadata: {
                public_id: 'photo_1596919130649_af13105143ad_1047dd0db0',
                resource_type: 'image',
              },
              createdAt: '2024-01-27T23:33:31.500Z',
              updatedAt: '2024-01-27T23:33:31.500Z',
            },
          },
        },
      },
      {
        id: 2,
        img: {
          data: {
            id: 7,
            attributes: {
              name: 'photo-1680964258021-4219e28d2481.jpg',
              alternativeText: null,
              caption: null,
              width: 360,
              height: 360,
              formats: {
                thumbnail: {
                  ext: '.jpg',
                  url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398409/thumbnail_photo_1680964258021_4219e28d2481_010c376755.jpg',
                  hash: 'thumbnail_photo_1680964258021_4219e28d2481_010c376755',
                  mime: 'image/jpeg',
                  name: 'thumbnail_photo-1680964258021-4219e28d2481.jpg',
                  path: null,
                  size: 5.73,
                  width: 156,
                  height: 156,
                  provider_metadata: {
                    public_id: 'thumbnail_photo_1680964258021_4219e28d2481_010c376755',
                    resource_type: 'image',
                  },
                },
              },
              hash: 'photo_1680964258021_4219e28d2481_010c376755',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 27.04,
              url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398410/photo_1680964258021_4219e28d2481_010c376755.jpg',
              previewUrl: null,
              provider: 'cloudinary',
              provider_metadata: {
                public_id: 'photo_1680964258021_4219e28d2481_010c376755',
                resource_type: 'image',
              },
              createdAt: '2024-01-27T23:33:31.061Z',
              updatedAt: '2024-03-10T12:25:41.871Z',
            },
          },
        },
      },
      {
        id: 3,
        img: {
          data: {
            id: 6,
            attributes: {
              name: 'photo-1612821745127-53855be9cbd1.jpg',
              alternativeText: null,
              caption: null,
              width: 360,
              height: 360,
              formats: {
                thumbnail: {
                  ext: '.jpg',
                  url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398409/thumbnail_photo_1612821745127_53855be9cbd1_a2af838092.jpg',
                  hash: 'thumbnail_photo_1612821745127_53855be9cbd1_a2af838092',
                  mime: 'image/jpeg',
                  name: 'thumbnail_photo-1612821745127-53855be9cbd1.jpg',
                  path: null,
                  size: 5.26,
                  width: 156,
                  height: 156,
                  provider_metadata: {
                    public_id: 'thumbnail_photo_1612821745127_53855be9cbd1_a2af838092',
                    resource_type: 'image',
                  },
                },
              },
              hash: 'photo_1612821745127_53855be9cbd1_a2af838092',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 17.73,
              url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398410/photo_1612821745127_53855be9cbd1_a2af838092.jpg',
              previewUrl: null,
              provider: 'cloudinary',
              provider_metadata: {
                public_id: 'photo_1612821745127_53855be9cbd1_a2af838092',
                resource_type: 'image',
              },
              createdAt: '2024-01-27T23:33:31.055Z',
              updatedAt: '2024-01-27T23:33:31.055Z',
            },
          },
        },
      },
      {
        id: 4,
        img: {
          data: {
            id: 5,
            attributes: {
              name: 'photo-1634500685584-0778d45a1953.jpg',
              alternativeText: null,
              caption: null,
              width: 360,
              height: 360,
              formats: {
                thumbnail: {
                  ext: '.jpg',
                  url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398409/thumbnail_photo_1634500685584_0778d45a1953_73f8c7e398.jpg',
                  hash: 'thumbnail_photo_1634500685584_0778d45a1953_73f8c7e398',
                  mime: 'image/jpeg',
                  name: 'thumbnail_photo-1634500685584-0778d45a1953.jpg',
                  path: null,
                  size: 3.86,
                  width: 156,
                  height: 156,
                  provider_metadata: {
                    public_id: 'thumbnail_photo_1634500685584_0778d45a1953_73f8c7e398',
                    resource_type: 'image',
                  },
                },
              },
              hash: 'photo_1634500685584_0778d45a1953_73f8c7e398',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 16.9,
              url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398410/photo_1634500685584_0778d45a1953_73f8c7e398.jpg',
              previewUrl: null,
              provider: 'cloudinary',
              provider_metadata: {
                public_id: 'photo_1634500685584_0778d45a1953_73f8c7e398',
                resource_type: 'image',
              },
              createdAt: '2024-01-27T23:33:30.854Z',
              updatedAt: '2024-01-27T23:33:30.854Z',
            },
          },
        },
      },
      {
        id: 5,
        img: {
          data: {
            id: 4,
            attributes: {
              name: 'photo-1687438539053-d46ac4222ac0.jpg',
              alternativeText: null,
              caption: null,
              width: 360,
              height: 360,
              formats: {
                thumbnail: {
                  ext: '.jpg',
                  url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398409/thumbnail_photo_1687438539053_d46ac4222ac0_6a78095ac4.jpg',
                  hash: 'thumbnail_photo_1687438539053_d46ac4222ac0_6a78095ac4',
                  mime: 'image/jpeg',
                  name: 'thumbnail_photo-1687438539053-d46ac4222ac0.jpg',
                  path: null,
                  size: 3.91,
                  width: 156,
                  height: 156,
                  provider_metadata: {
                    public_id: 'thumbnail_photo_1687438539053_d46ac4222ac0_6a78095ac4',
                    resource_type: 'image',
                  },
                },
              },
              hash: 'photo_1687438539053_d46ac4222ac0_6a78095ac4',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 14,
              url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398409/photo_1687438539053_d46ac4222ac0_6a78095ac4.jpg',
              previewUrl: null,
              provider: 'cloudinary',
              provider_metadata: {
                public_id: 'photo_1687438539053_d46ac4222ac0_6a78095ac4',
                resource_type: 'image',
              },
              createdAt: '2024-01-27T23:33:30.570Z',
              updatedAt: '2024-01-27T23:33:30.570Z',
            },
          },
        },
      },
      {
        id: 6,
        img: {
          data: {
            id: 3,
            attributes: {
              name: 'photo-1599739583987-a571686b0478.jpg',
              alternativeText: null,
              caption: null,
              width: 360,
              height: 360,
              formats: {
                thumbnail: {
                  ext: '.jpg',
                  url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398409/thumbnail_photo_1599739583987_a571686b0478_86ef332391.jpg',
                  hash: 'thumbnail_photo_1599739583987_a571686b0478_86ef332391',
                  mime: 'image/jpeg',
                  name: 'thumbnail_photo-1599739583987-a571686b0478.jpg',
                  path: null,
                  size: 3.45,
                  width: 156,
                  height: 156,
                  provider_metadata: {
                    public_id: 'thumbnail_photo_1599739583987_a571686b0478_86ef332391',
                    resource_type: 'image',
                  },
                },
              },
              hash: 'photo_1599739583987_a571686b0478_86ef332391',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 13.03,
              url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398409/photo_1599739583987_a571686b0478_86ef332391.jpg',
              previewUrl: null,
              provider: 'cloudinary',
              provider_metadata: {
                public_id: 'photo_1599739583987_a571686b0478_86ef332391',
                resource_type: 'image',
              },
              createdAt: '2024-01-27T23:33:30.546Z',
              updatedAt: '2024-01-27T23:33:30.546Z',
            },
          },
        },
      },
    ],
  },
];

export const SectionTowColumnsMock: sectionSobre = {
  id: 1,
  __component: 'section.section-sobre',
  title: 'JANUARY BRINGS',
  descricao: 'To wrap up January, we are proud to bring you the release',
  img: {
    data: {
      id: 2,
      attributes: {
        name: 'javascript.svg',
        alternativeText: null,
        caption: null,
        width: 1030,
        height: 730,
        formats: null,
        hash: 'javascript_4e2c47b0a6',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'hello.svg',
        previewUrl: null,
        provider: 'cloudinary',
        provider_metadata: {
          public_id: 'javascript_4e2c47b0a6',
          resource_type: 'image',
        },
        createdAt: '2024-01-27T23:18:06.691Z',
        updatedAt: '2024-01-27T23:29:36.381Z',
      },
    },
  },
  metadata: {
    id: 1,
    id_title: 'JANUARY',
    backgroud: true,
  },
};

export const SectionContentMock: sectionContent = {
  id: 1,
  __component: 'section.section-texto',
  title: 'NEWS COVERAGE',
  decription: [
    {
      type: 'paragraph',
      children: [
        {
          text: 'The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the',
          type: 'text',
        },
        {
          text: ' machine’s performance',
          type: 'text',
          underline: true,
        },
        {
          text: '. This post details some background information on the experience of porting Firefox to run natively on these CPUs.',
          type: 'text',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text: '',
          type: 'text',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text: 'We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept o',
          type: 'text',
        },
        {
          bold: true,
          text: 'f Universal Binaries.',
          type: 'text',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text: '',
          type: 'text',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text: 'We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.',
          type: 'text',
          italic: true,
        },
      ],
    },
  ],
  metadata: {
    id: 5,
    id_title: 'NEWS-COVERAGE-AND-SOME-SURPRISES',
    backgroud: false,
  },
};

export const sectionGridTextMock: sectionGridText = {
  id: 2,
  __component: 'section.section-grid',
  title: 'MY GRID',
  description: 'Uma breve descrição.',
  metadata: {
    id: 3,
    id_title: 'MY-GRID',
    backgroud: true,
  },
  text_grid: [
    {
      id: 1,
      title: 'Teste 1',
      descricao:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
    },
    {
      id: 2,
      title: 'Teste 2',
      descricao:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
    },
    {
      id: 3,
      title: 'Teste 3',
      descricao:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
    },
  ],
  img_grid: [
    {
      id: 7,
      img: {
        data: {
          id: 7,
          attributes: {
            name: 'photo-1680964258021-4219e28d2481.jpg',
            alternativeText: null,
            caption: null,
            width: 360,
            height: 360,
            formats: {
              thumbnail: {
                ext: '.jpg',
                url: 'hello.jpg',
                hash: 'thumbnail_photo_1680964258021_4219e28d2481_010c376755',
                mime: 'image/jpeg',
                name: 'thumbnail_photo-1680964258021-4219e28d2481.jpg',
                path: null,
                size: 5.73,
                width: 156,
                height: 156,
                provider_metadata: {
                  public_id: 'thumbnail_photo_1680964258021_4219e28d2481_010c376755',
                  resource_type: 'image',
                },
              },
            },
            hash: 'photo_1680964258021_4219e28d2481_010c376755',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 27.04,
            url: 'hello.jpg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'photo_1680964258021_4219e28d2481_010c376755',
              resource_type: 'image',
            },
            createdAt: '2024-01-27T23:33:31.061Z',
            updatedAt: '2024-03-10T12:25:41.871Z',
          },
        },
      },
    },
  ],
};

export const sectionGridImgMock: sectionGridImg = {
  id: 1,
  __component: 'section.section-grid',
  title: 'GALLERY',
  description: 'Uma breve descrição.',
  metadata: {
    id: 4,
    id_title: 'GALLERY',
    backgroud: false,
  },
  text_grid: [
    {
      id: 4,
      title: 'teste o strapi',
      descricao: 'já tem um tempo que eu não machos nisto.',
    },
  ],
  img_grid: [
    {
      id: 1,
      img: {
        data: {
          id: 8,
          attributes: {
            name: 'photo-1596919130649-af13105143ad.jpg',
            alternativeText: null,
            caption: null,
            width: 360,
            height: 360,
            formats: {
              thumbnail: {
                ext: '.jpg',
                url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398410/thumbnail_photo_1596919130649_af13105143ad_1047dd0db0.jpg',
                hash: 'thumbnail_photo_1596919130649_af13105143ad_1047dd0db0',
                mime: 'image/jpeg',
                name: 'thumbnail_photo-1596919130649-af13105143ad.jpg',
                path: null,
                size: 7.74,
                width: 156,
                height: 156,
                provider_metadata: {
                  public_id: 'thumbnail_photo_1596919130649_af13105143ad_1047dd0db0',
                  resource_type: 'image',
                },
              },
            },
            hash: 'photo_1596919130649_af13105143ad_1047dd0db0',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 35.77,
            url: 'hi.jpg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'photo_1596919130649_af13105143ad_1047dd0db0',
              resource_type: 'image',
            },
            createdAt: '2024-01-27T23:33:31.500Z',
            updatedAt: '2024-01-27T23:33:31.500Z',
          },
        },
      },
    },
    {
      id: 2,
      img: {
        data: {
          id: 7,
          attributes: {
            name: 'photo-1680964258021-4219e28d2481.jpg',
            alternativeText: null,
            caption: null,
            width: 360,
            height: 360,
            formats: {
              thumbnail: {
                ext: '.jpg',
                url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398409/thumbnail_photo_1680964258021_4219e28d2481_010c376755.jpg',
                hash: 'thumbnail_photo_1680964258021_4219e28d2481_010c376755',
                mime: 'image/jpeg',
                name: 'thumbnail_photo-1680964258021-4219e28d2481.jpg',
                path: null,
                size: 5.73,
                width: 156,
                height: 156,
                provider_metadata: {
                  public_id: 'thumbnail_photo_1680964258021_4219e28d2481_010c376755',
                  resource_type: 'image',
                },
              },
            },
            hash: 'photo_1680964258021_4219e28d2481_010c376755',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 27.04,
            url: 'hi.jpg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'photo_1680964258021_4219e28d2481_010c376755',
              resource_type: 'image',
            },
            createdAt: '2024-01-27T23:33:31.061Z',
            updatedAt: '2024-03-10T12:25:41.871Z',
          },
        },
      },
    },
    {
      id: 3,
      img: {
        data: {
          id: 6,
          attributes: {
            name: 'photo-1612821745127-53855be9cbd1.jpg',
            alternativeText: null,
            caption: null,
            width: 360,
            height: 360,
            formats: {
              thumbnail: {
                ext: '.jpg',
                url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398409/thumbnail_photo_1612821745127_53855be9cbd1_a2af838092.jpg',
                hash: 'thumbnail_photo_1612821745127_53855be9cbd1_a2af838092',
                mime: 'image/jpeg',
                name: 'thumbnail_photo-1612821745127-53855be9cbd1.jpg',
                path: null,
                size: 5.26,
                width: 156,
                height: 156,
                provider_metadata: {
                  public_id: 'thumbnail_photo_1612821745127_53855be9cbd1_a2af838092',
                  resource_type: 'image',
                },
              },
            },
            hash: 'photo_1612821745127_53855be9cbd1_a2af838092',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 17.73,
            url: 'hi.jpg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'photo_1612821745127_53855be9cbd1_a2af838092',
              resource_type: 'image',
            },
            createdAt: '2024-01-27T23:33:31.055Z',
            updatedAt: '2024-01-27T23:33:31.055Z',
          },
        },
      },
    },
    {
      id: 4,
      img: {
        data: {
          id: 5,
          attributes: {
            name: 'photo-1634500685584-0778d45a1953.jpg',
            alternativeText: null,
            caption: null,
            width: 360,
            height: 360,
            formats: {
              thumbnail: {
                ext: '.jpg',
                url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398409/thumbnail_photo_1634500685584_0778d45a1953_73f8c7e398.jpg',
                hash: 'thumbnail_photo_1634500685584_0778d45a1953_73f8c7e398',
                mime: 'image/jpeg',
                name: 'thumbnail_photo-1634500685584-0778d45a1953.jpg',
                path: null,
                size: 3.86,
                width: 156,
                height: 156,
                provider_metadata: {
                  public_id: 'thumbnail_photo_1634500685584_0778d45a1953_73f8c7e398',
                  resource_type: 'image',
                },
              },
            },
            hash: 'photo_1634500685584_0778d45a1953_73f8c7e398',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 16.9,
            url: 'hi.jpg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'photo_1634500685584_0778d45a1953_73f8c7e398',
              resource_type: 'image',
            },
            createdAt: '2024-01-27T23:33:30.854Z',
            updatedAt: '2024-01-27T23:33:30.854Z',
          },
        },
      },
    },
    {
      id: 5,
      img: {
        data: {
          id: 4,
          attributes: {
            name: 'photo-1687438539053-d46ac4222ac0.jpg',
            alternativeText: null,
            caption: null,
            width: 360,
            height: 360,
            formats: {
              thumbnail: {
                ext: '.jpg',
                url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398409/thumbnail_photo_1687438539053_d46ac4222ac0_6a78095ac4.jpg',
                hash: 'thumbnail_photo_1687438539053_d46ac4222ac0_6a78095ac4',
                mime: 'image/jpeg',
                name: 'thumbnail_photo-1687438539053-d46ac4222ac0.jpg',
                path: null,
                size: 3.91,
                width: 156,
                height: 156,
                provider_metadata: {
                  public_id: 'thumbnail_photo_1687438539053_d46ac4222ac0_6a78095ac4',
                  resource_type: 'image',
                },
              },
            },
            hash: 'photo_1687438539053_d46ac4222ac0_6a78095ac4',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 14,
            url: 'hi.jpg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'photo_1687438539053_d46ac4222ac0_6a78095ac4',
              resource_type: 'image',
            },
            createdAt: '2024-01-27T23:33:30.570Z',
            updatedAt: '2024-01-27T23:33:30.570Z',
          },
        },
      },
    },
    {
      id: 6,
      img: {
        data: {
          id: 3,
          attributes: {
            name: 'photo-1599739583987-a571686b0478.jpg',
            alternativeText: null,
            caption: null,
            width: 360,
            height: 360,
            formats: {
              thumbnail: {
                ext: '.jpg',
                url: 'https://res.cloudinary.com/dv1e4mb9g/image/upload/v1706398409/thumbnail_photo_1599739583987_a571686b0478_86ef332391.jpg',
                hash: 'thumbnail_photo_1599739583987_a571686b0478_86ef332391',
                mime: 'image/jpeg',
                name: 'thumbnail_photo-1599739583987-a571686b0478.jpg',
                path: null,
                size: 3.45,
                width: 156,
                height: 156,
                provider_metadata: {
                  public_id: 'thumbnail_photo_1599739583987_a571686b0478_86ef332391',
                  resource_type: 'image',
                },
              },
            },
            hash: 'photo_1599739583987_a571686b0478_86ef332391',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 13.03,
            url: 'hi.jpg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'photo_1599739583987_a571686b0478_86ef332391',
              resource_type: 'image',
            },
            createdAt: '2024-01-27T23:33:30.546Z',
            updatedAt: '2024-01-27T23:33:30.546Z',
          },
        },
      },
    },
  ],
};
