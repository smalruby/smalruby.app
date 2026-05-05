import { ScratchStorage } from 'scratch-storage';
import { GUIStorage, TranslatorFunction, VirtualMachine, GUICloudVariableProvider } from '../gui-config';
import { LegacyBackpackStorage } from './legacy-backpack-storage';
export declare class LegacyStorage implements GUIStorage {
    private projectHost?;
    private projectToken?;
    private assetHost?;
    private translator?;
    readonly scratchStorage: ScratchStorage;
    readonly backpackStorage: LegacyBackpackStorage;
    readonly cloudVariables: {
        createProvider(cloudHost: string, vm: VirtualMachine, username: string, projectId: string): GUICloudVariableProvider;
    };
    constructor();
    setProjectHost(host: string): void;
    setProjectToken(token: string): void;
    setProjectMetadata(projectId: string | null | undefined): void;
    setAssetHost(host: string): void;
    setTranslatorFunction(translator: TranslatorFunction): void;
    setBackpackHost(host: string): void;
    saveProject(projectId: number, vmState: string, params: {
        originalId: string;
        isCopy: boolean;
        isRemix: boolean;
        title: string;
    }): Promise<{
        id: string | number;
    }>;
    private cacheDefaultProject;
    private addOfficialScratchWebStores;
    private getProjectGetConfig;
    private getProjectCreateConfig;
    private getProjectUpdateConfig;
    private getAssetGetConfig;
    private getAssetCreateConfig;
}
