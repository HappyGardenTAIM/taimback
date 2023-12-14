*npm i

*docker-compose up -d

*create .env file and add
DATABASE_URL="postgresql://db_user:db_password@localhost:5432/mydb?schema=public"

*npx prisma migrate dev

*npx prisma db seed

*npm start