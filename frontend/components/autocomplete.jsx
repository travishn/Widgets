import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  setName(name) {
    this.setState({input: name});
  }

  renderNames() {
    const matches = this.checkMatches();
    return matches.map(name => {

      return (
        <li 
          className="list-item"
          key={`list-item-${name}`}
          onClick={() => this.setName(name)}>
          {name}
        </li>
      );
    });

  }

  checkMatches() {
    const { names } = this.props.store;
    return names.filter(name => name.startsWith(this.state.input));
  }


  render() {
    return (
      <div className="autocomplete-wrapper">
        <input className="input-field"
          onChange={this.handleChange('input')} 
          type='text' 
          placeholder='Search...' 
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