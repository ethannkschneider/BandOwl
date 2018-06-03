import React from 'react';
import { Button, Text } from 'native-base';


export default ({ buttonText, onPress, backgroundColor}) => {
  const style = {
    backgroundColor,
    alignSelf: 'center',
    margin: 20
  };
  return (
    <Button style={style} rounded onPress={onPress}>
      <Text>{buttonText}</Text>
    </Button>
  );
};
