gdjs.speedrunCode = {};
gdjs.speedrunCode.GDNewObjectObjects1= [];
gdjs.speedrunCode.GDNewObjectObjects2= [];
gdjs.speedrunCode.GDNewObject3Objects1= [];
gdjs.speedrunCode.GDNewObject3Objects2= [];
gdjs.speedrunCode.GDNewObject4Objects1= [];
gdjs.speedrunCode.GDNewObject4Objects2= [];
gdjs.speedrunCode.GDNewObject5Objects1= [];
gdjs.speedrunCode.GDNewObject5Objects2= [];
gdjs.speedrunCode.GDred_95selectObjects1= [];
gdjs.speedrunCode.GDred_95selectObjects2= [];
gdjs.speedrunCode.GDblue_95selectObjects1= [];
gdjs.speedrunCode.GDblue_95selectObjects2= [];
gdjs.speedrunCode.GDgreen_95selectObjects1= [];
gdjs.speedrunCode.GDgreen_95selectObjects2= [];

gdjs.speedrunCode.conditionTrue_0 = {val:false};
gdjs.speedrunCode.condition0IsTrue_0 = {val:false};
gdjs.speedrunCode.condition1IsTrue_0 = {val:false};
gdjs.speedrunCode.condition2IsTrue_0 = {val:false};
gdjs.speedrunCode.condition3IsTrue_0 = {val:false};
gdjs.speedrunCode.condition4IsTrue_0 = {val:false};
gdjs.speedrunCode.condition5IsTrue_0 = {val:false};
gdjs.speedrunCode.conditionTrue_1 = {val:false};
gdjs.speedrunCode.condition0IsTrue_1 = {val:false};
gdjs.speedrunCode.condition1IsTrue_1 = {val:false};
gdjs.speedrunCode.condition2IsTrue_1 = {val:false};
gdjs.speedrunCode.condition3IsTrue_1 = {val:false};
gdjs.speedrunCode.condition4IsTrue_1 = {val:false};
gdjs.speedrunCode.condition5IsTrue_1 = {val:false};


gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.speedrunCode.GDNewObjectObjects1});gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.speedrunCode.GDNewObject5Objects1});gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDred_9595selectObjects1Objects = Hashtable.newFrom({"red_select": gdjs.speedrunCode.GDred_95selectObjects1});gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDgreen_9595selectObjects1Objects = Hashtable.newFrom({"green_select": gdjs.speedrunCode.GDgreen_95selectObjects1});gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDblue_9595selectObjects1Objects = Hashtable.newFrom({"blue_select": gdjs.speedrunCode.GDblue_95selectObjects1});gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.speedrunCode.GDNewObject3Objects1});gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.speedrunCode.GDNewObject3Objects1});gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.speedrunCode.GDNewObject5Objects1});gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.speedrunCode.GDNewObject4Objects1});gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.speedrunCode.GDNewObject5Objects1});gdjs.speedrunCode.eventsList0 = function(runtimeScene) {

{


gdjs.speedrunCode.condition0IsTrue_0.val = false;
{
gdjs.speedrunCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.speedrunCode.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.speedrunCode.GDNewObjectObjects1);

gdjs.speedrunCode.condition0IsTrue_0.val = false;
gdjs.speedrunCode.condition1IsTrue_0.val = false;
gdjs.speedrunCode.condition2IsTrue_0.val = false;
{
gdjs.speedrunCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.speedrunCode.condition0IsTrue_0.val ) {
{
gdjs.speedrunCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.speedrunCode.condition1IsTrue_0.val ) {
{
gdjs.speedrunCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("delete")) != 1;
}}
}
if (gdjs.speedrunCode.condition2IsTrue_0.val) {
gdjs.speedrunCode.GDNewObject5Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObject5Objects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}{runtimeScene.getVariables().get("test").add(1);
}{for(var i = 0, len = gdjs.speedrunCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.speedrunCode.GDNewObject5Objects1[i].setZOrder(gdjs.speedrunCode.GDNewObject5Objects1[i].getZOrder() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("test")) + 1));
}
}{for(var i = 0, len = gdjs.speedrunCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.speedrunCode.GDNewObject5Objects1[i].returnVariable(gdjs.speedrunCode.GDNewObject5Objects1[i].getVariables().get("rgb")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("cur_rgb")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("red_select"), gdjs.speedrunCode.GDred_95selectObjects1);

gdjs.speedrunCode.condition0IsTrue_0.val = false;
gdjs.speedrunCode.condition1IsTrue_0.val = false;
gdjs.speedrunCode.condition2IsTrue_0.val = false;
{
gdjs.speedrunCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDred_9595selectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.speedrunCode.condition0IsTrue_0.val ) {
{
gdjs.speedrunCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.speedrunCode.condition1IsTrue_0.val ) {
{
{gdjs.speedrunCode.conditionTrue_1 = gdjs.speedrunCode.condition2IsTrue_0;
gdjs.speedrunCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7214044);
}
}}
}
if (gdjs.speedrunCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("cur_rgb").setString("r");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("green_select"), gdjs.speedrunCode.GDgreen_95selectObjects1);

gdjs.speedrunCode.condition0IsTrue_0.val = false;
gdjs.speedrunCode.condition1IsTrue_0.val = false;
gdjs.speedrunCode.condition2IsTrue_0.val = false;
{
gdjs.speedrunCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDgreen_9595selectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.speedrunCode.condition0IsTrue_0.val ) {
{
gdjs.speedrunCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.speedrunCode.condition1IsTrue_0.val ) {
{
{gdjs.speedrunCode.conditionTrue_1 = gdjs.speedrunCode.condition2IsTrue_0;
gdjs.speedrunCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6967276);
}
}}
}
if (gdjs.speedrunCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("cur_rgb").setString("g");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("blue_select"), gdjs.speedrunCode.GDblue_95selectObjects1);

gdjs.speedrunCode.condition0IsTrue_0.val = false;
gdjs.speedrunCode.condition1IsTrue_0.val = false;
gdjs.speedrunCode.condition2IsTrue_0.val = false;
{
gdjs.speedrunCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDblue_9595selectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.speedrunCode.condition0IsTrue_0.val ) {
{
gdjs.speedrunCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.speedrunCode.condition1IsTrue_0.val ) {
{
{gdjs.speedrunCode.conditionTrue_1 = gdjs.speedrunCode.condition2IsTrue_0;
gdjs.speedrunCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7189084);
}
}}
}
if (gdjs.speedrunCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("cur_rgb").setString("b");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.speedrunCode.GDNewObject3Objects1);

gdjs.speedrunCode.condition0IsTrue_0.val = false;
gdjs.speedrunCode.condition1IsTrue_0.val = false;
gdjs.speedrunCode.condition2IsTrue_0.val = false;
gdjs.speedrunCode.condition3IsTrue_0.val = false;
gdjs.speedrunCode.condition4IsTrue_0.val = false;
{
gdjs.speedrunCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.speedrunCode.condition0IsTrue_0.val ) {
{
gdjs.speedrunCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.speedrunCode.condition1IsTrue_0.val ) {
{
gdjs.speedrunCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("delete")) != 1;
}if ( gdjs.speedrunCode.condition2IsTrue_0.val ) {
{
gdjs.speedrunCode.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "switch");
}if ( gdjs.speedrunCode.condition3IsTrue_0.val ) {
{
{gdjs.speedrunCode.conditionTrue_1 = gdjs.speedrunCode.condition4IsTrue_0;
gdjs.speedrunCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7424764);
}
}}
}
}
}
if (gdjs.speedrunCode.condition4IsTrue_0.val) {
/* Reuse gdjs.speedrunCode.GDNewObject3Objects1 */
{runtimeScene.getVariables().get("delete").setNumber(1);
}{for(var i = 0, len = gdjs.speedrunCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.speedrunCode.GDNewObject3Objects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "switch");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.speedrunCode.GDNewObject3Objects1);

gdjs.speedrunCode.condition0IsTrue_0.val = false;
gdjs.speedrunCode.condition1IsTrue_0.val = false;
gdjs.speedrunCode.condition2IsTrue_0.val = false;
gdjs.speedrunCode.condition3IsTrue_0.val = false;
gdjs.speedrunCode.condition4IsTrue_0.val = false;
{
gdjs.speedrunCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.speedrunCode.condition0IsTrue_0.val ) {
{
gdjs.speedrunCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.speedrunCode.condition1IsTrue_0.val ) {
{
{gdjs.speedrunCode.conditionTrue_1 = gdjs.speedrunCode.condition2IsTrue_0;
gdjs.speedrunCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7478652);
}
}if ( gdjs.speedrunCode.condition2IsTrue_0.val ) {
{
gdjs.speedrunCode.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("delete")) == 1;
}if ( gdjs.speedrunCode.condition3IsTrue_0.val ) {
{
gdjs.speedrunCode.condition4IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "switch");
}}
}
}
}
if (gdjs.speedrunCode.condition4IsTrue_0.val) {
/* Reuse gdjs.speedrunCode.GDNewObject3Objects1 */
{runtimeScene.getVariables().get("delete").setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "switch");
}{for(var i = 0, len = gdjs.speedrunCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.speedrunCode.GDNewObject3Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.speedrunCode.GDNewObject5Objects1);

gdjs.speedrunCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.speedrunCode.GDNewObject5Objects1.length;i<l;++i) {
    if ( gdjs.speedrunCode.GDNewObject5Objects1[i].getVariableString(gdjs.speedrunCode.GDNewObject5Objects1[i].getVariables().get("rgb")) == "r" ) {
        gdjs.speedrunCode.condition0IsTrue_0.val = true;
        gdjs.speedrunCode.GDNewObject5Objects1[k] = gdjs.speedrunCode.GDNewObject5Objects1[i];
        ++k;
    }
}
gdjs.speedrunCode.GDNewObject5Objects1.length = k;}if (gdjs.speedrunCode.condition0IsTrue_0.val) {
/* Reuse gdjs.speedrunCode.GDNewObject5Objects1 */
{for(var i = 0, len = gdjs.speedrunCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.speedrunCode.GDNewObject5Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.speedrunCode.GDNewObject5Objects1);

gdjs.speedrunCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.speedrunCode.GDNewObject5Objects1.length;i<l;++i) {
    if ( gdjs.speedrunCode.GDNewObject5Objects1[i].getVariableString(gdjs.speedrunCode.GDNewObject5Objects1[i].getVariables().get("rgb")) == "g" ) {
        gdjs.speedrunCode.condition0IsTrue_0.val = true;
        gdjs.speedrunCode.GDNewObject5Objects1[k] = gdjs.speedrunCode.GDNewObject5Objects1[i];
        ++k;
    }
}
gdjs.speedrunCode.GDNewObject5Objects1.length = k;}if (gdjs.speedrunCode.condition0IsTrue_0.val) {
/* Reuse gdjs.speedrunCode.GDNewObject5Objects1 */
{for(var i = 0, len = gdjs.speedrunCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.speedrunCode.GDNewObject5Objects1[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.speedrunCode.GDNewObject5Objects1);

gdjs.speedrunCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.speedrunCode.GDNewObject5Objects1.length;i<l;++i) {
    if ( gdjs.speedrunCode.GDNewObject5Objects1[i].getVariableString(gdjs.speedrunCode.GDNewObject5Objects1[i].getVariables().get("rgb")) == "b" ) {
        gdjs.speedrunCode.condition0IsTrue_0.val = true;
        gdjs.speedrunCode.GDNewObject5Objects1[k] = gdjs.speedrunCode.GDNewObject5Objects1[i];
        ++k;
    }
}
gdjs.speedrunCode.GDNewObject5Objects1.length = k;}if (gdjs.speedrunCode.condition0IsTrue_0.val) {
/* Reuse gdjs.speedrunCode.GDNewObject5Objects1 */
{for(var i = 0, len = gdjs.speedrunCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.speedrunCode.GDNewObject5Objects1[i].setAnimation(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.speedrunCode.GDNewObject5Objects1);
{for(var i = 0, len = gdjs.speedrunCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.speedrunCode.GDNewObject5Objects1[i].setScale(2.5);
}
}{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.speedrunCode.GDNewObject5Objects1);

gdjs.speedrunCode.condition0IsTrue_0.val = false;
gdjs.speedrunCode.condition1IsTrue_0.val = false;
gdjs.speedrunCode.condition2IsTrue_0.val = false;
{
gdjs.speedrunCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.speedrunCode.condition0IsTrue_0.val ) {
{
gdjs.speedrunCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.speedrunCode.condition1IsTrue_0.val ) {
{
gdjs.speedrunCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("delete")) == 1;
}}
}
if (gdjs.speedrunCode.condition2IsTrue_0.val) {
/* Reuse gdjs.speedrunCode.GDNewObject5Objects1 */
{for(var i = 0, len = gdjs.speedrunCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.speedrunCode.GDNewObject5Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.speedrunCode.GDNewObject4Objects1);

gdjs.speedrunCode.condition0IsTrue_0.val = false;
gdjs.speedrunCode.condition1IsTrue_0.val = false;
gdjs.speedrunCode.condition2IsTrue_0.val = false;
{
gdjs.speedrunCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.speedrunCode.condition0IsTrue_0.val ) {
{
gdjs.speedrunCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.speedrunCode.condition1IsTrue_0.val ) {
{
{gdjs.speedrunCode.conditionTrue_1 = gdjs.speedrunCode.condition2IsTrue_0;
gdjs.speedrunCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7469212);
}
}}
}
if (gdjs.speedrunCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.speedrunCode.GDNewObject5Objects1);
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.speedrunCode.mapOfGDgdjs_46speedrunCode_46GDNewObject5Objects1Objects);
}{for(var i = 0, len = gdjs.speedrunCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.speedrunCode.GDNewObject5Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.speedrunCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.speedrunCode.GDNewObjectObjects1.length = 0;
gdjs.speedrunCode.GDNewObjectObjects2.length = 0;
gdjs.speedrunCode.GDNewObject3Objects1.length = 0;
gdjs.speedrunCode.GDNewObject3Objects2.length = 0;
gdjs.speedrunCode.GDNewObject4Objects1.length = 0;
gdjs.speedrunCode.GDNewObject4Objects2.length = 0;
gdjs.speedrunCode.GDNewObject5Objects1.length = 0;
gdjs.speedrunCode.GDNewObject5Objects2.length = 0;
gdjs.speedrunCode.GDred_95selectObjects1.length = 0;
gdjs.speedrunCode.GDred_95selectObjects2.length = 0;
gdjs.speedrunCode.GDblue_95selectObjects1.length = 0;
gdjs.speedrunCode.GDblue_95selectObjects2.length = 0;
gdjs.speedrunCode.GDgreen_95selectObjects1.length = 0;
gdjs.speedrunCode.GDgreen_95selectObjects2.length = 0;

gdjs.speedrunCode.eventsList0(runtimeScene);
return;

}

gdjs['speedrunCode'] = gdjs.speedrunCode;
