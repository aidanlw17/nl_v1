import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';

export default function Post(props) {
    const markdownBody = props.content;
    const frontmatter = props.data;
    const tagStyle = {
        // color: "#363537",
        fontSize: "11px",
        color: "#BF1A2F",
        padding: "2px 6px",
        marginRight: "8px",
        display: "inline",
        borderRadius: "4px",
        textTransform: "uppercase",
        // background: "#C8C8C8"
        background: "#F5F2F0"
    }
    const tags = frontmatter.tags.map(
        tag => <li style={tagStyle} key={tag} className="tag">{tag}</li>
    );
    const url = `https://www.noodlab.com/props/${frontmatter.slug}`;
    const twitterLink = `http://twitter.com/share?text=${frontmatter.title}&url=${url}&via=aidanlw17`;
    const date = frontmatter.date.toString().slice(0, 10);
    return (
        <Layout>
            <div className="container">
                <div className="header">
                    <h1 className="title">{frontmatter.title}</h1>
                    <p className="meta"><span className="date">Last updated: {date}</span> / <a href={twitterLink} target="_blank">share</a></p>
                    {tags}
                </div>
                <ReactMarkdown source={markdownBody}/>
            </div>
            <style jsx>{`
                .container {
                    font-size: 1.6em;
                    // font-size: 1.5em;
                    width: 56%;
                    min-width: 470px;
                    min-height: 450px;
                    background: #FFFFFF;
                    color: #363537;
                    margin: 3em auto;
                    margin-top: 1em;
                    padding-right: 100px;
                    padding-left: 100px;
                    overflow: auto;
                    font-family: 'Source Sans Pro';
                    line-height: 30px;
                }

                .header {
                    margin-bottom: 1.4em;
                    line-height: 20px;
                }

                .meta > span {
                    margin-right: 4px;
                    color: #646464;
                }

                .meta > a {
                    margin-left: 4px;
                    color: #E7BB41;
                    text-decoration: none;
                    font-weight: bold;
                }

                .meta {
                    font-weight: 100;
                    font-size: 0.8em;
                }
            `}</style>
        </Layout>
    );
}

// ({ query })
Post.getInitialProps = async function(context) {
    const { slug } = context.query;
    const content = await import(`../../posts/${slug}.md`);
    const data = matter(content.default);
    return {
        ...data
    }
}
