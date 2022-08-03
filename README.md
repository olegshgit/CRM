# RITHOM CRM

## Build Setup

```bash
$ sudo chmod +x build.sh
```

### Building Docker image

```bash
$ ./build.sh
```

- After run the command above, you should have your image with name: `rithom-crm`

- We can see the image we just built built the command docker images:

```bash
$ docker images

REPOSITORY  TAG    IMAGE ID  CREATED        SIZE
rithom-crm  latest xxxxxx    2 minutes ago  83.2MB
```

```bash
Login GCP Account :
gcloud auth login
```

```bash
Deploy the app to GCP :
gcloud app deploy app.yaml --project <name>
```
