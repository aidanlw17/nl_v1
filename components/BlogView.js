import PostListItem from './PostListItem';

class BlogView extends React.Component {
    constructor() {
        super()
        this._isMounted = false;
        this._postsLoaded = true;
        this.state = {
            tempPosts: [
                {
                    id: 1,
                    title: "Test Post 1",
                    submissionDate: "22/09/2028",
                    tags: ["Linux", "Development"]
                },
                {
                    id: 2,
                    title: "Tester Poseesdt 2",
                    submissionDate: "22/09/2023",
                    tags: ["Git", "Docker"]
                },
                {
                    id: 3,
                    title: "A blog about posts 3",
                    submissionDate: "02/11/2019",
                    tags: ["React", "Heroku"]
                }
            ]
        }
    }

    componentDidMount() {
        this._isMounted = true;
        // $.get(`/posts/service/all`, function(result) {
        //     if (this._isMounted) {
        //         this.setState({
        //             postsData: postsData
        //         });
        //     }
        // });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        if (this._postsLoaded) {
            // const posts = this.state.postsData.map(
            //     post => <PostListItem key={post.id}
            //                           title={post.title}
            //                           date={post.submissionDate}
            //                           tags={post.tags}/>)
            const tempPosts = this.state.tempPosts.map(
                post => <PostListItem key={post.id}
                                      id={post.id}
                                      title={post.title}
                                      date={post.submissionDate}
                                      tags={post.tags}/>)
            return (
                <div className="container">
                    {/* <p><strong>[aidan@noodlab ~]$</strong> ls -l *post*</p> */}
                    <p><strong>[aidan@noodlab ~]$</strong> ls -lt</p>
                    <ul>
                        {/* {posts} */}
                        {tempPosts}
                        {/* <li>22/09/2020 <a>A Guide to my Blog Setup</a></li>
                        <li></li> */}
                    </ul>
                    <style jsx>{`
                        .container {
                            font-size: 1.2em;
                            width: 56%;
                            min-width: 470px;
                            min-height: 450px;
                            background: #FFFFFF;
                            color: #363537;
                            margin: 3em auto;
                            padding-right: 100px;
                            padding-left: 100px;
                        }

                        ul {
                            list-style-type: none;
                            padding-left: 0px;
                        }
                    `}</style>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <p><strong>[aidan@noodlab ~]$</strong> ls -l *post*</p>
                    <p>Loading posts...</p>
                    <style jsx>{`
                        .container {
                            font-size: 1.2em;
                            width: 56%;
                            min-width: 470px;
                            min-height: 450px;
                            background: #FFFFFF;
                            color: #363537;
                            margin: 3em auto;
                            padding-right: 100px;
                            padding-left: 100px;
                        }
                    `}</style>
                </div>
            )
        }
    }
}

export default BlogView;
