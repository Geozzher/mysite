interface IArticleListItemProps {
  id: string;
  coverPicture: string;
  articleTitle: string;
  createTime: string;
  tag: IArticleTag;
  type: IArticleType;
}
interface IArticleTag {
  tagName: string;
  color: string;
  tagId: string;
}

type IArticleTagsList = Array<IArticleTag>;

interface IArticleType {
  typeName: string;
  color: string;
  typeId: string;
}

type IArticleTypeList = Array<IArticleType>;
