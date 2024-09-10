import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageSkeleton } from "./TypeImage";

export interface TypeAccordionItemFields {
    entryName: EntryFieldTypes.Symbol;
    headline: EntryFieldTypes.Symbol;
    bodyCopy: EntryFieldTypes.RichText;
    icon?: EntryFieldTypes.EntryLink<TypeImageSkeleton>;
    color: EntryFieldTypes.Symbol<"primary" | "secondary" | "tertiary">;
}

export type TypeAccordionItemSkeleton = EntrySkeletonType<TypeAccordionItemFields, "accordionItem">;
export type TypeAccordionItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeAccordionItemSkeleton, Modifiers, Locales>;
