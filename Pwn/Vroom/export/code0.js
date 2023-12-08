gdjs.GameCode = {};
gdjs.GameCode.GDRoadStraightObjects1= [];
gdjs.GameCode.GDRoadStraightObjects2= [];
gdjs.GameCode.GDRoadStraightObjects3= [];
gdjs.GameCode.GDLightCurvedObjects1= [];
gdjs.GameCode.GDLightCurvedObjects2= [];
gdjs.GameCode.GDLightCurvedObjects3= [];
gdjs.GameCode.GDSedanObjects1= [];
gdjs.GameCode.GDSedanObjects2= [];
gdjs.GameCode.GDSedanObjects3= [];
gdjs.GameCode.GDBuilding3SmallObjects1= [];
gdjs.GameCode.GDBuilding3SmallObjects2= [];
gdjs.GameCode.GDBuilding3SmallObjects3= [];
gdjs.GameCode.GDHouse2Objects1= [];
gdjs.GameCode.GDHouse2Objects2= [];
gdjs.GameCode.GDHouse2Objects3= [];
gdjs.GameCode.GDGrass1Objects1= [];
gdjs.GameCode.GDGrass1Objects2= [];
gdjs.GameCode.GDGrass1Objects3= [];
gdjs.GameCode.GDRoadBendSidewalkObjects1= [];
gdjs.GameCode.GDRoadBendSidewalkObjects2= [];
gdjs.GameCode.GDRoadBendSidewalkObjects3= [];
gdjs.GameCode.GDStartLineObjects1= [];
gdjs.GameCode.GDStartLineObjects2= [];
gdjs.GameCode.GDStartLineObjects3= [];
gdjs.GameCode.GDStart_9595signObjects1= [];
gdjs.GameCode.GDStart_9595signObjects2= [];
gdjs.GameCode.GDStart_9595signObjects3= [];
gdjs.GameCode.GDFinishLineObjects1= [];
gdjs.GameCode.GDFinishLineObjects2= [];
gdjs.GameCode.GDFinishLineObjects3= [];
gdjs.GameCode.GDFinish_9595signObjects1= [];
gdjs.GameCode.GDFinish_9595signObjects2= [];
gdjs.GameCode.GDFinish_9595signObjects3= [];
gdjs.GameCode.GDGameDisplayObjects1= [];
gdjs.GameCode.GDGameDisplayObjects2= [];
gdjs.GameCode.GDGameDisplayObjects3= [];
gdjs.GameCode.GDNewTextObjects1= [];
gdjs.GameCode.GDNewTextObjects2= [];
gdjs.GameCode.GDNewTextObjects3= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSedanObjects1Objects = Hashtable.newFrom({"Sedan": gdjs.GameCode.GDSedanObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStartLineObjects1Objects = Hashtable.newFrom({"StartLine": gdjs.GameCode.GDStartLineObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSedanObjects1Objects = Hashtable.newFrom({"Sedan": gdjs.GameCode.GDSedanObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFinishLineObjects1Objects = Hashtable.newFrom({"FinishLine": gdjs.GameCode.GDFinishLineObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 15;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameDisplay"), gdjs.GameCode.GDGameDisplayObjects2);
{for(var i = 0, len = gdjs.GameCode.GDGameDisplayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGameDisplayObjects2[i].getBehavior("Text").setText("Well done! The flag is d:ctf{multi-track-hacking}");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 15;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameDisplay"), gdjs.GameCode.GDGameDisplayObjects1);
{for(var i = 0, len = gdjs.GameCode.GDGameDisplayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGameDisplayObjects1[i].getBehavior("Text").setText("Unlucky! Press R to restart.");
}
}}

}


};gdjs.GameCode.mapOfEmptyGDFinishLineObjects = Hashtable.newFrom({"FinishLine": []});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.GameCode.GDSedanObjects1);
{for(var i = 0, len = gdjs.GameCode.GDSedanObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSedanObjects1[i].returnVariable(gdjs.GameCode.GDSedanObjects1[i].getVariables().getFromIndex(0)).add(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.GameCode.GDSedanObjects1);
{for(var i = 0, len = gdjs.GameCode.GDSedanObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSedanObjects1[i].returnVariable(gdjs.GameCode.GDSedanObjects1[i].getVariables().getFromIndex(0)).sub(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.GameCode.GDSedanObjects1);
{for(var i = 0, len = gdjs.GameCode.GDSedanObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSedanObjects1[i].rotate(-(30), runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.GameCode.GDSedanObjects1);
{for(var i = 0, len = gdjs.GameCode.GDSedanObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSedanObjects1[i].rotate(30, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.GameCode.GDSedanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSedanObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSedanObjects1[i].getVariableNumber(gdjs.GameCode.GDSedanObjects1[i].getVariables().getFromIndex(0)) > 30 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSedanObjects1[k] = gdjs.GameCode.GDSedanObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSedanObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDSedanObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSedanObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSedanObjects1[i].returnVariable(gdjs.GameCode.GDSedanObjects1[i].getVariables().getFromIndex(0)).setNumber(30);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.GameCode.GDSedanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSedanObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSedanObjects1[i].getVariableNumber(gdjs.GameCode.GDSedanObjects1[i].getVariables().getFromIndex(0)) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSedanObjects1[k] = gdjs.GameCode.GDSedanObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSedanObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDSedanObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSedanObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSedanObjects1[i].addPolarForce((gdjs.GameCode.GDSedanObjects1[i].getAngle()), (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDSedanObjects1[i].getVariables().getFromIndex(0))), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.GameCode.GDSedanObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartLine"), gdjs.GameCode.GDStartLineObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSedanObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStartLineObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDStartLineObjects1 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}{for(var i = 0, len = gdjs.GameCode.GDStartLineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDStartLineObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FinishLine"), gdjs.GameCode.GDFinishLineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.GameCode.GDSedanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSedanObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFinishLineObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDFinishLineObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFinishLineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFinishLineObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDFinishLineObjects) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameDisplay"), gdjs.GameCode.GDGameDisplayObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{for(var i = 0, len = gdjs.GameCode.GDGameDisplayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGameDisplayObjects1[i].getBehavior("Text").setText("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 2)) + "s");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDRoadStraightObjects1.length = 0;
gdjs.GameCode.GDRoadStraightObjects2.length = 0;
gdjs.GameCode.GDRoadStraightObjects3.length = 0;
gdjs.GameCode.GDLightCurvedObjects1.length = 0;
gdjs.GameCode.GDLightCurvedObjects2.length = 0;
gdjs.GameCode.GDLightCurvedObjects3.length = 0;
gdjs.GameCode.GDSedanObjects1.length = 0;
gdjs.GameCode.GDSedanObjects2.length = 0;
gdjs.GameCode.GDSedanObjects3.length = 0;
gdjs.GameCode.GDBuilding3SmallObjects1.length = 0;
gdjs.GameCode.GDBuilding3SmallObjects2.length = 0;
gdjs.GameCode.GDBuilding3SmallObjects3.length = 0;
gdjs.GameCode.GDHouse2Objects1.length = 0;
gdjs.GameCode.GDHouse2Objects2.length = 0;
gdjs.GameCode.GDHouse2Objects3.length = 0;
gdjs.GameCode.GDGrass1Objects1.length = 0;
gdjs.GameCode.GDGrass1Objects2.length = 0;
gdjs.GameCode.GDGrass1Objects3.length = 0;
gdjs.GameCode.GDRoadBendSidewalkObjects1.length = 0;
gdjs.GameCode.GDRoadBendSidewalkObjects2.length = 0;
gdjs.GameCode.GDRoadBendSidewalkObjects3.length = 0;
gdjs.GameCode.GDStartLineObjects1.length = 0;
gdjs.GameCode.GDStartLineObjects2.length = 0;
gdjs.GameCode.GDStartLineObjects3.length = 0;
gdjs.GameCode.GDStart_9595signObjects1.length = 0;
gdjs.GameCode.GDStart_9595signObjects2.length = 0;
gdjs.GameCode.GDStart_9595signObjects3.length = 0;
gdjs.GameCode.GDFinishLineObjects1.length = 0;
gdjs.GameCode.GDFinishLineObjects2.length = 0;
gdjs.GameCode.GDFinishLineObjects3.length = 0;
gdjs.GameCode.GDFinish_9595signObjects1.length = 0;
gdjs.GameCode.GDFinish_9595signObjects2.length = 0;
gdjs.GameCode.GDFinish_9595signObjects3.length = 0;
gdjs.GameCode.GDGameDisplayObjects1.length = 0;
gdjs.GameCode.GDGameDisplayObjects2.length = 0;
gdjs.GameCode.GDGameDisplayObjects3.length = 0;
gdjs.GameCode.GDNewTextObjects1.length = 0;
gdjs.GameCode.GDNewTextObjects2.length = 0;
gdjs.GameCode.GDNewTextObjects3.length = 0;

gdjs.GameCode.eventsList1(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
