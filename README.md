### Figma Designs

<!-- [Figma Design](https://www.figma.com/file/TcW2XCgxHkH3PKxfcqJOb8/BloomKidz?type=design&node-id=237-175703&mode=design&t=RmNSLvLazyMS6gxf-0) -->

# Run Postgres docker container

```bash
docker run -d --name kidzBloom -p 5434:5432 -e POSTGRES_PASSWORD=postgres -e PGDATA=/var/lib/postgresql/data/pgdata -v <YOUR_LOCAL_PATH>:/var/lib/postgresql/data postgres:15.1
```

<b> <YOUR_LOCAL_PATH> ==> please replace this line to your local path where you want to mount postgres data. </b>

# Installation

```bash
  npm install
```

## Running the app

```bash
# development
$ npm run start:dev

# watch mode
$ npm run start:dev
```

# Create Migration

```
npx prisma migrate dev --name nameOfMigration
```

# Migrate

```
npm run migrate:up
```

# Seed Data in Database

```
npm run seed:db
```

# Reset Data from database

```
npm run migrate:reset

```
# Create a build

```
npm run build

```

# Command to generate JWT_SECRET_KEY

```
openssl rand -hex 32

```

# Creating Database backup from the docker container

<p>Open the folder in terminal where you want to save database backup (MacOs)</p>

```
docker exec -t kidzBloom pg_dumpall -c -U postgres > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql
```

# Restore database backup in docker database container

<p>Open the folder in terminal where you want to save database backup (MacOs)</p>

```
cat <DB_DUMP_FILE_PATH> | docker exec -i <CONTAINER_NAME> psql -U root

EXAMPLE:
cat /Users/Projects/ArgotDB_user.sql | docker exec -i development_db_1 psql -U root
```

## License

Nest is [MIT licensed](LICENSE).

## from start setup of project
## Initialize npm (if not already initialized):
```````````````````````````
npm init -y

````````````````````````````````

## Install Prisma and TypeScript-related packages:

````````````````````````````````````````````````
npm install prisma --save-dev
npm install @prisma/client
npm install typescript ts-node @types/node --save-dev

```````````````````````````````````````````

## Create Prisma Configuration:
````````````````````````````````
npx prisma init

``````````````````````````

## After creating tables in prisma
## Generate Migration:

npx prisma migrate dev --name init

## Generate Prisma Client:

npx prisma generate