import { Core } from '@core';

export class ModulesManager extends Core {
  constructor(protected modules = []) {
    super();
    this.modules = modules;
  }

  onStart() {
    this.modules.forEach((module) => {
      Core.threads.add(module.name, module.thread);
      module.onStart();
    });
  }
}
