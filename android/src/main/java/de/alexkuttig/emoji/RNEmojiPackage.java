package de.alexkuttig.emoji;

import android.app.Application;
import android.support.text.emoji.EmojiCompat;
import android.support.text.emoji.bundled.BundledEmojiCompatConfig;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.uimanager.ViewManager;

import java.util.Collections;
import java.util.ArrayList;
import java.util.List;

public class RNEmojiPackage implements ReactPackage {

    public RNEmojiPackage(Application application) {
        EmojiCompat.Config config = new BundledEmojiCompatConfig(application);
        EmojiCompat.init(config);
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext context) {
        return Collections.singletonList((ViewManager) new RNEmojiViewManager());
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        return modules;
    }
}
