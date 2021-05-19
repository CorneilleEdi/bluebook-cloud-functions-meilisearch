
## Added

```bash
gcloud functions deploy postAddedHandler \
--entry-point=postAddedHandler \
--runtime nodejs14 \
--set-env-vars MEILISEARCH_ADDRESS=http://10.132.0.2 \
--trigger-event "providers/cloud.firestore/eventTypes/document.create" \
--trigger-resource "projects/bluebook-search/databases/(default)/documents/posts/{id}" \
--region=europe-west1 \
--vpc-connector posts-handlers-connector
```

## Updated

```bash
gcloud functions deploy postUpdatedHandler \
--entry-point=postUpdatedHandler \
--runtime nodejs14 \
--set-env-vars MEILISEARCH_ADDRESS=http://10.132.0.2 \
--trigger-event "providers/cloud.firestore/eventTypes/document.update" \
--trigger-resource "projects/bluebook-search/databases/(default)/documents/posts/{id}" \
--region=europe-west1 \
--vpc-connector posts-handlers-connector
```

## Deleted

```bash
gcloud functions deploy postDeletedHandler \
--entry-point=postDeletedHandler \
--runtime nodejs14 \
--set-env-vars MEILISEARCH_ADDRESS=http://10.132.0.2 \
--trigger-event "providers/cloud.firestore/eventTypes/document.delete" \
--trigger-resource "projects/bluebook-search/databases/(default)/documents/posts/{id}" \
--region=europe-west1 \
--vpc-connector posts-handlers-connector
```

## Written

```bash
gcloud functions deploy postWrittenHandler \
--entry-point=postWrittenHandler \
--runtime nodejs14 \
--set-env-vars MEILISEARCH_ADDRESS=http://10.132.0.2 \
--trigger-event "providers/cloud.firestore/eventTypes/document.write" \
--trigger-resource "projects/bluebook-search/databases/(default)/documents/posts/{id}" \
--region=europe-west1 \
--vpc-connector posts-handlers-connector
```