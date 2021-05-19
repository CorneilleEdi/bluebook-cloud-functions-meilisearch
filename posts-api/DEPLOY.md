
## Search

```bash
gcloud functions deploy postsApi \
--entry-point=postsApi \
--set-env-vars MEILISEARCH_ADDRESS=http://10.132.0.2 \
--runtime nodejs14 \
--trigger-http \
--region=europe-west1 \
--vpc-connector posts-handlers-connector \
--allow-unauthenticated
```
