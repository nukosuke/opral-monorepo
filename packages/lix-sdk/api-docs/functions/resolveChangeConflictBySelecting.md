[**@lix-js/sdk**](../README.md)

***

[@lix-js/sdk](../README.md) / resolveChangeConflictBySelecting

# Function: resolveChangeConflictBySelecting()

> **resolveChangeConflictBySelecting**(`args`): `Promise`\<`void`\>

Defined in: [packages/lix-sdk/src/change-conflict/resolve-conflict-by-selecting.ts:10](https://github.com/opral/monorepo/blob/b171e3e71d4461028abf991c33609fbcfb064d33/packages/lix-sdk/src/change-conflict/resolve-conflict-by-selecting.ts#L10)

Resolves a conflict by selecting one of the two
changes in the conflict.

## Parameters

### args

#### conflict

\{ `change_set_id`: `string`; `id`: `string`; `key`: `string`; \}

#### conflict.change_set_id

`string`

#### conflict.id

`string`

#### conflict.key

`string`

#### lix

[`Lix`](../type-aliases/Lix.md)

#### select

\{ `created_at`: `string`; `entity_id`: `string`; `file_id`: `string`; `id`: `string`; `plugin_key`: `string`; `schema_key`: `string`; `snapshot_id`: `string`; \}

#### select.created_at

`string`

#### select.entity_id

`string`

#### select.file_id

`string`

#### select.id

`string`

#### select.plugin_key

`string`

#### select.schema_key

`string`

#### select.snapshot_id

`string`

## Returns

`Promise`\<`void`\>
