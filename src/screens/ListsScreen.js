import React, { useState, useEffect, Component } from 'react'
import { View, Text, FlatList, TextInput, Button } from 'react-native'
import SafeArea from '../partials/SafeArea'
import GlobalStyles from '../utils/GlobalStyles'
import ListItem from '../partials/ListItem'
import Box from '../partials/Box'


export default class ListsScreen extends Component {
    state = {
        users: [],
        responseMessage: null,
        statusCode: 0
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=50").then((resp) => {
            if (resp.ok) {

                resp.json().then((data) => {
                    this.setState({
                        statusCode: resp.status,
                        users: data.results,
                        responseMessage:"Ok"
                    })
                })
            } else {
                alert("Error getting external data!");
                resp.text().then(text => setState({
                    statusCode: resp.status,
                    responseMessage: text
                }))
            }

        }).catch(err => {
            alert(err)
        })
    }
    render() {
        return (<SafeArea>
            <Text style={GlobalStyles.navTitle}>
                Lists Page of users, {this.state.users.length} registers found
                </Text>
            <Text style={{ color: this.state.statusCode === 200 ? "green" : "red" }}>
                Response: {this.state.responseMessage}
            </Text>
            <Box height={20}/>
            <FlatList
                style={{ width: 400}}
                data={this.state.users}
                keyExtractor={item => item.login.uuid}
                renderItem={({ item, index }) => <ListItem title={item.name.first} description={item.phone} image={item.picture.thumbnail} />
                }
            />
        </SafeArea >)
    }

}
