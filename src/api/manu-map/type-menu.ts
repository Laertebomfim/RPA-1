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
