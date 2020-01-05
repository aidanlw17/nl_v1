import Layout from '../components/Layout';
import Messenger from '../components/Messenger';
import Timer from '../components/Timer';
import Link from "next/link";

const news = ['Aidan Lawford-Wickham', 'Engineering Scientist', 'Creative Mind', 'Machine Intelligence Specialist', 'Software Developer'];

const Index = () => (
	<Layout>
		<div className="container">
			{/* <div className="container-head"></div> */}
			<div className="container-bottom">
				<p><strong>[aidan@noodlab ~]$</strong> echo "Welcome to NoodLab! Make yourself at home."</p>
				<p>Welcome to NoodLab! Make yourself at home.</p>
				<p><strong>[aidan@noodlab ~]$</strong> neofetch</p>
				<div className="ascii-box">
				<pre className="ascii">__    __                            __  __                 __      <br />
|  \  |  \                          |  \|  \               |  \      <br />
| $$\ | $$  ______    ______    ____| $$| $$       ______  | $$____  <br />
| $$$\| $$ /      \  /      \  /      $$| $$      |      \ | $$    \ <br />
| $$$$\ $$|  $$$$$$\|  $$$$$$\|  $$$$$$$| $$       \$$$$$$\| $$$$$$$\<br />
| $$\$$ $$| $$  | $$| $$  | $$| $$  | $$| $$      /      $$| $$  | $$<br />
| $$ \$$$$| $$__/ $$| $$__/ $$| $$__| $$| $$_____|  $$$$$$$| $$__/ $$<br />
| $$  \$$$ \$$    $$ \$$    $$ \$$    $$| $$     \\$$    $$| $$    $$<br />
 \$$   \$$  \$$$$$$   \$$$$$$   \$$$$$$$ \$$$$$$$$ \$$$$$$$ \$$$$$$$ <br /></pre>
				<ul className="fetch-info">
					<li><strong className="name">aidan@noodlab</strong></li>
					<li>-------------</li>
					{/* <li><strong>OS</strong>: Arch Linux x86_64</li> */}
					<li><strong>OS</strong>: Nood_OS x86_64</li>
					{/* <li><strong>Kernel</strong>: 5.3.11-arch1-1</li> */}
					<li><strong>Kernel</strong>: 5.3.11-nood1-1</li>
					<li><strong>Uptime</strong>: <Timer /></li>
					<li><strong>Updated:</strong>: 05/01/2020</li>
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
				<p><strong>[aidan@noodlab ~]$</strong> social</p>
				<ul>
                <li className="social-list"><a className="social-a"href="https://www.github.com/aidanlw17" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                <li className="social-list"><a className="social-a"href="https://www.linkedin.com/in/alawfordwickham/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li className="social-list"><a className="social-a"href="https://www.medium.com/@aidan.lw17" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium" aria-hidden="true"></i></a></li>
            	</ul>
				<p><strong>[aidan@noodlab ~]$</strong> whoami</p>
				<p><Messenger news={news}/></p>
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
                color: #363537;
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
				// background: #ED6A5A;
				// background: #32936F;
				background: #60463B;
			}

			.colour-2 {
				// background: #F4F1BB;
				background: #BF1A2F;
			}

			.colour-3 {
				// background: #9BC1BC;
				background: #E7BB41;
			}

			.colour-4 {
				// background: #E6EBE0;
				background: #FFFFFF;
			}

			.colour-5 {
				// background: #4A4545;
				background: #363537;
			}

			.name {
				// color: #ED6A5A;
				// color: #B6C649;
				// color: #B97375;
				color: #BF1A2F;
				// color: #FB3640;
				// color: #E54B4B;
			}

			li > strong {
				// color: #B6C649;
				// color: #FC7753;
				// color: #624763;
				// color: #B0D0D3;
				// color: #B97375;
				color: #BF1A2F;
				// color: #363537;
			}

			.ascii {
				font-family: monospace;
				white-space: pre;
				text-align: center;
				flex: 1 1 auto;
				padding: 0em;
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
				// display: flex;
				height: 100%;
				// margin: 0 auto;
			}

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
				// padding-left: 3%;
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
