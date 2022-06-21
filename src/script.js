/////////////////////////////////////////////////////////////////////////
///// IMPORT
import './main.css'
import * as THREE from 'three'
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { Vector3 } from 'three'

/////////////////////////////////////////////////////////////////////////
//// DRACO LOADER TO LOAD DRACO COMPRESSED MODELS FROM BLENDER
const dracoLoader = new DRACOLoader()
const loader = new GLTFLoader()
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
dracoLoader.setDecoderConfig({ type: 'js' })
loader.setDRACOLoader(dracoLoader)

setTimeout(()=>{    document.getElementById( 'loading-screen' ).style.display='none'
},4000)
/////////////////////////////////////////////////////////////////////////
///// DIV CONTAINER CREATION TO HOLD THREEJS EXPERIENCE
const container = document.createElement('div')
document.body.appendChild(container)

/////////////////////////////////////////////////////////////////////////
///// SCENE CREATION
const scene = new THREE.Scene()
scene.background = new THREE.Color('#c8f0f9')

/////////////////////////////////////////////////////////////////////////
///// RENDERER CONFIG
const renderer = new THREE.WebGLRenderer({ antialias: true}) // turn on antialias
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) //set pixel ratio
renderer.setSize(window.innerWidth, window.innerHeight) // make it full screen
renderer.outputEncoding = THREE.sRGBEncoding // set color encoding
container.appendChild(renderer.domElement) // add the renderer to html div

/////////////////////////////////////////////////////////////////////////
///// CAMERAS CONFIG
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 10000)
camera.position.set(1.546,42.178,-0.006)
scene.add(camera)

/////////////////////////////////////////////////////////////////////////
///// MAKE EXPERIENCE FULL SCREEN
window.addEventListener('resize', () => {
    const width = window.innerWidth
    const height = window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
    renderer.setPixelRatio(2)
})

/////////////////////////////////////////////////////////////////////////
///// CREATE ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement)

/////////////////////////////////////////////////////////////////////////
///// SCENE LIGHTS
const ambient = new THREE.AmbientLight(0xa0a0fc, 0.82)
scene.add(ambient)

const sunLight = new THREE.DirectionalLight(0xe8c37b, 1.96)
sunLight.position.set(-69,44,14)
scene.add(sunLight)

/////////////////////////////////////////////////////////////////////////
///// LOADING GLB/GLTF MODEL FROM BLENDER
loader.load('models/gltf/untitled.glb', function (gltf) {
    gltf.scene.position.y=1

    scene.add(gltf.scene)
})
var building1=null
var   mixer0=null
var   mixer1=null
var   mixer2=null
var   action=null
var   action2=null
var mixer3=null
var mixer4=null
loader.load('models/gltf/first building.glb', function (gltf) {
    mixer0 = new THREE.AnimationMixer(gltf.scene);
    for (let i=0; i<3 ;i++){
        action = mixer0.clipAction(gltf.animations[i]);
        action.play()

}
  
    gltf.scene.position.y=-10
    gltf.scene.position.x=8
    gltf.scene.position.z=6
    
    scene.add(gltf.scene)
    building1=gltf.scene
})
var building2=null
loader.load('models/gltf/second building.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
  

  
    gltf.scene.position.y=-10
    gltf.scene.position.x=-7.5
    gltf.scene.position.z=5.8
    
    scene.add(gltf.scene)
    building2=gltf.scene
})
var building3=null

loader.load('models/gltf/third building.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
  

  
    gltf.scene.position.y=-10
    gltf.scene.position.x=10
    gltf.scene.position.z=-2
    
    scene.add(gltf.scene)
    building3=gltf.scene
})
var building4=null
loader.load('models/gltf/forth building.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
  

  
    gltf.scene.position.y=-10
    gltf.scene.position.x=-1
    gltf.scene.position.z=4
    
    scene.add(gltf.scene)
    building4=gltf.scene
})

var building5=null
loader.load('models/gltf/fifth building.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
  

  
    gltf.scene.position.y=-14
    gltf.scene.position.x=4
    gltf.scene.position.z=4
    
    scene.add(gltf.scene)
    building5=gltf.scene
  
})
var building6=null

loader.load('models/gltf/sixth building.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
  

  
    gltf.scene.position.y=-10
    gltf.scene.position.x=8
    gltf.scene.position.z=-9
    
    scene.add(gltf.scene)
    building6=gltf.scene

})
var building7=null

loader.load('models/gltf/sevnth building.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
  

  
    gltf.scene.position.y=-10
    gltf.scene.position.x=8
    gltf.scene.position.z=-9
    
    scene.add(gltf.scene)
    building7=gltf.scene

})

var building8=null

loader.load('models/gltf/eighth building.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
  

  
    gltf.scene.position.y=-10
    gltf.scene.position.x=8
    gltf.scene.position.z=-9
    
    scene.add(gltf.scene)
    building8=gltf.scene
})

var building9=null

loader.load('models/gltf/ninth building.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
  

  
    gltf.scene.position.y=-15
    gltf.scene.position.x=8
    gltf.scene.position.z=-9
    
    scene.add(gltf.scene)
    building9=gltf.scene
})

var building10=null

loader.load('models/gltf/tenth building.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
  

  
    gltf.scene.position.y=-10
    gltf.scene.position.x=8
    gltf.scene.position.z=-9
    
    scene.add(gltf.scene)
    building10=gltf.scene
})
var building11=null

loader.load('models/gltf/elevnth building.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
  

  
    gltf.scene.position.y=-10
    gltf.scene.position.x=8
    gltf.scene.position.z=-9
    
    scene.add(gltf.scene)
    building11=gltf.scene
})
var building12=null

loader.load('models/gltf/twelvth building.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
  

  
    gltf.scene.position.y=-13
    gltf.scene.position.x=8
    gltf.scene.position.z=-9
    
    scene.add(gltf.scene)
    building12=gltf.scene
})
var building13=null

loader.load('models/gltf/therteen building.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
  

  
    gltf.scene.position.y=-15
    gltf.scene.position.x=8
    gltf.scene.position.z=-9
    
    scene.add(gltf.scene)
    building13=gltf.scene
})
const tweenCamera1 = new TWEEN.Tween( {x: controls.object.position.x, y: controls.object.position.y, z: controls.object.position.z, lookAtX: 0, lookAtY: 0, lookAtZ: 0} )
  .to( {x: 0.957, y: 33.086, z: 39.129, lookAtX: 0, lookAtY: 0, lookAtZ: 0}, 2000 )

  const updateCamera = function (object ) {
    camera.position.set(object.x, object.y, object.z);
    camera.lookAt(new THREE.Vector3(object.lookAtX, object.lookAtY, object.lookAtZ))
  }
  var camerarotation=null
  tweenCamera1.onComplete(function() {
    camerarotation=true
    
loader.load('models/gltf/taxi.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
    gltf.scene.position.y=1
    mixer4 = new THREE.AnimationMixer(gltf.scene);

    action = mixer4.clipAction(gltf.animations[0]);
    action.play()

    scene.add(gltf.scene)
})

loader.load('models/gltf/helis2.glb', function (gltf) {
    mixer1 = new THREE.AnimationMixer(gltf.scene);
    gltf.scene.position.y=1
    mixer2 = new THREE.AnimationMixer(gltf.scene);
    mixer3 = new THREE.AnimationMixer(gltf.scene);
    
    action = mixer2.clipAction(gltf.animations[0]);
    action2 = mixer3.clipAction(gltf.animations[1]);
    action.play()
    action2.play()

    scene.add(gltf.scene)
})

  })
  tweenCamera1.onUpdate(updateCamera)
  document.getElementById('play').onclick=function(){
    controls.enableRotate = true
    controls.enableZoom = true
    document.getElementById(0).style.display='none'
    document.getElementById(1).style.display='none'
    document.getElementById(2).style.display='none'
    document.getElementById(3).style.display='none'
    document.getElementById(4).style.display='none'
    document.getElementById(5).style.display='none'
    document.getElementById(6).style.display='none'
    document.getElementById(7).style.display='none'
    document.getElementById(8).style.display='none'
    document.getElementById(9).style.display='none'
    document.getElementById(10).style.display='none'
    document.getElementById(11).style.display='none'
    document.getElementById(12).style.display='none'
    document.getElementById("play").style.display='none'
  tweenCamera1.start()}



//
// const raycaster = new THREE.Raycaster(); // create once
// const clickMouse = new THREE.Vector2();  // create once
// const moveMouse = new THREE.Vector2();   // create once

/// bazar
// function intersect(pos) {
//   raycaster.setFromCamera(pos, camera);
//   return raycaster.intersectObject(sphere);
// }
// window.addEventListener('click', event => {
    var clickActive1=false
    var clickActive2=false
    var clickActive3=false
    var clickActive4=false
    var clickActive5=false
    var clickActive6=false
    var clickActive7=false
    var clickActive8=false
    var clickActive9=false
    var clickActive10=false
    var clickActive11=false
    var clickActive12=false
    var clickActive13=false
    var buildingNumber=0
    document.getElementById(0).onclick= function(){
        document.getElementById(0).style.display='none'

        if (!clickActive1){clickActive1=true
        buildingNumber=1}
       else if (clickActive1){

            clickActive1=false

        buildingNumber=1
        }
    }
    document.getElementById(1).onclick= function(){
        document.getElementById(1).style.display='none'

        if (!clickActive2){clickActive2=true

            buildingNumber=1}
           else if (clickActive2){
                clickActive2=false
            buildingNumber=1

            }
    }

    document.getElementById(2).onclick= function(){
        document.getElementById(2).style.display='none'

        if (!clickActive3){clickActive3=true
            buildingNumber=1}
           else if (clickActive3){
                clickActive3=false
            buildingNumber=1
            }
    }
    document.getElementById(3).onclick= function(){
        document.getElementById(3).style.display='none'

        if (!clickActive4){clickActive4=true
            buildingNumber=1}
           else if (clickActive4){
                clickActive4=false
            buildingNumber=1
            }
    }
    document.getElementById(4).onclick= function(){
        document.getElementById(4).style.display='none'

        if (!clickActive5){clickActive5=true
            buildingNumber=1}
           else if (clickActive5){
                clickActive5=false
            buildingNumber=1
            }
    }
    document.getElementById(5).onclick= function(){
        document.getElementById(5).style.display='none'

        if (!clickActive6){clickActive6=true
            buildingNumber=1}
           else if (clickActive6){
                clickActive6=false
            buildingNumber=1
            }
    }  
    
    document.getElementById(6).onclick= function(){
        document.getElementById(6).style.display='none'

        if (!clickActive7){clickActive7=true
            buildingNumber=1}
           else if (clickActive7){
                clickActive7=false
            buildingNumber=1
            }
    }  
    document.getElementById(7).onclick= function(){
        document.getElementById(7).style.display='none'

        if (!clickActive8){clickActive8=true
            buildingNumber=1}
           else if (clickActive8){
                clickActive8=false
            buildingNumber=1
            }
    }  
    document.getElementById(8).onclick= function(){
        document.getElementById(8).style.display='none'

        if (!clickActive9){clickActive9=true
            buildingNumber=1}
           else if (clickActive9){
                clickActive9=false
            buildingNumber=1
            }
    }  

    document.getElementById(9).onclick= function(){
        document.getElementById(9).style.display='none'

        if (!clickActive10){clickActive10=true
            buildingNumber=1}
           else if (clickActive10){
                clickActive10=false
            buildingNumber=1
            }
    }  
    document.getElementById(10).onclick= function(){
        document.getElementById(10).style.display='none'

        if (!clickActive11){clickActive11=true
            buildingNumber=1}
           else if (clickActive11){
                clickActive11=false
            buildingNumber=1
            }
    }  
    document.getElementById(11).onclick= function(){
        document.getElementById(11).style.display='none'

        if (!clickActive12){clickActive12=true
            buildingNumber=1}
           else if (clickActive12){
                clickActive12=false
            buildingNumber=1
            }
    }  
    document.getElementById(12).onclick= function(){
        document.getElementById(12).style.display='none'

        if (!clickActive13){clickActive13=true
            buildingNumber=1}
           else if (clickActive13){
                clickActive13=false
            buildingNumber=1
            }
    }  

    // // THREE RAYCASTER
    // clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    // clickMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // const found = intersect(clickMouse);
    // if(found.length>0 && !clickActive){
    //   clickActive=true
// }})
/////////////////////////////////////////////////////////////////////////
//// INTRO CAMERA ANIMATION USING TWEEN
// function introAnimation() {
//     controls.enabled = false //disable orbit controls to animate the camera
    
//     new TWEEN.Tween(camera.position.set(26,4,-35 )).to({ // from camera position
//         x: 16, //desired x position to go
//         y: 50, //desired y position to go
//         z: -0.1 //desired z position to go
//     }, 6500) // time take to animate
//     .delay(1000).easing(TWEEN.Easing.Quartic.InOut).start() // define delay, easing
//     .onComplete(function () { //on finish animation
//         controls.enabled = true //enable orbit controls
//         setOrbitControlsLimits() //enable controls limits
//         TWEEN.remove(this) // remove the animation from memory
//     })
// }

// introAnimation() // call intro animation on start

/////////////////////////////////////////////////////////////////////////
//// DEFINE ORBIT CONTROLS LIMITS
function setOrbitControlsLimits(){
    // controls.enableDamping = true
    // controls.dampingFactor = 0.04
    controls.minDistance = 2
    controls.maxDistance = 77
    controls.enableRotate = false
    controls.enableZoom = false
    controls.target = new THREE.Vector3(0, 8, 0);

    // controls.maxPolarAngle = Math.PI /2.5
}
setOrbitControlsLimits()
//  adding the spheres

// const geometry = new THREE.SphereGeometry( 3, 32, 16 );
// const material = new THREE.MeshBasicMaterial( { color: 0xFF0000 } );
// const sphere = new THREE.Mesh( geometry, material );
// scene.add( sphere );
// sphere.position.set(-20,22,0)



/////////////////////////////////////////////////////////////////////////
//// RENDER LOOP FUNCTION
const clock = new THREE.Clock()

function rendeLoop() {
    
if(camerarotation){
    var rotSpeed = .007;
    var x = camera.position.x;
    var z = camera.position.z;
    camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed)/2;
    camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed)/2;
 }
    const elapsedTime = clock.getDelta()
    if(mixer0){

        mixer0.update(elapsedTime)

    }
    if(mixer1){

        mixer1.update(elapsedTime)

    }
    if(mixer2){

        mixer2.update(elapsedTime)

    }
    if(mixer3){

        mixer3.update(elapsedTime)

    }
    if(mixer4){

        mixer4.update(elapsedTime)

    }
     if (clickActive1 && buildingNumber===1){
        
        if(building1.position.y<1.7){
        building1.position.y=building1.position.y+0.1
    }
     }
     if (!clickActive1 && buildingNumber===1){
        if(building1.position.y>-9){
        building1.position.y=building1.position.y-0.1
    }
     }
     if (clickActive2 && buildingNumber===1){
        if(building2.position.y<2.3){
        building2.position.y=building2.position.y+0.1}
     }
     if (!clickActive2 && buildingNumber===1){
        if(building2.position.y>-9){
            building2.position.y=building2.position.y-0.1
    }
     }
     if (clickActive3 && buildingNumber===1){
        if(building3.position.y<2.3){
        building3.position.y=building3.position.y+0.1}
     }
     if (!clickActive3 && buildingNumber===1){
        if(building3.position.y>-9){
            building3.position.y=building3.position.y-0.1
    }
     }
     if (clickActive4 && buildingNumber===1){
        if(building4.position.y<2.3){
        building4.position.y=building4.position.y+0.1}
     }
     if (!clickActive4 && buildingNumber===1){
        if(building4.position.y>-9){
            building4.position.y=building4.position.y-0.1
    }
     }

     if (clickActive5 && buildingNumber===1){
        if(building5.position.y<2.3){
        building5.position.y=building5.position.y+0.1}
     }
     if (!clickActive5 && buildingNumber===1){
        if(building5.position.y>-14){
            building5.position.y=building5.position.y-0.1
    }
     }
     if (clickActive6 && buildingNumber===1){
        if(building6.position.y<2.3){
        building6.position.y=building6.position.y+0.1}
     }
     if (!clickActive6 && buildingNumber===1){
        if(building6.position.y>-14){
            building6.position.y=building6.position.y-0.1
    }
     }

     if (clickActive7 && buildingNumber===1){
        if(building7.position.y<1.5){
        building7.position.y=building7.position.y+0.1}
     }
     if (!clickActive7 && buildingNumber===1){
        if(building7.position.y>-9){
            building7.position.y=building7.position.y-0.1
    }
     }
     if (clickActive8 && buildingNumber===1){
        if(building8.position.y<1.5){
        building8.position.y=building8.position.y+0.1}
     }
     if (!clickActive8 && buildingNumber===1){
        if(building8.position.y>-9){
            building8.position.y=building8.position.y-0.1
    }
     }
     if (clickActive9 && buildingNumber===1){
        if(building9.position.y<1.5){
        building9.position.y=building9.position.y+0.1}
     }
     if (!clickActive9 && buildingNumber===1){
        if(building9.position.y>-9){
            building9.position.y=building9.position.y-0.1
    }
     }
     if (clickActive10 && buildingNumber===1){
        if(building10.position.y<1.5){
        building10.position.y=building10.position.y+0.1}
     }
     if (!clickActive10 && buildingNumber===1){
        if(building10.position.y>-9){
            building10.position.y=building10.position.y-0.1
    }
     }
     if (clickActive11 && buildingNumber===1){
        if(building11.position.y<1.5){
        building11.position.y=building11.position.y+0.1}
     }
     if (!clickActive11 && buildingNumber===1){
        if(building11.position.y>-9){
            building11.position.y=building11.position.y-0.1
    }
     }
     if (clickActive12 && buildingNumber===1){
        if(building12.position.y<1.5){
        building12.position.y=building12.position.y+0.1}
     }
     if (!clickActive12 && buildingNumber===1){
        if(building12.position.y>-9){
            building12.position.y=building12.position.y-0.1
    }
     }
     if (clickActive13 && buildingNumber===1){
        if(building13.position.y<1.5){
        building13.position.y=building13.position.y+0.1}
     }
     if (!clickActive13 && buildingNumber===1){
        if(building13.position.y>-9){
            building13.position.y=building13.position.y-0.1
    }
     }
    TWEEN.update() // update animations
    controls.update() // update orbit controls
    renderer.render(scene, camera) // render the scene using the camera

    requestAnimationFrame(rendeLoop) //loop the render function
}

rendeLoop() //start rendering