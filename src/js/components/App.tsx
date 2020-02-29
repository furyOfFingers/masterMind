import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { changeFirstName, changeSecondName } from '../../store/actions';
import { IFieldState } from '../../Types/Types';

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
            value={firstName}
            type='text'
            placeholder='First Name'
            onChange={event => {
              changeFirstName(event.target.value);
            }}
          />
        </div>

        <div>
          <input
            value={secondName}
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

const mapStateToProps = (state: IFieldState) => {
  return {
    firstName: state.firstName,
    secondName: state.secondName
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
