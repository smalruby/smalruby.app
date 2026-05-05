import { ScratchStorage } from 'scratch-storage';
import { GUIBackpackStorage, BackpackListItemsInput, BackpackSaveItemInput, BackpackItem, BackpackSession, SerializableData } from '../gui-config';
export interface LegacyBackpackStorageConfig {
    /**
     * Reads the current authentication session - necessary for making a backpack request.
     *
     * It can be called with a missing session if the session was not set on the Redux store.
     * In general, the session will be missing when the Standalone version of the editor is used.
     */
    readAuth(session: BackpackSession | null | undefined): Promise<LegacyBackpackAuth>;
}
export interface LegacyBackpackAuth {
    /**
     * The username of the user. This is part of the request URL so it's mandatory
     */
    username: string;
    /**
     * The authentication type - only these two are supported by this backpack service.
     */
    authType: 'x-token' | 'jwt';
    /**
     * The token to be provided as authentication
     */
    authToken: string;
}
export declare class LegacyBackpackStorage implements GUIBackpackStorage {
    private config;
    private host?;
    private webStoreRegistered;
    private session;
    constructor(config: LegacyBackpackStorageConfig);
    /**
     * Set the session for backpack API requests.
     *
     * This is only used by the non-standalone version of the editor, where the session
     * is taken directly from scratch-www's Redux store. In all other cases this will be
     * missing.
     * @param session
     */
    setSession(session: BackpackSession | null | undefined): void;
    setHostAndRegisterWebStore(host: string, scratchStorage: ScratchStorage): void;
    list(request: BackpackListItemsInput): Promise<BackpackItem[]>;
    save(item: BackpackSaveItemInput, data: SerializableData): Promise<BackpackItem>;
    delete(id: string): Promise<void>;
    private getBackpackAssetURL;
}
