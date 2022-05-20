# Interface: BSLRequest

## Hierarchy

- `Request`

  ↳ **`BSLRequest`**

## Table of contents

### Properties

- [accepted](../wiki/BSLRequest#accepted)
- [app](../wiki/BSLRequest#app)
- [baseUrl](../wiki/BSLRequest#baseurl)
- [body](../wiki/BSLRequest#body)
- [complete](../wiki/BSLRequest#complete)
- [connection](../wiki/BSLRequest#connection)
- [cookies](../wiki/BSLRequest#cookies)
- [destroyed](../wiki/BSLRequest#destroyed)
- [fresh](../wiki/BSLRequest#fresh)
- [headers](../wiki/BSLRequest#headers)
- [host](../wiki/BSLRequest#host)
- [hostname](../wiki/BSLRequest#hostname)
- [httpVersion](../wiki/BSLRequest#httpversion)
- [httpVersionMajor](../wiki/BSLRequest#httpversionmajor)
- [httpVersionMinor](../wiki/BSLRequest#httpversionminor)
- [ip](../wiki/BSLRequest#ip)
- [ips](../wiki/BSLRequest#ips)
- [locals](../wiki/BSLRequest#locals)
- [method](../wiki/BSLRequest#method)
- [next](../wiki/BSLRequest#next)
- [originalUrl](../wiki/BSLRequest#originalurl)
- [params](../wiki/BSLRequest#params)
- [path](../wiki/BSLRequest#path)
- [protocol](../wiki/BSLRequest#protocol)
- [query](../wiki/BSLRequest#query)
- [rawHeaders](../wiki/BSLRequest#rawheaders)
- [rawTrailers](../wiki/BSLRequest#rawtrailers)
- [readable](../wiki/BSLRequest#readable)
- [readableHighWaterMark](../wiki/BSLRequest#readablehighwatermark)
- [readableLength](../wiki/BSLRequest#readablelength)
- [readableObjectMode](../wiki/BSLRequest#readableobjectmode)
- [res](../wiki/BSLRequest#res)
- [route](../wiki/BSLRequest#route)
- [secure](../wiki/BSLRequest#secure)
- [signedCookies](../wiki/BSLRequest#signedcookies)
- [socket](../wiki/BSLRequest#socket)
- [stale](../wiki/BSLRequest#stale)
- [statusCode](../wiki/BSLRequest#statuscode)
- [statusMessage](../wiki/BSLRequest#statusmessage)
- [subdomains](../wiki/BSLRequest#subdomains)
- [trailers](../wiki/BSLRequest#trailers)
- [url](../wiki/BSLRequest#url)
- [xhr](../wiki/BSLRequest#xhr)

### Methods

- [[asyncIterator]](../wiki/BSLRequest#%5Basynciterator%5D)
- [\_destroy](../wiki/BSLRequest#_destroy)
- [\_read](../wiki/BSLRequest#_read)
- [accepts](../wiki/BSLRequest#accepts)
- [acceptsCharsets](../wiki/BSLRequest#acceptscharsets)
- [acceptsEncodings](../wiki/BSLRequest#acceptsencodings)
- [acceptsLanguages](../wiki/BSLRequest#acceptslanguages)
- [addListener](../wiki/BSLRequest#addlistener)
- [destroy](../wiki/BSLRequest#destroy)
- [emit](../wiki/BSLRequest#emit)
- [eventNames](../wiki/BSLRequest#eventnames)
- [get](../wiki/BSLRequest#get)
- [getMaxListeners](../wiki/BSLRequest#getmaxlisteners)
- [header](../wiki/BSLRequest#header)
- [is](../wiki/BSLRequest#is)
- [isPaused](../wiki/BSLRequest#ispaused)
- [listenerCount](../wiki/BSLRequest#listenercount)
- [listeners](../wiki/BSLRequest#listeners)
- [off](../wiki/BSLRequest#off)
- [on](../wiki/BSLRequest#on)
- [once](../wiki/BSLRequest#once)
- [param](../wiki/BSLRequest#param)
- [pause](../wiki/BSLRequest#pause)
- [pipe](../wiki/BSLRequest#pipe)
- [prependListener](../wiki/BSLRequest#prependlistener)
- [prependOnceListener](../wiki/BSLRequest#prependoncelistener)
- [push](../wiki/BSLRequest#push)
- [range](../wiki/BSLRequest#range)
- [rawListeners](../wiki/BSLRequest#rawlisteners)
- [read](../wiki/BSLRequest#read)
- [removeAllListeners](../wiki/BSLRequest#removealllisteners)
- [removeListener](../wiki/BSLRequest#removelistener)
- [resume](../wiki/BSLRequest#resume)
- [setEncoding](../wiki/BSLRequest#setencoding)
- [setMaxListeners](../wiki/BSLRequest#setmaxlisteners)
- [setTimeout](../wiki/BSLRequest#settimeout)
- [unpipe](../wiki/BSLRequest#unpipe)
- [unshift](../wiki/BSLRequest#unshift)
- [wrap](../wiki/BSLRequest#wrap)

## Properties

### accepted

• **accepted**: `MediaType`[]

Return an array of Accepted media types
ordered from highest quality to lowest.

#### Inherited from

Request.accepted

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:334

___

### app

• **app**: `Application`

#### Inherited from

Request.app

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:477

___

### baseUrl

• **baseUrl**: `string`

#### Inherited from

Request.baseUrl

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:475

___

### body

• **body**: `any`

#### Inherited from

Request.body

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:456

___

### complete

• **complete**: `boolean`

#### Inherited from

Request.complete

#### Defined in

node_modules/@types/node/http.d.ts:296

___

### connection

• **connection**: `Socket`

**`deprecate`** Use `socket` instead.

#### Inherited from

Request.connection

#### Defined in

node_modules/@types/node/http.d.ts:300

___

### cookies

• **cookies**: `any`

#### Inherited from

Request.cookies

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:459

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

Request.destroyed

#### Defined in

node_modules/@types/node/stream.d.ts:32

___

### fresh

• **fresh**: `boolean`

Check if the request is fresh, aka
Last-Modified and/or the ETag
still match.

#### Inherited from

Request.fresh

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:441

___

### headers

• **headers**: `IncomingHttpHeaders`

#### Inherited from

Request.headers

#### Defined in

node_modules/@types/node/http.d.ts:302

___

### host

• **host**: `string`

**`deprecated`** Use hostname instead.

#### Inherited from

Request.host

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:434

___

### hostname

• **hostname**: `string`

Parse the "Host" header field hostname.

#### Inherited from

Request.hostname

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:429

___

### httpVersion

• **httpVersion**: `string`

#### Inherited from

Request.httpVersion

#### Defined in

node_modules/@types/node/http.d.ts:293

___

### httpVersionMajor

• **httpVersionMajor**: `number`

#### Inherited from

Request.httpVersionMajor

#### Defined in

node_modules/@types/node/http.d.ts:294

___

### httpVersionMinor

• **httpVersionMinor**: `number`

#### Inherited from

Request.httpVersionMinor

#### Defined in

node_modules/@types/node/http.d.ts:295

___

### ip

• **ip**: `string`

Return the remote address, or when
"trust proxy" is `true` return
the upstream addr.

#### Inherited from

Request.ip

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:396

___

### ips

• **ips**: `string`[]

When "trust proxy" is `true`, parse
the "X-Forwarded-For" ip address list.

For example if the value were "client, proxy1, proxy2"
you would receive the array `["client", "proxy1", "proxy2"]`
where "proxy2" is the furthest down-stream.

#### Inherited from

Request.ips

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:406

___

### locals

• `Optional` **locals**: `Record`<`string`, `any`\> & { `requestContext?`: [`GatewayJWTContent`](../wiki/GatewayJWTContent)  }

#### Defined in

src/index.types.ts:93

___

### method

• **method**: `string`

#### Inherited from

Request.method

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:461

___

### next

• `Optional` **next**: `NextFunction`

#### Inherited from

Request.next

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:484

___

### originalUrl

• **originalUrl**: `string`

#### Inherited from

Request.originalUrl

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:471

___

### params

• **params**: `ParamsDictionary`

#### Inherited from

Request.params

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:463

___

### path

• **path**: `string`

Short-hand for `url.parse(req.url).pathname`.

#### Inherited from

Request.path

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:424

___

### protocol

• **protocol**: `string`

Return the protocol string "http" or "https"
when requested with TLS. When the "trust proxy"
setting is enabled the "X-Forwarded-Proto" header
field will be trusted. If you're running behind
a reverse proxy that supplies https for you this
may be enabled.

#### Inherited from

Request.protocol

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:382

___

### query

• **query**: `any`

#### Inherited from

Request.query

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:465

___

### rawHeaders

• **rawHeaders**: `string`[]

#### Inherited from

Request.rawHeaders

#### Defined in

node_modules/@types/node/http.d.ts:303

___

### rawTrailers

• **rawTrailers**: `string`[]

#### Inherited from

Request.rawTrailers

#### Defined in

node_modules/@types/node/http.d.ts:305

___

### readable

• **readable**: `boolean`

#### Inherited from

Request.readable

#### Defined in

node_modules/@types/node/stream.d.ts:28

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

#### Inherited from

Request.readableHighWaterMark

#### Defined in

node_modules/@types/node/stream.d.ts:29

___

### readableLength

• `Readonly` **readableLength**: `number`

#### Inherited from

Request.readableLength

#### Defined in

node_modules/@types/node/stream.d.ts:30

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

#### Inherited from

Request.readableObjectMode

#### Defined in

node_modules/@types/node/stream.d.ts:31

___

### res

• `Optional` **res**: `Response`<`any`\>

After middleware.init executed, Request will contain res and next properties
See: express/lib/middleware/init.js

#### Inherited from

Request.res

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:483

___

### route

• **route**: `any`

#### Inherited from

Request.route

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:467

___

### secure

• **secure**: `boolean`

Short-hand for:

   req.protocol == 'https'

#### Inherited from

Request.secure

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:389

___

### signedCookies

• **signedCookies**: `any`

#### Inherited from

Request.signedCookies

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:469

___

### socket

• **socket**: `Socket`

#### Inherited from

Request.socket

#### Defined in

node_modules/@types/node/http.d.ts:301

___

### stale

• **stale**: `boolean`

Check if the request is stale, aka
"Last-Modified" and / or the "ETag" for the
resource has changed.

#### Inherited from

Request.stale

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:448

___

### statusCode

• `Optional` **statusCode**: `number`

Only valid for response obtained from http.ClientRequest.

#### Inherited from

Request.statusCode

#### Defined in

node_modules/@types/node/http.d.ts:318

___

### statusMessage

• `Optional` **statusMessage**: `string`

Only valid for response obtained from http.ClientRequest.

#### Inherited from

Request.statusMessage

#### Defined in

node_modules/@types/node/http.d.ts:322

___

### subdomains

• **subdomains**: `string`[]

Return subdomains as an array.

Subdomains are the dot-separated parts of the host before the main domain of
the app. By default, the domain of the app is assumed to be the last two
parts of the host. This can be changed by setting "subdomain offset".

For example, if the domain is "tobi.ferrets.example.com":
If "subdomain offset" is not set, req.subdomains is `["ferrets", "tobi"]`.
If "subdomain offset" is 3, req.subdomains is `["tobi"]`.

#### Inherited from

Request.subdomains

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:419

___

### trailers

• **trailers**: `Object`

#### Index signature

▪ [key: `string`]: `string` \| `undefined`

#### Inherited from

Request.trailers

#### Defined in

node_modules/@types/node/http.d.ts:304

___

### url

• **url**: `string`

#### Inherited from

Request.url

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:473

___

### xhr

• **xhr**: `boolean`

Check if the request was an _XMLHttpRequest_.

#### Inherited from

Request.xhr

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:453

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`any`\>

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

Request.\_\_@asyncIterator@3236

#### Defined in

node_modules/@types/node/stream.d.ts:105

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

Request.\_destroy

#### Defined in

node_modules/@types/node/stream.d.ts:44

___

### \_read

▸ **_read**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

Request.\_read

#### Defined in

node_modules/@types/node/stream.d.ts:34

___

### accepts

▸ **accepts**(): `string`[]

Check if the given `type(s)` is acceptable, returning
the best match when true, otherwise `undefined`, in which
case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string
such as "application/json", the extension name
such as "json", a comma-delimted list such as "json, html, text/plain",
or an array `["json", "html", "text/plain"]`. When a list
or array is given the _best_ match, if any is returned.

Examples:

    // Accept: text/html
    req.accepts('html');
    // => "html"

    // Accept: text/*, application/json
    req.accepts('html');
    // => "html"
    req.accepts('text/html');
    // => "text/html"
    req.accepts('json, text');
    // => "json"
    req.accepts('application/json');
    // => "application/json"

    // Accept: text/*, application/json
    req.accepts('image/png');
    req.accepts('png');
    // => undefined

    // Accept: text/*;q=.5, application/json
    req.accepts(['html', 'json']);
    req.accepts('html, json');
    // => "json"

#### Returns

`string`[]

#### Inherited from

Request.accepts

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:274

▸ **accepts**(`type`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`string` \| ``false``

#### Inherited from

Request.accepts

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:275

▸ **accepts**(`type`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string`[] |

#### Returns

`string` \| ``false``

#### Inherited from

Request.accepts

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:276

▸ **accepts**(...`type`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `...type` | `string`[] |

#### Returns

`string` \| ``false``

#### Inherited from

Request.accepts

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:277

___

### acceptsCharsets

▸ **acceptsCharsets**(): `string`[]

Returns the first accepted charset of the specified character sets,
based on the request's Accept-Charset HTTP header field.
If none of the specified charsets is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

#### Returns

`string`[]

#### Inherited from

Request.acceptsCharsets

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:286

▸ **acceptsCharsets**(`charset`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset` | `string` |

#### Returns

`string` \| ``false``

#### Inherited from

Request.acceptsCharsets

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:287

▸ **acceptsCharsets**(`charset`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset` | `string`[] |

#### Returns

`string` \| ``false``

#### Inherited from

Request.acceptsCharsets

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:288

▸ **acceptsCharsets**(...`charset`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `...charset` | `string`[] |

#### Returns

`string` \| ``false``

#### Inherited from

Request.acceptsCharsets

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:289

___

### acceptsEncodings

▸ **acceptsEncodings**(): `string`[]

Returns the first accepted encoding of the specified encodings,
based on the request's Accept-Encoding HTTP header field.
If none of the specified encodings is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

#### Returns

`string`[]

#### Inherited from

Request.acceptsEncodings

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:298

▸ **acceptsEncodings**(`encoding`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `string` |

#### Returns

`string` \| ``false``

#### Inherited from

Request.acceptsEncodings

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:299

▸ **acceptsEncodings**(`encoding`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `string`[] |

#### Returns

`string` \| ``false``

#### Inherited from

Request.acceptsEncodings

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:300

▸ **acceptsEncodings**(...`encoding`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `...encoding` | `string`[] |

#### Returns

`string` \| ``false``

#### Inherited from

Request.acceptsEncodings

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:301

___

### acceptsLanguages

▸ **acceptsLanguages**(): `string`[]

Returns the first accepted language of the specified languages,
based on the request's Accept-Language HTTP header field.
If none of the specified languages is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

#### Returns

`string`[]

#### Inherited from

Request.acceptsLanguages

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:310

▸ **acceptsLanguages**(`lang`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `lang` | `string` |

#### Returns

`string` \| ``false``

#### Inherited from

Request.acceptsLanguages

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:311

▸ **acceptsLanguages**(`lang`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `lang` | `string`[] |

#### Returns

`string` \| ``false``

#### Inherited from

Request.acceptsLanguages

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:312

▸ **acceptsLanguages**(...`lang`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lang` | `string`[] |

#### Returns

`string` \| ``false``

#### Inherited from

Request.acceptsLanguages

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:313

___

### addListener

▸ **addListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. readable
5. error

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:56

▸ **addListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:57

▸ **addListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:58

▸ **addListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:59

▸ **addListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:60

▸ **addListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:61

___

### destroy

▸ **destroy**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `Error` |

#### Returns

`void`

#### Inherited from

Request.destroy

#### Defined in

node_modules/@types/node/http.d.ts:323

___

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Inherited from

Request.emit

#### Defined in

node_modules/@types/node/stream.d.ts:63

▸ **emit**(`event`, `chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `chunk` | `any` |

#### Returns

`boolean`

#### Inherited from

Request.emit

#### Defined in

node_modules/@types/node/stream.d.ts:64

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

#### Returns

`boolean`

#### Inherited from

Request.emit

#### Defined in

node_modules/@types/node/stream.d.ts:65

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |

#### Returns

`boolean`

#### Inherited from

Request.emit

#### Defined in

node_modules/@types/node/stream.d.ts:66

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

Request.emit

#### Defined in

node_modules/@types/node/stream.d.ts:67

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

Request.emit

#### Defined in

node_modules/@types/node/stream.d.ts:68

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

Request.eventNames

#### Defined in

node_modules/@types/node/globals.d.ts:562

___

### get

▸ **get**(`name`): `string`[]

Return request header.

The `Referrer` header field is special-cased,
both `Referrer` and `Referer` are interchangeable.

Examples:

    req.get('Content-Type');
    // => "text/plain"

    req.get('content-type');
    // => "text/plain"

    req.get('Something');
    // => undefined

Aliased as `req.header()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"set-cookie"`` |

#### Returns

`string`[]

#### Inherited from

Request.get

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:231

▸ **get**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Inherited from

Request.get

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:232

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

Request.getMaxListeners

#### Defined in

node_modules/@types/node/globals.d.ts:554

___

### header

▸ **header**(`name`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"set-cookie"`` |

#### Returns

`string`[]

#### Inherited from

Request.header

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:234

▸ **header**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Inherited from

Request.header

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:235

___

### is

▸ **is**(`type`): `string` \| ``false``

Check if the incoming request contains the "Content-Type"
header field, and it contains the give mime `type`.

Examples:

     // With Content-Type: text/html; charset=utf-8
     req.is('html');
     req.is('text/html');
     req.is('text/*');
     // => true

     // When Content-Type is application/json
     req.is('json');
     req.is('application/json');
     req.is('application/*');
     // => true

     req.is('html');
     // => false

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |

#### Returns

`string` \| ``false``

#### Inherited from

Request.is

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:372

___

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Request.isPaused

#### Defined in

node_modules/@types/node/stream.d.ts:39

___

### listenerCount

▸ **listenerCount**(`type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

Request.listenerCount

#### Defined in

node_modules/@types/node/globals.d.ts:558

___

### listeners

▸ **listeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

Request.listeners

#### Defined in

node_modules/@types/node/globals.d.ts:555

___

### off

▸ **off**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.off

#### Defined in

node_modules/@types/node/globals.d.ts:551

___

### on

▸ **on**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.on

#### Defined in

node_modules/@types/node/stream.d.ts:70

▸ **on**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.on

#### Defined in

node_modules/@types/node/stream.d.ts:71

▸ **on**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.on

#### Defined in

node_modules/@types/node/stream.d.ts:72

▸ **on**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.on

#### Defined in

node_modules/@types/node/stream.d.ts:73

▸ **on**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.on

#### Defined in

node_modules/@types/node/stream.d.ts:74

▸ **on**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.on

#### Defined in

node_modules/@types/node/stream.d.ts:75

___

### once

▸ **once**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.once

#### Defined in

node_modules/@types/node/stream.d.ts:77

▸ **once**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.once

#### Defined in

node_modules/@types/node/stream.d.ts:78

▸ **once**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.once

#### Defined in

node_modules/@types/node/stream.d.ts:79

▸ **once**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.once

#### Defined in

node_modules/@types/node/stream.d.ts:80

▸ **once**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.once

#### Defined in

node_modules/@types/node/stream.d.ts:81

▸ **once**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.once

#### Defined in

node_modules/@types/node/stream.d.ts:82

___

### param

▸ **param**(`name`, `defaultValue?`): `string`

**`deprecated`** since 4.11 Use either req.params, req.body or req.query, as applicable.

Return the value of param `name` when present or `defaultValue`.

 - Checks route placeholders, ex: _/user/:id_
 - Checks body params, ex: id=12, {"id":12}
 - Checks query string params, ex: ?id=12

To utilize request bodies, `req.body`
should be an object. This can be done by using
the `connect.bodyParser()` middleware.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `defaultValue?` | `any` |

#### Returns

`string`

#### Inherited from

Request.param

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:349

___

### pause

▸ **pause**(): [`BSLRequest`](../wiki/BSLRequest)

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.pause

#### Defined in

node_modules/@types/node/stream.d.ts:37

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `WritableStream`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

Request.pipe

#### Defined in

node_modules/@types/node/stream.d.ts:5

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:84

▸ **prependListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:85

▸ **prependListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:86

▸ **prependListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:87

▸ **prependListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:88

▸ **prependListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:89

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:91

▸ **prependOnceListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:92

▸ **prependOnceListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:93

▸ **prependOnceListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:94

▸ **prependOnceListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:95

▸ **prependOnceListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:96

___

### push

▸ **push**(`chunk`, `encoding?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `string` |

#### Returns

`boolean`

#### Inherited from

Request.push

#### Defined in

node_modules/@types/node/stream.d.ts:43

___

### range

▸ **range**(`size`, `options?`): `Ranges` \| `Result`

Parse Range header field, capping to the given `size`.

Unspecified ranges such as "0-" require knowledge of your resource length. In
the case of a byte range this is of course the total number of bytes.
If the Range header field is not given `undefined` is returned.
If the Range header field is given, return value is a result of range-parser.
See more ./types/range-parser/index.d.ts

NOTE: remember that ranges are inclusive, so for example "Range: users=0-3"
should respond with 4 users when available, not 3.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options?` | `Options` |

#### Returns

`Ranges` \| `Result`

#### Inherited from

Request.range

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:328

___

### rawListeners

▸ **rawListeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

Request.rawListeners

#### Defined in

node_modules/@types/node/globals.d.ts:556

___

### read

▸ **read**(`size?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `number` |

#### Returns

`any`

#### Inherited from

Request.read

#### Defined in

node_modules/@types/node/stream.d.ts:35

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.removeAllListeners

#### Defined in

node_modules/@types/node/globals.d.ts:552

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:98

▸ **removeListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:99

▸ **removeListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:100

▸ **removeListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:101

▸ **removeListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:102

▸ **removeListener**(`event`, `listener`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:103

___

### resume

▸ **resume**(): [`BSLRequest`](../wiki/BSLRequest)

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.resume

#### Defined in

node_modules/@types/node/stream.d.ts:38

___

### setEncoding

▸ **setEncoding**(`encoding`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `string` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.setEncoding

#### Defined in

node_modules/@types/node/stream.d.ts:36

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.setMaxListeners

#### Defined in

node_modules/@types/node/globals.d.ts:553

___

### setTimeout

▸ **setTimeout**(`msecs`, `callback?`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs` | `number` |
| `callback?` | () => `void` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.setTimeout

#### Defined in

node_modules/@types/node/http.d.ts:306

___

### unpipe

▸ **unpipe**(`destination?`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | `WritableStream` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.unpipe

#### Defined in

node_modules/@types/node/stream.d.ts:40

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |

#### Returns

`void`

#### Inherited from

Request.unshift

#### Defined in

node_modules/@types/node/stream.d.ts:41

___

### wrap

▸ **wrap**(`oldStream`): [`BSLRequest`](../wiki/BSLRequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | `ReadableStream` |

#### Returns

[`BSLRequest`](../wiki/BSLRequest)

#### Inherited from

Request.wrap

#### Defined in

node_modules/@types/node/stream.d.ts:42
