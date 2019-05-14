'use strict';

import React from 'react';
import nodeEmoji from 'node-emoji';
import { requireNativeComponent, Text, Platform } from "react-native";
const RNEmojiCompatText = requireNativeComponent("RNEmoji");

const EmojiTextAndroid = (props) => (
    <RNEmojiCompatText {...props}>
        <Text {...props} />
    </RNEmojiCompatText>
);

export const EmojiText = Platform.select({
    ios: Text,
    android: EmojiTextAndroid
});

export const Emoji = ({name, ...props}) => (
    <EmojiText {...props}>{nodeEmoji.get(name)}</EmojiText>
);
