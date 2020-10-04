import React, { Component } from "react";
import { Form, Checkbox, Input } from "semantic-ui-react";
import axios from 'axios';
import Navigation from "./navigation";
import Title from "./titles";
import "./form.css";
import Choice from "./choiceComponent";
import Decision from "./decisionComponent";
import Sentence from "./sentenceComponent";


class WebForm extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });
  InputExampleInput = () => <Input placeholder="Search..." />;


  constructor(props) {
    super(props);
    this.state = {
      taskType: '',
      title: '',
      description: '',
      expireDate:'',
      reward:'',
      workers:'',
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };




   handleSubmit = e => {
     e.preventDefault();

      const { taskType, title, description, expireDate, reward, workers } = this.state;

    const requesterTask = {
      taskType,
      title,
      description,
      expireDate,
      reward,
      workers,
    };

    axios
    .post('http://localhost:8080/', requesterTask)
    .then(() => console.log('Created'))
    .catch(err => {
      console.error(err);
    });
};


  render() {
    return (
      <Form className="form-inline" onSubmit={this.handleSubmit}>
        <Navigation />
        <br></br>
        <br></br>

        <div style={{ display: "flex" }}>
          <label className="selecttasktype">Select Task Type:</label>

          <Form.Field>
            <Checkbox
              radio
              style={{ marginLeft: 10 }}
              label="Choice Task"
              className="tasktype"
              name="checkboxRadioGroup1"
              value="Choice Task"
              checked={this.state.value === "Choice Task"}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field>
            <Checkbox
              radio
              style={{ marginLeft: 10 }}
              label="Decision-Making Task"
              className="tasktype"
              name="checkboxRadioGroup1"
              value="Decision-Making Task"
              checked={this.state.value === "Decision-Making Task"}
              onChange={this.handleChange}
            />
          </Form.Field>
          
          <Form.Field>
            <Checkbox
              radio
              style={{ marginLeft: 10 }}
              label="Sentence-Level Task"
              className="tasktype"
              name="checkboxRadioGroup1"
              value="Sentence-Level Task"
              checked={this.state.value === "Sentence-Level Task"}
              onChange={this.handleChange}
            />
          </Form.Field>
        </div>
        <br></br>

        <Title text="Describe Your Task to Workers" />
        <br></br>

        <label className="label">TITLE</label>
        <div className="input-text">
          <input type="text" placeholder="Enter task title..." name = "title" onChange={this.handleInputChange} />
        </div>

        <br></br>
        <label className="label">DESCRIPTION</label>
        <div className="input-text">
          <input type="text" placeholder="Enter task description..." name = "description" onChange={this.handleInputChange} />
        </div>
        <br></br>

        <label className="label">EXPIRY DATE</label>
        <div className="input-text">
          <input type="date" name = "date" onChange={this.handleInputChange}/>
        </div>
        <br></br>
        <br></br>

        <Title text="Setting up Your Task" />
        <br></br>
        <div>
          {(() => {
            switch (this.state.value) {
              case "Choice Task":
                return <Choice />;
              case "Decision-Making Task":
                return <Decision />;
              case "Sentence-Level Task":
                return <Sentence />;
              default:
                return (
                  <h5 style={{ marginLeft: 10, color: "red" }}>
                    * Please select a task type
                  </h5>
                );
            }
          })()}
        </div>

        <br></br>
        <Title text="Worker Requirement" />
        <br></br>
        <div style={{ display: "flex" }}>
          <label className="selecttasktype">Require Master Workers:</label>

          <Form.Field>
            <Checkbox
              radio
              style={{ marginLeft: 10 }}
              label="Yes"
              className="tasktype"
              name="checkboxRadioGroup2"
              value="yes"
              checked={this.state.value === "yes"}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field>
            <Checkbox
              radio
              style={{ marginLeft: 10 }}
              label="No"
              className="tasktype"
              name="checkboxRadioGroup2"
              value="no"
              checked={this.state.value === "no"}
              onChange={this.handleChange}
            />
          </Form.Field>
        </div>

        <br></br>

        <label className="label">REWARD PER PERSON</label>
        <div className="input-text">
          <input type="number" placeholder="Reward per person..." name = "reward" onChange={this.handleInputChange} />
        </div>

        <br></br>

        <label className="label">NUMBER OF WORKERS</label>
        <div className="input-text">
          <input type="number" placeholder="Number of workers..." name = "numberofworkers" onChange={this.handleInputChange}/>
        </div>

        <br></br>

        <button onClick = {this.handleClick} style={{ marginLeft: 10 }}>Save</button>
      </Form>
    );
  }
}

export default WebForm;
