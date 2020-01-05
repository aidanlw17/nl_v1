import Link from "next/link";

const PostListItem = (props) => {
    const tagStyle = {
        color: "#363537",
        fontSize: "11px",
        // color: "#BF1A2F",
        padding: "2px 5px",
        margin: "2px 5px",
        display: "inline",
        borderRadius: "4px",
        textTransform: "uppercase"
    }

    const tags = props.tags.map(
        tag => <li style={tagStyle} key={tag} className="tag">{tag}</li>
    );
    return (
        <li>
            <p>
                <span className="date">{props.date}</span>
                <Link href={`/posts/${props.id}`}><a className="title">{props.title}</a></Link>
                <ul className="tags">
                    {tags}
                </ul>
            </p>
            <style jsx>{`
                .tag {
                    // margin: 4px;
                }

                p {
                    display: flex;
                }
                
                .date {
                    flex: 0;
                    // color: #BF1A2F;
                    // width: 30px;
                    // min-width: 30px;
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
