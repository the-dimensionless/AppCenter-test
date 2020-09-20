import React from 'react';
import CodePush from 'react-native-code-push';

const codePushOptions = {
    checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
const withCodePush = (WrappedComponent) => {
    class WrappedClass extends React.PureComponent {
        componentDidMount() {
            CodePush.sync({
                installMode: CodePush.InstallMode.IMMEDIATE
            }, this.syncWithCodePush, null);
        }

        syncWithCodePush = (status) => {
            console.log('Sync result. . . status =', status)
        }
        render() {
            return (
                <WrappedComponent />
            );
        }
    }
    return CodePush(codePushOptions)(WrappedClass)
};

export default withCodePush;