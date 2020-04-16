import React, { useState, Fragment } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

import Animated from "react-native-reanimated";
import { mix, useTransition } from "react-native-redash";
// import Chevron from "./Chevron";
// import Item, { LIST_ITEM_HEIGHT, ListItem } from "./ListItem";

const { interpolate } = Animated;
const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: "white",
        padding: 16,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    items: {
        overflow: "hidden",
        backgroundColor: "white",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    itemInner: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sitterDetails: {
        flex:1
    },
    timeDetails: {
        flex: 3
    },
    statusDetails: {
        flex:3,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

const requestStatus = (status) => {
    return (
        <View>
            <Text>{status.code}</Text>
        </View>
    )
}

export default ({ request }) => {
    console.log('Request')
    console.log(request);
    const [open, setOpen] = useState(false);
    const transition = useTransition(open);
    const height = mix(transition, 0, 100);
    const bottomRadius = interpolate(transition, {
        inputRange: [0, 8 / 400],
        outputRange: [4, 0],
    });
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setOpen((prev) => !prev)}>
                <Animated.View
                    style={[
                        styles.container,
                        {
                            borderBottomLeftRadius: bottomRadius,
                            borderBottomRightRadius: bottomRadius,
                        },
                    ]}
                >
                    <View style={styles.itemInner}>
                        <View style={styles.sitterDetails}>

                        </View>
                        <View style={styles.timeDetails}>
                            <Text style={styles.title}>{request.schedule_date}</Text>
                        </View>
                        <View style={styles.statusDetails}>
                            {requestStatus(request.status)}
                        </View>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.items, { height }]}>
                <View style={styles.itemInner}>
                    <Text style={styles.title}>{request.myss_parent.full_name}</Text>
                    <Text style={styles.title}>{request.myss_sitter.full_name}</Text>
                </View>
            </Animated.View>
        </>
    );
};
