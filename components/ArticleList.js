import ArticleItem from './ArticleItem'
import articlStyles from '../styles/Article.module.css'

const ArticleList = ({articles}) => {
    return (
        <div className={articlStyles.grid}>
        {articles.map((article,key )=> (
            <ArticleItem key={key} article={article}/>
        ))}
        </div>
    )
}

export default ArticleList
