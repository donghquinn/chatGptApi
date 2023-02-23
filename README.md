## 사용법

chat GPT 회원가입 후 API 토큰 발급

환경부스에 해당 키를 담는다.

postgres 데이터베이스 서버를 구동한 후 DATABASE_URL로 연결할 수 있게 한다.

npx prisma migrate dev --schema=./src/assets/schema.prisma --name <Database Name> 명령어를 내려 마이그레이션을 진행한다.