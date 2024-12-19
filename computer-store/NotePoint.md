** npm install next-auth@beta
** npm install @auth/pg-adapter
** npm install @hookform/resolvers
** npm install pg
** npm install nodemailer
** npm install react-hook react-hook-form
** npm install react-icons
** npm install jsonwebtoken
** npm install --save-dev @types/jsonwebtoken
** npm install --save-dev sass
** npm install --save-dev @types/nodemailer
** npm install --save-dev @types/pg
**=============** 

http://localhost:5050/browser/ [pgAdmin]

https://cloud.mongodb.com/v2/66c4a72f97e65c259e8366d3#/overview [SignIn with Google mengchheangneang18@gmail.com]

https://resend.com/emails [SignIn With GitHub]

https://app.xata.io/workspaces/NMengchheang-s-workspace-b3dbvh [SignIn with GitHub]

**=============**

Tutorial By
1. https://www.youtube.com/watch?v=OTgGpovffNY
2. https://www.youtube.com/watch?v=TLGFTH4s_0Y&t=3483s

**=============** 

inside postgres.ts*
we'll define a postgres pool object which will basically initialize a connection with our postgress database and sets it up so that we can handle SQL queries so our first import pool from PG.

adapter which just means what database adapter to use and for us we're going to set this to postgress adapter

secret is just for encrypting the cookies and JWT tokens