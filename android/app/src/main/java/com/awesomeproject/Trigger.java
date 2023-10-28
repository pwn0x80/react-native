package com.awesomeproject;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.infer.annotation.Functional;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import kotlin.Function;

public class Trigger extends ReactContextBaseJavaModule {
    private  static final  String MODULE_NAME = "MyModule";

    public Trigger(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return MODULE_NAME;
    }


    @ReactMethod
    public void Hello(String name){
        System.out.println("aditya");
    }
    @ReactMethod
    public void callback(Callback fun){
        fun.invoke("from java Trigger");
    }
    @ReactMethod
    public void promiseTrigger(Promise ac){
        ac.resolve("resolved");
    }
}
