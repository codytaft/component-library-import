import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePageMetadataSkeleton } from "./TypePageMetadata";

export interface TypePageFields {
    entryName: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    pageModules?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    metadata?: EntryFieldTypes.EntryLink<TypePageMetadataSkeleton>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;
