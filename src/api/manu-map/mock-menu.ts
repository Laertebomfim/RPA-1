export const mockMenu = {
  id: 1,
  logo: {
    id: 1,
    text: 'LOGO',
    link_url: '#home',
    img: {
      data: {
        id: 9,
        attributes: {
          name: 'landing_page_2_c6baa21725 (1).svg',
          alternativeText: null,
          caption: null,
          width: 47,
          height: 9,
          formats: null,
          hash: 'landing_page_2_c6baa21725_1_f51f6dac0a',
          ext: '.svg',
          mime: 'image/svg+xml',
          size: 2.51,
          url: 'cloudinary.svg',
          previewUrl: null,
          provider: 'cloudinary',
          provider_metadata: {
            public_id: 'landing_page_2_c6baa21725_1_f51f6dac0a',
            resource_type: 'image',
          },
          createdAt: '2024-01-28T00:49:50.097Z',
          updatedAt: '2024-01-28T00:50:35.650Z',
        },
      },
    },
  },
  link: [
    {
      id: 1,
      link_text: 'intro',
      link_url: '#intro',
    },
    {
      id: 2,
      link_text: 'grid-one',
      link_url: '#grid-one',
    },
    {
      id: 5,
      link_text: 'gallery',
      link_url: '#gallery',
    },
    {
      id: 4,
      link_text: 'grid-two',
      link_url: '#grid-two',
    },
    {
      id: 3,
      link_text: 'pricing',
      link_url: '#pricing',
    },
    {
      id: 6,
      link_text: 'contact',
      link_url: '#contact',
    },
  ],
};

export type menutype = {
  id: number;
  logo: {
    id: number;
    text: string;
    link_url: string;
    img: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: null;
          caption: null;
          width: number;
          height: number;
          formats: null;
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: null;
          provider: string;
          provider_metadata: {
            public_id: string;
            resource_type: string;
          };
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
  link: {
    id: number;
    link_text: string;
    link_url: string;
  }[];
};

export type linkType = {
  id: number;
  link_text: string;
  link_url: string;
}[];
