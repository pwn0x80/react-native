/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  findNodeHandle,
  requireNativeComponent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  UIManager,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NativeModules } from "react-native";

const MyViewMangerFragment = requireNativeComponent('MyViewManager');
const { MyModule } = NativeModules;
type SectionProps = PropsWithChildren<{
  title: string;
}>;


const createFragment = (viewId: any) =>
  UIManager.dispatchViewManagerCommand(
    viewId,
    "1",
    [viewId],
  );
function App(): JSX.Element {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current === null) return
    const viewId = findNodeHandle(ref.current);
    createFragment(viewId);
  }, [ref]);

  const funcTrigger = () => {
    MyModule.Hello("aditya");
  }
  const callBackTrigger = () => {
    MyModule.callback((str: any) => { console.log(str) });
  }
  const promiseTrigger = () => {
    MyModule.promiseTrigger().then((str: any) => {
      console.log(str)
    })

  }
  // const activityTrigger= ()=>{
  // MyModule.startActivity();
  // }
  //
  //
  const [state, setState] = useState(false);
  function trigger() {
    setState(state => !state);
  }
  if (state == true) {
    return (
      <View>
        <Text>Fragment Trigger</Text>
        {
          <MyViewMangerFragment
            ref={ref}
          />
        }

      </View>
    )
  }

  return (
    <View>
      <Button
        onPress={funcTrigger}
        title="Trigger Android Bridge"
        color="#841584"
        accessibilityLabel=""
      />
      <Button
        onPress={callBackTrigger}
        title="CallbackTrigger"
        color="red"
      />
      <Button
        onPress={promiseTrigger}
        title="Promise Trigger"
        color="green"
      />
      <Button
        onPress={trigger}
        title="Fragment Trigger"
        color="grey"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
