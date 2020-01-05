import Header from './Header';
import Head from 'next/Head';
import MediaBar from '../components/MediaBar';
import MainContent from '../components/MainContent';

const Layout = props => (
    <div className="top">
        <Head>
            <title>Aidan Lawford-Wickham</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <Header />
        <MainContent>
            {props.children}
        </MainContent>
        <style jsx global>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div {
                height: 100%;
                overflow: hidden;
                // position: absolute;
            }

            body { 
                // background: #E6EBE0;
                // background: #5A5353;
                background: #FFFFFF;
                font: 11px menlo;
                // color: #5A5353;
                // color: #E6EBE0;
                color: #2C4251;
                margin-top: 0;
                margin-right: 0;
                margin-left: 0;
                height: 100%;
                // border: 1px solid black;
                // margin: 20px
            }

            .box {
				display: flex;
				height: 100%;
            }
        `}</style>
    </div>
);

export default Layout;
