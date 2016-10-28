/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Servo library blocks.
 *     The Arduino Servo library docs: http://arduino.cc/en/reference/servo
 *
 * TODO: If angle selector added to blocks edit code here.
 */
'use strict';

goog.provide('Blockly.Arduino.engleds');

goog.require('Blockly.Arduino');


/**
 * Code generator to set all Engduino LEDs to defined colour.
 * Arduino code: #include <EngduinoLEDs.h>

 *               setup{ EngduinoLEDs.setup(); }
 *               loop  { EngduinoLEDs.setAll(Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['engLED_setall'] = function(block) {
  var pinKey = 0;
  var ledColour = block.getFieldValue('LED_COLOUR');

  Blockly.Arduino.addInclude('engduino', '#include <EngduinoLEDs.h>');

  var setupCode = 'EngduinoLEDs.begin();';
  Blockly.Arduino.addSetup('engduino_' + ledColour, setupCode, true);

  var code = 'EngduinoLEDs.setAll' + '('+ ledColour + ');\n';
  return code;
};

/**
 * Code generator to set all Engduino one with ID LEDs to defined colour.
 * Arduino code: #include <EngduinoLEDs.h>

 *               setup{ EngduinoLEDs.setup(); }
 *               loop  { EngduinoLED.setLED(X,Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['engLED_setled'] = function(block) {
  var ledColour = block.getFieldValue('LED_COLOUR');
  var ledID = Blockly.Arduino.valueToCode(block, 
  		  'LED_ID', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.addInclude('engduino', '#include <EngduinoLEDs.h>');

  var setupCode = 'EngduinoLEDs.begin();';
  Blockly.Arduino.addSetup('engduino_' + ledColour, setupCode, true);
  var code = 'EngduinoLEDs.setLED' + '(' + ledID + ', ' + ledColour + ');\n';
  return code;
};

/**
 * Code generator to turn off all LEDs on Engduino.
 * Arduino code: #include <EngduinoLEDs.h>

 *               setup{ EngduinoLEDs.setup(); }
 *               loop  { EngduinoLED.setAll(OFF);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['engLED_clearall'] = function(block) {
  
  Blockly.Arduino.addInclude('engduino', '#include <EngduinoLEDs.h>');

  var setupCode = 'EngduinoLEDs.begin();';
  Blockly.Arduino.addSetup('engduino_' + '', setupCode, true);
  var code = 'EngduinoLEDs.setAll(OFF);\n';
  return code;
};
