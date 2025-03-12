import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageSkeleton } from "./TypeImage";

export interface TypePageMetadataFields {
    entryName: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    keywords?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    socialImage: EntryFieldTypes.EntryLink<TypeImageSkeleton>;
}

export type TypePageMetadataSkeleton = EntrySkeletonType<TypePageMetadataFields, "pageMetadata">;
export type TypePageMetadata<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageMetadataSkeleton, Modifiers, Locales>;
