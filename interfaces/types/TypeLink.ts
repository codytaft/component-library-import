import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePageSkeleton } from "./TypePage";

export interface TypeLinkFields {
    entryName: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Symbol;
    page?: EntryFieldTypes.EntryLink<TypePageSkeleton>;
    anchor?: EntryFieldTypes.Symbol;
    externalUrl?: EntryFieldTypes.Symbol;
    target: EntryFieldTypes.Symbol<"Default" | "New Tab" | "Same Tab">;
    ariaLabel?: EntryFieldTypes.Symbol;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
export type TypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLinkSkeleton, Modifiers, Locales>;
