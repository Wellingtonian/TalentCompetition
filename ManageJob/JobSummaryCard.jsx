import React from 'react';
import Cookies from 'js-cookie';
import { Popup, Card, Button, Icon, Label} from 'semantic-ui-react';
import moment from 'moment';

export class JobSummaryCard extends React.Component {
    constructor(props) {
        super(props);
        this.selectJob = this.selectJob.bind(this)
    }

    selectJob(id) {
        var cookies = Cookies.get('talentAuthToken');
        //url: 'http://localhost:51689/listing/listing/closeJob',
    }

    render() {
        let title = this.props.jobData ? `${this.props.jobData.title}` : ""
        let location = this.props.jobData ? `${this.props.jobData.location.city}` + " " + `${this.props.jobData.location.country}` : ""
        let summary = this.props.jobData ? `${this.props.jobData.summary}` : ""
        let noOfSuggestions = this.props.jobData ? `${this.props.jobData.noOfSuggestions}` : ""

        return (
            <div className="card-width">
                <Card fluid link color='olive' style={{ minHeight: 300}}>
                    <Card.Content>
                        <Card.Header content={title} />
                        <Label ribbon="right" color="black">
                            <Icon name="user" />
                            {noOfSuggestions}
                        </Label>
                        <Card.Meta content={location} />
                        <div className="card-description-height"><Card.Description content={summary}/></div>
                    </Card.Content>
                    <Card.Content extra>
                        <Button.Group  size="tiny" compact>
                        <Button content="Expired" negative size="tiny" compact />
                            <Button basic color='blue'>
                                <Icon name="ban" />
                                Close
                            </Button>
                            <Button basic color='blue'>
                                <Icon name="edit" />
                                Edit
                            </Button>
                            <Button basic color='blue'>
                                <Icon name="copy" />
                                Copy
                            </Button>

                        </Button.Group>
                    </Card.Content>
                </Card>
               
            </div>
        )
    }
}