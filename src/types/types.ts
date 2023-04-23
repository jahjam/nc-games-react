export type Review = {
  title: string;
  category: string;
  designer: string;
  owner: string;
  review_img_url: string;
  created_at: Date;
  votes: number;
  comment_count: number;
  review_id: number;
  review_body?: string;
};

export type Comment = {
  author: string;
  body: string;
  comment_id?: number;
  created_at?: Date;
  date?: Date;
  review_id?: number;
  votes: number;
  handleDelete: Function;
};
