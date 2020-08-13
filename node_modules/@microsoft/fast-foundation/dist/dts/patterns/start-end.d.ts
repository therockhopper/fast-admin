/**
 * A mixin class implementing start and end elements.
 * These are generally used to decorate text elements with icons or other visual indicators.
 * @public
 */
export declare class StartEnd {
    start: HTMLSlotElement;
    startContainer: HTMLSpanElement;
    handleStartContentChange(): void;
    end: HTMLSlotElement;
    endContainer: HTMLSpanElement;
    handleEndContentChange(): void;
}
/**
 * The template for the end element.
 * For use with {@link StartEnd}
 *
 * @public
 */
export declare const endTemplate: import("@microsoft/fast-element").ViewTemplate<StartEnd, any>;
/**
 * The template for the start element.
 * For use with {@link StartEnd}
 *
 * @public
 */
export declare const startTemplate: import("@microsoft/fast-element").ViewTemplate<StartEnd, any>;
