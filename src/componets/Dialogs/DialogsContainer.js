import React from 'react';
import Dialogs from './Dialogs';
import { sendMessage } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


// данные из state 
let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

// 1) Компанента Dialogs попадает как аргементв в функцию withAuthRedirect
// 2) результат 1 действия поместить ка крагемент в функцию connect(mapStateToProps, masDispatchToProps)
export default compose(
    connect(mapStateToProps, { sendMessage }),
    withAuthRedirect
)(Dialogs);