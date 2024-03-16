export type sectionSobre = {
  id: number;
  __component: string;
  title: string;
  descricao: string;

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
  metadata: {
    id: number;
    id_title: string;
    backgroud: boolean;
  };
};

export type sectionContent = {
  id: number;
  __component: string;
  title: string;

  decription: {
    type: string;
    children: {
      text: string;
      type: string;
      italic?: boolean;
      bold?: boolean;
      underline?: boolean;
    }[];
  }[];
  metadata: {
    id: number;
    id_title: string;
    backgroud: boolean;
  };
};

export type sectionGridText = {
  id: number;
  __component: string;
  title: string;
  description: string;
  metadata: {
    id: number;
    id_title: string;
    backgroud: boolean;
  };

  text_grid: {
    id: number;
    title: string;
    descricao: string;
  }[];

  img_grid: {
    id: number;
    img: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: null;
          caption: null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
          };
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
  }[];
};

export type sectionGridImg = {
  id: number;
  __component: string;
  title: string;
  description: string;
  metadata: {
    id: number;
    id_title: string;
    backgroud: boolean;
  };
  text_grid: {
    id: number;
    title: string;
    descricao: string;
  }[];
  img_grid: {
    id: number;
    img: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: null;
          caption: null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
          };
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
  }[];
};

export type dataSectionType = [sectionSobre, sectionContent, sectionGridText, sectionGridImg];
