import Link from "next/link";

const news = ['Engineering Scientist', 'Creative Mind', 'Machine Intelligence Specialist', 'Software Developer'];
const Header = () => (
    <nav>
        <ul className="nav-ul nav-ul-left">
            <li>
                <Link href="/"><a className="active">Aidan Lawford-Wickham</a></Link>
            </li>
        </ul>

        <ul className="nav-ul nav-ul-right">
            <li>
                <Link href="/"><a>home</a></Link>
            </li>
            <li>
                <Link href="/about"><a>about</a></Link>
            </li>
            <li>
                <Link href="/work"><a>work</a></Link>
            </li>
            <li>
                <Link href="/blog"><a>blog</a></Link>
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
            // width: 100%;
            background: #4A4545;
            // padding-top: 24px;
            // padding-right: 20px;
            // margin-right: 0px;
            // margin-left: 20px;
            align-content: center;
            border-left: 1px solid #5A5353;
            border-bottom: 1px solid #5A5353;
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
            font-size: 0.9em;
            float: right;
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
            // font-weight: bold;
            // border-bottom: 2px solid grey;
        }
        `}</style>
    </nav>
);

export default Header;
