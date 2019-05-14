'use strict';

import React from 'react';
import {Text} from 'react-native';
import nodeEmoji from 'node-emoji';
import { requireNativeComponent, Text, Platform } from "react-native";
const RNEmojiCompatText = requireNativeComponent("RNEmoji");

const EmojiIOS = ({name, ...props}) => (
    <Text {...props}>{nodeEmoji.get(name)}</Text>
);

const EmojiAndroid = ({name, ...props}) => (
    <RNEmojiCompatText {...props}>
        <Text {...props}>{nodeEmoji.get(name)}</Text>
    </RNEmojiCompatText>
);


export default Platform.select({
    ios: EmojiIOS,
    android: EmojiAndroid
});
