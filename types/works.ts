export type Works = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  worksDetails: {
    range: string;
    url: string;
    tool: string;
    img: {
      url: string,
      height: number;
      width: number;
    }
  }
  eye_catch: {
    url: string;
    height: number;
    width: number;
  }
  tag: string;
}