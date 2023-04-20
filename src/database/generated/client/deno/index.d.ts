
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model users
 * 
 */
export type users = {
  id: string
  uuid: string
  createdAt: Date | null
  updatedAt: Date | null
  email: string | null
  phone: string | null
  name: string | null
  birthDate: Date | null
  platform_ids: string[]
  organization_ids: string[]
}

/**
 * Model platforms
 * 
 */
export type platforms = {
  id: string
  uuid: string
  createdAt: Date | null
  updatedAt: Date | null
  key: string
  username: string | null
  name: string | null
  user_ids: string[]
  organization_ids: string[]
}

/**
 * Model organizations
 * 
 */
export type organizations = {
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  uuid: string
  username: string | null
  name: string | null
  platform_ids: string[]
  user_ids: string[]
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;

  /**
   * `prisma.platforms`: Exposes CRUD operations for the **platforms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platforms
    * const platforms = await prisma.platforms.findMany()
    * ```
    */
  get platforms(): Prisma.platformsDelegate<GlobalReject>;

  /**
   * `prisma.organizations`: Exposes CRUD operations for the **organizations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organizations.findMany()
    * ```
    */
  get organizations(): Prisma.organizationsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    platforms: 'platforms',
    organizations: 'organizations'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    platforms: number
    organizations: number
  }

  export type UsersCountOutputTypeSelect = {
    platforms?: boolean
    organizations?: boolean
  }

  export type UsersCountOutputTypeGetPayload<S extends boolean | null | undefined | UsersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UsersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UsersCountOutputTypeArgs)
    ? UsersCountOutputType 
    : S extends { select: any } & (UsersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UsersCountOutputType ? UsersCountOutputType[P] : never
  } 
      : UsersCountOutputType




  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect | null
  }



  /**
   * Count Type PlatformsCountOutputType
   */


  export type PlatformsCountOutputType = {
    users: number
    organizations: number
  }

  export type PlatformsCountOutputTypeSelect = {
    users?: boolean
    organizations?: boolean
  }

  export type PlatformsCountOutputTypeGetPayload<S extends boolean | null | undefined | PlatformsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PlatformsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PlatformsCountOutputTypeArgs)
    ? PlatformsCountOutputType 
    : S extends { select: any } & (PlatformsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PlatformsCountOutputType ? PlatformsCountOutputType[P] : never
  } 
      : PlatformsCountOutputType




  // Custom InputTypes

  /**
   * PlatformsCountOutputType without action
   */
  export type PlatformsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PlatformsCountOutputType
     */
    select?: PlatformsCountOutputTypeSelect | null
  }



  /**
   * Count Type OrganizationsCountOutputType
   */


  export type OrganizationsCountOutputType = {
    platforms: number
    users: number
  }

  export type OrganizationsCountOutputTypeSelect = {
    platforms?: boolean
    users?: boolean
  }

  export type OrganizationsCountOutputTypeGetPayload<S extends boolean | null | undefined | OrganizationsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrganizationsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrganizationsCountOutputTypeArgs)
    ? OrganizationsCountOutputType 
    : S extends { select: any } & (OrganizationsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OrganizationsCountOutputType ? OrganizationsCountOutputType[P] : never
  } 
      : OrganizationsCountOutputType




  // Custom InputTypes

  /**
   * OrganizationsCountOutputType without action
   */
  export type OrganizationsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrganizationsCountOutputType
     */
    select?: OrganizationsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    uuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    phone: string | null
    name: string | null
    birthDate: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    uuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    phone: string | null
    name: string | null
    birthDate: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    uuid: number
    createdAt: number
    updatedAt: number
    email: number
    phone: number
    name: number
    birthDate: number
    platform_ids: number
    organization_ids: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    phone?: true
    name?: true
    birthDate?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    phone?: true
    name?: true
    birthDate?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    phone?: true
    name?: true
    birthDate?: true
    platform_ids?: true
    organization_ids?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: UsersScalarFieldEnum[]
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: string
    uuid: string
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    phone: string | null
    name: string | null
    birthDate: Date | null
    platform_ids: string[]
    organization_ids: string[]
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect = {
    id?: boolean
    uuid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    birthDate?: boolean
    platform_ids?: boolean
    organization_ids?: boolean
    platforms?: boolean | users$platformsArgs
    organizations?: boolean | users$organizationsArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }


  export type usersInclude = {
    platforms?: boolean | users$platformsArgs
    organizations?: boolean | users$organizationsArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }

  export type usersGetPayload<S extends boolean | null | undefined | usersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? users :
    S extends undefined ? never :
    S extends { include: any } & (usersArgs | usersFindManyArgs)
    ? users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'platforms' ? Array < platformsGetPayload<S['include'][P]>>  :
        P extends 'organizations' ? Array < organizationsGetPayload<S['include'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (usersArgs | usersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'platforms' ? Array < platformsGetPayload<S['select'][P]>>  :
        P extends 'organizations' ? Array < organizationsGetPayload<S['select'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof users ? users[P] : never
  } 
      : users


  type usersCountArgs = 
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): Prisma.PrismaPromise<Array<usersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {usersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const users = await prisma.users.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: usersFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Users.
     * @param {usersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const users = await prisma.users.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: usersAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    platforms<T extends users$platformsArgs= {}>(args?: Subset<T, users$platformsArgs>): Prisma.PrismaPromise<Array<platformsGetPayload<T>>| Null>;

    organizations<T extends users$organizationsArgs= {}>(args?: Subset<T, users$organizationsArgs>): Prisma.PrismaPromise<Array<organizationsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * users base type for findUnique actions
   */
  export type usersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUnique
   */
  export interface usersFindUniqueArgs extends usersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users base type for findFirst actions
   */
  export type usersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * users findFirst
   */
  export interface usersFindFirstArgs extends usersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    /**
     * The data used to create many users.
     */
    data: Enumerable<usersCreateManyInput>
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users findRaw
   */
  export type usersFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * users aggregateRaw
   */
  export type usersAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * users.platforms
   */
  export type users$platformsArgs = {
    /**
     * Select specific fields to fetch from the platforms
     */
    select?: platformsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: platformsInclude | null
    where?: platformsWhereInput
    orderBy?: Enumerable<platformsOrderByWithRelationInput>
    cursor?: platformsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PlatformsScalarFieldEnum>
  }


  /**
   * users.organizations
   */
  export type users$organizationsArgs = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationsInclude | null
    where?: organizationsWhereInput
    orderBy?: Enumerable<organizationsOrderByWithRelationInput>
    cursor?: organizationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrganizationsScalarFieldEnum>
  }


  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
  }



  /**
   * Model platforms
   */


  export type AggregatePlatforms = {
    _count: PlatformsCountAggregateOutputType | null
    _min: PlatformsMinAggregateOutputType | null
    _max: PlatformsMaxAggregateOutputType | null
  }

  export type PlatformsMinAggregateOutputType = {
    id: string | null
    uuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    key: string | null
    username: string | null
    name: string | null
  }

  export type PlatformsMaxAggregateOutputType = {
    id: string | null
    uuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    key: string | null
    username: string | null
    name: string | null
  }

  export type PlatformsCountAggregateOutputType = {
    id: number
    uuid: number
    createdAt: number
    updatedAt: number
    key: number
    username: number
    name: number
    user_ids: number
    organization_ids: number
    _all: number
  }


  export type PlatformsMinAggregateInputType = {
    id?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    key?: true
    username?: true
    name?: true
  }

  export type PlatformsMaxAggregateInputType = {
    id?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    key?: true
    username?: true
    name?: true
  }

  export type PlatformsCountAggregateInputType = {
    id?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    key?: true
    username?: true
    name?: true
    user_ids?: true
    organization_ids?: true
    _all?: true
  }

  export type PlatformsAggregateArgs = {
    /**
     * Filter which platforms to aggregate.
     */
    where?: platformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of platforms to fetch.
     */
    orderBy?: Enumerable<platformsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: platformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned platforms
    **/
    _count?: true | PlatformsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformsMaxAggregateInputType
  }

  export type GetPlatformsAggregateType<T extends PlatformsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatforms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatforms[P]>
      : GetScalarType<T[P], AggregatePlatforms[P]>
  }




  export type PlatformsGroupByArgs = {
    where?: platformsWhereInput
    orderBy?: Enumerable<platformsOrderByWithAggregationInput>
    by: PlatformsScalarFieldEnum[]
    having?: platformsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformsCountAggregateInputType | true
    _min?: PlatformsMinAggregateInputType
    _max?: PlatformsMaxAggregateInputType
  }


  export type PlatformsGroupByOutputType = {
    id: string
    uuid: string
    createdAt: Date | null
    updatedAt: Date | null
    key: string
    username: string | null
    name: string | null
    user_ids: string[]
    organization_ids: string[]
    _count: PlatformsCountAggregateOutputType | null
    _min: PlatformsMinAggregateOutputType | null
    _max: PlatformsMaxAggregateOutputType | null
  }

  type GetPlatformsGroupByPayload<T extends PlatformsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PlatformsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformsGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformsGroupByOutputType[P]>
        }
      >
    >


  export type platformsSelect = {
    id?: boolean
    uuid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    key?: boolean
    username?: boolean
    name?: boolean
    user_ids?: boolean
    organization_ids?: boolean
    users?: boolean | platforms$usersArgs
    organizations?: boolean | platforms$organizationsArgs
    _count?: boolean | PlatformsCountOutputTypeArgs
  }


  export type platformsInclude = {
    users?: boolean | platforms$usersArgs
    organizations?: boolean | platforms$organizationsArgs
    _count?: boolean | PlatformsCountOutputTypeArgs
  }

  export type platformsGetPayload<S extends boolean | null | undefined | platformsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? platforms :
    S extends undefined ? never :
    S extends { include: any } & (platformsArgs | platformsFindManyArgs)
    ? platforms  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? Array < usersGetPayload<S['include'][P]>>  :
        P extends 'organizations' ? Array < organizationsGetPayload<S['include'][P]>>  :
        P extends '_count' ? PlatformsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (platformsArgs | platformsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? Array < usersGetPayload<S['select'][P]>>  :
        P extends 'organizations' ? Array < organizationsGetPayload<S['select'][P]>>  :
        P extends '_count' ? PlatformsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof platforms ? platforms[P] : never
  } 
      : platforms


  type platformsCountArgs = 
    Omit<platformsFindManyArgs, 'select' | 'include'> & {
      select?: PlatformsCountAggregateInputType | true
    }

  export interface platformsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Platforms that matches the filter.
     * @param {platformsFindUniqueArgs} args - Arguments to find a Platforms
     * @example
     * // Get one Platforms
     * const platforms = await prisma.platforms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends platformsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, platformsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'platforms'> extends True ? Prisma__platformsClient<platformsGetPayload<T>> : Prisma__platformsClient<platformsGetPayload<T> | null, null>

    /**
     * Find one Platforms that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {platformsFindUniqueOrThrowArgs} args - Arguments to find a Platforms
     * @example
     * // Get one Platforms
     * const platforms = await prisma.platforms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends platformsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, platformsFindUniqueOrThrowArgs>
    ): Prisma__platformsClient<platformsGetPayload<T>>

    /**
     * Find the first Platforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {platformsFindFirstArgs} args - Arguments to find a Platforms
     * @example
     * // Get one Platforms
     * const platforms = await prisma.platforms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends platformsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, platformsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'platforms'> extends True ? Prisma__platformsClient<platformsGetPayload<T>> : Prisma__platformsClient<platformsGetPayload<T> | null, null>

    /**
     * Find the first Platforms that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {platformsFindFirstOrThrowArgs} args - Arguments to find a Platforms
     * @example
     * // Get one Platforms
     * const platforms = await prisma.platforms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends platformsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, platformsFindFirstOrThrowArgs>
    ): Prisma__platformsClient<platformsGetPayload<T>>

    /**
     * Find zero or more Platforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {platformsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platforms
     * const platforms = await prisma.platforms.findMany()
     * 
     * // Get first 10 Platforms
     * const platforms = await prisma.platforms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformsWithIdOnly = await prisma.platforms.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends platformsFindManyArgs>(
      args?: SelectSubset<T, platformsFindManyArgs>
    ): Prisma.PrismaPromise<Array<platformsGetPayload<T>>>

    /**
     * Create a Platforms.
     * @param {platformsCreateArgs} args - Arguments to create a Platforms.
     * @example
     * // Create one Platforms
     * const Platforms = await prisma.platforms.create({
     *   data: {
     *     // ... data to create a Platforms
     *   }
     * })
     * 
    **/
    create<T extends platformsCreateArgs>(
      args: SelectSubset<T, platformsCreateArgs>
    ): Prisma__platformsClient<platformsGetPayload<T>>

    /**
     * Create many Platforms.
     *     @param {platformsCreateManyArgs} args - Arguments to create many Platforms.
     *     @example
     *     // Create many Platforms
     *     const platforms = await prisma.platforms.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends platformsCreateManyArgs>(
      args?: SelectSubset<T, platformsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Platforms.
     * @param {platformsDeleteArgs} args - Arguments to delete one Platforms.
     * @example
     * // Delete one Platforms
     * const Platforms = await prisma.platforms.delete({
     *   where: {
     *     // ... filter to delete one Platforms
     *   }
     * })
     * 
    **/
    delete<T extends platformsDeleteArgs>(
      args: SelectSubset<T, platformsDeleteArgs>
    ): Prisma__platformsClient<platformsGetPayload<T>>

    /**
     * Update one Platforms.
     * @param {platformsUpdateArgs} args - Arguments to update one Platforms.
     * @example
     * // Update one Platforms
     * const platforms = await prisma.platforms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends platformsUpdateArgs>(
      args: SelectSubset<T, platformsUpdateArgs>
    ): Prisma__platformsClient<platformsGetPayload<T>>

    /**
     * Delete zero or more Platforms.
     * @param {platformsDeleteManyArgs} args - Arguments to filter Platforms to delete.
     * @example
     * // Delete a few Platforms
     * const { count } = await prisma.platforms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends platformsDeleteManyArgs>(
      args?: SelectSubset<T, platformsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {platformsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platforms
     * const platforms = await prisma.platforms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends platformsUpdateManyArgs>(
      args: SelectSubset<T, platformsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Platforms.
     * @param {platformsUpsertArgs} args - Arguments to update or create a Platforms.
     * @example
     * // Update or create a Platforms
     * const platforms = await prisma.platforms.upsert({
     *   create: {
     *     // ... data to create a Platforms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Platforms we want to update
     *   }
     * })
    **/
    upsert<T extends platformsUpsertArgs>(
      args: SelectSubset<T, platformsUpsertArgs>
    ): Prisma__platformsClient<platformsGetPayload<T>>

    /**
     * Find zero or more Platforms that matches the filter.
     * @param {platformsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const platforms = await prisma.platforms.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: platformsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Platforms.
     * @param {platformsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const platforms = await prisma.platforms.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: platformsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {platformsCountArgs} args - Arguments to filter Platforms to count.
     * @example
     * // Count the number of Platforms
     * const count = await prisma.platforms.count({
     *   where: {
     *     // ... the filter for the Platforms we want to count
     *   }
     * })
    **/
    count<T extends platformsCountArgs>(
      args?: Subset<T, platformsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatformsAggregateArgs>(args: Subset<T, PlatformsAggregateArgs>): Prisma.PrismaPromise<GetPlatformsAggregateType<T>>

    /**
     * Group by Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatformsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformsGroupByArgs['orderBy'] }
        : { orderBy?: PlatformsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for platforms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__platformsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends platforms$usersArgs= {}>(args?: Subset<T, platforms$usersArgs>): Prisma.PrismaPromise<Array<usersGetPayload<T>>| Null>;

    organizations<T extends platforms$organizationsArgs= {}>(args?: Subset<T, platforms$organizationsArgs>): Prisma.PrismaPromise<Array<organizationsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * platforms base type for findUnique actions
   */
  export type platformsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the platforms
     */
    select?: platformsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: platformsInclude | null
    /**
     * Filter, which platforms to fetch.
     */
    where: platformsWhereUniqueInput
  }

  /**
   * platforms findUnique
   */
  export interface platformsFindUniqueArgs extends platformsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * platforms findUniqueOrThrow
   */
  export type platformsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the platforms
     */
    select?: platformsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: platformsInclude | null
    /**
     * Filter, which platforms to fetch.
     */
    where: platformsWhereUniqueInput
  }


  /**
   * platforms base type for findFirst actions
   */
  export type platformsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the platforms
     */
    select?: platformsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: platformsInclude | null
    /**
     * Filter, which platforms to fetch.
     */
    where?: platformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of platforms to fetch.
     */
    orderBy?: Enumerable<platformsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for platforms.
     */
    cursor?: platformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of platforms.
     */
    distinct?: Enumerable<PlatformsScalarFieldEnum>
  }

  /**
   * platforms findFirst
   */
  export interface platformsFindFirstArgs extends platformsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * platforms findFirstOrThrow
   */
  export type platformsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the platforms
     */
    select?: platformsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: platformsInclude | null
    /**
     * Filter, which platforms to fetch.
     */
    where?: platformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of platforms to fetch.
     */
    orderBy?: Enumerable<platformsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for platforms.
     */
    cursor?: platformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of platforms.
     */
    distinct?: Enumerable<PlatformsScalarFieldEnum>
  }


  /**
   * platforms findMany
   */
  export type platformsFindManyArgs = {
    /**
     * Select specific fields to fetch from the platforms
     */
    select?: platformsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: platformsInclude | null
    /**
     * Filter, which platforms to fetch.
     */
    where?: platformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of platforms to fetch.
     */
    orderBy?: Enumerable<platformsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing platforms.
     */
    cursor?: platformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` platforms.
     */
    skip?: number
    distinct?: Enumerable<PlatformsScalarFieldEnum>
  }


  /**
   * platforms create
   */
  export type platformsCreateArgs = {
    /**
     * Select specific fields to fetch from the platforms
     */
    select?: platformsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: platformsInclude | null
    /**
     * The data needed to create a platforms.
     */
    data: XOR<platformsCreateInput, platformsUncheckedCreateInput>
  }


  /**
   * platforms createMany
   */
  export type platformsCreateManyArgs = {
    /**
     * The data used to create many platforms.
     */
    data: Enumerable<platformsCreateManyInput>
  }


  /**
   * platforms update
   */
  export type platformsUpdateArgs = {
    /**
     * Select specific fields to fetch from the platforms
     */
    select?: platformsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: platformsInclude | null
    /**
     * The data needed to update a platforms.
     */
    data: XOR<platformsUpdateInput, platformsUncheckedUpdateInput>
    /**
     * Choose, which platforms to update.
     */
    where: platformsWhereUniqueInput
  }


  /**
   * platforms updateMany
   */
  export type platformsUpdateManyArgs = {
    /**
     * The data used to update platforms.
     */
    data: XOR<platformsUpdateManyMutationInput, platformsUncheckedUpdateManyInput>
    /**
     * Filter which platforms to update
     */
    where?: platformsWhereInput
  }


  /**
   * platforms upsert
   */
  export type platformsUpsertArgs = {
    /**
     * Select specific fields to fetch from the platforms
     */
    select?: platformsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: platformsInclude | null
    /**
     * The filter to search for the platforms to update in case it exists.
     */
    where: platformsWhereUniqueInput
    /**
     * In case the platforms found by the `where` argument doesn't exist, create a new platforms with this data.
     */
    create: XOR<platformsCreateInput, platformsUncheckedCreateInput>
    /**
     * In case the platforms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<platformsUpdateInput, platformsUncheckedUpdateInput>
  }


  /**
   * platforms delete
   */
  export type platformsDeleteArgs = {
    /**
     * Select specific fields to fetch from the platforms
     */
    select?: platformsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: platformsInclude | null
    /**
     * Filter which platforms to delete.
     */
    where: platformsWhereUniqueInput
  }


  /**
   * platforms deleteMany
   */
  export type platformsDeleteManyArgs = {
    /**
     * Filter which platforms to delete
     */
    where?: platformsWhereInput
  }


  /**
   * platforms findRaw
   */
  export type platformsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * platforms aggregateRaw
   */
  export type platformsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * platforms.users
   */
  export type platforms$usersArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * platforms.organizations
   */
  export type platforms$organizationsArgs = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationsInclude | null
    where?: organizationsWhereInput
    orderBy?: Enumerable<organizationsOrderByWithRelationInput>
    cursor?: organizationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrganizationsScalarFieldEnum>
  }


  /**
   * platforms without action
   */
  export type platformsArgs = {
    /**
     * Select specific fields to fetch from the platforms
     */
    select?: platformsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: platformsInclude | null
  }



  /**
   * Model organizations
   */


  export type AggregateOrganizations = {
    _count: OrganizationsCountAggregateOutputType | null
    _min: OrganizationsMinAggregateOutputType | null
    _max: OrganizationsMaxAggregateOutputType | null
  }

  export type OrganizationsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    uuid: string | null
    username: string | null
    name: string | null
  }

  export type OrganizationsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    uuid: string | null
    username: string | null
    name: string | null
  }

  export type OrganizationsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    uuid: number
    username: number
    name: number
    platform_ids: number
    user_ids: number
    _all: number
  }


  export type OrganizationsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uuid?: true
    username?: true
    name?: true
  }

  export type OrganizationsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uuid?: true
    username?: true
    name?: true
  }

  export type OrganizationsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uuid?: true
    username?: true
    name?: true
    platform_ids?: true
    user_ids?: true
    _all?: true
  }

  export type OrganizationsAggregateArgs = {
    /**
     * Filter which organizations to aggregate.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: Enumerable<organizationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizations
    **/
    _count?: true | OrganizationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationsMaxAggregateInputType
  }

  export type GetOrganizationsAggregateType<T extends OrganizationsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizations[P]>
      : GetScalarType<T[P], AggregateOrganizations[P]>
  }




  export type OrganizationsGroupByArgs = {
    where?: organizationsWhereInput
    orderBy?: Enumerable<organizationsOrderByWithAggregationInput>
    by: OrganizationsScalarFieldEnum[]
    having?: organizationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationsCountAggregateInputType | true
    _min?: OrganizationsMinAggregateInputType
    _max?: OrganizationsMaxAggregateInputType
  }


  export type OrganizationsGroupByOutputType = {
    id: string
    createdAt: Date | null
    updatedAt: Date | null
    uuid: string
    username: string | null
    name: string | null
    platform_ids: string[]
    user_ids: string[]
    _count: OrganizationsCountAggregateOutputType | null
    _min: OrganizationsMinAggregateOutputType | null
    _max: OrganizationsMaxAggregateOutputType | null
  }

  type GetOrganizationsGroupByPayload<T extends OrganizationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrganizationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationsGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationsGroupByOutputType[P]>
        }
      >
    >


  export type organizationsSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uuid?: boolean
    username?: boolean
    name?: boolean
    platform_ids?: boolean
    user_ids?: boolean
    platforms?: boolean | organizations$platformsArgs
    users?: boolean | organizations$usersArgs
    _count?: boolean | OrganizationsCountOutputTypeArgs
  }


  export type organizationsInclude = {
    platforms?: boolean | organizations$platformsArgs
    users?: boolean | organizations$usersArgs
    _count?: boolean | OrganizationsCountOutputTypeArgs
  }

  export type organizationsGetPayload<S extends boolean | null | undefined | organizationsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? organizations :
    S extends undefined ? never :
    S extends { include: any } & (organizationsArgs | organizationsFindManyArgs)
    ? organizations  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'platforms' ? Array < platformsGetPayload<S['include'][P]>>  :
        P extends 'users' ? Array < usersGetPayload<S['include'][P]>>  :
        P extends '_count' ? OrganizationsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (organizationsArgs | organizationsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'platforms' ? Array < platformsGetPayload<S['select'][P]>>  :
        P extends 'users' ? Array < usersGetPayload<S['select'][P]>>  :
        P extends '_count' ? OrganizationsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof organizations ? organizations[P] : never
  } 
      : organizations


  type organizationsCountArgs = 
    Omit<organizationsFindManyArgs, 'select' | 'include'> & {
      select?: OrganizationsCountAggregateInputType | true
    }

  export interface organizationsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Organizations that matches the filter.
     * @param {organizationsFindUniqueArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends organizationsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, organizationsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'organizations'> extends True ? Prisma__organizationsClient<organizationsGetPayload<T>> : Prisma__organizationsClient<organizationsGetPayload<T> | null, null>

    /**
     * Find one Organizations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {organizationsFindUniqueOrThrowArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends organizationsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, organizationsFindUniqueOrThrowArgs>
    ): Prisma__organizationsClient<organizationsGetPayload<T>>

    /**
     * Find the first Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsFindFirstArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends organizationsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, organizationsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'organizations'> extends True ? Prisma__organizationsClient<organizationsGetPayload<T>> : Prisma__organizationsClient<organizationsGetPayload<T> | null, null>

    /**
     * Find the first Organizations that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsFindFirstOrThrowArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends organizationsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, organizationsFindFirstOrThrowArgs>
    ): Prisma__organizationsClient<organizationsGetPayload<T>>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organizations.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organizations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationsWithIdOnly = await prisma.organizations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends organizationsFindManyArgs>(
      args?: SelectSubset<T, organizationsFindManyArgs>
    ): Prisma.PrismaPromise<Array<organizationsGetPayload<T>>>

    /**
     * Create a Organizations.
     * @param {organizationsCreateArgs} args - Arguments to create a Organizations.
     * @example
     * // Create one Organizations
     * const Organizations = await prisma.organizations.create({
     *   data: {
     *     // ... data to create a Organizations
     *   }
     * })
     * 
    **/
    create<T extends organizationsCreateArgs>(
      args: SelectSubset<T, organizationsCreateArgs>
    ): Prisma__organizationsClient<organizationsGetPayload<T>>

    /**
     * Create many Organizations.
     *     @param {organizationsCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organizations = await prisma.organizations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends organizationsCreateManyArgs>(
      args?: SelectSubset<T, organizationsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organizations.
     * @param {organizationsDeleteArgs} args - Arguments to delete one Organizations.
     * @example
     * // Delete one Organizations
     * const Organizations = await prisma.organizations.delete({
     *   where: {
     *     // ... filter to delete one Organizations
     *   }
     * })
     * 
    **/
    delete<T extends organizationsDeleteArgs>(
      args: SelectSubset<T, organizationsDeleteArgs>
    ): Prisma__organizationsClient<organizationsGetPayload<T>>

    /**
     * Update one Organizations.
     * @param {organizationsUpdateArgs} args - Arguments to update one Organizations.
     * @example
     * // Update one Organizations
     * const organizations = await prisma.organizations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends organizationsUpdateArgs>(
      args: SelectSubset<T, organizationsUpdateArgs>
    ): Prisma__organizationsClient<organizationsGetPayload<T>>

    /**
     * Delete zero or more Organizations.
     * @param {organizationsDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organizations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends organizationsDeleteManyArgs>(
      args?: SelectSubset<T, organizationsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organizations = await prisma.organizations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends organizationsUpdateManyArgs>(
      args: SelectSubset<T, organizationsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organizations.
     * @param {organizationsUpsertArgs} args - Arguments to update or create a Organizations.
     * @example
     * // Update or create a Organizations
     * const organizations = await prisma.organizations.upsert({
     *   create: {
     *     // ... data to create a Organizations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizations we want to update
     *   }
     * })
    **/
    upsert<T extends organizationsUpsertArgs>(
      args: SelectSubset<T, organizationsUpsertArgs>
    ): Prisma__organizationsClient<organizationsGetPayload<T>>

    /**
     * Find zero or more Organizations that matches the filter.
     * @param {organizationsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const organizations = await prisma.organizations.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: organizationsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Organizations.
     * @param {organizationsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const organizations = await prisma.organizations.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: organizationsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organizations.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends organizationsCountArgs>(
      args?: Subset<T, organizationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationsAggregateArgs>(args: Subset<T, OrganizationsAggregateArgs>): Prisma.PrismaPromise<GetOrganizationsAggregateType<T>>

    /**
     * Group by Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationsGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for organizations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__organizationsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    platforms<T extends organizations$platformsArgs= {}>(args?: Subset<T, organizations$platformsArgs>): Prisma.PrismaPromise<Array<platformsGetPayload<T>>| Null>;

    users<T extends organizations$usersArgs= {}>(args?: Subset<T, organizations$usersArgs>): Prisma.PrismaPromise<Array<usersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * organizations base type for findUnique actions
   */
  export type organizationsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationsInclude | null
    /**
     * Filter, which organizations to fetch.
     */
    where: organizationsWhereUniqueInput
  }

  /**
   * organizations findUnique
   */
  export interface organizationsFindUniqueArgs extends organizationsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * organizations findUniqueOrThrow
   */
  export type organizationsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationsInclude | null
    /**
     * Filter, which organizations to fetch.
     */
    where: organizationsWhereUniqueInput
  }


  /**
   * organizations base type for findFirst actions
   */
  export type organizationsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationsInclude | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: Enumerable<organizationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: Enumerable<OrganizationsScalarFieldEnum>
  }

  /**
   * organizations findFirst
   */
  export interface organizationsFindFirstArgs extends organizationsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * organizations findFirstOrThrow
   */
  export type organizationsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationsInclude | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: Enumerable<organizationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: Enumerable<OrganizationsScalarFieldEnum>
  }


  /**
   * organizations findMany
   */
  export type organizationsFindManyArgs = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationsInclude | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: Enumerable<organizationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizations.
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    distinct?: Enumerable<OrganizationsScalarFieldEnum>
  }


  /**
   * organizations create
   */
  export type organizationsCreateArgs = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationsInclude | null
    /**
     * The data needed to create a organizations.
     */
    data: XOR<organizationsCreateInput, organizationsUncheckedCreateInput>
  }


  /**
   * organizations createMany
   */
  export type organizationsCreateManyArgs = {
    /**
     * The data used to create many organizations.
     */
    data: Enumerable<organizationsCreateManyInput>
  }


  /**
   * organizations update
   */
  export type organizationsUpdateArgs = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationsInclude | null
    /**
     * The data needed to update a organizations.
     */
    data: XOR<organizationsUpdateInput, organizationsUncheckedUpdateInput>
    /**
     * Choose, which organizations to update.
     */
    where: organizationsWhereUniqueInput
  }


  /**
   * organizations updateMany
   */
  export type organizationsUpdateManyArgs = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationsUpdateManyMutationInput, organizationsUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationsWhereInput
  }


  /**
   * organizations upsert
   */
  export type organizationsUpsertArgs = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationsInclude | null
    /**
     * The filter to search for the organizations to update in case it exists.
     */
    where: organizationsWhereUniqueInput
    /**
     * In case the organizations found by the `where` argument doesn't exist, create a new organizations with this data.
     */
    create: XOR<organizationsCreateInput, organizationsUncheckedCreateInput>
    /**
     * In case the organizations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationsUpdateInput, organizationsUncheckedUpdateInput>
  }


  /**
   * organizations delete
   */
  export type organizationsDeleteArgs = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationsInclude | null
    /**
     * Filter which organizations to delete.
     */
    where: organizationsWhereUniqueInput
  }


  /**
   * organizations deleteMany
   */
  export type organizationsDeleteManyArgs = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationsWhereInput
  }


  /**
   * organizations findRaw
   */
  export type organizationsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * organizations aggregateRaw
   */
  export type organizationsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * organizations.platforms
   */
  export type organizations$platformsArgs = {
    /**
     * Select specific fields to fetch from the platforms
     */
    select?: platformsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: platformsInclude | null
    where?: platformsWhereInput
    orderBy?: Enumerable<platformsOrderByWithRelationInput>
    cursor?: platformsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PlatformsScalarFieldEnum>
  }


  /**
   * organizations.users
   */
  export type organizations$usersArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * organizations without action
   */
  export type organizationsArgs = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const OrganizationsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    uuid: 'uuid',
    username: 'username',
    name: 'name',
    platform_ids: 'platform_ids',
    user_ids: 'user_ids'
  };

  export type OrganizationsScalarFieldEnum = (typeof OrganizationsScalarFieldEnum)[keyof typeof OrganizationsScalarFieldEnum]


  export const PlatformsScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    key: 'key',
    username: 'username',
    name: 'name',
    user_ids: 'user_ids',
    organization_ids: 'organization_ids'
  };

  export type PlatformsScalarFieldEnum = (typeof PlatformsScalarFieldEnum)[keyof typeof PlatformsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsersScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    phone: 'phone',
    name: 'name',
    birthDate: 'birthDate',
    platform_ids: 'platform_ids',
    organization_ids: 'organization_ids'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: StringFilter | string
    uuid?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    email?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    birthDate?: DateTimeNullableFilter | Date | string | null
    platform_ids?: StringNullableListFilter
    organization_ids?: StringNullableListFilter
    platforms?: PlatformsListRelationFilter
    organizations?: OrganizationsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    platform_ids?: SortOrder
    organization_ids?: SortOrder
    platforms?: platformsOrderByRelationAggregateInput
    organizations?: organizationsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = {
    id?: string
    uuid?: string
    email?: string
    phone?: string
  }

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    platform_ids?: SortOrder
    organization_ids?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    uuid?: StringWithAggregatesFilter | string
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    phone?: StringNullableWithAggregatesFilter | string | null
    name?: StringNullableWithAggregatesFilter | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    platform_ids?: StringNullableListFilter
    organization_ids?: StringNullableListFilter
  }

  export type platformsWhereInput = {
    AND?: Enumerable<platformsWhereInput>
    OR?: Enumerable<platformsWhereInput>
    NOT?: Enumerable<platformsWhereInput>
    id?: StringFilter | string
    uuid?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    key?: StringFilter | string
    username?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    user_ids?: StringNullableListFilter
    organization_ids?: StringNullableListFilter
    users?: UsersListRelationFilter
    organizations?: OrganizationsListRelationFilter
  }

  export type platformsOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    username?: SortOrder
    name?: SortOrder
    user_ids?: SortOrder
    organization_ids?: SortOrder
    users?: usersOrderByRelationAggregateInput
    organizations?: organizationsOrderByRelationAggregateInput
  }

  export type platformsWhereUniqueInput = {
    id?: string
    uuid?: string
    key?: string
    username?: string
  }

  export type platformsOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    username?: SortOrder
    name?: SortOrder
    user_ids?: SortOrder
    organization_ids?: SortOrder
    _count?: platformsCountOrderByAggregateInput
    _max?: platformsMaxOrderByAggregateInput
    _min?: platformsMinOrderByAggregateInput
  }

  export type platformsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<platformsScalarWhereWithAggregatesInput>
    OR?: Enumerable<platformsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<platformsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    uuid?: StringWithAggregatesFilter | string
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    key?: StringWithAggregatesFilter | string
    username?: StringNullableWithAggregatesFilter | string | null
    name?: StringNullableWithAggregatesFilter | string | null
    user_ids?: StringNullableListFilter
    organization_ids?: StringNullableListFilter
  }

  export type organizationsWhereInput = {
    AND?: Enumerable<organizationsWhereInput>
    OR?: Enumerable<organizationsWhereInput>
    NOT?: Enumerable<organizationsWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    uuid?: StringFilter | string
    username?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    platform_ids?: StringNullableListFilter
    user_ids?: StringNullableListFilter
    platforms?: PlatformsListRelationFilter
    users?: UsersListRelationFilter
  }

  export type organizationsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    name?: SortOrder
    platform_ids?: SortOrder
    user_ids?: SortOrder
    platforms?: platformsOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type organizationsWhereUniqueInput = {
    id?: string
    uuid?: string
    username?: string
  }

  export type organizationsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    name?: SortOrder
    platform_ids?: SortOrder
    user_ids?: SortOrder
    _count?: organizationsCountOrderByAggregateInput
    _max?: organizationsMaxOrderByAggregateInput
    _min?: organizationsMinOrderByAggregateInput
  }

  export type organizationsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<organizationsScalarWhereWithAggregatesInput>
    OR?: Enumerable<organizationsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<organizationsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    uuid?: StringWithAggregatesFilter | string
    username?: StringNullableWithAggregatesFilter | string | null
    name?: StringNullableWithAggregatesFilter | string | null
    platform_ids?: StringNullableListFilter
    user_ids?: StringNullableListFilter
  }

  export type usersCreateInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    email?: string | null
    phone?: string | null
    name?: string | null
    birthDate?: Date | string | null
    platforms?: platformsCreateNestedManyWithoutUsersInput
    organizations?: organizationsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    email?: string | null
    phone?: string | null
    name?: string | null
    birthDate?: Date | string | null
    platform_ids?: usersCreateplatform_idsInput | Enumerable<string>
    organization_ids?: usersCreateorganization_idsInput | Enumerable<string>
    platforms?: platformsUncheckedCreateNestedManyWithoutUsersInput
    organizations?: organizationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platforms?: platformsUpdateManyWithoutUsersNestedInput
    organizations?: organizationsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_ids?: usersUpdateplatform_idsInput | Enumerable<string>
    organization_ids?: usersUpdateorganization_idsInput | Enumerable<string>
    platforms?: platformsUncheckedUpdateManyWithoutUsersNestedInput
    organizations?: organizationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    email?: string | null
    phone?: string | null
    name?: string | null
    birthDate?: Date | string | null
    platform_ids?: usersCreateplatform_idsInput | Enumerable<string>
    organization_ids?: usersCreateorganization_idsInput | Enumerable<string>
  }

  export type usersUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_ids?: usersUpdateplatform_idsInput | Enumerable<string>
    organization_ids?: usersUpdateorganization_idsInput | Enumerable<string>
  }

  export type platformsCreateInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    key: string
    username?: string | null
    name?: string | null
    users?: usersCreateNestedManyWithoutPlatformsInput
    organizations?: organizationsCreateNestedManyWithoutPlatformsInput
  }

  export type platformsUncheckedCreateInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    key: string
    username?: string | null
    name?: string | null
    user_ids?: platformsCreateuser_idsInput | Enumerable<string>
    organization_ids?: platformsCreateorganization_idsInput | Enumerable<string>
    users?: usersUncheckedCreateNestedManyWithoutPlatformsInput
    organizations?: organizationsUncheckedCreateNestedManyWithoutPlatformsInput
  }

  export type platformsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    key?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateManyWithoutPlatformsNestedInput
    organizations?: organizationsUpdateManyWithoutPlatformsNestedInput
  }

  export type platformsUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    key?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_ids?: platformsUpdateuser_idsInput | Enumerable<string>
    organization_ids?: platformsUpdateorganization_idsInput | Enumerable<string>
    users?: usersUncheckedUpdateManyWithoutPlatformsNestedInput
    organizations?: organizationsUncheckedUpdateManyWithoutPlatformsNestedInput
  }

  export type platformsCreateManyInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    key: string
    username?: string | null
    name?: string | null
    user_ids?: platformsCreateuser_idsInput | Enumerable<string>
    organization_ids?: platformsCreateorganization_idsInput | Enumerable<string>
  }

  export type platformsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    key?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type platformsUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    key?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_ids?: platformsUpdateuser_idsInput | Enumerable<string>
    organization_ids?: platformsUpdateorganization_idsInput | Enumerable<string>
  }

  export type organizationsCreateInput = {
    id?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    uuid?: string
    username?: string | null
    name?: string | null
    platforms?: platformsCreateNestedManyWithoutOrganizationsInput
    users?: usersCreateNestedManyWithoutOrganizationsInput
  }

  export type organizationsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    uuid?: string
    username?: string | null
    name?: string | null
    platform_ids?: organizationsCreateplatform_idsInput | Enumerable<string>
    user_ids?: organizationsCreateuser_idsInput | Enumerable<string>
    platforms?: platformsUncheckedCreateNestedManyWithoutOrganizationsInput
    users?: usersUncheckedCreateNestedManyWithoutOrganizationsInput
  }

  export type organizationsUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platforms?: platformsUpdateManyWithoutOrganizationsNestedInput
    users?: usersUpdateManyWithoutOrganizationsNestedInput
  }

  export type organizationsUncheckedUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform_ids?: organizationsUpdateplatform_idsInput | Enumerable<string>
    user_ids?: organizationsUpdateuser_idsInput | Enumerable<string>
    platforms?: platformsUncheckedUpdateManyWithoutOrganizationsNestedInput
    users?: usersUncheckedUpdateManyWithoutOrganizationsNestedInput
  }

  export type organizationsCreateManyInput = {
    id?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    uuid?: string
    username?: string | null
    name?: string | null
    platform_ids?: organizationsCreateplatform_idsInput | Enumerable<string>
    user_ids?: organizationsCreateuser_idsInput | Enumerable<string>
  }

  export type organizationsUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type organizationsUncheckedUpdateManyInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform_ids?: organizationsUpdateplatform_idsInput | Enumerable<string>
    user_ids?: organizationsUpdateuser_idsInput | Enumerable<string>
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type PlatformsListRelationFilter = {
    every?: platformsWhereInput
    some?: platformsWhereInput
    none?: platformsWhereInput
  }

  export type OrganizationsListRelationFilter = {
    every?: organizationsWhereInput
    some?: organizationsWhereInput
    none?: organizationsWhereInput
  }

  export type platformsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    platform_ids?: SortOrder
    organization_ids?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type platformsCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    username?: SortOrder
    name?: SortOrder
    user_ids?: SortOrder
    organization_ids?: SortOrder
  }

  export type platformsMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    username?: SortOrder
    name?: SortOrder
  }

  export type platformsMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    username?: SortOrder
    name?: SortOrder
  }

  export type organizationsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    name?: SortOrder
    platform_ids?: SortOrder
    user_ids?: SortOrder
  }

  export type organizationsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    name?: SortOrder
  }

  export type organizationsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    name?: SortOrder
  }

  export type platformsCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<platformsCreateWithoutUsersInput>, Enumerable<platformsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<platformsCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<platformsWhereUniqueInput>
  }

  export type organizationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<organizationsCreateWithoutUsersInput>, Enumerable<organizationsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<organizationsCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<organizationsWhereUniqueInput>
  }

  export type usersCreateplatform_idsInput = {
    set: Enumerable<string>
  }

  export type usersCreateorganization_idsInput = {
    set: Enumerable<string>
  }

  export type platformsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<platformsCreateWithoutUsersInput>, Enumerable<platformsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<platformsCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<platformsWhereUniqueInput>
  }

  export type organizationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<organizationsCreateWithoutUsersInput>, Enumerable<organizationsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<organizationsCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<organizationsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type platformsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<platformsCreateWithoutUsersInput>, Enumerable<platformsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<platformsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<platformsUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<platformsWhereUniqueInput>
    disconnect?: Enumerable<platformsWhereUniqueInput>
    delete?: Enumerable<platformsWhereUniqueInput>
    connect?: Enumerable<platformsWhereUniqueInput>
    update?: Enumerable<platformsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<platformsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<platformsScalarWhereInput>
  }

  export type organizationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<organizationsCreateWithoutUsersInput>, Enumerable<organizationsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<organizationsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<organizationsUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<organizationsWhereUniqueInput>
    disconnect?: Enumerable<organizationsWhereUniqueInput>
    delete?: Enumerable<organizationsWhereUniqueInput>
    connect?: Enumerable<organizationsWhereUniqueInput>
    update?: Enumerable<organizationsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<organizationsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<organizationsScalarWhereInput>
  }

  export type usersUpdateplatform_idsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type usersUpdateorganization_idsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type platformsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<platformsCreateWithoutUsersInput>, Enumerable<platformsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<platformsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<platformsUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<platformsWhereUniqueInput>
    disconnect?: Enumerable<platformsWhereUniqueInput>
    delete?: Enumerable<platformsWhereUniqueInput>
    connect?: Enumerable<platformsWhereUniqueInput>
    update?: Enumerable<platformsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<platformsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<platformsScalarWhereInput>
  }

  export type organizationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<organizationsCreateWithoutUsersInput>, Enumerable<organizationsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<organizationsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<organizationsUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<organizationsWhereUniqueInput>
    disconnect?: Enumerable<organizationsWhereUniqueInput>
    delete?: Enumerable<organizationsWhereUniqueInput>
    connect?: Enumerable<organizationsWhereUniqueInput>
    update?: Enumerable<organizationsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<organizationsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<organizationsScalarWhereInput>
  }

  export type usersCreateNestedManyWithoutPlatformsInput = {
    create?: XOR<Enumerable<usersCreateWithoutPlatformsInput>, Enumerable<usersUncheckedCreateWithoutPlatformsInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutPlatformsInput>
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type organizationsCreateNestedManyWithoutPlatformsInput = {
    create?: XOR<Enumerable<organizationsCreateWithoutPlatformsInput>, Enumerable<organizationsUncheckedCreateWithoutPlatformsInput>>
    connectOrCreate?: Enumerable<organizationsCreateOrConnectWithoutPlatformsInput>
    connect?: Enumerable<organizationsWhereUniqueInput>
  }

  export type platformsCreateuser_idsInput = {
    set: Enumerable<string>
  }

  export type platformsCreateorganization_idsInput = {
    set: Enumerable<string>
  }

  export type usersUncheckedCreateNestedManyWithoutPlatformsInput = {
    create?: XOR<Enumerable<usersCreateWithoutPlatformsInput>, Enumerable<usersUncheckedCreateWithoutPlatformsInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutPlatformsInput>
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type organizationsUncheckedCreateNestedManyWithoutPlatformsInput = {
    create?: XOR<Enumerable<organizationsCreateWithoutPlatformsInput>, Enumerable<organizationsUncheckedCreateWithoutPlatformsInput>>
    connectOrCreate?: Enumerable<organizationsCreateOrConnectWithoutPlatformsInput>
    connect?: Enumerable<organizationsWhereUniqueInput>
  }

  export type usersUpdateManyWithoutPlatformsNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutPlatformsInput>, Enumerable<usersUncheckedCreateWithoutPlatformsInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutPlatformsInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutPlatformsInput>
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutPlatformsInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutPlatformsInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type organizationsUpdateManyWithoutPlatformsNestedInput = {
    create?: XOR<Enumerable<organizationsCreateWithoutPlatformsInput>, Enumerable<organizationsUncheckedCreateWithoutPlatformsInput>>
    connectOrCreate?: Enumerable<organizationsCreateOrConnectWithoutPlatformsInput>
    upsert?: Enumerable<organizationsUpsertWithWhereUniqueWithoutPlatformsInput>
    set?: Enumerable<organizationsWhereUniqueInput>
    disconnect?: Enumerable<organizationsWhereUniqueInput>
    delete?: Enumerable<organizationsWhereUniqueInput>
    connect?: Enumerable<organizationsWhereUniqueInput>
    update?: Enumerable<organizationsUpdateWithWhereUniqueWithoutPlatformsInput>
    updateMany?: Enumerable<organizationsUpdateManyWithWhereWithoutPlatformsInput>
    deleteMany?: Enumerable<organizationsScalarWhereInput>
  }

  export type platformsUpdateuser_idsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type platformsUpdateorganization_idsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type usersUncheckedUpdateManyWithoutPlatformsNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutPlatformsInput>, Enumerable<usersUncheckedCreateWithoutPlatformsInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutPlatformsInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutPlatformsInput>
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutPlatformsInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutPlatformsInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type organizationsUncheckedUpdateManyWithoutPlatformsNestedInput = {
    create?: XOR<Enumerable<organizationsCreateWithoutPlatformsInput>, Enumerable<organizationsUncheckedCreateWithoutPlatformsInput>>
    connectOrCreate?: Enumerable<organizationsCreateOrConnectWithoutPlatformsInput>
    upsert?: Enumerable<organizationsUpsertWithWhereUniqueWithoutPlatformsInput>
    set?: Enumerable<organizationsWhereUniqueInput>
    disconnect?: Enumerable<organizationsWhereUniqueInput>
    delete?: Enumerable<organizationsWhereUniqueInput>
    connect?: Enumerable<organizationsWhereUniqueInput>
    update?: Enumerable<organizationsUpdateWithWhereUniqueWithoutPlatformsInput>
    updateMany?: Enumerable<organizationsUpdateManyWithWhereWithoutPlatformsInput>
    deleteMany?: Enumerable<organizationsScalarWhereInput>
  }

  export type platformsCreateNestedManyWithoutOrganizationsInput = {
    create?: XOR<Enumerable<platformsCreateWithoutOrganizationsInput>, Enumerable<platformsUncheckedCreateWithoutOrganizationsInput>>
    connectOrCreate?: Enumerable<platformsCreateOrConnectWithoutOrganizationsInput>
    connect?: Enumerable<platformsWhereUniqueInput>
  }

  export type usersCreateNestedManyWithoutOrganizationsInput = {
    create?: XOR<Enumerable<usersCreateWithoutOrganizationsInput>, Enumerable<usersUncheckedCreateWithoutOrganizationsInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutOrganizationsInput>
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type organizationsCreateplatform_idsInput = {
    set: Enumerable<string>
  }

  export type organizationsCreateuser_idsInput = {
    set: Enumerable<string>
  }

  export type platformsUncheckedCreateNestedManyWithoutOrganizationsInput = {
    create?: XOR<Enumerable<platformsCreateWithoutOrganizationsInput>, Enumerable<platformsUncheckedCreateWithoutOrganizationsInput>>
    connectOrCreate?: Enumerable<platformsCreateOrConnectWithoutOrganizationsInput>
    connect?: Enumerable<platformsWhereUniqueInput>
  }

  export type usersUncheckedCreateNestedManyWithoutOrganizationsInput = {
    create?: XOR<Enumerable<usersCreateWithoutOrganizationsInput>, Enumerable<usersUncheckedCreateWithoutOrganizationsInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutOrganizationsInput>
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type platformsUpdateManyWithoutOrganizationsNestedInput = {
    create?: XOR<Enumerable<platformsCreateWithoutOrganizationsInput>, Enumerable<platformsUncheckedCreateWithoutOrganizationsInput>>
    connectOrCreate?: Enumerable<platformsCreateOrConnectWithoutOrganizationsInput>
    upsert?: Enumerable<platformsUpsertWithWhereUniqueWithoutOrganizationsInput>
    set?: Enumerable<platformsWhereUniqueInput>
    disconnect?: Enumerable<platformsWhereUniqueInput>
    delete?: Enumerable<platformsWhereUniqueInput>
    connect?: Enumerable<platformsWhereUniqueInput>
    update?: Enumerable<platformsUpdateWithWhereUniqueWithoutOrganizationsInput>
    updateMany?: Enumerable<platformsUpdateManyWithWhereWithoutOrganizationsInput>
    deleteMany?: Enumerable<platformsScalarWhereInput>
  }

  export type usersUpdateManyWithoutOrganizationsNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutOrganizationsInput>, Enumerable<usersUncheckedCreateWithoutOrganizationsInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutOrganizationsInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutOrganizationsInput>
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutOrganizationsInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutOrganizationsInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type organizationsUpdateplatform_idsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type organizationsUpdateuser_idsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type platformsUncheckedUpdateManyWithoutOrganizationsNestedInput = {
    create?: XOR<Enumerable<platformsCreateWithoutOrganizationsInput>, Enumerable<platformsUncheckedCreateWithoutOrganizationsInput>>
    connectOrCreate?: Enumerable<platformsCreateOrConnectWithoutOrganizationsInput>
    upsert?: Enumerable<platformsUpsertWithWhereUniqueWithoutOrganizationsInput>
    set?: Enumerable<platformsWhereUniqueInput>
    disconnect?: Enumerable<platformsWhereUniqueInput>
    delete?: Enumerable<platformsWhereUniqueInput>
    connect?: Enumerable<platformsWhereUniqueInput>
    update?: Enumerable<platformsUpdateWithWhereUniqueWithoutOrganizationsInput>
    updateMany?: Enumerable<platformsUpdateManyWithWhereWithoutOrganizationsInput>
    deleteMany?: Enumerable<platformsScalarWhereInput>
  }

  export type usersUncheckedUpdateManyWithoutOrganizationsNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutOrganizationsInput>, Enumerable<usersUncheckedCreateWithoutOrganizationsInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutOrganizationsInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutOrganizationsInput>
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutOrganizationsInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutOrganizationsInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type platformsCreateWithoutUsersInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    key: string
    username?: string | null
    name?: string | null
    organizations?: organizationsCreateNestedManyWithoutPlatformsInput
  }

  export type platformsUncheckedCreateWithoutUsersInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    key: string
    username?: string | null
    name?: string | null
    user_ids?: platformsCreateuser_idsInput | Enumerable<string>
    organization_ids?: platformsCreateorganization_idsInput | Enumerable<string>
    organizations?: organizationsUncheckedCreateNestedManyWithoutPlatformsInput
  }

  export type platformsCreateOrConnectWithoutUsersInput = {
    where: platformsWhereUniqueInput
    create: XOR<platformsCreateWithoutUsersInput, platformsUncheckedCreateWithoutUsersInput>
  }

  export type organizationsCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    uuid?: string
    username?: string | null
    name?: string | null
    platforms?: platformsCreateNestedManyWithoutOrganizationsInput
  }

  export type organizationsUncheckedCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    uuid?: string
    username?: string | null
    name?: string | null
    platform_ids?: organizationsCreateplatform_idsInput | Enumerable<string>
    user_ids?: organizationsCreateuser_idsInput | Enumerable<string>
    platforms?: platformsUncheckedCreateNestedManyWithoutOrganizationsInput
  }

  export type organizationsCreateOrConnectWithoutUsersInput = {
    where: organizationsWhereUniqueInput
    create: XOR<organizationsCreateWithoutUsersInput, organizationsUncheckedCreateWithoutUsersInput>
  }

  export type platformsUpsertWithWhereUniqueWithoutUsersInput = {
    where: platformsWhereUniqueInput
    update: XOR<platformsUpdateWithoutUsersInput, platformsUncheckedUpdateWithoutUsersInput>
    create: XOR<platformsCreateWithoutUsersInput, platformsUncheckedCreateWithoutUsersInput>
  }

  export type platformsUpdateWithWhereUniqueWithoutUsersInput = {
    where: platformsWhereUniqueInput
    data: XOR<platformsUpdateWithoutUsersInput, platformsUncheckedUpdateWithoutUsersInput>
  }

  export type platformsUpdateManyWithWhereWithoutUsersInput = {
    where: platformsScalarWhereInput
    data: XOR<platformsUpdateManyMutationInput, platformsUncheckedUpdateManyWithoutPlatformsInput>
  }

  export type platformsScalarWhereInput = {
    AND?: Enumerable<platformsScalarWhereInput>
    OR?: Enumerable<platformsScalarWhereInput>
    NOT?: Enumerable<platformsScalarWhereInput>
    id?: StringFilter | string
    uuid?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    key?: StringFilter | string
    username?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    user_ids?: StringNullableListFilter
    organization_ids?: StringNullableListFilter
  }

  export type organizationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: organizationsWhereUniqueInput
    update: XOR<organizationsUpdateWithoutUsersInput, organizationsUncheckedUpdateWithoutUsersInput>
    create: XOR<organizationsCreateWithoutUsersInput, organizationsUncheckedCreateWithoutUsersInput>
  }

  export type organizationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: organizationsWhereUniqueInput
    data: XOR<organizationsUpdateWithoutUsersInput, organizationsUncheckedUpdateWithoutUsersInput>
  }

  export type organizationsUpdateManyWithWhereWithoutUsersInput = {
    where: organizationsScalarWhereInput
    data: XOR<organizationsUpdateManyMutationInput, organizationsUncheckedUpdateManyWithoutOrganizationsInput>
  }

  export type organizationsScalarWhereInput = {
    AND?: Enumerable<organizationsScalarWhereInput>
    OR?: Enumerable<organizationsScalarWhereInput>
    NOT?: Enumerable<organizationsScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    uuid?: StringFilter | string
    username?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    platform_ids?: StringNullableListFilter
    user_ids?: StringNullableListFilter
  }

  export type usersCreateWithoutPlatformsInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    email?: string | null
    phone?: string | null
    name?: string | null
    birthDate?: Date | string | null
    organizations?: organizationsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPlatformsInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    email?: string | null
    phone?: string | null
    name?: string | null
    birthDate?: Date | string | null
    platform_ids?: usersCreateplatform_idsInput | Enumerable<string>
    organization_ids?: usersCreateorganization_idsInput | Enumerable<string>
    organizations?: organizationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPlatformsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPlatformsInput, usersUncheckedCreateWithoutPlatformsInput>
  }

  export type organizationsCreateWithoutPlatformsInput = {
    id?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    uuid?: string
    username?: string | null
    name?: string | null
    users?: usersCreateNestedManyWithoutOrganizationsInput
  }

  export type organizationsUncheckedCreateWithoutPlatformsInput = {
    id?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    uuid?: string
    username?: string | null
    name?: string | null
    platform_ids?: organizationsCreateplatform_idsInput | Enumerable<string>
    user_ids?: organizationsCreateuser_idsInput | Enumerable<string>
    users?: usersUncheckedCreateNestedManyWithoutOrganizationsInput
  }

  export type organizationsCreateOrConnectWithoutPlatformsInput = {
    where: organizationsWhereUniqueInput
    create: XOR<organizationsCreateWithoutPlatformsInput, organizationsUncheckedCreateWithoutPlatformsInput>
  }

  export type usersUpsertWithWhereUniqueWithoutPlatformsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutPlatformsInput, usersUncheckedUpdateWithoutPlatformsInput>
    create: XOR<usersCreateWithoutPlatformsInput, usersUncheckedCreateWithoutPlatformsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutPlatformsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutPlatformsInput, usersUncheckedUpdateWithoutPlatformsInput>
  }

  export type usersUpdateManyWithWhereWithoutPlatformsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersScalarWhereInput = {
    AND?: Enumerable<usersScalarWhereInput>
    OR?: Enumerable<usersScalarWhereInput>
    NOT?: Enumerable<usersScalarWhereInput>
    id?: StringFilter | string
    uuid?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    email?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    birthDate?: DateTimeNullableFilter | Date | string | null
    platform_ids?: StringNullableListFilter
    organization_ids?: StringNullableListFilter
  }

  export type organizationsUpsertWithWhereUniqueWithoutPlatformsInput = {
    where: organizationsWhereUniqueInput
    update: XOR<organizationsUpdateWithoutPlatformsInput, organizationsUncheckedUpdateWithoutPlatformsInput>
    create: XOR<organizationsCreateWithoutPlatformsInput, organizationsUncheckedCreateWithoutPlatformsInput>
  }

  export type organizationsUpdateWithWhereUniqueWithoutPlatformsInput = {
    where: organizationsWhereUniqueInput
    data: XOR<organizationsUpdateWithoutPlatformsInput, organizationsUncheckedUpdateWithoutPlatformsInput>
  }

  export type organizationsUpdateManyWithWhereWithoutPlatformsInput = {
    where: organizationsScalarWhereInput
    data: XOR<organizationsUpdateManyMutationInput, organizationsUncheckedUpdateManyWithoutOrganizationsInput>
  }

  export type platformsCreateWithoutOrganizationsInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    key: string
    username?: string | null
    name?: string | null
    users?: usersCreateNestedManyWithoutPlatformsInput
  }

  export type platformsUncheckedCreateWithoutOrganizationsInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    key: string
    username?: string | null
    name?: string | null
    user_ids?: platformsCreateuser_idsInput | Enumerable<string>
    organization_ids?: platformsCreateorganization_idsInput | Enumerable<string>
    users?: usersUncheckedCreateNestedManyWithoutPlatformsInput
  }

  export type platformsCreateOrConnectWithoutOrganizationsInput = {
    where: platformsWhereUniqueInput
    create: XOR<platformsCreateWithoutOrganizationsInput, platformsUncheckedCreateWithoutOrganizationsInput>
  }

  export type usersCreateWithoutOrganizationsInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    email?: string | null
    phone?: string | null
    name?: string | null
    birthDate?: Date | string | null
    platforms?: platformsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrganizationsInput = {
    id?: string
    uuid?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    email?: string | null
    phone?: string | null
    name?: string | null
    birthDate?: Date | string | null
    platform_ids?: usersCreateplatform_idsInput | Enumerable<string>
    organization_ids?: usersCreateorganization_idsInput | Enumerable<string>
    platforms?: platformsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrganizationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrganizationsInput, usersUncheckedCreateWithoutOrganizationsInput>
  }

  export type platformsUpsertWithWhereUniqueWithoutOrganizationsInput = {
    where: platformsWhereUniqueInput
    update: XOR<platformsUpdateWithoutOrganizationsInput, platformsUncheckedUpdateWithoutOrganizationsInput>
    create: XOR<platformsCreateWithoutOrganizationsInput, platformsUncheckedCreateWithoutOrganizationsInput>
  }

  export type platformsUpdateWithWhereUniqueWithoutOrganizationsInput = {
    where: platformsWhereUniqueInput
    data: XOR<platformsUpdateWithoutOrganizationsInput, platformsUncheckedUpdateWithoutOrganizationsInput>
  }

  export type platformsUpdateManyWithWhereWithoutOrganizationsInput = {
    where: platformsScalarWhereInput
    data: XOR<platformsUpdateManyMutationInput, platformsUncheckedUpdateManyWithoutPlatformsInput>
  }

  export type usersUpsertWithWhereUniqueWithoutOrganizationsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutOrganizationsInput, usersUncheckedUpdateWithoutOrganizationsInput>
    create: XOR<usersCreateWithoutOrganizationsInput, usersUncheckedCreateWithoutOrganizationsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutOrganizationsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutOrganizationsInput, usersUncheckedUpdateWithoutOrganizationsInput>
  }

  export type usersUpdateManyWithWhereWithoutOrganizationsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type platformsUpdateWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    key?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    organizations?: organizationsUpdateManyWithoutPlatformsNestedInput
  }

  export type platformsUncheckedUpdateWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    key?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_ids?: platformsUpdateuser_idsInput | Enumerable<string>
    organization_ids?: platformsUpdateorganization_idsInput | Enumerable<string>
    organizations?: organizationsUncheckedUpdateManyWithoutPlatformsNestedInput
  }

  export type platformsUncheckedUpdateManyWithoutPlatformsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    key?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_ids?: platformsUpdateuser_idsInput | Enumerable<string>
    organization_ids?: platformsUpdateorganization_idsInput | Enumerable<string>
  }

  export type organizationsUpdateWithoutUsersInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platforms?: platformsUpdateManyWithoutOrganizationsNestedInput
  }

  export type organizationsUncheckedUpdateWithoutUsersInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform_ids?: organizationsUpdateplatform_idsInput | Enumerable<string>
    user_ids?: organizationsUpdateuser_idsInput | Enumerable<string>
    platforms?: platformsUncheckedUpdateManyWithoutOrganizationsNestedInput
  }

  export type organizationsUncheckedUpdateManyWithoutOrganizationsInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform_ids?: organizationsUpdateplatform_idsInput | Enumerable<string>
    user_ids?: organizationsUpdateuser_idsInput | Enumerable<string>
  }

  export type usersUpdateWithoutPlatformsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizations?: organizationsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPlatformsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_ids?: usersUpdateplatform_idsInput | Enumerable<string>
    organization_ids?: usersUpdateorganization_idsInput | Enumerable<string>
    organizations?: organizationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_ids?: usersUpdateplatform_idsInput | Enumerable<string>
    organization_ids?: usersUpdateorganization_idsInput | Enumerable<string>
  }

  export type organizationsUpdateWithoutPlatformsInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateManyWithoutOrganizationsNestedInput
  }

  export type organizationsUncheckedUpdateWithoutPlatformsInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform_ids?: organizationsUpdateplatform_idsInput | Enumerable<string>
    user_ids?: organizationsUpdateuser_idsInput | Enumerable<string>
    users?: usersUncheckedUpdateManyWithoutOrganizationsNestedInput
  }

  export type platformsUpdateWithoutOrganizationsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    key?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateManyWithoutPlatformsNestedInput
  }

  export type platformsUncheckedUpdateWithoutOrganizationsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    key?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_ids?: platformsUpdateuser_idsInput | Enumerable<string>
    organization_ids?: platformsUpdateorganization_idsInput | Enumerable<string>
    users?: usersUncheckedUpdateManyWithoutPlatformsNestedInput
  }

  export type usersUpdateWithoutOrganizationsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platforms?: platformsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrganizationsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_ids?: usersUpdateplatform_idsInput | Enumerable<string>
    organization_ids?: usersUpdateorganization_idsInput | Enumerable<string>
    platforms?: platformsUncheckedUpdateManyWithoutUsersNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}