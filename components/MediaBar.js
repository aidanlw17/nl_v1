const MediaBar = () => (
        <nav className="media-bar">
            <ul>
                <li><a href="https://www.github.com/aidanlw17" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/alawfordwickham/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="https://www.medium.com/@aidan.lw17" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium" aria-hidden="true"></i></a></li>
            </ul>
            <style jsx>{`
            li {
                list-style-type: none;
                display: block;
                padding: 50% 0px;
            }

            a {
                text-decoration: none;
                color: #5A5353;
            }

            i {
                color: #5A5353;
                padding: 3px;
                width: 16px;
                height: 16px;
                // transform: rotate(0deg);
                text-align: center;
                font-size: 16px;
            }
            
            ul {
                padding: 4em 0px;
                text-align: center;
                height: 100%;
            }

            .media-bar {
                // position: absolute;
                bottom: 0px;
                height: 94%;
                width: 3%;
                margin-left: 5px;
                margin-right: 5px;
                margin-top: -15px;
                // padding-left: 0
                // padding-top: 30px;
                border-left: 1px solid #5A5353;
                border-right: 1px solid #5A5353;
                border-top: 1px solid #5A5353;
                align-content: center;
                min-width: 2em;
                flex: 1 1 auto;
            }
            `}</style>
        </nav>
);

export default MediaBar;