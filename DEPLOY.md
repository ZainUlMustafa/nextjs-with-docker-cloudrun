## Step 1: Sumbit the container
gcloud builds submit --tag gcr.io/stradaimagingserver/newserver --project stradaimagingserver

## Step 2: Deploy the container
gcloud run deploy --image gcr.io/stradaimagingserver/newserver --project stradaimagingserver --platform managed

## Step 3: Run the container
https://newserver-dhsqvhgdeq-uc.a.run.app
