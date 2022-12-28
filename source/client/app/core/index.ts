import { ThreadManager } from "./threads";
import { ModulesManager } from "./modules";
import { SDKAdaptater } from "interfaces/sdk.interface";

export class Core {
    static debug: boolean;
    
    static sdk: SDKAdaptater;
    static threads: ThreadManager;
    static modules: ModulesManager;
}

export { ThreadManager, ModulesManager }