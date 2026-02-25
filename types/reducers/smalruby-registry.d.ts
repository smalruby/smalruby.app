/**
 * Smalruby-specific Redux state registry
 *
 * This file centralizes all Smalruby customizations to Redux state management.
 * By importing from this single registry file, we minimize merge conflicts when
 * updating from upstream scratch-gui.
 *
 * When adding new Smalruby reducers:
 * 1. Add the import statement here
 * 2. Add to smalrubyReducers object
 * 3. Add to smalrubyInitialState object
 *
 * No changes needed in gui.ts - it imports this registry.
 */
/**
 * All Smalruby reducers
 * These will be spread into combineReducers() in gui.ts
 */
export declare const smalrubyReducers: {
    meshV2: any;
    googleDriveFile: any;
    koshienFile: any;
    rubyCode: any;
    cards: any;
    tutorialOnboarding: any;
    paletteVisibility: any;
};
/**
 * All Smalruby initial state values
 * These will be spread into buildInitialState() in gui.ts
 */
export declare const smalrubyInitialState: {
    meshV2: any;
    googleDriveFile: any;
    koshienFile: any;
    rubyCode: any;
    cards: any;
    tutorialOnboarding: any;
    paletteVisibility: any;
};
