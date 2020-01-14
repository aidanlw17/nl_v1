import Link from "next/link";

const PostListItem = (props) => {
    // const tagStyle = {
    //     color: "#363537",
    //     fontSize: "11px",
    //     // color: "#BF1A2F",
    //     padding: "2px 5px",
    //     margin: "2px 5px",
    //     display: "inline",
    //     borderRadius: "4px",
    //     textTransform: "uppercase"
    // }
    const tagStyle = {
        color: "#363537",
        fontSize: "11px",
        // color: "#BF1A2F",
        padding: "2px 6px",
        marginRight: "8px",
        display: "inline",
        borderRadius: "4px",
        textTransform: "uppercase",
        // background: "#C8C8C8"
        background: "#f5f2f0"
    }

    const tags = props.tags.map(
        tag => <li style={tagStyle} key={tag} className="tag">{tag}</li>
    );
    return (
        <li key={props.slug}>
            <div>
                <span className="date">{props.date}</span>
                <Link href={`/posts/${props.slug}`}><a className="title">{props.title}</a></Link>
                <ul className="tags">
                    {tags}
                </ul>
            </div>
            <style jsx>{`
                .tag {
                    // margin: 4px;
                }

                div {
                    display: flex;
                    margin-bottom: 16px;
                }
                
                .date {
                    flex: 0;
                    // color: #BF1A2F;
                    // width: 30px;
                    min-width: 100px;
                }

                .title {
                    flex: 1;
                    margin: 0px 20px 0px 20px;
                    text-decoration: none;
                    color: #363357;
                    // color: #BF1A2F;
                    // color: #363357;
                    font-weight: bold;
                    color: #E7BB41;
                    min-width: 300px;
                }

                // .title:hover {
                //     // color: #363537;
                //     // color: #BF1A2F;
                //     // color: #363357;
                // }

                .tags {
                    flex: 2;
                    list-style-type: none;
                }
            `}</style>
        </li>
    );
}

export default PostListItem;
