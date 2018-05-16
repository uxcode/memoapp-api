# Drama MemoApp

Angular, NodeJS, ExpressJS and MongoDB RESTful MemoApp API.
This repository was implemented with origin from [todoAPIjs](https://github.com/amejiarosario/todoAPIjs)

# DB
Install mognoDB if not installed

- Mac:
```bash
brew install mongodb
```

- Ubuntu:
```bash
sudo apt-get -y install mongodb
```

Start mongoDB at project root (with dbpath)

```bash
mongod --dbpath ./data/db/
```

# API
Install dependencies

```bash
npm install
```

Start api server

```bash
PORT=3000 npm start
```

# API Spec
- [Memo](#memo)
	- [List](#memoList)
	- [Get](#memoGet)
	- [Update](#memoUpdate)
	- [Delete](#memoDelete)
- [Label](#label)
 	- [List](#labelList)
	- [Get](#labeGet)
	- [Update](#labelUpdate)
	- [Delete](#labelDelete)
	- [Add Memos](#labelAddMemos)
	- [Remove Memos](#labelRemoveMemos)

# <span id="memo">Memo</span>
## <span id="memoList">List</span>
#### URL
- GET /memos

#### Request Example
GET /memos

#### Response
| Level1 |
|--------|
| _id |
| updatedAt |
| createdAt |
| title |
| content |
| __v |
### Response Example

```json
[
    {
        "_id": "5afbe6a12c7caff319d454d8",
        "updatedAt": "2018-05-16T08:07:47.688Z",
        "createdAt": "2018-05-16T08:06:57.499Z",
        "title": "memo1",
        "__v": 0,
        "content": "memo1 content"
    },
    {
        "_id": "5afbe6a22c7caff319d454d9",
        "updatedAt": "2018-05-16T08:07:55.700Z",
        "createdAt": "2018-05-16T08:06:58.040Z",
        "title": "memo2",
        "__v": 0,
        "content": "memo3 content"
    },
    {
        "_id": "5afbe6a22c7caff319d454da",
        "updatedAt": "2018-05-16T08:07:32.366Z",
        "createdAt": "2018-05-16T08:06:58.410Z",
        "title": "memo3",
        "__v": 0,
        "content": ""
    }
]
```
## <span id="memoCreate">Create</span>
#### URL
- POST /memos

#### Parameters

| Level1 | Required | Default | Description |
|--------|--------|--------|--------|
| title | O | - | Title of memo |
| content | X | empty string | content of memo |
#### Request Example
POST /memos

```json
{
	"title": "titleExample",
	"content": "contentExample"
}
```
#### Response
| Level1 |
|--------|
| _id |
| updatedAt |
| createdAt |
| title |
| content |
| __v |
### Response Example

```json
{
    "__v": 0,
    "updatedAt": "2018-05-16T08:14:26.388Z",
    "createdAt": "2018-05-16T08:14:26.388Z",
    "title": "titleExample",
    "_id": "5afbe8622c7caff319d454df",
    "content": "contentExample"
}
```
## <span id="memoGet">Get</span>
#### URL
- GET /memos/:id

#### Path variable

| Name | Description |
|--------|--------|
| ID | Id of memo to get |

#### Request Example
GET /memos/5afbe8622c7caff319d454df
#### Response
| Level1 |
|--------|
| _id |
| updatedAt |
| createdAt |
| title |
| content |
| __v |
### Response Example

```json
{
    "_id": "5afbe8622c7caff319d454df",
    "updatedAt": "2018-05-16T08:14:26.388Z",
    "createdAt": "2018-05-16T08:14:26.388Z",
    "title": "titleExample",
    "__v": 0,
    "content": "contentExample"
}
```
## <span id="memoUpdate">Update</span>
#### URL
- PUT /memos/:id

#### Path variable

| Name | Description |
|--------|--------|
| ID | Id of memo to get |
#### Parameters

| Level1 | Required | Default | Description |
|--------|--------|--------|--------|
| title | X | - | title of memo |
| content | X | - | content of memo |
#### Request Example
PUT /memos/5afbe8622c7caff319d454df

```json
{
	"title": "titleUpdated",
	"content": "contentUpdated"
}
```

#### Response
| Level1 |
|--------|
| _id |
| updatedAt |
| createdAt |
| title |
| content |
| __v |
### Response Example
```json
{
    "_id": "5afbe8622c7caff319d454df",
    "updatedAt": "2018-05-16T08:29:46.433Z",
    "createdAt": "2018-05-16T08:14:26.388Z",
    "title": "titleUpdated",
    "__v": 0,
    "content": "contentUpdated"
}
```

## <span id="memoDelete">Delete</span>
#### URL
- DELETE /memos/:id

#### Path variable

| Name | Description |
|--------|--------|
| ID | Id of memo to get |
#### Request Example
DELETE /memos/5afbe8622c7caff319d454df

#### Response
| Level1 |
|--------|
| _id |
| updatedAt |
| createdAt |
| title |
| content |
| __v |
### Response Example

```json
{
    "_id": "5afbe8622c7caff319d454df",
    "updatedAt": "2018-05-16T08:29:46.433Z",
    "createdAt": "2018-05-16T08:14:26.388Z",
    "title": "titleExample",
    "__v": 0,
    "content": "contentExample"
}
```

# <span id="label">Label</span>
## <span id="labelList">List</span>
#### URL
- GET /labels

#### Request Example
GET /labels

#### Response
| Level1 | Level2 |
|--------|--------|
| _id |
| updatedAt |
| createdAt |
| title |
| __v |
| memos | _id |
|| updatedAt |
|| createdAt |
|| title |
|| content |
|| __v ||
### Response Example

```json
[
    {
        "_id": "5afbee91141592fc9850ae38",
        "updatedAt": "2018-05-16T08:53:19.084Z",
        "createdAt": "2018-05-16T08:40:49.193Z",
        "title": "titleUpdated",
        "__v": 0,
        "memos": [
            {
                "_id": "5afbe6a12c7caff319d454d8",
                "updatedAt": "2018-05-16T08:07:47.688Z",
                "createdAt": "2018-05-16T08:06:57.499Z",
                "title": "memo1",
                "__v": 0,
                "content": "memo1 cotent"
            }
        ]
    },
    {
        "_id": "5afbf1bd144298fffa301c0e",
        "updatedAt": "2018-05-16T08:54:21.550Z",
        "createdAt": "2018-05-16T08:54:21.550Z",
        "title": "titleExample",
        "__v": 0,
        "memos": []
    }
]
```
## <span id="labelCreate">Create</span>
#### URL
- POST /labels

#### Parameters

| Level1 | Required | Default | Description |
|--------|--------|--------|--------|
| title | O | - | Title of label |
| content | X | empty string | content of label |
#### Request Example
POST /labels

```json
{
	"title": "titleExample"
}
```
#### Response
| Level1 | Level2 |
|--------|--------|
| _id |
| updatedAt |
| createdAt |
| title |
| __v |
| memos | _id |
|| updatedAt |
|| createdAt |
|| title |
|| content |
|| __v ||
### Response Example

```json
{
    "__v": 0,
    "updatedAt": "2018-05-16T08:54:21.550Z",
    "createdAt": "2018-05-16T08:54:21.550Z",
    "title": "titleExample",
    "_id": "5afbf1bd144298fffa301c0e",
    "memos": []
}
```
## <span id="labelGet">Get</span>
#### URL
- GET /labels/:id

#### Path variable

| Name | Description |
|--------|--------|
| ID | Id of labels to get |

#### Request Example
GET /labels/5afbee91141592fc9850ae38
#### Response
| Level1 | Level2 |
|--------|--------|
| _id |
| updatedAt |
| createdAt |
| title |
| __v |
| memos | _id |
|| updatedAt |
|| createdAt |
|| title |
|| content |
|| __v ||
### Response Example

```json
{
    "_id": "5afbee91141592fc9850ae38",
    "updatedAt": "2018-05-16T08:53:19.084Z",
    "createdAt": "2018-05-16T08:40:49.193Z",
    "title": "titleUpdated",
    "__v": 0,
    "memos": [
        {
            "_id": "5afbe6a12c7caff319d454d8",
            "updatedAt": "2018-05-16T08:07:47.688Z",
            "createdAt": "2018-05-16T08:06:57.499Z",
            "title": "memo1",
            "__v": 0,
            "content": "memo1 conent"
        }
    ]
}
```
## <span id="labelUpdate">Update</span>
#### URL
- PUT /labels/:id

#### Path variable

| Name | Description |
|--------|--------|
| ID | Id of label to update |
#### Parameters

| Level1 | Required | Default | Description |
|--------|--------|--------|--------|
| title | X | - | title of label |
| memoIds | X | - | array of memo ids |
#### Request Example
PUT /labels/5afbee91141592fc9850ae38

```json
{
	"title": "titleUpdated",
}
```

#### Response
| Level1 | Level2 |
|--------|--------|
| _id |
| updatedAt |
| createdAt |
| title |
| __v |
| memos | _id |
|| updatedAt |
|| createdAt |
|| title |
|| content |
|| __v ||
### Response Example
```json
{
    "_id": "5afbee91141592fc9850ae38",
    "updatedAt": "2018-05-16T08:59:21.007Z",
    "createdAt": "2018-05-16T08:40:49.193Z",
    "title": "titleUpdated",
    "__v": 0,
    "memos": [
        {
            "_id": "5afbe6a12c7caff319d454d8",
            "updatedAt": "2018-05-16T08:07:47.688Z",
            "createdAt": "2018-05-16T08:06:57.499Z",
            "title": "memo1",
            "__v": 0,
            "content": "memo1 conent"
        }
    ]
}
```

## <span id="labelDelete">Delete</span>
#### URL
- DELETE /labels/:id

#### Path variable

| Name | Description |
|--------|--------|
| ID | Id of label to remove |
#### Request Example
DELETE /labels/5afbe8622c7caff319d454df

#### Response
| Level1 | Level2 |
|--------|--------|
| _id |
| updatedAt |
| createdAt |
| title |
| __v |
| memos | _id |
|| updatedAt |
|| createdAt |
|| title |
|| content |
|| __v ||
### Response Example

```json
{
    "_id": "5afbee91141592fc9850ae38",
    "updatedAt": "2018-05-16T09:10:13.338Z",
    "createdAt": "2018-05-16T08:40:49.193Z",
    "title": "titleUpdated",
    "__v": 0,
    "memos": [
        {
            "_id": "5afbe6a12c7caff319d454d8",
            "updatedAt": "2018-05-16T08:07:47.688Z",
            "createdAt": "2018-05-16T08:06:57.499Z",
            "title": "memo1",
            "__v": 0,
            "content": "memo1 conent"
        }
    ]
}
```
## <span id="labelAddMemos">Add Memos</span>
#### URL
- POST /labels/:id/memos

#### Path variable

| Name | Description |
|--------|--------|
| ID | Id of label to add |
#### Parameters

| Level1 | Required | Default | Description |
|--------|--------|--------|--------|
| memoIds | X | - | array of memo ids |
#### Request Example
POST /labels/5afbee91141592fc9850ae38/memos

```json
{
	"memoIds": ["5afbe6a12c7caff319d454d8", "5afbe6a22c7caff319d454d9"]
}
```

#### Response
| Level1 | Level2 |
|--------|--------|
| _id |
| updatedAt |
| createdAt |
| title |
| __v |
| memos | _id |
|| updatedAt |
|| createdAt |
|| title |
|| content |
|| __v ||
### Response Example
```json
{
    "_id": "5afbee91141592fc9850ae38",
    "updatedAt": "2018-05-16T08:44:56.916Z",
    "createdAt": "2018-05-16T08:40:49.193Z",
    "title": "titleUpdated",
    "__v": 0,
    "memos": [
        {
            "_id": "5afbe6a12c7caff319d454d8",
            "updatedAt": "2018-05-16T08:07:47.688Z",
            "createdAt": "2018-05-16T08:06:57.499Z",
            "title": "memo1",
            "__v": 0,
            "content": "memo1 content"
        },
        {
            "_id": "5afbe6a22c7caff319d454d9",
            "updatedAt": "2018-05-16T08:07:55.700Z",
            "createdAt": "2018-05-16T08:06:58.040Z",
            "title": "memo2",
            "__v": 0,
            "content": "memo3 content"
        }
    ]
}
```

## <span id="labelRemoveMemos">Remove Memos</span>
#### URL
- DELETE /labels/:id/memos

#### Path variable

| Name | Description |
|--------|--------|
| ID | Id of label to remove |
#### Parameters

| Level1 | Required | Default | Description |
|--------|--------|--------|--------|
| memoIds | X | - | array of memo ids |
#### Request Example
DELETE /labels/5afbee91141592fc9850ae38/memos

```json
{
	"memoIds": ["5afbe6a12c7caff319d454d8"]
}
```

#### Response
| Level1 | Level2 |
|--------|--------|
| _id |
| updatedAt |
| createdAt |
| title |
| __v |
| memos | _id |
|| updatedAt |
|| createdAt |
|| title |
|| content |
|| __v ||
### Response Example
```json
{
    "_id": "5afbee91141592fc9850ae38",
    "updatedAt": "2018-05-16T08:53:19.084Z",
    "createdAt": "2018-05-16T08:40:49.193Z",
    "title": "titleUpdated",
    "__v": 0,
    "memos": [
        {
            "_id": "5afbe6a12c7caff319d454d8",
            "updatedAt": "2018-05-16T08:07:47.688Z",
            "createdAt": "2018-05-16T08:06:57.499Z",
            "title": "memo1",
            "__v": 0,
            "content": "memo1 content"
        }
    ]
}
```
