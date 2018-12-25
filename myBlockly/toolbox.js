var catSystem = '<xml>'+
'    <category name="%{BKY_CATVARIABLES}" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>'+
'    <category name="%{BKY_CATFUNCTIONS}" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>'+
'    <category name="%{BKY_CATLOGIC}" colour="%{BKY_LOGIC_HUE}">'+
'    <block type="controls_if"></block>'+
'    <block type="logic_compare"></block>'+
'    <block type="logic_operation"></block>'+
'    <block type="logic_negate"></block>'+
'    <block type="logic_boolean"></block>'+
'    <block type="logic_null"></block>'+
'    <block type="logic_ternary"></block>'+
'    </category>'+
'    <category name="%{BKY_CATLOOPS}" colour="%{BKY_LOOPS_HUE}">'+
'    <block type="controls_repeat_ext">'+
'    <value name="TIMES">'+
'    <block type="math_number">'+
'    <field name="NUM">10</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="controls_whileUntil"></block>'+
'    <block type="controls_for">'+
'    <value name="FROM">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="TO">'+
'    <block type="math_number">'+
'    <field name="NUM">10</field>'+
'    </block>'+
'    </value>'+
'    <value name="BY">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="controls_forEach"></block>'+
'    <block type="controls_flow_statements"></block>'+
'    </category>'+
'    <category name="%{BKY_CATMATH}" colour="%{BKY_MATH_HUE}">'+
'    <block type="math_number">'+
'    <field name="NUM">123</field>'+
'    </block>'+
'    <block type="math_arithmetic">'+
'    <value name="A">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="B">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="math_single">'+
'    <value name="NUM">'+
'    <block type="math_number">'+
'    <field name="NUM">9</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="math_trig">'+
'    <value name="NUM">'+
'    <block type="math_number">'+
'    <field name="NUM">45</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="math_constant"></block>'+
'    <block type="math_number_property">'+
'    <value name="NUMBER_TO_CHECK">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="math_round">'+
'    <value name="NUM">'+
'    <block type="math_number">'+
'    <field name="NUM">3.1</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="math_on_list"></block>'+
'    <block type="math_modulo">'+
'    <value name="DIVIDEND">'+
'    <block type="math_number">'+
'    <field name="NUM">64</field>'+
'    </block>'+
'    </value>'+
'    <value name="DIVISOR">'+
'    <block type="math_number">'+
'    <field name="NUM">10</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="math_constrain">'+
'    <value name="VALUE">'+
'    <block type="math_number">'+
'    <field name="NUM">50</field>'+
'    </block>'+
'    </value>'+
'    <value name="LOW">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="HIGH">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="math_random_int">'+
'    <value name="FROM">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="TO">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="math_random_float"></block>'+
'    <block type="math_atan2">'+
'    <value name="X">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="Y">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATTEXT}" colour="%{BKY_TEXTS_HUE}">'+
'    <block type="text"></block>'+
'    <block type="text_join"></block>'+
'    <block type="text_append">'+
'    <value name="TEXT">'+
'    <block type="text"></block>'+
'    </value>'+
'    </block>'+
'    <block type="text_length">'+
'    <value name="VALUE">'+
'    <block type="text">'+
'    <field name="TEXT">abc</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="text_isEmpty">'+
'    <value name="VALUE">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="text_indexOf">'+
'    <value name="VALUE">'+
'    <block type="variables_get">'+
'    <field name="VAR">{textVariable}</field>'+
'    </block>'+
'    </value>'+
'    <value name="FIND">'+
'    <block type="text">'+
'    <field name="TEXT">abc</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="text_charAt">'+
'    <value name="VALUE">'+
'    <block type="variables_get">'+
'    <field name="VAR">{textVariable}</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="text_getSubstring">'+
'    <value name="STRING">'+
'    <block type="variables_get">'+
'    <field name="VAR">{textVariable}</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="text_changeCase">'+
'    <value name="TEXT">'+
'    <block type="text">'+
'    <field name="TEXT">abc</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="text_trim">'+
'    <value name="TEXT">'+
'    <block type="text">'+
'    <field name="TEXT">abc</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="text_print">'+
'    <value name="TEXT">'+
'    <block type="text">'+
'    <field name="TEXT">abc</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="text_prompt_ext">'+
'    <value name="TEXT">'+
'    <block type="text">'+
'    <field name="TEXT">abc</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATLISTS}" colour="%{BKY_LISTS_HUE}">'+
'    <block type="lists_create_with">'+
'    <mutation items="0"></mutation>'+
'    </block>'+
'    <block type="lists_create_with"></block>'+
'    <block type="lists_repeat">'+
'    <value name="NUM">'+
'    <block type="math_number">'+
'    <field name="NUM">5</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="lists_length"></block>'+
'    <block type="lists_isEmpty"></block>'+
'    <block type="lists_indexOf">'+
'    <value name="VALUE">'+
'    <block type="variables_get">'+
'    <field name="VAR">{listVariable}</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="lists_getIndex">'+
'    <value name="VALUE">'+
'    <block type="variables_get">'+
'    <field name="VAR">{listVariable}</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="lists_setIndex">'+
'    <value name="LIST">'+
'    <block type="variables_get">'+
'    <field name="VAR">{listVariable}</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="lists_getSublist">'+
'    <value name="LIST">'+
'    <block type="variables_get">'+
'    <field name="VAR">{listVariable}</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="lists_split">'+
'    <value name="DELIM">'+
'    <block type="text">'+
'    <field name="TEXT">,</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="lists_sort"></block>'+
'    </category>'+
'    <category name="%{BKY_CATCOLOUR}" colour="%{BKY_COLOUR_HUE}">'+
'    <block type="colour_picker"></block>'+
'    <block type="colour_random"></block>'+
'    <block type="colour_rgb">'+
'    <value name="RED">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="GREEN">'+
'    <block type="math_number">'+
'    <field name="NUM">50</field>'+
'    </block>'+
'    </value>'+
'    <value name="BLUE">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="colour_blend">'+
'    <value name="COLOUR1">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ff0000</field>'+
'    </block>'+
'    </value>'+
'    <value name="COLOUR2">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#3333ff</field>'+
'    </block>'+
'    </value>'+
'    <value name="RATIO">'+
'    <block type="math_number">'+
'    <field name="NUM">0.5</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <sep></sep>'+
'</xml>';