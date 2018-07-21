import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.currentTarget.value});
  }

  renderNames() {
    const matches = this.checkMatches();
    debugger;
    return matches.map(name => {

      return (
        <li>
          {name}
        </li>
      );
    });

  }

  checkMatches() {
    const { names } = this.props.store;
    return names.filter(name => name.includes(this.state.input));
  }


  render() {
    return (
      <div className="autocomplete-wrapper">
        <input onChange={this.handleChange} 
          type='text' 
          placeholder='search' 
          value={this.state.input}
        />

        <ul className="names-list">
          {this.renderNames()}
        </ul>
      </div>
    );
  }
}

export default Autocomplete;