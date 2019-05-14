# React Native Emoji

React Native Emoji Library. It contains an Emoji Component, where you can select Emojis by name like this.

```JSX
<Emoji name="coffee" style={{fontSize: 50}} />
```

![](http://i59.tinypic.com/fe3rly.png)

It also contains an EmojiText Component, where you can write Text with Emojis. It uses EmojiCompat on Android to 
guarantee Emojis compatibility on Android >= 4.4.


```JSX
<EmojiText style={{fontSize: 50}} >This is a smily working on all Android 
> 4.4 ☕, even if it is not supported by OS version out of the box.</EmojiText>
```

Tested with RN 59.5


### Installation

1. Install package via npm:

```
npm install --save react-native-emoji
```

2. Link package for Android EmojiCompat, which ensures Emojis working on older Android versions

```
react-native link react-native-emoji
```

Go to `android/app/src/main/java/<yourpackage>/MainApplication.java` and do the following change 

```
- new RNEmojiPackage()
+ new RNEmojiPackage(MainApplication.this)
```


### Usage

#### Emoji

#####Example

```javascript
import { Emoji } from 'react-native-emoji';

<Emoji name="coffee" style={{fontSize: 50}} />
```

##### Component properties

- `name` (String) - Emoji's name ([full list](http://unicodey.com/emoji-data/table.htm))  
  Note that dashes should be replaced with underscores, e.g. `raising-hand` becomes `raising_hand`.
- All supported `<Text />` properties, like `style`.

#### EmojiText

##### Example
```javascript
import { EmojiText } from 'react-native-emoji';

<EmojiText style={{fontSize: 50}} >This is a smily working on all Android > 4.4: ☕</EmojiText>
```

##### Component properties

- All supported `<Text />` properties, like `style`.


### Credits

Based on 
- [node-emoji](https://github.com/omnidan/node-emoji). Originally maintained by [@jorilallo](https://twitter.com/jorilallo).
- [react-native-emoji-compat-text](https://github.com/bankifyio/react-native-emoji-compat-text) maintained by [bankify](https://github.com/bankifyio)
