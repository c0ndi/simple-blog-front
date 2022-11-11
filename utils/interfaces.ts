export interface IBlogPost {
   attributes: {
      title: string;
      cover: IBasicPhotoUrl;
      slug: string;
   }
}

export interface IBasicPhotoUrl {
   data: {
      attributes: {
         url: string;
      }
   }
}

// todo - interface