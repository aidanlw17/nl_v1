import Layout from '../components/Layout';
import Messenger from '../components/Messenger';
import Timer from '../components/Timer';
import Link from "next/link";

const news = ['Aidan Lawford-Wickham', 'Engineering Scientist', 'Creative Mind', 'Machine Intelligence Specialist', 'Software Developer'];

const Index = () => (
	<Layout>
		<div className="box">
		<div className="container fetch-container">
			{/* <div className="container-head"></div> */}
			<div className="container-bottom">
				<p>[aidan@noodlab ~]$ echo "Welcome to NoodLab! Make yourself at home."</p>
				<p>Welcome to NoodLab! Make yourself at home.</p>
				<p>[aidan@noodlab ~]$ neofetch</p>
				<div className="ascii-box">
				<pre className="ascii">-`<br />
                  .o+`<br />
                 `ooo/<br />
                `+oooo:<br />
               `+oooooo:<br />
               -+oooooo+:<br />
             `/:-:++oooo+:<br />
            `/++++/+++++++:<br />
           `/++++++++++++++:<br />
          `/+++ooooooooooooo/`<br />
         ./ooosssso++osssssso+`<br />
        .oossssso-````/ossssss+`<br />
       -osssssso.      :ssssssso.<br />
      :osssssss/        osssso+++.<br />
     /ossssssss/        +ssssooo/-<br />
   `/ossssso+/:-        -:/+osssso+-<br />
  `+sso+:-`                 `.-/+oso:<br />
 `++:.                           `-/+/<br />
 .`                                 `</pre>
				<ul className="fetch-info">
					<li><strong className="name">aidan@noodlab</strong></li>
					<li>-------------</li>
					<li><strong>OS</strong>: Arch Linux x86_64</li>
					<li><strong>Kernel</strong>: 5.3.11-arch1-1</li>
					<li><strong>Uptime</strong>: <Timer /></li>
					<li><strong>Packages</strong>: 583 (pacman)</li>
					<li><strong>Shell</strong>: bash 5.0.11</li>
					<li><strong>Status</strong>: Searching for Internship</li>
					<br />
					<li className="palette">
						<div className="palette-box colour-1"></div>
						<div className="palette-box colour-2"></div>
						<div className="palette-box colour-3"></div>
						<div className="palette-box colour-4"></div>
						<div className="palette-box colour-5"></div>
					</li>
				</ul>
				</div>
				<p>[aidan@noodlab ~]$ social</p>
				<ul>
                <li className="social-list"><a className="social-a"href="https://www.github.com/aidanlw17" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                <li className="social-list"><a className="social-a"href="https://www.linkedin.com/in/alawfordwickham/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li className="social-list"><a className="social-a"href="https://www.medium.com/@aidan.lw17" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium" aria-hidden="true"></i></a></li>
            	</ul>
				<p>[aidan@noodlab ~]$ who am i</p>
				<p><Messenger news={news}/></p>
			</div>
		</div>
		</div>
		<style>{`
			.social-list {
				list-style-type: none;
				display: inline;
				padding-right: 5%;
			}

			// .social-a {
			// 	width: 40px;
			// 	height: 40px;
			// }

			.social-list i {
                color: #EFF8E2;
                padding: 3px;
                // width: 40px;
                // height: 40px;
                text-align: center;
                font-size: 1.3em;
			}
			
			.social-list i:hover {
				transform: scale(1.3, 1.3);
			}

			.palette {
				display: inline;
			}

			.palette-box {
				display: inline;
				float: left;
				width: 16%;
				height: 8px;
				min-width: 10%;
			}

			.colour-1 {
				background: #ED6A5A;
			}

			.colour-2 {
				background: #F4F1BB;
			}

			.colour-3 {
				background: #9BC1BC;
			}

			.colour-4 {
				background: #E6EBE0;
			}

			.colour-5 {
				background: #4A4545;
			}

			.name, strong {
				color: #ED6A5A;
			}

			.ascii {
				font-family: monospace;
				white-space: pre;
				text-align: center;
				flex: 1 1 auto;
				padding: 0em 2em;
			}

			// #last-p {
			// 	bottom: 0px;
			// }

			.fetch-info {
				list-style-type: none;
				flex: 1 1 auto;
				padding: 0px;
			}

			.ascii-box {
				display: flex;
			}

			.box {
				display: flex;
				height: 100%;
			}

			.fetch-container {
				font-size: 1.2em;
				// flex: 1 1 auto;
				// border-radius: 1%;
				// border: 0.3em solid #bfbdbd;
				// border-top: 2em solid #4A4545;
				// border-left: 0.2em solid #4A4545;
				// border-right: 0.2em solid #4A4545;
				// border-bottom: 0.2em solid #4A4545;
				height: 48%;
				width: 50%;
				min-width: 470px;
				min-height: 450px;
				background: #5A5353;
				color: #9BC1BC;
				// margin-left: 10%;
				margin-top: 2em;
				padding-right: 100px;
				padding-left: 100px;
			}

			.info-container {
				// flex: 1 1 auto;
				height: 40%;
				width: 30%;
				float: right;
			}

			// .container-head {
			// 	height: 2em;
			// 	background: #4A4545;
			// 	// border-radius: 1%;
			// 	// border: 0.2em solid #4A4545;
			// }

			.container-bottom {
				// height: 500em;
			}

			p {
				padding-left: 3%;
			}

			.info-p {
				// text-align: left;
				position: relative;
				top: 50%;
				padding-left: 10%;
			}
		`}</style>
	</Layout>
);

export default Index;
