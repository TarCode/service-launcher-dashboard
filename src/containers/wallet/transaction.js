import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
import { RaisedButton, FlatButton, TextField } from 'material-ui';
import ShapeDialog from '../../components/dialog'
import moment from 'moment'
import { BigNumber } from 'bignumber.js'
import { getWalletData } from '../../actions/wallet'
import { createSend } from '../../actions/transaction'
import Loader from '../../components/loader'
import { style } from '../../style/'

export default class extends Component {
    state = {
		recipient: '',
		memo: '',
		amount: ''
	};
    render() {
        const { token_dialog_msg, handleClose, createSend, user_data } = this.props

        
        return (
            <ShapeDialog
                is_open={token_dialog_msg ? true : false}
                close={handleClose}
                modal_content={<div>
                    <h2>{token_dialog_msg}</h2>
                    {
                    token_dialog_msg === "Receive Tokens" ?
                        <img style={{
                            height: 300,
                            width: 300
                        }} src="qr.jpg" alt='qr' /> : (
                            <div className="center">
                                <p><b>Add a trustline in the receiving wallet before sending:</b><br />
                                Asset: SHAPE<br />
                                Issuer: BPRS63VQIKJP5VNNEV3TQEH6FCVMTZ6ZHK4CJFPLKKPXLBVYFZ62HJP</p>
                                <TextField 
                                    value={this.state.recipient} 
                                    type="text" 
                                    hintText="Email or stellar address" 
                                    onChange={e => this.setState({ recipient: e.target.value })}
                                />
                                <br/>
                                <TextField 
                                    value={this.state.amount} 
                                    type="number"
                                    onChange={e => this.setState({ amount: e.target.value })}
                                    hintText="Amount" 
                                />
                                <br/>
                                <TextField 
                                    value={this.state.memo} 
                                    type="text" 
                                    onChange={e => this.setState({ memo: e.target.value })}
                                    hintText="Memo" 
                                />
                            </div>
                        )
                }
                <div>
                    <FlatButton
                        label="Close"
                        primary={true}
                        onClick={handleClose}
                    />
                    <FlatButton
                        label="Submit"
                        primary={true}
                        onClick={() => {
                            const data = {
                                reference: this.state.recipient,
                                currency: user_data && user_data.currency && user_data.currency.code,
                                amount: this.state.amount * 10000000,
                                memo: this.state.memo,
                                company: user_data && user_data.company
                            }
                            createSend(data)
                        }}
                    />
                </div>
                </div>}
            />
        )
    }
}