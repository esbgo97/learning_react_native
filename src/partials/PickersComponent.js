import React, { useState } from 'react'
import { View, Text, Picker, Button } from "react-native"
import moment from 'moment'

import DateTimePicker from '@react-native-community/datetimepicker'

import Box from './Box'

const modes = [
    'date',
    'time',
    //'datetime',
    //'countdown'
]

const PickersComponent = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false)
    const [mode, setMode] = useState('date');

    return <View>
        <Text style={{ fontSize: 24.0 }}>Select picker Time/Date!</Text>
        <Picker selectedValue={mode}
            onValueChange={(c) => setMode(c)}>
            {modes.map((c, k) => <Picker.Item key={k} label={c} value={c} />)}
        </Picker>
        <Button title="Open DatePicker" onPress={() => setShow(!show)} />
        <Box height={10} />
        {
            show && <DateTimePicker
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={(val, sel) => {
                    if (sel) {
                        setDate(sel)
                    }
                    setShow(false)
                }}
            />
        }
        <Text>Selected Date: {moment(date).format("MMMM Do YYYY, h:mm:ss a")}</Text>


    </View>
}

export default PickersComponent