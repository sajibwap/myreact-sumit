/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class Form extends React.Component {
    state = {
        title: 'javascript',
        text: 'text',
        select: 'react',
        check: 'false',
        show: false,
    };

    handleChange = (e) => {
        switch (e.target.type) {
            case 'text':
                this.setState({ title: e.target.value });
                break;
            case 'textarea':
                this.setState({ text: e.target.value });
                break;
            case 'select-one':
                this.setState({ select: e.target.value });
                break;
            case 'checkbox':
                this.setState({ check: e.target.checked });
                break;

            default:
                break;
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, text, select, check, show } = this.state;
        this.setState({ show: true });
    };

    render() {
        const { title, text, select, check, show } = this.state;
        return (
            <>
                <div className="form">
                    <h1>Form Handling</h1>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <label htmlFor="title">Title = </label>
                            <input
                                name="title"
                                value={title}
                                onChange={this.handleChange}
                                type="text"
                                placeholder="Enter the title"
                            />
                        </p>
                        <p>
                            <label htmlFor="title">Text = </label>
                            <textarea
                                name="text"
                                value={text}
                                onChange={this.handleChange}
                                type="textarea"
                                placeholder="Enter Description"
                            />
                        </p>
                        <p>
                            <label htmlFor="select">Option = </label>
                            <select name="select" onChange={this.handleChange}>
                                <option value="React">React</option>
                                <option value="Anguler">Anguler</option>
                                <option value="vue">Vue</option>
                            </select>
                        </p>
                        <p>
                            <label htmlFor="select">Check = </label>
                            <input
                                name="checkbox"
                                type="checkbox"
                                value={check}
                                onChange={this.handleChange}
                            />
                        </p>
                        <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
                    </form>
                </div>
                {show && (
                    <div>
                        <p>Title : {title}</p>
                        <p>Text : {text}</p>
                        <p>Select : {select}</p>
                        <p>isChecked : {check}</p>
                    </div>
                )}
            </>
        );
    }
}

export default Form;
