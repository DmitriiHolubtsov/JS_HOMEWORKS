import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ul className="list-group">
        {React.Children.map(children, (child) => (
          <li className="list-group-item" key={child.key || child.props.children}>
            {child}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
