import React, {Component} from 'react';

import WordSelect from './WordSelect';
import StoryItem from './StoryItem';

export default class Story extends Component {
  handleSelect = (value) => {
    if (value) {
      this.props.onSubmit({type: 'text',
        data: value
      });
    }
  }

  render() {
    const {story} = this.props;

    if (!story || story.joining) {
      return <span>Loading story...</span>;
    }

    return (
      <div>
        <div className='story--items'>
          {story.data.map((item) => <StoryItem key={item.id} {...item} />)}
        </div>
        <WordSelect onChange={this.handleSelect} />
      </div>
    );
  }
}
