## 사용법

chat GPT 회원가입 후 API 토큰 발급

환경부스에 해당 키를 담는다.

postgres 데이터베이스 서버를 구동한 후 DATABASE_URL로 연결할 수 있게 한다.

npx prisma migrate dev --schema=./src/assets/schema.prisma --name <Database Name> 명령어를 내려 마이그레이션을 진행한다.

## Image
Body 값
prompt: 이미지 생성에 사용할 프롬프트
n: 생성할 이미지 개수
size: 이미지 사이즈. 세가지 사이즈만 가능


## Audio
### Translate
Body 값
file: 번역할 파일
prompt: (optional) 번역에 사용할 프롬프트
response_format: 응답 형식 (json / text)