import React from 'react';
import articleImage1 from '../../../images/article.1.jpg';
import articleImage2 from '../../../images/article.2.jpg';
import articleImage3 from '../../../images/article3.jpg';
import Article from '../Article/Article';



const articles=[
    {
        id:1,
        title:'Electric cars aren’t pollution-free; they have to get their',
        image:articleImage1,

    },
    { 
        id:2,
        title:'You can know or not know how a car runs and still enjoy ridi',
        image:articleImage2,

    },
    {
        id:3,
        title:'Race cars, no matter what size or shape they are, they do th',
        image:articleImage3,

    },
]

const Articles = () => {
    return (
        <section style={{backgroundColor:'#F3FCF8'}} className='mt-5 py-5'>
            <div className="container">
                <h1 style={{color:'#0DCAF0'}} className='text-center mb-5'>Latest Articles</h1>
                <div className="row">
                    {
                        articles.map(article=><Article key={article.id} article={article}></Article>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Articles;