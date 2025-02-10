export const configureContext = (
  canvas: HTMLCanvasElement,
  device: GPUDevice
) => {
  const context = canvas.getContext("webgpu")!;
  const format = navigator.gpu.getPreferredCanvasFormat();

  context.configure({
    device,
    format,
  });

  return { context, format };
};

export const getDevice = async () => {
  if (!navigator.gpu) {
    throw new Error("WebGPU not supported on this browser");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw new Error("No appropriate GPUAdapter found.");
  }
  const device = await adapter.requestDevice();

  return device;
};
