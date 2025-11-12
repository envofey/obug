import type { InspectOptions as NodeInspectOptions } from 'node:util'

export interface InspectOptions extends NodeInspectOptions {
  hideDate?: boolean
}

export interface Debugger {
  (formatter: any, ...args: any[]): void

  useColors: boolean
  color: string | number
  enabled: boolean
  namespace: string
  inspectOpts?: InspectOptions

  log: (...args: any[]) => any
  extend: (namespace: string, delimiter?: string) => Debugger

  /**
   * @internal
   * @deprecated It will removed in the next major version. This is internal cache.
   */
  diff?: number
  /**
   * @internal
   * @deprecated It will removed in the next major version. This is internal cache.
   */
  prev?: number
  /**
   * @internal
   * @deprecated It will removed in the next major version. This is internal cache.
   */
  curr?: number
}

export interface Formatters {
  [formatter: string]: (this: Debugger, v: any) => string
}

export interface Debug {
  (namespace: string): Debugger

  namespaces: string

  /**
   * Disable debug output.
   */
  disable: () => string
  /**
   * Enables a debug mode by namespaces. This can include modes
   * separated by a colon and wildcards.
   */
  enable: (namespaces: string) => void
  /**
   * Returns true if the given mode name is enabled, false otherwise.
   */
  enabled: (namespaces: string) => boolean

  formatters: Formatters
  inspectOpts?: InspectOptions

  /**
   * @deprecated It will removed in the next major version.
   */
  formatArgs: (this: Debugger, args: [string, ...any[]]) => void
  /**
   * @deprecated It will removed in the next major version.
   */
  selectColor: (namespace: string) => string | number
  /**
   * @deprecated It will removed in the next major version.
   */
  log: (...args: any[]) => void

  /**
   * @internal
   * @deprecated It will removed in the next major version. This is internal cache.
   */
  names: string[]
  /**
   * @internal
   * @deprecated It will removed in the next major version. This is internal cache.
   */
  skips: string[]
}
