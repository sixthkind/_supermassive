import dat from "dat.gui";

export function createConfigGUI(changePerformanceQuality, saveScreenshot) {

  // const gui = new dat.GUI()
  const performanceConfig = addPerformanceConfig();
  const bloomConfig = addBloomConfig();
  const cameraConfig = addCameraConfig();
  const effectConfig = addEffectConfig();
  addSaveToScreenshot();

  // impl

  function addPerformanceConfig() {
    const performanceConfig = {
      resolution: 1.0,
      quality: 'high'
    }
    // const perfFolder = gui.addFolder('Performance');
    // perfFolder.add(performanceConfig, 'resolution', [0.25, 0.5, 1.0, 2.0, 4.0]);
    // perfFolder.add(performanceConfig, 'quality', ['low', 'medium', 'high']).onChange(changePerformanceQuality);
    // perfFolder.open();

    return performanceConfig;
  }

  function addBloomConfig() {
    // const bloomConfig = {
    //   strength: 1.0,
    //   radius: 0.5,
    //   threshold: 0.6
    // };    
    const bloomConfig = {
      strength: 0.9,
      radius: 0.7,
      threshold: 0.98
    };

    // const bloomFolder = gui.addFolder('Bloom')
    // bloomFolder.add(bloomConfig, 'strength', 0.0, 3.0)
    // bloomFolder.add(bloomConfig, 'radius', 0.0, 1.0)
    // bloomFolder.add(bloomConfig, 'threshold', 0.0, 1.0)

    return bloomConfig;
  }

  function addCameraConfig() {
    // const cameraConfig = {
    //   distance: 10,
    //   orbit: true,
    //   fov: 90.0
    // }
    const cameraConfig = {
      distance: 6.2,
      orbit: true,
      fov: 28.0
    }
    // const observerFolder = gui.addFolder('Observer')
    // observerFolder.add(cameraConfig, 'distance', 2, 14)
    // observerFolder.add(cameraConfig, 'fov', 10, 90)
    // observerFolder.add(cameraConfig, 'orbit')
    // observerFolder.open()
    return cameraConfig
  }

  function addEffectConfig() {
    const effectConfig = {
      lorentz_transform: true,
      accretion_disk: true,
      use_disk_texture: true,
      doppler_shift: true,
      beaming: true,
      disk_rotation_speed: 0.15
    }
    // let effectFolder = gui.addFolder('Effects')
    // effectFolder.add(effectConfig, 'lorentz_transform')
    // effectFolder.add(effectConfig, 'doppler_shift')
    // effectFolder.add(effectConfig, 'beaming')
    // effectFolder.add(effectConfig, 'accretion_disk')
    // effectFolder.add(effectConfig, 'use_disk_texture')
    // effectFolder.add(effectConfig, 'disk_rotation_speed', 0.0, 2.0)
    // effectFolder.open()
    return effectConfig;
  }

  function addSaveToScreenshot() {
    const etcconf = {
      'save as an image': saveScreenshot
    }
    // gui.add(etcconf, 'save as an image')
  }


  return {
    performanceConfig,
    bloomConfig,
    effectConfig,
    cameraConfig
  }
}