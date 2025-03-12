import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageSkeleton } from "./TypeImage";

export interface TypeVideoFields {
    entryName: EntryFieldTypes.Symbol;
    url: EntryFieldTypes.Symbol;
    thumbnail: EntryFieldTypes.EntryLink<TypeImageSkeleton>;
}

export type TypeVideoSkeleton = EntrySkeletonType<TypeVideoFields, "video">;
export type TypeVideo<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeVideoSkeleton, Modifiers, Locales>;
