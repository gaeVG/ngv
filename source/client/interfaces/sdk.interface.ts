export interface SDKAdaptater {
  _construct: () => SDKAdaptater;
  on: (event: string, callback: (data: unknown) => void) => void;
  onNet: (event: string, callback: (data: unknown) => void) => void;
  emit: (event: string, data: unknown) => void;
  emitNet: (event: string, data: unknown) => void;
  // registerCommand: (command: string, callback: (data: unknown) => void, restricted: boolean) => void;
  // registerKeyMapping: (command: string, description: string, key: string, control: boolean) => void;
}
