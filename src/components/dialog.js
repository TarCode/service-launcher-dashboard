import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

export default class extends Component {
    render() {
        const { modal_content, is_open, close } = this.props;
        return (
            <Dialog
                    repositionOnUpdate={false}
                    autoDetectWindowHeight={false}
                    autoScrollBodyContent={false}
                    contentStyle={{
                        width: '100%',
                        maxWidth: '450px',
                        maxHeight: '100% !important'
                    }}
                    bodyStyle={{
                    maxHeight: '100% !important'
                    }}
                    style={{
                        paddingTop:'0 !important',
                        marginTop:'-65px !important',
                        bottom: '0 !important',
                        overflow: 'scroll !important',
                        height: 'auto !important'
                    }}
                    open={is_open}
                    onRequestClose={() => close()}
                >
                { modal_content }
            </Dialog>
        )
    }
}