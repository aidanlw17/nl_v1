const VimPanel = () => (
    <div className="container">
        {/* <div className="container-head"></div> */}
		<div className="container-bottom">
            <p className="title"><strong>A short bit about me</strong></p>
            <p>My name is Aidan. At this point, that's obvious.</p>
            <p>I'm a software developer and a student of Engineering Science at the University of Toronto.</p>
            <br />
            <p>I enjoy challenging projects, competition, and the opportunity to collaborate with other developers.</p>
            <p>My technical interests include cloud computing, networking, operating systems, and machine learning.</p>
            <p>I love open source work, and I'm an active contributor to the <a href="https://acousticbrainz.org/" target="_blank">AcousticBrainz project.</a></p>
            <br />
            <p>I'm also fascinated by music, sports, mathematics, philosophy, and simulation theory.</p>
            <p>If I'm not hacking away, you could probably find me doing something related to these things.</p>
            <br />
            <p>Shoot me an email, or message me on freenode IRC if you want to work together.</p>
            <p>... and if you are a hiring manager, definitely send an email my way ;)</p>
            <ul>
                <li>Email: <a href="mailto:alawfordwickham@mail.utoronto.ca" target="_blank"> alawfordwickham@mail.utoronto.ca</a></li>
                <li>Freenode IRC: aidanlw17</li>
            </ul>
            <p>You can also find me on GitHub, LinkedIn, and Twitter!</p>
            <ul>
                <li><a href="https://www.github.com/aidanlw17" target="_blank">github.com/aidanlw17</a></li>
                <li><a href="https://www.linkedin.com/in/alawfordwickham/" target="_blank">linkedin.com/in/alawfordwickham</a></li>
            </ul>
            <br />
            <p className="title"><strong>FAQ</strong></p>
            <p>Q: Where does the name 'NoodLab' come from?</p>
            <p>A: My first gamertag on Xbox was 'angrynoodle117', and like all programmers, at first I wanted to develop video games. Of course, the name of my studio would have to follow from my gamertag!</p>
        </div>
        <style jsx>{`
            .container {
				background: #5A5353;
				color: #9BC1BC;
				// border-radius: 1%;
                // border: 0.3em solid #bfbdbd;
                // border-top: 2em solid #4A4545;
				// border-left: 0.2em solid #4A4545;
				// border-right: 0.2em solid #4A4545;
				// border-bottom: 0.2em solid #4A4545;
                // flex: 1 1 auto;
				// height: 100%;
                width: 60%;
                // margin: 2em;
                vertical-align: center;
                margin: 0em 2em;
				min-width: 470px;
                min-height: 450px;
                font-size: 1.2em;
            }

            .container-bottom {
                padding-top: 2em;
                padding-bottom: 5em;
                padding-left: 8em;
                padding-right: 8em;
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
                color: #F4F1BB;
            }

            // .container-head {
            //     height: 2em;
            //     background: #4A4545;
            //     // border-radius: 1%;
            // }
        `}</style>
    </div>
);

export default VimPanel;