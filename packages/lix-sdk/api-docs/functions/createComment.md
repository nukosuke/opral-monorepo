[**@lix-js/sdk**](../README.md)

***

[@lix-js/sdk](../README.md) / createComment

# Function: createComment()

> **createComment**(`args`): `Promise`\<\{ `content`: `string`; `discussion_id`: `string`; `id`: `string`; `parent_id`: `null` \| `string`; \}\>

Defined in: [packages/lix-sdk/src/discussion/create-comment.ts:4](https://github.com/opral/monorepo/blob/b171e3e71d4461028abf991c33609fbcfb064d33/packages/lix-sdk/src/discussion/create-comment.ts#L4)

## Parameters

### args

#### content

`string`

#### lix

`Pick`\<[`Lix`](../type-aliases/Lix.md), `"db"`\>

#### parentComment

`Pick`\<\{ `content`: `string`; `discussion_id`: `string`; `id`: `string`; `parent_id`: `null` \| `string`; \}, `"id"` \| `"discussion_id"`\>

## Returns

`Promise`\<\{ `content`: `string`; `discussion_id`: `string`; `id`: `string`; `parent_id`: `null` \| `string`; \}\>
