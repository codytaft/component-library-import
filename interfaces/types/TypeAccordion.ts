import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAccordionItemSkeleton } from "./TypeAccordionItem";

export interface TypeAccordionFields {
    entryName: EntryFieldTypes.Symbol;
    accordionItem: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAccordionItemSkeleton>>;
    accordionType?: EntryFieldTypes.Symbol<"List" | "Tile">;
}

export type TypeAccordionSkeleton = EntrySkeletonType<TypeAccordionFields, "accordion">;
export type TypeAccordion<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeAccordionSkeleton, Modifiers, Locales>;
