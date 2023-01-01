interface IArticleListItemProps {
  id: string;
  title: string;
  introduce: string;
  types: IArticleTypeInArticle;
  tags: Array<IArticleTagInArticle>;
  cover: string;
  content_raw: string;
  content_html: string;
  visited_counts: number;
  liked_counts: number;
  is_show: boolean;
  created_at: string;
  updated_at: string;
}
interface IArticleTagInArticle {
  label: string;
  value: string;
  key: string;
}
interface IArticleTypeInArticle {
  label: string;
  value: string;
  key: string;
}
interface IArticleTag {
  label: string;
  name: string;
  color: string;
  id: string;
}

type IArticleTagsList = Array<IArticleTag>;

interface IArticleType {
  label: string;
  name: string;
  color: string;
  id: string;
}

type IArticleTypeList = Array<IArticleType>;
