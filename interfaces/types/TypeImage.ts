import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeImageFields {
    entryName: EntryFieldTypes.Symbol;
    media: EntryFieldTypes.AssetLink;
    altTag?: EntryFieldTypes.Symbol;
}

export type TypeImageSkeleton = EntrySkeletonType<TypeImageFields, "image">;
export type TypeImage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeImageSkeleton, Modifiers, Locales>;
