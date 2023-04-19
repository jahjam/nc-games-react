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
