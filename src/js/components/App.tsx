import React from 'react';
import Notification from './ClientCard/Notification';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeFirstName, changeSecondName} from '../../store/actions'
// import { DocumentCardCompactExample } from './ClientCard/ClientCard';

// const App: React.FC = ({}): JSX.Element => (
//   <div>
//     <Notification text='hello there'></Notification>
//     {/* <DocumentCardCompactExample></DocumentCardCompactExample> */}
//   </div>
// );

class App extends React.Component {
  render() {
    const {
      firstName,
      secondName,
      changeFirstName,
      changeSecondName
    } = this.props;

    return (
      <div className='App'>
        <div>
          <input
            value={this.props.firstName}
            type='text'
            placeholder='First Name'
            onChange={event => {
              changeFirstName(event.target.value);
            }}
          />
        </div>

        <div>
          <input
            value={this.props.secondName}
            type='text'
            placeholder='Second Name'
            onChange={event => {
              changeSecondName(event.target.value);
            }}
          />
        </div>

        <div>{`${firstName} ${secondName}`}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstName: state.firstName,
    secondName: state.secondName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
