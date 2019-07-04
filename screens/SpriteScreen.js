import React from 'react';

import { PIXI } from 'expo-pixi';

import { GLView } from 'expo-gl'

export default function HomeScreen() {
  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={async context => {
        const app = new PIXI.Application({ context });
        const sprite = await PIXI.Sprite.fromExpoAsync(
          'http://i.imgur.com/uwrbErh.png',
        );
        app.stage.addChild(sprite);
      }}
    />
  );
}

HomeScreen.navigationOptions = {
  title: 'Sprite Demo'
};

