import Link from "next/link";

const news = ['Engineering Scientist', 'Creative Mind', 'Machine Intelligence Specialist', 'Software Developer'];
class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            active: ""
        }
    }

    componentDidMount() {
        this.setState({
            active: window.location.pathname
        })
    }

    render() {
        return (
        <nav>
            {/* <ul className="nav-ul nav-ul-left">
                <li>
                    <Link href="/"><a className="active">Aidan Lawford-Wickham</a></Link>
                </li>
            </ul> */}
            <ul className="nav-ul nav-ul-right">
                <li>
                    <Link href="/"><a className={this.state.active === "/" ? "active" : ""}>home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a className={this.state.active === "/about" ? "active" : ""}>about</a></Link>
                </li>
                <li>
                    <Link href="/work"><a className={this.state.active === "/work" ? "active" : ""}>work</a></Link>
                </li>
                <li>
                    <Link href="/blog"><a className={this.state.active === "/blog" ? "active" : ""}>blog</a></Link>
                </li>
                <li>
                    <a target="_blank" href="/resume.pdf">resume</a>
                </li>
            </ul>
            <style jsx>{`
            nav {
                font-family: monospace;
                // display: flex;
                height: 2em;
                vertical-align: center;
                // width: 100%;
                // background: #4A4545;
                // padding-top: 24px;
                padding-right: 80px;
                padding-left: 80px;
                // margin-right: 0px;
                // margin-left: 20px;
                margin-top: 3em;
                align-content: center;
                border-left: 1px solid #5A5353;
                border-bottom: 1px solid #5A5353;
                // position: absolute; //i
            }

            nav li {
                list-style-type: none;
                display: inline;
            }

            .nav-ul {
                display: inline;
            }

            .nav-ul-left {
                font-size: 1.3em;
                padding: 0px 20px;
                // margin: 0px 0px 0px 0px;
                margin: 0px 0px;
                float: left;
            }

            // .nav-ul-middle {
            //     font-size: 0.9em;
            //     padding: 0px;
            //     margin: 0.3em 20px;
            // }

            .nav-ul-right {
                // font-size: 0.9em;
                font-size: 1.3em;
                // float: right;
                padding: 0px;
                margin: 0.3em 20px;
            }

            // .nav-ul-left a {
            //     text-decoration: none;
            //     display: inline-block;
            //     // margin: 0px 20px;
            //     padding: 2px 10px;
            //     color: #5A5353;
            // }

            a {
                text-decoration: none;
                display: inline-block;
                margin: 0px 20px;
                padding: 2px 10px;
                // color: #5A5353;
                color: #E6EBE0;
                // color: #F4F1BB;
            }

            .nav-ul-left a {
                // color: #F4F1BB;
                // font-weight: bold;
                // line-height: 0.2em;
            }

            .nav-ul-right a {
                line-height: 1.1em;
            }

            a:before, a:after {
                content: "";
                transition: width 0.2s ease-in;
                width: 0px;
                opacity: 0;
                background-color: #9BC1BC;
                left: 0;
                position: relative;
                display: block;
            }

            a:hover {
                cursor: pointer;
                transition: width 0.2s ease-in;
            }
            
            a:hover:before, a:hover:after {
                width: 100%;
                opacity: 1;
            }

            a:after {
                height: 2px;
            }

            .active {
                // border-bottom: 2px solid #9BC1BC;
                // color: #9BC1BC;
            }

            .active:before, .active:after {
                content: "";
                width: 100%;
                opacity: 1;
                background-color: #9BC1BC;
                top: 0;
                position: relative;
                display: block;
            }

            .active:after {
                height: 2px;
            }
            `}</style>
        </nav>
        );
    }
}

export default Header;
