import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as activityActions from '../../actions/activityActions';

class ActivitiesPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            activity: { name: '' }
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onNameChange(event) {
        const activity = this.state.activity;
        activity.name = event.target.value;
        this.setState({activity: activity});
    }

    onClickSave() {
        this.props.dispatch(activityActions.createActivity(this.state.activity));
    }

    activityRow(activity, index) {
        return <div key={index}>{activity.name}</div>
    }

    render() {
        return (
            <div>
                <h1>Activities</h1>
                {this.props.activities.map(this.activityRow)}
                <h2>Add activities</h2>
                <input type="text"
                       onChange={this.onNameChange}
                       value={this.state.activity.name} />
                <input type="submit"
                       value="Add"
                       onClick={this.onClickSave} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      activities: state.activities//name from root reducer
    };
};


export default connect(mapStateToProps)(ActivitiesPage);