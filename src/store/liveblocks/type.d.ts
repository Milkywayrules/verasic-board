import { BaseUserMeta, Client, Json, JsonObject, LsonObject } from '@liveblocks/client'
import { Mapping, WithLiveblocks } from '@liveblocks/zustand'
import { StateCreator } from 'zustand'

/**
 * Grab this from @liveblocks/zustand because it's not exported
 */
declare type OptionsFromLiveblocks<T> = {
  /**
   * Liveblocks client created by @liveblocks/client createClient
   */
  client: Client
  /**
   * Mapping used to synchronize a part of your zustand state with one Liveblocks Room storage.
   */
  storageMapping?: Mapping<T>
  /**
   * Mapping used to synchronize a part of your zustand state with one Liveblocks Room presence.
   */
  presenceMapping?: Mapping<T>
}

/**
 * Omit `client` because it's only injected by the store,
 * this `Options` is for make a slice to combine with store later.
 */
export type Options<T> = Omit<
  OptionsFromLiveblocks<
    Omit<WithLiveblocks<T, JsonObject, LsonObject, BaseUserMeta, Json>, 'liveblocks'>
  >,
  'client'
>

export interface StoreCreatorWithLiveblocks<T> {
  slice: StateCreator<T>
  presenceMapping?: Options<T>['presenceMapping']
  storageMapping?: Options<T>['storageMapping']
}
