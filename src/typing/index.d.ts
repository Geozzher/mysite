interface IArticleListItemProps {
  id: string;
  coverPicture: string;
  articleTitle: string;
  createTime: string;
  tag: IArticleTag;
  type: IArticleType;
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
