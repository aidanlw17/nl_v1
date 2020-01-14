import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label
        }
    }

    onClickTabItem = (tab) => {
        this.setState({
            activeTab: tab
        });
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children
            },
            state: {
                activeTab
            }
        } = this;
        
        return (
            <div className="tabs">
                <div className="tab-list">
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </div>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child;
                    })}
                </div>
                <style jsx>{`
                    .tabs {
                        display: flex;
                        height: 100%;
                        padding: 1em 10% 0em 10%;
                    }

                    .tab-list {
                        flex: 1 1 auto;
                        min-width: 100px;
                        width: 20%;
                        border-top: 2em solid #4A4545;
                        border-left: 0.2em solid #4A4545;
                        border-right: 0.1em solid #4A4545;
                        border-bottom: 0.2em solid #4A4545;
                        list-style-type: none;
                    }

                    .tab-content {
                        flex: 6 1 auto;
                        min-width: 365px;
                        width: 80%;
                        border-top: 2em solid #4A4545;
                        border-left: 0.1em solid #4A4545;
                        border-right: 0.2em solid #4A4545;
                        border-bottom: 0.2em solid #4A4545;
                    }
                `}</style>
            </div>
        );
    }
}

export default Tabs;
