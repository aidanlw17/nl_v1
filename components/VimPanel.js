import Link from "next/link";

const VimPanel = () => (
    <div className="container">
        {/* <div className="container-head"></div> */}
		<div className="container-bottom">
            {/* <p className="title"><strong>A short bit about me</strong></p> */}
            <p><strong>[aidan@noodlab ~]$</strong> cat about.txt</p>
            <p>Hey, it's nice to meet you.</p>
            <p>I'm a software developer and a student in <a href="https://engsci.utoronto.ca/explore_our_program/about_engsci/" target="_blank">Engineering Science at the University of Toronto</a>.</p>
            <br />
            <p>I was previously a Google Summer of Code student developer at <a>MetaBrainz Foundation Inc</a>.</p>
            <p>Find my other projects on <a href="https://www.github.com/aidanlw17" target="_blank">GitHub</a>, add me on <a href="https://www.linkedin.com/in/alawfordwickham/" target="_blank">LinkedIn</a>, and check out my <a href="/resume.pdf" target="_blank">resume</a>!</p>
            <p>You can also read about my work <a href="https://blog.metabrainz.org/2019/08/26/gsoc-2019-recording-similarity-indexing-for-acousticbrainz/" target="_blank">here</a>, or <Link href="/blog"><a target="_blank">here</a></Link>.</p>
            <br />
            <p>I enjoy challenging projects, competition, and the opportunity to collaborate with other developers.</p>
            <p>My technical interests include cloud computing, networking, operating systems, and machine learning.</p>
            <p>I <span>&lt;3</span> open source, and I'm an active contributor to the <a href="https://acousticbrainz.org/" target="_blank">AcousticBrainz project</a>.</p>
            <br />
            <p>I'm also fascinated by music, sports, mathematics, philosophy, and simulation theory.</p>
            <p>If I'm not hacking away, you'll probably find me doing something related to these things.</p>
            <br />
            <p>Shoot me an email, find me on Twitter, or chat with me on freenode IRC if you want to work together.</p>
            <p>... if you're a hiring manager, you can send an email my way too ;)</p>
            <ul>
                <li>Email: <a href="mailto:alawfordwickham@mail.utoronto.ca" target="_blank"> alawfordwickham@mail.utoronto.ca</a></li>
                <li>Twitter: <a href="https://twitter.com/aidanlw17" target="_blank">aidanlw17</a></li>
                <li>Freenode IRC: aidanlw17</li>
            </ul>
            {/* <p>You can also find me on GitHub, LinkedIn, and Twitter!</p>
            <ul>
                <li><a href="https://www.github.com/aidanlw17" target="_blank">github.com/aidanlw17</a></li>
                <li><a href="https://www.linkedin.com/in/alawfordwickham/" target="_blank">linkedin.com/in/alawfordwickham</a></li>
            </ul> */}
            {/* <p className="title"><strong>FAQ</strong></p>
            <p>Q: Where does the name 'NoodLab' come from?</p>
            <p>A: My first gamertag on Xbox was 'angrynoodle117', and like all programmers, at first I wanted to develop video games. Of course, the name of my studio would have to follow from my gamertag!</p> */}
        </div>
        <style jsx>{`
            // .container {
			// 	background: #FFFFFF;
			// 	color: #9BC1BC;
			// 	// border-radius: 1%;
            //     // border: 0.3em solid #bfbdbd;
            //     // border-top: 2em solid #4A4545;
			// 	// border-left: 0.2em solid #4A4545;
			// 	// border-right: 0.2em solid #4A4545;
			// 	// border-bottom: 0.2em solid #4A4545;
            //     // flex: 1 1 auto;
			// 	// height: 100%;
            //     width: 60%;
            //     // margin: 2em;
            //     vertical-align: center;
            //     margin: 0em 2em;
			// 	min-width: 470px;
            //     min-height: 450px;
            //     font-size: 1.2em;
            // }

            .container {
				font-size: 1.2em;
				// flex: 1 1 auto;
				// border-radius: 1%;
				// border: 0.3em solid #bfbdbd;
				// border-top: 2em solid #4A4545;
				// border-left: 0.2em solid #4A4545;
				// border-right: 0.2em solid #4A4545;
				// border-bottom: 0.2em solid #4A4545;
				// height: 48%;
				width: 56%;
				min-width: 470px;
				min-height: 450px;
				background: #FFFFFF;
				color: #363537;
				// margin-left: 10%;
				// margin-top: 2em;
				margin: 3em auto;
				padding-right: 100px;
				padding-left: 100px;
			}

            // .container-bottom {
            //     // padding-top: 2em;
            //     padding-bottom: 5em;
            //     padding-left: 8em;
            //     padding-right: 8em;
            // }

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
                font-weight: bold;
                // color: #F4F1BB;
                color: #E7BB41;
            }

            // .container-head {
            //     height: 2em;
            //     background: #4A4545;
            //     // border-radius: 1%;
            // }
            span {
                color: #BF1A2F;
                font-weight: bold;
            }
        `}</style>
    </div>
);

export default VimPanel;
