class Gsoc extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <p>This is {this.props.label}</p>
                <style jsx>{`
                    p {
                        margin: 0;
                    }
                `}</style>
            </div>
        );
    }
}

export default Gsoc;
