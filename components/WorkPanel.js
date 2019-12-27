const WorkPanel = () => (
    <div className="container">
        {/* <div className="container-head"></div> */}
        <p className="title"><strong>Work Experience</strong></p>
        <div className="work-item">
            <div className="item-meta">
                <img className="item-img gsoc19-img" src="/images/gsoc_logo3.png" />
                <div className="item-head">
                    <p className="item-title">Google Summer of Code Student Developer</p>
                    <p className="item-subhead"><em>MetaBrainz Foundation Inc.</em></p>
                    <p className="item-date">May 2019 - August 2019</p>
                    <ul className="item-links">
                        <li><a className="item-link" href="https://github.com/aidanlw17/acousticbrainz-server/tree/eval" target="_blank">GitHub</a></li>
                        <li><a className="item-link" href="https://blog.metabrainz.org/2019/08/26/gsoc-2019-recording-similarity-indexing-for-acousticbrainz/" target="_blank">Blog Post</a></li>
                        <li><a className="item-link" href="https://summerofcode.withgoogle.com/archive/2019/projects/5638226268651520/" target="_blank">GSoC Abstract</a></li>
                        {/* <li><a className="item-link" href="/gsoc19_reference.pdf" target="_blank">Reference Letter</a></li> */}
                    </ul>
                </div>
            </div>
            <div className="item-info">
                <p className="item-description">During GSoC 2019, I architected a similarity indexing engine for over 14 million audio recordings in a PostgreSQL database. My work included collecting and processing large batches of data efficiently, creating and saving compressed data dumps, performing computations in high dimensional vector spaces, implementing a nearest neighbours algorithm, creating RESTFul API endpoints, unit testing functionality, and writing coherent documentation. My implementation maintained similar speed when scaling from a test database of 1 million recordings to the full production database. Since the end of the summer, I have continued developing the similarity engine alongside my mentor, Alastair Porter. I have collaborated with other developers from the foundation to build playlist recommendation tools using data that I generated. I also attended the MetaBrainz Summit in Barcelona, Spain, where I presented my work on the similarity engine.</p>
                <ul className="item-skills-list">
                    <li className="item-skill">Python</li>
                    <li className="item-skill">Flask</li>
                    <li className="item-skill">PostgreSQL</li>
                    <li className="item-skill">SQLAlchemy</li>
                    <li className="item-skill">Docker</li>
                    <li className="item-skill">Git</li>
                    <li className="item-skill">Javascript</li>
                    <li className="item-skill">React</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="work-item">
            <div className="item-meta">
                <img className="item-img" src="/images/acousticbrainz_logo.png" />
                <div className="item-head">
                    <p className="item-title">AcousticBrainz Project Developer and Contributor</p>
                    <p className="item-subhead"><em>MetaBrainz Foundation Inc.</em></p>
                    <p className="item-date">February 2019 - Present</p>
                    <ul className="item-links">
                        <li><a className="item-link" href="https://github.com/metabrainz/acousticbrainz-server" target="_blank">GitHub</a></li>
                        <li><a className="item-link" href="https://acousticbrainz.org/" target="_blank">Project Website</a></li>
                    </ul>
                </div>
            </div>
            <div className="item-info">
                <p className="item-description">I have been a frequent contributor and developer for AcousticBrainz.org, an open-source/open-data web application centered around audio data analysis. In my time working with AcousticBrainz I have reduced the server load by 50% after improving the database schema and optimizing PostgreSQL queries. I have worked to constantly refactor the Python codebase, and improve unit tests and documentation of features. I have also interactively visualized the genre classification of high dimensional audio recording data with t-SNE and PCA algorithms.</p>
                <ul className="item-skills-list">
                    <li className="item-skill">Python</li>
                    <li className="item-skill">JIRA</li>
                    <li className="item-skill">Jenkins</li>
                    <li className="item-skill">Git</li>
                    <li className="item-skill">PostgreSQL</li>
                    <li className="item-skill">Docker</li>
                    <li className="item-skill">matplotlib</li>
                    <li className="item-skill">NumPy</li>
                    <li className="item-skill">Dimensionality Reduction</li>
                    <li className="item-skill">Data Visualization</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="work-item">
            <div className="item-meta">
                <img className="item-img" src="/images/codein_logo.png" />
                <div className="item-head">
                    <p className="item-title">Google Code-in Mentor</p>
                    <p className="item-subhead"><em>MetaBrainz Foundation Inc.</em></p>
                    <p className="item-date">November 2019 - Present</p>
                    <ul className="item-links">
                        <li><a className="item-link" href="https://github.com/aidanlw17/acousticbrainz-server/tree/eval">GitHub</a></li>
                        <li><a className="item-link" href="https://github.com/aidanlw17/acousticbrainz-server/tree/eval">Blog Post</a></li>
                        <li><a className="item-link" href="https://github.com/aidanlw17/acousticbrainz-server/tree/eval">Project Description</a></li>
                    </ul>
                </div>
            </div>
            <div className="item-info">
                <p className="item-description">During GSoC 2019, I architected a similarity indexing engine for over 14 million audio recordings in a PostgreSQL database. My work included collecting and processing large batches of data efficiently, creating and saving compressed data dumps, performing computations in high dimensional vector spaces, implementing a nearest neighbours algorithm, creating RESTFul API endpoints, unit testing functionality, and writing coherent documentation. My implementation maintained similar speed when scaling from a test database of 1 million recordings to the full production database. Since the end of the summer, I have continued developing the similarity engine alongside my mentor, Alastair Porter. I have collaborated with other developers from the foundation to build playlist recommendation tools using data that I generated. I also attended the MetaBrainz Summit in Barcelona, Spain, where I presented my work on the similarity engine.</p>
                <ul className="item-skills-list">
                    <li className="item-skill">Python</li>
                    <li className="item-skill">Flask</li>
                    <li className="item-skill">PostgreSQL</li>
                    <li className="item-skill">SQLAlchemy</li>
                    <li className="item-skill">Docker</li>
                    <li className="item-skill">Git</li>
                    <li className="item-skill">Javascript</li>
                    <li className="item-skill">React</li>
                    <li className="item-skill">Ajax</li>
                    <li className="item-skill">Annoy</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="work-item">
            <div className="item-meta">
                <img className="item-img datascience-img" src="/images/datascience_logo.png" />
                <div className="item-head">
                    <p className="item-title">Data Scientist - Energy Forecasting</p>
                    <p className="item-subhead"><em>University of Toronto Data Science Team</em></p>
                    <p className="item-date">February 2019 - Present</p>
                    <ul className="item-links">
                        <li><a className="item-link" href="https://github.com/aidanlw17/energy-demand-forecasting" target="_blank">GitHub</a></li>
                        <li><a className="item-link" href="http://datasciencetoronto.com/" target="_blank">Website</a></li>
                    </ul>
                </div>
            </div>
            <div className="item-info">
                <p className="item-description">I worked as a developer and data scientist for the energy forecast team, tasked with predicting peak energy demand days across Ontario using historical demand and weather patterns. This involved creating and testing a variety of models including recurrent and convolutional neural networks. We also built a data scraper with Python to collect StatCan weather data and IESO energy data, and visualized data using matplotlib and seaborn.</p>
                <ul className="item-skills-list">
                    <li className="item-skill">Python</li>
                    <li className="item-skill">JIRA</li>
                    <li className="item-skill">Jenkins</li>
                    <li className="item-skill">Git</li>
                    <li className="item-skill">PostgreSQL</li>
                    <li className="item-skill">Docker</li>
                    <li className="item-skill">matplotlib</li>
                    <li className="item-skill">NumPy</li>
                    <li className="item-skill">Dimensionality Reduction</li>
                    <li className="item-skill">Data Visualization</li>
                </ul>
            </div>
        </div>
        <style jsx>{`
            .container {
				background: #5A5353;
				color: #9BC1BC;
                padding-top: 2em;
                padding-bottom: 5em;
                padding-left: 8em;
                padding-right: 8em;
                width: 60%;
                // margin: 2em;
                vertical-align: center;
                margin: 0em 2em;
				min-width: 470px;
                min-height: 450px;
                font-size: 1.2em;
                // overflow: auto;
                // position: fixed;
                overflow: auto;
            }

            .container div {
                overflow: auto;
            }

            hr {
                border: 0.5px dotted #E6EBE0;
            }

            .item-info {
                flex: 10 1 auto;
            }

            .item-img {
                max-height: 150px;
                max-width: 150px;
                flex: 1 1 auto;
            }
            
            .gsoc19-img {
                padding-top: 15px;
                max-height: 120px;
                max-width: 120px;
                padding: 15px 15px 0px 15px;
            }

            .datascience-img {
                padding-top: 25px;
                max-height: 90px;
                max-width: 150px;
            }

            .item-head {
                margin-left: 20px;
            }

            .item-title {
                font-size: 18px;
                margin-bottom: 0px; 
            }

            .item-date {
                color: #E6EBE0;
                font-size: 12px;
            }

            .itm-subtitle {
                padding: 0px;
                margin: 0px;
            }

            .item-skill {
                background: #E6EBE0;
                // background: #ED6A5A;
                // background: #F4F1BB;
                color: #5A5353;
                // color: #E6EBE0;
                padding: 2px 5px;
                margin: 2px 2px;
                display: inline-block;
                border-radius: 4px;
            }

            .item-skills-list {
                margin: 0.6em 0em;
                padding-top: 4px;
                padding-left: 0px;
                text-align: center;
            }

            .item-links li {
                background: #E6EBE0;
                // background: #ED6A5A;
                // background: #F4F1BB;
                color: #5A5353;
                // color: #E6EBE0;
                padding: 2px 5px;
                margin: 2px 2px;
                display: inline-block;
                border-radius: 4px;
                font-size: 12px;
            }

            .item-links {
                padding-left: 0px;
            }

            .item-links li a {
                color: #5A5353;
            }

            .item-links li:hover {
                transform: scale(1.05, 1.05);
            }

            .item-meta {
                display: flex;
            }

            .item-description {
                line-height: 25px;
            }

            .work-item {
                margin-bottom: 20px;
            }

            #special {
                overflow: auto;
            }

            .title {
                font-size: 1em;
                padding-bottom: 0.6em;
                color: #E6EBE0;
            }

            li {
                list-style-type: none;
                padding: 0.2em;
            }

            a {
                text-decoration: none;
                // color: #F4F1BB;
                // margin-left: 4px;
                // margin-right: 4px;
            }

            // .container-head {
            //     height: 2em;
            //     background: #4A4545;
            //     // border-radius: 1%;
            // }
        `}</style>
    </div>
);

export default WorkPanel;