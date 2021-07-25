import { CommonActions } from '@react-navigation/native';

function ResetRoute({navigation},screenname){
    navigation.dispatch(CommonActions.reset({index:0, routes:[{name:screenname}] }));
}

export default ResetRoute;