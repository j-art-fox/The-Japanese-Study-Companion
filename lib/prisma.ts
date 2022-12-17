// Before you can access your database from Next.js using Prisma, you first need to install Prisma Client in your app. You can install it via npm as follows:
// $npm install @prisma/client
// Because Prisma Client is tailored to your own schema, you need to update it every time your Prisma schema file is changing by running the following command:
// $npx prisma generate
// Regenerate your Prisma Schema.
// You'll use a single PrismaClient instance that you can import into any file where it's needed. The instance will be created in a prisma.ts file inside the lib/ directory. Go ahead and create the missing directory and file:
// $mkdir lib && touch lib/prisma.ts
// Create a new folder for the Prisma library.
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
