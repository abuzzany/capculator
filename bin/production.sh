 #!/bin/bash

npm run buid
aws s3 sync "dist" $S3_BUCKET_NAME --acl "public-read" --delete --exclude '.git/*'
