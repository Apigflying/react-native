/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Button from 'antd-mobile-rn/lib/button';
import { Button, Checkbox, List, WhiteSpace } from 'antd-mobile-rn';
const AgreeItem = Checkbox.AgreeItem;
const CheckboxItem = Checkbox.CheckboxItem;
export default class App extends Component<any, any>{
  constructor(props, context) {
    super(props, context);
    this.state = {
      checkBox1: true,
      agreeItem1: true,
      checkboxItem1: true,
    };
  }
  render () {
    return (
      <View style={style.container}>
        <Text>ndsafd</Text>
        <Button>Start</Button>
        <View>
          <View style={{ padding: 10 }}>
            <Checkbox
              checked={this.state.checkBox1}
              style={{ tintColor: '#f00' }}
              onChange={(event: any) => {
                this.setState({ checkBox1: event.target.checked });
              }}
            />
            <WhiteSpace />
            <Checkbox>Checkbox</Checkbox>
            <WhiteSpace />
            <Checkbox checked disabled />
            <WhiteSpace />
            <Checkbox disabled />
          </View>

          <WhiteSpace />
          <AgreeItem>
            Agree agreement agreement agreement agreement agreement agreement
            agreement
        </AgreeItem>
          <WhiteSpace />
          <AgreeItem
            checked={this.state.agreeItem1}
            checkboxStyle={{ tintColor: '#f00' }}
            onChange={(event: any) => {
              this.setState({ agreeItem1: event.target.checked });
            }}
          >
            Agree agreement
        </AgreeItem>
          <WhiteSpace />
          <AgreeItem disabled>Not selected. Not editable</AgreeItem>
          <WhiteSpace />
          <AgreeItem checked disabled>
            Force selected. Not editable
        </AgreeItem>

          <List style={{ marginTop: 12 }}>
            <Text style={{ marginTop: 12 }}>Multiple options</Text>
            <CheckboxItem
              checked={this.state.checkboxItem1}
              onChange={(event: any) => {
                this.setState({ checkboxItem1: event.target.checked });
              }}
            >
              Option 1
          </CheckboxItem>
            <CheckboxItem>Option 2</CheckboxItem>
            <CheckboxItem disabled>Option 3</CheckboxItem>
            <CheckboxItem disabled checked>
              Option 4
          </CheckboxItem>
          </List>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FcFF',
    justifyContent: 'center',
  }
})