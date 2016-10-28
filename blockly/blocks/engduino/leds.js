/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino blocks for the EngduinoLEDs library.
 *     The EngduinoLEDs functions can be found in
 *     http://www.engduino.org/
 *
 * TODO: 
 */
'use strict';

goog.provide('Blockly.Blocks.engduino');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.engduino.HUE = 280;

/** EngduinoLED.setall block **/
Blockly.Blocks['engLED_setall'] = {
  /**
   * Set all EngduinoLEDs
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://www.engduino.org/');
    this.setColour(Blockly.Blocks.engduino.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ENG_LEDS_SETALL)
        .appendField(new Blockly.FieldDropdown(
        		[['RED','RED'], 
        		 ['GREEN', 'GREEN'],
        		 ['BLUE', 'BLUE'],
        		 ['CYAN', 'CYAN'],
        		 ['YELLOW', 'YELLOW'],
        		 ['MAGENTA', 'MAGENTA'],
        		 ['WHITE', 'WHITE'],
        		 ['OFF', 'OFF']
        		]), 'LED_COLOUR');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ENG_LEDS_SETALL_TIP);
  },
};

/** EngduinoLED.setled block **/
Blockly.Blocks['engLED_setled'] = {
  /**
   * Set one EngduinoLED to defined colour
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://www.engduino.org/');
    this.setColour(Blockly.Blocks.engduino.HUE);
    this.appendValueInput('LED_ID')
    .setCheck(Blockly.Types.NUMBER.checkList)
    .appendField(Blockly.Msg.ENG_LEDS_SETLED);
    this.setInputsInline(false);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(
        		[['RED','RED'], 
        		 ['GREEN', 'GREEN'],
        		 ['BLUE', 'BLUE'],
        		 ['CYAN', 'CYAN'],
        		 ['YELLOW', 'YELLOW'],
        		 ['MAGENTA', 'MAGENTA'],
        		 ['WHITE', 'WHITE'],
        		 ['OFF', 'OFF']
        		]), 'LED_COLOUR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ENG_LEDS_SETLED_TIP);
  },
};

/** EngduinoLED.clearleds block **/
Blockly.Blocks['engLED_clearall'] = {
  /**
   * Clear all EngduinoLEDs
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://www.engduino.org/');
    this.setColour(Blockly.Blocks.engduino.HUE);
    this.appendDummyInput()
    	.appendField(Blockly.Msg.ENG_LEDS_CLEARALL);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ENG_LEDS_CLEARALL_TIP);
  },
};
