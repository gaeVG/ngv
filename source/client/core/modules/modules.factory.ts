export interface Module {
  init(): void;
}

export abstract class ModuleFactory {
  abstract createModule(): Module;
}
