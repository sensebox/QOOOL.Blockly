import * as Blockly from "blockly/core";
import { getColour } from "@/components/Blockly/helpers/colour";
import { getCompatibleTypes } from "../helpers/types";

Blockly.Blocks["variables_set_dynamic"] = {
  init: function () {
    // const type = myVar.type;
    this.setColour(getColour().variables);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendValueInput("VALUE")
      .appendField(Blockly.Msg.variables_set, Blockly.Msg.variables_set)
      .appendField("", "type")
      .appendField(new Blockly.FieldVariable("VAR"), "VAR")
      .appendField(Blockly.Msg.variables_to);
  },
  onchange: function (e) {
    let variableID = this.getFieldValue("VAR");
    let variable = Blockly.getMainWorkspace()
      .getVariableMap()
      .getVariableById(variableID);
    if (variable !== null) {
      this.getField("type").setValue(variable.type);
      this.getInput("VALUE").setCheck(getCompatibleTypes(variable.type));
    }
  },
};

Blockly.Blocks["variables_get_dynamic"] = {
  init: function () {
    this.setColour(getColour().variables);
    this.appendDummyInput()
      .appendField("", "type")
      .appendField(new Blockly.FieldVariable("VAR"), "VAR");
    this.setOutput(true);
  },
  onchange: function (e) {
    let variableID = this.getFieldValue("VAR");
    let variable = Blockly.getMainWorkspace()
      .getVariableMap()
      .getVariableById(variableID);
    if (variable !== null) {
      this.getField("type").setValue(variable.type);
    }
  },
};
