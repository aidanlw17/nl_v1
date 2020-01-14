import Header from './Header';
import Head from 'next/Head';
import MainContent from '../components/MainContent';

const Layout = props => (
    <div className="top">
        <Head>
            <title>Aidan Lawford-Wickham</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.0/themes/prism.min.css"/>
                <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'></link>
        </Head>
        <Header />
        <MainContent>
            {props.children}
        </MainContent>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.0/prism.min.js"></script>
        <style jsx global>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div {
                // height: 100%;
                // overflow: hidden;
                // position: absolute;
            }

            body { 
                background: #FFFFFF;
                font: 11px menlo;
                color: #2C4251;
                margin-top: 0;
                margin-right: 0;
                margin-left: 0;
                height: 100%;
                overflow: auto;
            }

            :not(pre) > code {
                padding: 3px 5px;
                color: #111111;
                border-radius: 3px;
                background: #f5f2f0;
            }

            h1, h2, h3, h4, h5, h6 {
                font-family: menlo;
                font-weight: 600;
            }

            h1 {
                font-size: 1.7em;
                line-height: 40px;
            }

            h3 {
                font-size: 1.4em;
            }

            a {
                text-decoration: none;
                color: #E7BB41;
            }

            .box {
				display: flex;
				height: 100%;
            }
        `}</style>
    </div>
);

export default Layout;
