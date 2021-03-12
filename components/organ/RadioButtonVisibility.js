import React from 'react';
// import useState from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

function RadioButtonVisibility() {
  // const [value, setValue] = React.useState('1');
  // console.log(value);
  // onChange={setValue} value={value}

  var laymen = document.getElementsByClassName('laymen');
  var expert = document.getElementsByClassName('expert');

  function dontShowLaymen() {
    for (var i = 0; i < laymen.length; i += 1) {
      laymen[i].style.display = 'none';
    }
    for (var i = 0; i < expert.length; i += 1) {
      expert[i].style.display = 'block';
    }
  }
  function dontShowExpertView() {
    for (var i = 0; i < laymen.length; i += 1) {
      laymen[i].style.display = 'block';
    }
    for (var i = 0; i < expert.length; i += 1) {
      expert[i].style.display = 'none';
    }
  }

  return (
    <div>
      <RadioGroup defaultValue="2">
        <Stack spacing={5} direction="row">
          <Radio colorScheme="teal" value="1" onClick={dontShowExpertView}>
            Laymen Reader
          </Radio>
          <Radio colorScheme="teal" value="2" onClick={dontShowLaymen}>
            Expert Reader
          </Radio>
        </Stack>
      </RadioGroup>
    </div>
  );
}

export default RadioButtonVisibility;
