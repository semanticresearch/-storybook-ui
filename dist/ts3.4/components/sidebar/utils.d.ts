import { SyntheticEvent } from 'react';
import { StoriesHash } from '@storybook/api';
import { Item, RefType, Dataset, SearchItem } from './types';
export declare const createId: (itemId: string, refId?: string) => string;
export declare const getLink: (itemId: string, refId?: string) => string;
export declare const prevent: (e: SyntheticEvent) => boolean;
export declare const get: (id: string, dataset: Dataset) => import("@storybook/api").Root | import("@storybook/api").Group | import("@storybook/api").Story;
export declare const getParent: (id: string, dataset: Dataset) => import("@storybook/api").Root | import("@storybook/api").Group | import("@storybook/api").Story;
export declare const getParents: (id: string, dataset: Dataset) => Item[];
export declare const getAncestorIds: (data: StoriesHash, id: string) => string[];
export declare const getDescendantIds: (data: StoriesHash, id: string, skipLeafs: boolean) => string[];
export declare function getPath(item: Item, ref: RefType): string[];
export declare const searchItem: (item: Item, ref: RefType) => SearchItem;
export declare function cycle<T>(array: T[], index: number, delta: number): number;
export declare const scrollIntoView: (element: Element, center?: boolean) => void;
export declare const getStateType: (isLoading: boolean, isAuthRequired: boolean, isError: boolean, isEmpty: boolean) => "auth" | "error" | "loading" | "empty" | "ready";
export declare const isAncestor: (element?: Element, maybeAncestor?: Element) => boolean;
