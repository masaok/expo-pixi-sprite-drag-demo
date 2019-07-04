import React from 'react';

import { PIXI } from 'expo-pixi';

import { GLView } from 'expo-gl'

export default function HomeScreen() {

  onDragStart = () => {
    console.log("ON DRAG START")
  }

  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={async context => {
        const app = new PIXI.Application({ context });
        const sprite = await PIXI.Sprite.fromExpoAsync(
          'http://i.imgur.com/uwrbErh.png',
        );

        // None of this works
        // http://scottmcdonnell.github.io/pixi-examples/index.html?s=demos&f=dragging.js&title=Dragging
        // 
        // sprite.interactive = true
        // sprite.buttonMode = true
        // sprite
        //   .on('mousedown', onDragStart)
        //   .on('touchstart', onDragStart)

        // TODO: Try this: https://www.npmjs.com/package/react-native-draggable

        app.stage.addChild(sprite);
      }}
    />
  );
}

HomeScreen.navigationOptions = {
  title: 'Sprite Demo'
};

