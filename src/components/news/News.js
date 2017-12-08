import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNews} from '../../reducers/news';
import renderHTML from 'react-render-html';

const Article = ({acf}) => (
    <div class="article">
        <h1>{acf.news_title}</h1>
        <img src={acf.news_image.url} />
        {renderHTML(acf.news_story)}
    </div>
)

class News extends Component {
    componentDidMount() {
        this.props.fetchNews();
    }
    render() {
        return (
            <div class="news">
                {
                    this.props.news.news.map((item)=>{
                        return <Article {...item} key={item.id}/>
                    })

                }
            </div>
        )
    }
}

export default connect (
    (state) => ({news: state.news}),
    {fetchNews}
)(News)