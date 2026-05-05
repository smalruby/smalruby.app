declare class CloudProvider {
    private vm;
    private username;
    private projectId;
    private cloudHost;
    private readAuth?;
    private isTryingToConnect;
    private connection;
    private connectionAttempts;
    private queuedData;
    private _connectionTimeout;
    private sendCloudData;
    /**
     * A cloud data provider which creates and manages a web socket connection
     * to the Scratch cloud data server. This provider is responsible for
     * interfacing with the VM's cloud io device.
     * @param {string} cloudHost The url for the cloud data server
     * @param {VirtualMachine} vm The Scratch virtual machine to interface with
     * @param {string} username The username to associate cloud data updates with
     * @param {string} projectId The id associated with the project containing
     * @param {null | undefined | () => Promise<string | null | undefined>} readAuth A function to get an auth token
     */
    constructor(cloudHost: string, vm: unknown, username: string, projectId: string, readAuth?: () => Promise<string | null | undefined>);
    isConnectedOrConnecting(): boolean;
    /**
     * Open a new websocket connection to the clouddata server.
     * @param {string} cloudHost The cloud data server to connect to.
     */
    openConnection(): void;
    private connectWithToken;
    onError(event: any): void;
    onMessage(event: any): void;
    onOpen(): void;
    onClose(): void;
    exponentialTimeout(): number;
    randomizeDuration(t: any): number;
    /**
     * Schedule a reconnection attempt to the cloud data server after a websocket disconnect.
     * This method manages the delay (with exponential backoff and jitter) before trying to reconnect,
     * helping to avoid overwhelming the server with rapid reconnection attempts.
     * @param {Function} fn - The function to call after the delay (typically to reopen the connection).
     * @param {number} time - The delay time in milliseconds before attempting to reconnect.
     */
    setTimeout(fn: () => void, time: number): void;
    parseMessage(message: any): any;
    /**
     * Format and send a message to the cloud data server.
     * @param {string} methodName The message method, indicating the action to perform.
     * @param {string} dataName The name of the cloud variable this message pertains to
     * @param {string | number | null} dataValue The value to set the cloud variable to
     * @param {string} dataNewName The new name for the cloud variable (if renaming)
     */
    writeToServer(methodName: string, dataName?: string, dataValue?: string | number | null, dataNewName?: string): void;
    /**
     * Send a formatted message to the cloud data server.
     * @param {string} data The formatted message to send.
     */
    _sendCloudData(data: any): void;
    /**
     * Provides an API for the VM's cloud IO device to create
     * a new cloud variable on the server.
     * @param {string} name The name of the variable to create
     * @param {string | number} value The value of the new cloud variable.
     */
    createVariable(name: string, value: string | number): void;
    /**
     * Provides an API for the VM's cloud IO device to update
     * a cloud variable on the server.
     * @param {string} name The name of the variable to update
     * @param {string | number} value The new value for the variable
     */
    updateVariable(name: string, value: string | number): void;
    /**
     * Provides an API for the VM's cloud IO device to rename
     * a cloud variable on the server.
     * @param {string} oldName The old name of the variable to rename
     * @param {string} newName The new name for the cloud variable.
     */
    renameVariable(oldName: string, newName: string): void;
    /**
     * Provides an API for the VM's cloud IO device to delete
     * a cloud variable on the server.
     * @param {string} name The name of the variable to delete
     */
    deleteVariable(name: string): void;
    /**
     * Closes the connection to the web socket and clears the cloud
     * provider of references related to the cloud data project.
     */
    requestCloseConnection(): void;
    /**
     * Clear this provider of references related to the project
     * and current state.
     */
    clear(): void;
}
export default CloudProvider;
