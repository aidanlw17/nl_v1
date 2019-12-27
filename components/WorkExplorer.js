import Tabs from './Tabs';
import Gsoc from './work/Gsoc';
import AcousticBrainz from './work/AcousticBrainz';
import DataScience from './work/DataScience';
import Codein from './work/Codein';

class WorkExplorer extends React.Component {
    constructor() {
        super()
        this.state = {
            showSideBar: true,
            active: 1
        }
    }

    render() {
        return (
            <Tabs>
                <Gsoc label="Google Summer of Code"/>
                <AcousticBrainz label="AcousticBrainz"/>
                <DataScience label="uToronto Data Science Team"/>
                <Codein label="Google Code-in Mentor"/>
            </Tabs>
        );
    }
}

export default WorkExplorer;
