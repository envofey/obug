import type { InspectOptions as NodeInspectOptions } from 'node:util'

/**
 * Disable debug output.
 */
export declare function disable(): string
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 */
export declare function enable(namespaces: string): void
/**
 * Returns true if the given mode name is enabled, false otherwise.
 */
export declare function enabled(namespaces: string): boolean
/**
 * Returns an array of the currently enabled debug namespaces.
 */
export declare function namespaces(): string[]

export interface InspectOptions extends NodeInspectOptions {
  hideDate?: boolean
}

export interface Formatters {
  [formatter: string]: (this: Debugger, v: any) => string
}

export interface Debugger extends Required<DebugOptions> {
  (formatter: any, ...args: any[]): void

  namespace: string
  enabled: boolean

  extend: (namespace: string, delimiter?: string) => Debugger
}

export interface DebugOptions {
  useColors?: boolean
  color?: string | number

  formatArgs?: (this: Debugger, diff: number, args: [string, ...any[]]) => void
  formatters?: Formatters
  /** Node.js only */
  inspectOpts?: InspectOptions

  log?: (this: Debugger, ...args: any[]) => void
}
