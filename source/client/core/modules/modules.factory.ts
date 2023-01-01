export interface Module {
  locales?: Record<string, Record<string, unknown>>;
  init(): void;
}

export abstract class ModuleFactory {
  abstract createModule(): Module;
}
