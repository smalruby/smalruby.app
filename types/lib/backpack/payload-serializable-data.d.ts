import { SerializableData, BackpackItemType } from '../../gui-config';
/**
 * The shape of a backpack payload as returned by the existing payload functions
 * (costume-payload, sound-payload, sprite-payload, code-payload)
 */
export interface BackpackPayload {
    type: BackpackItemType;
    name: string;
    mime: string;
    body: string;
    thumbnail: string;
}
/**
 * Adapter class that wraps an existing payload object to implement the SerializableData interface.
 * This allows the legacy payload functions to be used with the new GUIBackpackStorage interface.
 */
export declare class PayloadSerializableData implements SerializableData {
    private payload;
    constructor(payload: BackpackPayload);
    mimeType(): string;
    dataAsBase64(): Promise<string>;
    thumbnailAsBase64(): Promise<string>;
    /**
     * Returns the type of the backpack item
     */
    getType(): BackpackItemType;
    /**
     * Returns the name of the backpack item
     */
    getName(): string;
}
