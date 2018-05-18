'use strict';

goog.provide('Blockly.Blocks.colour');
goog.require('Blockly.Blocks');
goog.require('Blockly.constants');

Blockly.FieldColour.COLOURS = ['#f00', '#e00', '#d00', '#c00', '#b00', '#a00',
                               '#800', '#600', '#400', '#000'];
Blockly.FieldColour.COLUMNS = 5;


Blockly.Blocks['microbit_accelerometer_get_x'] = {
  init: function() {
    this.jsonInit({"colour": 0, "output": "Number", "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_X_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_X_TOOLTIP, "message0": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_X_MESSAGE0});
  }
};


Blockly.Blocks['microbit_accelerometer_get_y'] = {
  init: function() {
    this.jsonInit({"colour": 0, "output": "Number", "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Y_HELPURL,
     "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Y_TOOLTIP, "message0": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Y_MESSAGE0});
  }
};


Blockly.Blocks['microbit_accelerometer_get_z'] = {
  init: function() {
    this.jsonInit({"colour": 0, "output": "Number", "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Z_HELPURL,
     "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Z_TOOLTIP, "message0": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Z_MESSAGE0});
  }
};


Blockly.Blocks['microbit_accelerometer_was_gesture'] = {
  init: function() {
    this.jsonInit({"colour": 0, "args0": [{"name": "gesture", "options": [["shake", "shake"], ["up", "up"], ["down", "down"], ["left", "left"], ["right", "right"], ["face up", "face up"], ["face down", "face down"], ["freefall", "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]], "type": "field_dropdown"}], "output": "Boolean",
     "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_WAS_GESTURE_HELPURL, 
     "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_WAS_GESTURE_TOOLTIP, "message0": Blockly.Msg.MICROBIT_ACCELEROMETER_WAS_GESTURE_MESSAGE0});
  }
};


Blockly.Blocks['microbit_accelerometer_is_gesture'] = {
  init: function() {
    this.jsonInit({"colour": 0, "args0": [{"name": "gesture", "options": [["shake", "shake"], ["up", "up"], ["down", "down"], ["left", "left"], ["right", "right"], ["face up", "face up"], ["face down", "face down"], ["freefall", "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]], "type": "field_dropdown"}], "output": "Boolean", 
    "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_IS_GESTURE_HELPURL , 
    "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_IS_GESTURE_TOOLTIP, "message0": Blockly.Msg.MICROBIT_ACCELEROMETER_IS_GESTURE_MESSAGE0 });
  }
};


Blockly.Blocks['microbit_accelerometer_get_gestures'] = {
  init: function() {
    this.jsonInit({"colour": 0, "output": "Array", "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_GESTURES_HELPURL,
     "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_GESTURES_TOOLTIP, "message0": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_GESTURES_MESSAGE0 });
  }
};


Blockly.Blocks['microbit_accelerometer_current_gesture'] = {
  init: function() {
    this.jsonInit({"colour": 0, "output": "String", "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_CURRENT_GESTURE_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_CURRENT_GESTURE_TOOLTIP, "message0":Blockly.Msg.MICROBIT_ACCELEROMETER_CURRENT_GESTURE_MESSAGE0});
  }
};


Blockly.Blocks['microbit_button_is_pressed'] = {
  init: function() {
    this.jsonInit({"colour": 32, "args0": [{"name": "button", "options": [["A", "a"], ["B", "b"]], "type": "field_dropdown"}], "output": "Boolean", 
    "helpUrl": Blockly.Msg.MICROBIT_BUTTON_IS_PRESSED_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_BUTTON_IS_PRESSED_TOOLTIP, "message0": Blockly.Msg.MICROBIT_BUTTON_IS_PRESSED_MESSAGE0});
  }
};


Blockly.Blocks['microbit_button_was_pressed'] = {
  init: function() {
    this.jsonInit({"colour": 32, "args0": [{"name": "button", "options": [["A", "a"], ["B", "b"]], "type": "field_dropdown"}], "output": "Boolean", 
    "helpUrl": Blockly.Msg.MICROBIT_BUTTON_WAS_PRESSED_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_BUTTON_WAS_PRESSED_TOOLTIP, "message0": Blockly.Msg.MICROBIT_BUTTON_WAS_PRESSED_MESSAGE0});
  }
};


Blockly.Blocks['microbit_button_get_presses'] = {
  init: function() {
    this.jsonInit({"colour": 32, "args0": [{"name": "button", "options": [["A", "a"], ["B", "b"]], "type": "field_dropdown"}], "output": "Number", 
    "helpUrl": Blockly.Msg.MICROBIT_BUTTON_GET_PRESSES_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_BUTTON_GET_PRESSES_TOOLTIP, "message0": Blockly.Msg.MICROBIT_BUTTON_GET_PRESSES_MESSAGE0});
  }
};


Blockly.Blocks['microbit_compass_calibrate'] = {
  init: function() {
    this.jsonInit({"colour": 64, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_COMPASS_CALIBRATE_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_COMPASS_CALIBRATE_TOOLTIP, "message0": Blockly.Msg.MICROBIT_COMPASS_CALIBRATE_MESSAGE0});
  }
};


Blockly.Blocks['microbit_compass_is_calibrated'] = {
  init: function() {
    this.jsonInit({"colour": 64, "output": "Boolean",
     "helpUrl": Blockly.Msg.MICROBIT_COMPASS_IS_CALIBRATED_HELPURL, 
     "tooltip": Blockly.Msg.MICROBIT_COMPASS_IS_CALIBRATED_TOOLTIP, "message0": Blockly.Msg.MICROBIT_COMPASS_IS_CALIBRATED_MESSAGE0});
  }
};


Blockly.Blocks['microbit_compass_heading'] = {
  init: function() {
    this.jsonInit({"colour": 64, "output": "Number", 
    "helpUrl": Blockly.Msg.MICROBIT_COMPASS_HEADING_HELPURL,
     "tooltip": Blockly.Msg.MICROBIT_COMPASS_HEADING_TOOLTIP, "message0": Blockly.Msg.MICROBIT_COMPASS_HEADING_MESSAGE0});
  }
};


Blockly.Blocks['microbit_compass_get_field_strength'] = {
  init: function() {
    this.jsonInit({"colour": 64, "output": "Number", 
    "helpUrl": Blockly.Msg.MICROBIT_COMPASS_GET_FIELD_STRENGTH_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_COMPASS_GET_FIELD_STRENGTH_TOOLTIP, "message0": Blockly.Msg.MICROBIT_COMPASS_GET_FIELD_STRENGTH_MESSAGE0 });
  }
};


Blockly.Blocks['microbit_display_get_pixel'] = {
  init: function() {
    this.jsonInit({"helpUrl": Blockly.Msg.MICROBIT_DISPLAY_GET_PIXEL_HELPURL, "args0": [{"check": "Number", "type": "input_value", "name": "x"}, {"check": "Number", "type": "input_value", "name": "y"}], "inputsInline": true, "output": "Number", "colour": 96, 
    "tooltip": Blockly.Msg.MICROBIT_DISPLAY_GET_PIXEL_TOOLTIP, "message0": Blockly.Msg.MICROBIT_DISPLAY_GET_PIXEL_MESSAGE0});
  }
};


Blockly.Blocks['microbit_display_set_pixel'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "nextStatement": null, "previousStatement": null,
     "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_SET_PIXEL_HELPURL, "colour": 96, 
     "tooltip": Blockly.Msg.MICROBIT_DISPLAY_SET_PIXEL_TOOLTIP, "message0": Blockly.Msg.MICROBIT_DISPLAY_SET_PIXEL_MESSAGE0 , "args0": [{"check": "Number", "type": "input_value", "name": "x"}, {"check": "Number", "type": "input_value", "name": "y"}, {"check": "Number", "type": "input_value", "name": "value"}]});
  }
};


Blockly.Blocks['microbit_display_clear'] = {
  init: function() {
    this.jsonInit({"colour": 96, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_CLEAR_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_DISPLAY_CLEAR_TOOLTIP, "message0": Blockly.Msg.MICROBIT_DISPLAY_CLEAR_MESSAGE0});
  }
};


Blockly.Blocks['microbit_display_show_image'] = {
  init: function() {
    this.jsonInit({"colour": 96, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_TOOLTIP, "message0": Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_MESSAGE0, "args0": [{"check": "microbit_image", "type": "input_value", "name": "image"}]});
  }
};

Blockly.Blocks['microbit_display_show_message'] = {
  init: function() {
    this.jsonInit({"colour": 96, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_SHOW_MESSAGE_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_DISPLAY_SHOW_MESSAGE_TOOLTIP, "message0": Blockly.Msg.MICROBIT_DISPLAY_SHOW_MESSAGE0, "args0": [{"check": "String", "type": "input_value", "name": "message"}]});
  }
};

Blockly.Blocks['microbit_display_show_animation'] = {
  init: function() {
    this.jsonInit({"colour": 96, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_SHOW_ANIMATION_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_DISPLAY_SHOW_ANIMATION_TOOLTIP , "message0": Blockly.Msg.MICROBIT_DISPLAY_SHOW_ANIMATION_MESSAGE0, "args0": [{"check": "Array", "type": "input_value", "name": "images"}, {"min": 0, "value": 400, "type": "field_number", "name": "delay"}, {"type": "input_dummy"}, {"checked": true, "type": "field_checkbox", "name": "wait"}, {"type": "input_dummy"}, {"checked": false, "type": "field_checkbox", "name": "loop"}, {"type": "input_dummy"}, {"checked": false, "type": "field_checkbox", "name": "clear"}]});
  }
};


Blockly.Blocks['microbit_display_scroll'] = {
  init: function() {
    this.jsonInit({"colour": 96, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_SCROLL_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_DISPLAY_SCROLL_TOOLTIP, "message0": Blockly.Msg.MICROBIT_DISPLAY_SCROLL_MESSAGE0, "args0": [{"check": "String", "type": "input_value", "name": "message"}]});
  }
};


Blockly.Blocks['microbit_display_on'] = {
  init: function() {
    this.jsonInit({"colour": 96, "nextStatement": null, "previousStatement": null,
     "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_ON_HELPURL,
      "tooltip": Blockly.Msg.MICROBIT_DISPLAY_ON_TOOLTIP , "message0": Blockly.Msg.MICROBIT_DISPLAY_ON_MESSAGE0});
  }
};


Blockly.Blocks['microbit_display_off'] = {
  init: function() {
    this.jsonInit({"colour": 96, "nextStatement": null, "previousStatement": null,
     "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_OFF_HELPURL, 
     "tooltip": Blockly.Msg.MICROBIT_DISPLAY_OFF_TOOLTIP, "message0": Blockly.Msg.MICROBIT_DISPLAY_OFF_MESSAGE0});
  }
};


Blockly.Blocks['microbit_display_is_on'] = {
  init: function() {
    this.jsonInit({"colour": 96, "output": "Boolean", 
    "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_IS_ON_HELPURL , 
    "tooltip": Blockly.Msg.MICROBIT_DISPLAY_IS_ON_TOOLTIP, "message0": Blockly.Msg.MICROBIT_DISPLAY_IS_ON_MESSAGE0});
  }
};


Blockly.Blocks['microbit_image_builtins'] = {
  init: function() {
    this.jsonInit({"colour": 128, "args0": [{"name": "image", "options": [["HEART", "HEART"], ["HEART_SMALL", "HEART_SMALL"], ["HAPPY", "HAPPY"], ["SMILE", "SMILE"], ["SAD", "SAD"], ["CONFUSED", "CONFUSED"], ["ANGRY", "ANGRY"], ["ASLEEP", "ASLEEP"], ["SURPRISED", "SURPRISED"], ["SILLY", "SILLY"], ["FABULOUS", "FABULOUS"], ["MEH", "MEH"], ["YES", "YES"], ["NO", "NO"], ["CLOCK12", "CLOCK12"], ["CLOCK11", "CLOCK11"], ["CLOCK10", "CLOCK10"], ["CLOCK9", "CLOCK9"], ["CLOCK8", "CLOCK8"], ["CLOCK7", "CLOCK7"], ["CLOCK6", "CLOCK6"], ["CLOCK5", "CLOCK5"], ["CLOCK4", "CLOCK4"], ["CLOCK3", "CLOCK3"], ["CLOCK2", "CLOCK2"], ["CLOCK1", "CLOCK1"], ["ARROW_N", "ARROW_N"], ["ARROW_NE", "ARROW_NE"], ["ARROW_E", "ARROW_E"], ["ARROW_SE", "ARROW_SE"], ["ARROW_S", "ARROW_S"], ["ARROW_SW", "ARROW_SW"], ["ARROW_W", "ARROW_W"], ["ARROW_NW", "ARROW_NW"], ["TRIANGLE", "TRIANGLE"], ["TRIANGLE_LEFT", "TRIANGLE_LEFT"], ["CHESSBOARD", "CHESSBOARD"], ["DIAMOND", "DIAMOND"], ["DIAMOND_SMALL", "DIAMOND_SMALL"], ["SQUARE", "SQUARE"], ["SQUARE_SMALL", "SQUARE_SMALL"], ["RABBIT", "RABBIT"], ["COW", "COW"], ["MUSIC_CROTCHET", "MUSIC_CROTCHET"], ["MUSIC_QUAVER", "MUSIC_QUAVER"], ["MUSIC_QUAVERS", "MUSIC_QUAVERS"], ["PITCHFORK", "PITCHFORK"], ["XMAS", "XMAS"], ["PACMAN", "PACMAN"], ["TARGET", "TARGET"], ["TSHIRT", "TSHIRT"], ["ROLLERSKATE", "ROLLERSKATE"], ["DUCK", "DUCK"], ["HOUSE", "HOUSE"], ["TORTOISE", "TORTOISE"], ["BUTTERFLY", "BUTTERFLY"], ["STICKFIGURE", "STICKFIGURE"], ["GHOST", "GHOST"], ["SWORD", "SWORD"], ["GIRAFFE", "GIRAFFE"], ["SKULL", "SKULL"], ["UMBRELLA", "UMBRELLA"], ["SNAKE", "SNAKE"], ["ALL_CLOCKS", "ALL_CLOCKS"], ["ALL_ARROWS", "ALL_ARROWS"]], "type": "field_dropdown"}], "output": ["microbit_image", "Array"], 
    "helpUrl": Blockly.Msg.MICROBIT_IMAGE_BUILTINS_HELPURL ,
     "tooltip": Blockly.Msg.MICROBIT_IMAGE_BUILTINS_TOOLTIP, "message0": Blockly.Msg.MICROBIT_IMAGE_BUILTINS_MESSAGE0});
  }
};


Blockly.Blocks['microbit_image_copy'] = {
  init: function() {
    this.jsonInit({"colour": 128, "args0": [{"check": "microbit_image", "type": "input_value", "name": "image"}], "output": "microbit_image", 
    "helpUrl": Blockly.Msg.MICROBIT_IMAGE_COPY_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_IMAGE_COPY_TOOLTIP, "message0": Blockly.Msg.MICROBIT_IMAGE_COPY_MESSAGE0});
  }
};


Blockly.Blocks['microbit_image_invert'] = {
  init: function() {
    this.jsonInit({"colour": 128, "args0": [{"check": "microbit_image", "type": "input_value", "name": "image"}], "output": "microbit_image", 
    "helpUrl": Blockly.Msg.MICROBIT_IMAGE_INVERT_HELPURL,
     "tooltip": Blockly.Msg.MICROBIT_IMAGE_INVERT_TOOLTIP, "message0": Blockly.Msg.MICROBIT_IMAGE_INVERT_MESSAGE0});
  }
};


Blockly.Blocks['microbit_image_create'] = {
  init: function() {
    this.jsonInit({"colour": 128, "args0": [{"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "00"}, {"colour": "#000000", "type": "field_colour", "name": "01"}, {"colour": "#000000", "type": "field_colour", "name": "02"}, {"colour": "#000000", "type": "field_colour", "name": "03"}, {"colour": "#000000", "type": "field_colour", "name": "04"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "10"}, {"colour": "#000000", "type": "field_colour", "name": "11"}, {"colour": "#000000", "type": "field_colour", "name": "12"}, {"colour": "#000000", "type": "field_colour", "name": "13"}, {"colour": "#000000", "type": "field_colour", "name": "14"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "20"}, {"colour": "#000000", "type": "field_colour", "name": "21"}, {"colour": "#000000", "type": "field_colour", "name": "22"}, {"colour": "#000000", "type": "field_colour", "name": "23"}, {"colour": "#000000", "type": "field_colour", "name": "24"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "30"}, {"colour": "#000000", "type": "field_colour", "name": "31"}, {"colour": "#000000", "type": "field_colour", "name": "32"}, {"colour": "#000000", "type": "field_colour", "name": "33"}, {"colour": "#000000", "type": "field_colour", "name": "34"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "40"}, {"colour": "#000000", "type": "field_colour", "name": "41"}, {"colour": "#000000", "type": "field_colour", "name": "42"}, {"colour": "#000000", "type": "field_colour", "name": "43"}, {"colour": "#000000", "type": "field_colour", "name": "44"}], "output": "microbit_image", 
    "helpUrl": Blockly.Msg.MICROBIT_IMAGE_CREATE_HELPURL,
     "tooltip": Blockly.Msg.MICROBIT_IMAGE_CREATE_TOOLTIP, "message0": Blockly.Msg.MICROBIT_IMAGE_CREATE_MESSAGE0});
  }
};


Blockly.Blocks['microbit_microbit_panic'] = {
  init: function() {
    this.jsonInit({"colour": 160, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_MICROBIT_PANIC_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_MICROBIT_PANIC_TOOLTIP, "message0": Blockly.Msg.MICROBIT_MICROBIT_PANIC_MESSAGE0, "args0": [{"min": 0, "value": 0, "type": "field_number", "max": 255, "name": "code"}]});
  }
};


Blockly.Blocks['microbit_microbit_reset'] = {
  init: function() {
    this.jsonInit({"colour": 160, "previousStatement": null,
     "helpUrl": Blockly.Msg.MICROBIT_MICROBIT_RESET_HELPURL,
      "tooltip": Blockly.Msg.MICROBIT_MICROBIT_RESET_TOOLTIP, "message0": Blockly.Msg.MICROBIT_MICROBIT_RESET_MESSAGE0});
  }
};


Blockly.Blocks['microbit_microbit_sleep'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_MICROBIT_SLEEP_HELPURL, "colour": 160, 
    "tooltip": Blockly.Msg.MICROBIT_MICROBIT_SLEEP_TOOLTIP , "message0": Blockly.Msg.MICROBIT_MICROBIT_SLEEP_MESSAGE0 , "args0": [{"check": "Number", "type": "input_value", "name": "duration"}]});
  }
};


Blockly.Blocks['microbit_microbit_running_time'] = {
  init: function() {
    this.jsonInit({"colour": 160, "output": "Number", 
    "helpUrl": Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_HELPURL,
     "tooltip": Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_TOOLTIP , "message0": Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_MESSAGE0});
  }
};


Blockly.Blocks['microbit_microbit_temperature'] = {
  init: function() {
    this.jsonInit({"colour": 160, "output": "Number", 
    "helpUrl": Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_HELPURL,
     "tooltip": Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_TOOLTIP, "message0": Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_MESSAGE0});
  }
};


Blockly.Blocks['microbit_music_play_built_in'] = {
  init: function() {
    this.jsonInit({"colour": 192, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_TOOLTIP, "message0": Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_MESSAGE0, "args0": [{"name": "melody", "options": [["DADADADUM", "DADADADUM"], ["ENTERTAINER", "ENTERTAINER"], ["PRELUDE", "PRELUDE"], ["ODE", "ODE"], ["NYAN", "NYAN"], ["RINGTONE", "RINGTONE"], ["FUNK", "FUNK"], ["BLUES", "BLUES"], ["BIRTHDAY", "BIRTHDAY"], ["WEDDING", "WEDDING"], ["FUNERAL", "FUNERAL"], ["PUNCHLINE", "PUNCHLINE"], ["PYTHON", "PYTHON"], ["BADDY", "BADDY"], ["CHASE", "CHASE"], ["BA_DING", "BA_DING"], ["WAWAWAWAA", "WAWAWAWAA"], ["JUMP_UP", "JUMP_UP"], ["JUMP_DOWN", "JUMP_DOWN"], ["POWER_UP", "POWER_UP"], ["POWER_DOWN", "POWER_DOWN"]], "type": "field_dropdown"}, {"type": "input_dummy"}, {"checked": true, "type": "field_checkbox", "name": "wait"}, {"type": "input_dummy"}, {"checked": false, "type": "field_checkbox", "name": "loop"}]});
  }
};


Blockly.Blocks['microbit_music_pitch'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "nextStatement": null, "previousStatement": null,
     "helpUrl": Blockly.Msg.MICROBIT_MUSIC_PITCH_HELPURL , "colour": 192,
      "tooltip": Blockly.Msg.MICROBIT_MUSIC_PITCH_TOOLTIP, "message0": Blockly.Msg.MICROBIT_MUSIC_PITCH_MESSAGE0, "args0": [{"min": 0, "value": 440, "type": "field_number", "name": "pitch"}, {"type": "input_dummy"}, {"min": 0, "value": 1000, "type": "field_number", "name": "duration"}]});
  }
};


Blockly.Blocks['microbit_music_play_list_of_notes'] = {
  init: function() {
    this.jsonInit({"colour": 192, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_TOOLTIP, "message0": Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_MESSAGE0, "args0": [{"check": "Array", "type": "input_value", "name": "notes"}, {"checked": true, "type": "field_checkbox", "name": "wait"}, {"type": "input_dummy"}, {"checked": false, "type": "field_checkbox", "name": "loop"}]});
  }
};


Blockly.Blocks['microbit_music_reset'] = {
  init: function() {
    this.jsonInit({"colour": 192, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_MUSIC_RESET_HELPURL,
     "tooltip": Blockly.Msg.MICROBIT_MUSIC_RESET_TOOLTIP, "message0": Blockly.Msg.MICROBIT_MUSIC_RESET_MESSAGE0});
  }
};


Blockly.Blocks['microbit_music_stop'] = {
  init: function() {
    this.jsonInit({"colour": 192, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_MUSIC_STOP_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_MUSIC_STOP_TOOLTIP, "message0": Blockly.Msg.MICROBIT_MUSIC_STOP_MESSAGE0});
  }
};


Blockly.Blocks['microbit_music_set_tempo'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_HELPURL , "colour": 192, 
    "tooltip": Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_TOOLTIP , "message0": Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_MESSAGE0, "args0": [{"check": "Number", "type": "input_value", "name": "ticks"}, {"check": "Number", "type": "input_value", "name": "bpm"}]});
  }
};

Blockly.Blocks['microbit_music_reset_tempo'] = {
  init: function() {
    this.jsonInit({"colour": 192, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_MUSIC_RESET_TEMPO_HELPURL,
     "tooltip": Blockly.Msg.MICROBIT_MUSIC_RESET_TEMPO_TOOLTIP, "message0": Blockly.Msg.MICROBIT_MUSIC_RESET_TEMPO_MESSAGE0});
  }
};

Blockly.Blocks['microbit_music_get_tempo'] = {
  init: function() {
    this.jsonInit({"colour": 192, "output": "Array",
     "helpUrl": Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_HELPURL, 
     "tooltip": Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_TOOLTIP, "message0": Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_MESSAGE0});
  }
};


Blockly.Blocks['microbit_neopixel_initialise'] = {
  init: function() {
    this.jsonInit({"colour": 224, "args0": [{"name": "pin", "options": [["0", "0"], ["1", "1"], ["2", "2"]], "type": "field_dropdown"}, {"type": "input_dummy"}, {"min": 1, "value": 1, "type": "field_number", "name": "n"}], "output": "neopixel_object",
     "helpUrl": Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_HELPURL, 
     "tooltip": Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_TOOLTIP, "message0": Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_MESSAGE0});
  }
};


Blockly.Blocks['microbit_neopixel_clear'] = {
  init: function() {
    this.jsonInit({"colour": 224, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_HELPURL , 
    "tooltip": Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_TOOLTIP , "message0": Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_MESSAGE0, "args0": [{"check": "neopixel_object", "type": "input_value", "name": "neopixel_object"}]});
  }
};


Blockly.Blocks['microbit_neopixel_show'] = {
  init: function() {
    this.jsonInit({"colour": 224, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_TOOLTIP, "message0": Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_MESSAGE0 , "args0": [{"check": "neopixel_object", "type": "input_value", "name": "neopixel_object"}]});
  }
};


Blockly.Blocks['microbit_neopixel_set'] = {
  init: function() {
    this.jsonInit({"inputsInline": false, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_NEOPIXEL_SET_HELPURL, "colour": 224, 
    "tooltip": Blockly.Msg.MICROBIT_NEOPIXEL_SET_TOOLTIP, "message0": Blockly.Msg.MICROBIT_NEOPIXEL_SET_MESSAGE0 , "args0": [{"check": "neopixel_object", "type": "input_value", "name": "neopixel_object"}, {"check": "Number", "type": "input_value", "name": "pixel"}, {"check": "Number", "type": "input_value", "name": "red"}, {"check": "Number", "type": "input_value", "name": "green"}, {"check": "Number", "type": "input_value", "name": "blue"}]});
  }
};


Blockly.Blocks['microbit_pin_touched'] = {
  init: function() {
    this.jsonInit({"colour": 256, "args0": [{"name": "pin", "options": [["0", "0"], ["1", "1"], ["2", "2"]], "type": "field_dropdown"}], "output": "Boolean", 
    "helpUrl": Blockly.Msg.MICROBIT_PIN_TOUCHED_HELPURL,
     "tooltip": Blockly.Msg.MICROBIT_PIN_TOUCHED_TOOLTIP, "message0": Blockly.Msg.MICROBIT_PIN_TOUCHED_MESSAGE0 });
  }
};


Blockly.Blocks['microbit_pin_read_analog'] = {
  init: function() {
    this.jsonInit({"colour": 256, "args0": [{"name": "pin", "options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["10", "10"]], "type": "field_dropdown"}], "output": "Number",
     "helpUrl": Blockly.Msg.MICROBIT_PIN_READ_ANALOG_HELPURL, 
     "tooltip": Blockly.Msg.MICROBIT_PIN_READ_ANALOG_TOOLTIP, "message0": Blockly.Msg.MICROBIT_PIN_READ_ANALOG_MESSAGE0 });
  }
};


Blockly.Blocks['microbit_pin_write_analog'] = {
  init: function() {
    this.jsonInit({"colour": 256, "nextStatement": null, "previousStatement": null,
     "helpUrl": Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_HELPURL,
      "tooltip": Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_TOOLTIP, "message0": Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_MESSAGE0, "args0": [{"check": "Number", "type": "input_value", "name": "output"}, {"name": "pin", "options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["10", "10"]], "type": "field_dropdown"}]});
  }
};


Blockly.Blocks['microbit_pin_read_digital'] = {
  init: function() {
    this.jsonInit({"colour": 256, "args0": [{"name": "pin", "options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "12"], ["14", "14"], ["15", "15"], ["16", "16"], ["19", "19"], ["20", "20"]], "type": "field_dropdown"}], "output": "Boolean", 
    "helpUrl": Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_TOOLTIP, "message0": Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_MESSAGE0});
  }
};


Blockly.Blocks['microbit_pin_write_digital'] = {
  init: function() {
    this.jsonInit({"colour": 256, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_TOOLTIP , "message0": Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_MESSAGE0 , "args0": [{"check": "Number", "type": "input_value", "name": "output"}, {"name": "pin", "options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "12"], ["14", "14"], ["15", "15"], ["16", "16"], ["19", "19"], ["20", "20"]], "type": "field_dropdown"}]});
  }
};


Blockly.Blocks['microbit_radio_on'] = {
  init: function() {
    this.jsonInit({"colour": 288, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_RADIO_ON_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_RADIO_ON_TOOLTIP, "message0": Blockly.Msg.MICROBIT_RADIO_ON_MESSAGE0});
  }
};


Blockly.Blocks['microbit_radio_off'] = {
  init: function() {
    this.jsonInit({"colour": 288, "nextStatement": null, "previousStatement": null,
     "helpUrl": Blockly.Msg.MICROBIT_RADIO_OFF_HELPURL, 
     "tooltip": Blockly.Msg.MICROBIT_RADIO_OFF_TOOLTIP , "message0": Blockly.Msg.MICROBIT_RADIO_OFF_MESSAGE0});
  }
};


Blockly.Blocks['microbit_radio_config'] = {
  init: function() {
    this.jsonInit({"colour": 288, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_RADIO_CONFIG_HELPURL, 
    "tooltip": Blockly.Msg.MICROBIT_RADIO_CONFIG_TOOLTIP, "message0": Blockly.Msg.MICROBIT_RADIO_CONFIG_MESSAGE0, "args0": [{"min": 4, "value": 32, "type": "field_number", "max": 251, "name": "length"}, {"type": "input_dummy"}, {"min": 1, "value": 3, "type": "field_number", "max": 32, "name": "queue"}, {"type": "input_dummy"}, {"min": 0, "value": 7, "type": "field_number", "max": 100, "name": "channel"}, {"type": "input_dummy"}, {"min": 0, "value": 0, "type": "field_number", "max": 7, "name": "power"}, {"type": "input_dummy"}, {"name": "data_rate", "options": [["1Mbit", "RATE_1MBIT"], ["250Kbit", "RATE_250KBIT"], ["2Mbit", "RATE_2MBIT"]], "type": "field_dropdown"}]});
  }
};


Blockly.Blocks['microbit_radio_reset'] = {
  init: function() {
    this.jsonInit({"colour": 288, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_RADIO_RESET_HELPURL, "tooltip": Blockly.Msg.MICROBIT_RADIO_RESET_TOOLTIP, "message0": Blockly.Msg.MICROBIT_RADIO_RESET_MESSAGE0 });
  }
};


Blockly.Blocks['microbit_radio_send_string'] = {
  init: function() {
    this.jsonInit({"colour": 288, "nextStatement": null, "previousStatement": null, 
    "helpUrl": Blockly.Msg.MICROBIT_RADIO_SEND_STRING_HELPURL, "tooltip": Blockly.Msg.MICROBIT_RADIO_SEND_STRING_TOOLTIP, "message0": Blockly.Msg.MICROBIT_RADIO_SEND_STRING_MESSAGE0 , "args0": [{"check": "String", "type": "input_value", "name": "message"}]});
  }
};


Blockly.Blocks['microbit_radio_receive'] = {
  init: function() {
    this.jsonInit({"colour": 288, "output": "String", 
    "helpUrl": Blockly.Msg.MICROBIT_RADIO_RECEIVE_HELPURL, "tooltip": Blockly.Msg.MICROBIT_RADIO_RECEIVE_TOOLTIP , "message0": Blockly.Msg.MICROBIT_RADIO_RECEIVE_MESSAGE0 });
  }
};


Blockly.Blocks['microbit_speech_say'] = {
  init: function() {
    this.jsonInit({"colour": 320, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_SPEECH_SAY_HELPURL,
     "tooltip": Blockly.Msg.MICROBIT_SPEECH_SAY_TOOLTIP, "message0": Blockly.Msg.MICROBIT_SPEECH_SAY_MESSAGE0, "args0": [{"check": "String", "type": "input_value", "name": "english"}]});
  }
};


Blockly.Blocks['microbit_speech_pronounce'] = {
  init: function() {
    this.jsonInit({"colour": 320, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_HELPURL , 
    "tooltip": Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_TOOLTIP , "message0": Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_MESSAGE0, "args0": [{"check": "String", "type": "input_value", "name": "phonemes"}]});
  }
};


Blockly.Blocks['microbit_speech_sing'] = {
  init: function() {
    this.jsonInit({"colour": 320, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_SPEECH_SING_HELPURL,
     "tooltip": Blockly.Msg.MICROBIT_SPEECH_SING_TOOLTIP , "message0": Blockly.Msg.MICROBIT_SPEECH_SING_MESSAGE0 , "args0": [{"check": "String", "type": "input_value", "name": "song"}]});
  }
};


