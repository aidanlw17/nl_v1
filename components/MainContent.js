// import { useRouter } from 'next/router';

const MainContent = props => {
    // const router = useRouter();
    return (
        <div className="main-box">
        {/* <div className="main-box-head"><span>:prev current - index next:</span></div> */}
            {props.children}
            <style jsx>{`
                .main-box {
                    // border: 1px solid #5A5353;
                    width: 100%;
                    // height: 90%;
                    // margin-top: 15px;
                    // margin-left: 15px;
                    // margin-right: 15px;
                    // margin-bottom: 15px;
                    // bottom: -400px;
                    // flex: 1 1 auto;
                    align-content: center;
                    // overflow: auto;
                }

                .main-box-head {
                    height: 2em;
                    background: #4A4545;
                    color: #E6EBE0;
                    font-family: monospace;
                    font-size: 0.9em;
                    text-align: center;
                    // vertical-align: center;
                    line-height: 2em;
                }

                h5 {
                    color: #5A5353;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}
export default MainContent;