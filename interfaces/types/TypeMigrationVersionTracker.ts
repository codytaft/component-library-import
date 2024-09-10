import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeMigrationVersionTrackerFields {
    entryName: EntryFieldTypes.Symbol;
    version: EntryFieldTypes.Integer;
}

export type TypeMigrationVersionTrackerSkeleton = EntrySkeletonType<TypeMigrationVersionTrackerFields, "migrationVersionTracker">;
export type TypeMigrationVersionTracker<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMigrationVersionTrackerSkeleton, Modifiers, Locales>;
