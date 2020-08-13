import {
    FASTDesignSystemProvider,
    FASTCard,
    FASTButton
} from '@microsoft/fast-components';

/*
 *  * Ensure that tree-shaking doesn't remove these components from the bundle.
 *   * There are multiple ways to prevent tree shaking, of which this is one.
 *    */
FASTDesignSystemProvider;
FASTCard;
FASTButton;
