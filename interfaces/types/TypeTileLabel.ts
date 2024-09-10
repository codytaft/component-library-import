import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTileLabelFields {
    entryName: EntryFieldTypes.Symbol;
    copy?: EntryFieldTypes.Symbol;
    color: EntryFieldTypes.Symbol<"primary" | "secondary" | "tertiary">;
}

export type TypeTileLabelSkeleton = EntrySkeletonType<TypeTileLabelFields, "tileLabel">;
export type TypeTileLabel<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTileLabelSkeleton, Modifiers, Locales>;
