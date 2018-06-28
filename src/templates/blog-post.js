import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
  render() {
    const {
      title,
      content
    } = this.props.data.contentfulBlogPost
    return (
      <div>
        <h1>{title}</h1>
        <p>{content.content}</p>
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      content {
        content
      }
      slug
    }
  }
`
