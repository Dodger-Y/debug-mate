export type NeedVariableType =
  | 'string'
  | 'email'
  | 'url'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'date'
  | 'time'
  | 'datetime'
  | 'color'
  | 'select'
  | 'multiSelect'

export type TypeMaps<T> =
  T extends 'string' | 'email' | 'url' | 'color' | 'select' ? string :
    T extends 'number' | 'integer' ? number :
      T extends 'boolean' ? boolean :
        T extends 'date' | 'time' | 'datetime' ? number :
          T extends 'multiSelect' ? string[] :
            any

export interface VariableSelectOption {
  /**
   * The label displayed for the option in the DateMate plugin.
   *
   * 显示在 DateMate 插件中的选项标题。
   */
  label: string

  /**
   * The value of the option.
   *
   * 选项的值。
   */
  value: string

  [p: string]: any
}

export interface NeedVariableOptions<T extends NeedVariableType = NeedVariableType> {
  /**
   * The name of the variable.
   *
   * 变量的名称。
   */
  name: string

  /**
   * The type of the variable.
   *
   * 变量的类型。
   */
  type: T

  /**
   * The label displayed for the variable in the DateMate plugin.
   *
   * 显示在 DateMate 插件中的变量标题，
   */
  label?: string

  /**
   * The description displayed for the variable in the DateMate plugin.
   *
   * 显示在 DateMate 插件中的变量描述。
   */
  description?: string

  /**
   * The default value of the variable.
   *
   * 变量的默认值。
   */
  default?: TypeMaps<T>

  /**
   * The select options of the variable, only valid when type is 'select' or 'multiSelect'.
   *
   * 变量可选项, 只有在 type 为 'select' 或者 'multiSelect' 时才有效。
   */
  options?: VariableSelectOption[]

  /**
   * Is it a private variable?
   *
   * Private variables need to be configured with a public key to take effect.
   * Please refer to the documentation for configuration details.
   *
   * 是否是私有变量
   *
   * 私有变量需要配置公钥才能生效，请参考文档进行配置。
   *
   * @example
   * ```ts
   * import DebugMate from '@debug-mate/core'
   *
   * DebugMate.setPublicKey('XXX')
   * ```
   */
  private?: boolean

  /**
   * Callback function when the variable value changes.
   *
   * 变量值改变时的回调函数。
   *
   * 这里的 value 类型也不应该是 any，而是根据 type 属性来确定。
   */
  onChange?: (value: TypeMaps<T>) => void
}

export type NeedVariableOptionsInner = NeedVariableOptions & {
  /**
   * The name of the variable after encoding.
   *
   * 变量编码后的名称。
   */
  encodeName?: string

  /**
   * The sort order of the variable.
   *
   * 变量的排序。
   */
  sort?: number
}

export type NeedVariableWithValue = NeedVariableOptionsInner & {
  value?: TypeMaps<NeedVariableType> | null
}
