import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Input, Button } from '../Components'
import { connect } from 'react-redux';


const ListDetail = (props) => {

    const [title, setTitle] = useState()
    const [dsc, setDsc] = useState()


    return (
        <ScrollView>
            <View style={{
                alignItems: 'center',
                paddingTop: 30,
                flex: 1
            }}>

                <Input
                    placeholder='Title'
                    value={title}
                    onChangeText={(value) => setTitle(value)}
                />

                <Input
                    placeholder='Description'
                    value={dsc}
                    onChangeText={(value) => setDsc(value)}
                />

                <Button
                    text={'Add'}
                    style={{ height: 40 }}
                    onPress={() => {
                        let obj = {
                            title,
                            dsc
                        };
                        props.navigation.navigate('List', { obj });
                    }}
                />
            </View>
        </ScrollView>
    );
}


const mapStateToProps = ({ listResponse }) => {
    const { list } = listResponse;
    return { list };
};

export default connect( mapStateToProps, { } )(ListDetail);
