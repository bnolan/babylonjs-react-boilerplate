"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_babylonjs_1 = require("react-babylonjs");
var babylonjs_1 = require("babylonjs");
var With2DUI = /** @class */ (function (_super) {
    __extends(With2DUI, _super);
    function With2DUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(ctx: any, props: any) {
    //   super(ctx, props);
    //   this.state = {
    //     plane: undefined,
    //     showModal: false,
    //     clickMeshName: undefined,
    //     allowedMeshes: [
    //       'red box',
    //       'blue box',
    //       'green box'
    //     ],
    //     sceneClearColor: new Color4(0.5, 0.5, 0.5, 0.5)
    //   }
    //   this.meshPicked = this.meshPicked.bind(this);
    //   this.setPlane = this.setPlane.bind(this);
    //   // TODO: fix that bind() is needed on assignment on button pointerDown handlers
    // }
    // meshPicked(mesh) {
    //   if (this.state.allowedMeshes.indexOf(mesh.name) !== -1) {
    //     const clickedMeshName = mesh.name
    //     let clickedMeshColor;
    //     let sceneClearColor;
    //     switch(clickedMeshName) {
    //       case 'red box':
    //         clickedMeshColor = Color3.Red().toHexString()
    //         sceneClearColor = new Color4(1, 0, 0, 0.5)
    //         break;
    //       case 'blue box':
    //         clickedMeshColor = Color3.Blue().toHexString()
    //         sceneClearColor = new Color4(0, 0, 1, 0.5)
    //         break;
    //       case 'green box':
    //       default:
    //         clickedMeshColor = Color3.Green().toHexString()
    //         sceneClearColor = new Color4(0, 1, 0, 0.5)
    //         break;
    //     }
    //     this.setState((state) => ({
    //       ...state,
    //       showModal: true,
    //       clickedMeshName,
    //       clickedMeshColor,
    //       sceneClearColor
    //     }))
    //   } else {
    //     console.log('ignoring clicks on:', mesh.name, this.state)
    //   }
    // }
    // deleteSelectedMesh() {
    //   let { plane } = this.state
    //   let meshToDelete = plane._scene.getMeshByName(this.state.clickedMeshName);
    //   meshToDelete.dispose();
    //   this.setState((state) => ({
    //     ...state,
    //     sceneClearColor: new Color4(0.5, 0.5, 0.5, 0.5),
    //     allowedMeshes: state.allowedMeshes.filter(name => name !== state.clickedMeshName)
    //   }))
    //   // TODO: if they're all 'deleted' - recreate them?
    //   this.hideModal();
    // }
    // hideModal() {
    //   let { plane } = this.state
    //   if (!plane) {
    //     return;
    //   }
    //   let keys = [];
    //   keys.push({ frame: 0, value: 1 });
    //   keys.push({ frame: 10, value: 0 });
    //   var animationClose = new Animation(
    //       'tv-off-1984',
    //       'scaling.x',
    //       10,
    //       Animation.ANIMATIONTYPE_FLOAT,
    //       Animation.ANIMATIONLOOPMODE_CONSTANT
    //   );
    //   animationClose.setKeys(keys);
    //   let easingFunction = new ExponentialEase(9.7); // BABYLON.QuarticEase()
    //   easingFunction.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);
    //   animationClose.setEasingFunction(easingFunction);
    //   plane.animations.push(animationClose);
    //   plane._scene.beginAnimation(plane, 0, 100, false, 1, () => {
    //     plane.dispose();
    //     this.setState((state) => ({
    //       ...state,
    //       showModal: false,
    //       plane: undefined,
    //       sceneClearColor: new Color4(0.5, 0.5, 0.5, 0.5)
    //     }));
    //   });
    // }
    // setPlane(plane) {
    //   this.setState((state) => ({
    //     ...state,
    //     plane
    //   }))
    //   if (plane._scene && plane._scene.activeCamera) {
    //     let { activeCamera } = plane._scene
    //     let forwardRayDirection = activeCamera.getForwardRay().direction;
    //     plane.position = activeCamera.position.add(forwardRayDirection.scale(1.5 / activeCamera.fov /* * forwardRay.length */));
    //     plane.lookAt(activeCamera.position);
    //   }
    // }
    With2DUI.prototype.render = function () {
        var dialogWidth = 3;
        var dialogHeight = 1;
        return (React.createElement(react_babylonjs_1.Engine, { canvasId: "sample-canvas", antialias: true, width: 400, height: 300 },
            React.createElement(react_babylonjs_1.Scene, { canvas: null, engine: null, scene: null },
                React.createElement(react_babylonjs_1.FreeCamera, { name: "camera1", position: new babylonjs_1.Vector3(0, 5, -10), target: babylonjs_1.Vector3.Zero() }),
                React.createElement(react_babylonjs_1.HemisphericLight, { name: "light1", intensity: 0.7, direction: babylonjs_1.Vector3.Up() }),
                React.createElement(react_babylonjs_1.Sphere, { name: "sphere1", diameter: 2, segments: 16, position: new babylonjs_1.Vector3(0, 2, 0) }),
                React.createElement(react_babylonjs_1.Ground, { name: "ground1", width: 6, height: 6, subdivisions: 2 }))));
    };
    return With2DUI;
}(React.Component));
exports["default"] = With2DUI;
