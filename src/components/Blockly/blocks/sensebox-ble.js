import * as Blockly from "blockly";
import { getColour } from "@/components/Blockly/helpers/colour";

var checkUnitLength = function (unit) {
  var length = unit.length;
  if (length > 5) {
    alert("Die Einheit muss kleiner als 6 Zeichen sein");
    return unit.slice(0, 5);
  }
  return unit;
};

var checkLabelLength = function (label) {
  var length = label.length;
  if (length > 20) {
    alert("Das Label muss kleiner als 20 Zeichen sein");
    return label.slice(0, 20);
  }
  return label;
};

Blockly.Blocks["sensebox_phyphox_init"] = {
  init: function () {
    this.setColour(getColour().phyphox);
    this.setHelpUrl(Blockly.Msg.sensebox_phyphox_helpurl);
    this.appendDummyInput()
      .appendField(Blockly.Msg.sensebox_phyphox_init)
      .appendField(new Blockly.FieldTextInput("Geräte Name"), "devicename");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.sensebox_phyphox_init_tooltip);
  },
};

Blockly.Blocks["sensebox_phyphox_experiment"] = {
  init: function () {
    this.setColour(getColour().phyphox);
    this.appendDummyInput().appendField(
      Blockly.Msg.sensebox_phyphox_createExperiment,
    );
    this.appendDummyInput()
      .appendField(Blockly.Msg.sensebox_phyphox_experimentTitle)
      .appendField(new Blockly.FieldTextInput("Experiment Title"), "title");
    this.appendDummyInput()
      .appendField(Blockly.Msg.sensebox_phyphox_experimentDescription)
      .appendField(
        new Blockly.FieldTextInput(
          Blockly.Msg.sensebox_phyphox_experiment_description,
        ),
        "description",
      );
    this.appendStatementInput("view").appendField(
      Blockly.Msg.sensebox_phyphox_createView,
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.sensebox_phyphox_experiment_tooltip);
    this.setHelpUrl(Blockly.Msg.sensebox_phyphox_helpurl);
  },
};

Blockly.Blocks["sensebox_phyphox_graph"] = {
  init: function () {
    this.setColour(getColour().phyphox);
    this.appendDummyInput()
      .appendField(Blockly.Msg.sensebox_phyphox_createGraph)
      .appendField(Blockly.Msg.sensebox_phyphox_graphLabel)
      .appendField(new Blockly.FieldTextInput("Label"), "label");
    this.appendDummyInput()
      .appendField(Blockly.Msg.sensebox_phyphox_unitx)
      .appendField(
        new Blockly.FieldTextInput("Unit", checkUnitLength),
        "unitx",
      );
    this.appendDummyInput()
      .appendField(Blockly.Msg.sensebox_phyphox_unity)
      .appendField(
        new Blockly.FieldTextInput("Unit", checkUnitLength),
        "unity",
      );
    this.appendDummyInput()
      .appendField(Blockly.Msg.sensebox_phyphox_labelx)
      .appendField(
        new Blockly.FieldTextInput("Label X", checkLabelLength),
        "labelx",
      );
    this.appendDummyInput()
      .appendField(Blockly.Msg.sensebox_phyphox_labely)
      .appendField(
        new Blockly.FieldTextInput("Label Y", checkLabelLength),
        "labely",
      );
    this.appendDummyInput()
      .appendField(Blockly.Msg.sensebox_phyphox_graphStyle)
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg.sensebox_phyphox_style_line, "line"],
          [Blockly.Msg.sensebox_phyphox_style_dots, "dots"],
        ]),
        "style",
      );
    this.appendValueInput("channel0").appendField(
      Blockly.Msg.sensebox_phyphox_channel0,
    );
    this.appendValueInput("channel1").appendField(
      Blockly.Msg.sensebox_phyphox_channel1,
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.sensebox_phyphox_graph_tooltip);
    this.setHelpUrl(Blockly.Msg.sensebox_phyphox_helpurl);
  },
};

Blockly.Blocks["sensebox_phyphox_timestamp"] = {
  init: function () {
    this.setColour(getColour().phyphox);
    this.appendDummyInput().appendField(Blockly.Msg.sensebox_phyphox_timestamp);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.sensebox_phyphox_timestamp_tooltip);
    this.setHelpUrl(Blockly.Msg.sensebox_phyphox_helpurl);
  },
};

Blockly.Blocks["sensebox_phyphox_channel"] = {
  init: function () {
    this.setColour(getColour().phyphox);
    this.appendDummyInput()
      .appendField(Blockly.Msg.sensebox_phyphox_channel)
      .appendField(
        new Blockly.FieldDropdown([
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
        ]),
        "channel",
      );

    this.setOutput(true);
    this.setTooltip(Blockly.Msg.sensebox_phyphox_channel_tooltip);
    this.setHelpUrl(Blockly.Msg.sensebox_phyphox_helpurl);
  },
};

Blockly.Blocks["sensebox_phyphox_sendchannel"] = {
  init: function () {
    this.setColour(getColour().phyphox);
    this.appendValueInput("value")
      .appendField(Blockly.Msg.sensebox_phyphox_sendchannel)
      .appendField(
        new Blockly.FieldDropdown([
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
        ]),
        "channel",
      );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.sensebox_phyphox_sendchannel_tooltip);
    this.setHelpUrl(Blockly.Msg.sensebox_phyphox_helpurl);
  },
};

Blockly.Blocks["sensebox_phyphox_experiment_send"] = {
  init: function () {
    this.setColour(getColour().phyphox);
    this.appendStatementInput("sendValues").appendField(
      Blockly.Msg.sensebox_phyphox_writeValues,
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.sensebox_phyphox_experiment_send_tooltip);
    this.setHelpUrl(Blockly.Msg.sensebox_phyphox_helpurl);
  },
};

/**
 * senseBox BLE
 *
 *
 */

Blockly.Blocks["sensebox_ble_init"] = {
  init: function () {
    this.setColour(getColour().senseboxble);
    this.setHelpUrl(Blockly.Msg.sensebox_ble_helpurl);
    this.appendDummyInput()
      .appendField(Blockly.Msg.sensebox_ble_init)
      .appendField(new Blockly.FieldTextInput("Geräte Name"), "devicename");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.sensebox_ble_init_tooltip);
  },
};

Blockly.Blocks["sensebox_ble_send"] = {
  init: function () {
    this.setColour(getColour().senseboxble);
    this.appendValueInput("value")
      .appendField(Blockly.Msg.sensebox_ble_send)
      .appendField(
        new Blockly.FieldDropdown([
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
        ]),
        "channel",
      );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.sensebox_ble_send_tooltip);
    this.setHelpUrl(Blockly.Msg.sensebox_ble_helpurl);
  },
};
