import Header from './Header';
import Head from 'next/Head';

const Layout = props => (
    <div>
        <Head>
            <title>Aidan Lawford-Wickham</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <Header />
        {props.children}
        <style jsx global>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div {
                height: 100%;
            }

            body { 
                background: #E6EBE0;
                font: 11px menlo;
                color: #5A5353;
                margin-top: 0;
                margin-right: 0;
                height: 100%;
            }
        `}</style>
    </div>
);

export default Layout;
