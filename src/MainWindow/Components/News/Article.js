import React from 'react';

const Article = ( props ) => 
{
    return (
      <div className="article" onClick={props.click}>
          <h2 className="articleTitle">{props.title}</h2>
          <p className="articleBody">{props.body}</p>
          <p className="articleDate">{props.body}</p>
      </div>
    );
}

export default Article;