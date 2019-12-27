import PropTypes from 'prop-types';

class Tab extends React.Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label
            }
        } = this;

        let className = 'tab-list-item';
        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return (
            <li className={className} onClick={onClick}>
                {label}
                <style jsx>{`
                    .tab-list-item {
                        padding: 3em 0em;
                        text-align: center;
                        border-bottom: 1px solid #4A4545;
                    }

                    .tab-list-active {
                        background: rgba(237, 106, 90, 0.1);
                        // background: rgba(244, 241, 187, 0.2);
                    }

                    .tab-list-item:hover {
                        // border: 1px solid rgba(244, 241, 187, 0.2);
                        border: 1px solid rgba(230, 235, 224, 0.3);
                    }
                `}</style>
            </li>
        );
    }
}

export default Tab;
