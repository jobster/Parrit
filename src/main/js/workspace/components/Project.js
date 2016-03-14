var React = require('react');

var Workspace = require('workspace/components/Workspace.js');
var Buttons = require('shared/components/Buttons.js');

var PrimaryButton = Buttons.PrimaryButton;

var Project = React.createClass({
    propTypes: {
        savePairing: React.PropTypes.func.isRequired,
        getRecommendedPairs: React.PropTypes.func.isRequired,

        settings: React.PropTypes.object.isRequired,
        data: React.PropTypes.object.isRequired,
        setNewPersonModalOpen: React.PropTypes.func.isRequired,
        setNewSpaceModalOpen: React.PropTypes.func.isRequired,
        createPerson: React.PropTypes.func.isRequired,
        createSpace: React.PropTypes.func.isRequired,
        deleteSpace: React.PropTypes.func.isRequired
    },

    render: function() {
        var workspaceProps = {
            settings: this.props.settings,
            people: this.props.data.workspace.people,
            spaces: this.props.data.workspace.spaces,
            setNewPersonModalOpen: this.props.setNewPersonModalOpen,
            setNewSpaceModalOpen: this.props.setNewSpaceModalOpen,
            createPerson: this.props.createPerson,
            createSpace: this.props.createSpace,
            deleteSpace: this.props.deleteSpace
        };

        return <div className="project">
            <div className="sub-header">
                <div className="project-name">{this.props.data.workspace.name}</div>
                <div className="project-actions">
                    <PrimaryButton name="Recommend Pairs" clickFunction={this.props.getRecommendedPairs}/>
                    <PrimaryButton name="Record Pairs" clickFunction={this.props.savePairing}/>
                </div>
            </div>
            <Workspace {...workspaceProps}/>
        </div>
    }
});

module.exports = Project;