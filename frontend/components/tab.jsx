import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_idx: 0
    };
  }

  changeIndex(idx) {
    this.setState({ current_idx: idx });
  }

  renderTabInfo() {
    const { tabs } = this.props.store;
    return tabs.map(tabObj => {
      return (
        <h1 id={this.state.current_idx === tabObj.id - 1 ? 'selected-tab' : null}
          key={`tab-${tabObj.id}`}
          onClick={() => this.changeIndex(tabObj.id - 1)}>
          {tabObj.title}
        </h1>
      );
    });
  }

  render() {
    const { tabs } = this.props.store;
    return (
      <div className='tab-wrapper'>
        <h2>Tabs</h2>
        <ul className='tabs'>
          {this.renderTabInfo()}
        </ul>

        <article className='tab-content'>
          {tabs[this.state.current_idx].content}
        </article>
      </div>
    );
  }
}

export default Tab;