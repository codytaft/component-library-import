import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageSkeleton } from "./TypeImage";
import type { TypeVideoSkeleton } from "./TypeVideo";

export interface TypeTestimonialModuleFields {
    entryName: EntryFieldTypes.Symbol;
    headline?: EntryFieldTypes.Symbol;
    media?: EntryFieldTypes.EntryLink<TypeImageSkeleton | TypeVideoSkeleton>;
    quote: EntryFieldTypes.Symbol;
    author?: EntryFieldTypes.Symbol;
    details?: EntryFieldTypes.Text;
}

export type TypeTestimonialModuleSkeleton = EntrySkeletonType<TypeTestimonialModuleFields, "testimonialModule">;
export type TypeTestimonialModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTestimonialModuleSkeleton, Modifiers, Locales>;
