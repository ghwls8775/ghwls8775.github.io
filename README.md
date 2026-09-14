# Hojin Chu — Academic Website

그래프 이론·조합론 연구자 홈페이지입니다. `main` 브랜치에 변경 사항을 올리면 GitHub Actions가 정적 HTML을 만들고 GitHub Pages에 자동 배포합니다.

## 처음 한 번만 설정하기

### 1. GitHub 계정 만들기

1. [GitHub 가입 페이지](https://github.com/signup)에서 계정을 만듭니다.
2. 선택한 사용자 이름을 기억합니다. 아래의 `YOUR_USERNAME` 자리에 사용합니다.

### 2. 빈 저장소 만들기

1. GitHub 오른쪽 위 `+` → `New repository`를 누릅니다.
2. Repository name을 `YOUR_USERNAME.github.io`로 입력합니다.
3. `Public`을 선택합니다.
4. README, `.gitignore`, License 추가 옵션은 모두 선택하지 않습니다.
5. `Create repository`를 누릅니다.

### 3. 이 폴더를 GitHub에 올리기

터미널에서 이 프로젝트 폴더로 이동한 뒤 아래 명령을 한 줄씩 실행합니다. `YOUR_USERNAME`은 실제 GitHub 사용자 이름으로 바꿉니다.

```bash
git add .
git commit -m "Create Hojin Chu academic website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

로그인 창이 나타나면 방금 만든 GitHub 계정으로 로그인합니다.

### 4. GitHub Pages 켜기

1. 저장소에서 `Settings` → 왼쪽 `Pages`로 이동합니다.
2. `Build and deployment`의 `Source`를 `GitHub Actions`로 선택합니다.
3. 저장소의 `Actions` 탭에서 `Deploy website to GitHub Pages` 작업이 초록색 체크로 끝날 때까지 기다립니다.
4. 먼저 `https://YOUR_USERNAME.github.io`에서 홈페이지가 열리는지 확인합니다.

## hojinchu.com 도메인 연결하기

### 5. GitHub에 도메인 등록

1. 저장소 `Settings` → `Pages` → `Custom domain`에 `www.hojinchu.com`을 입력하고 저장합니다.
2. 그 다음에 도메인을 구입한 업체의 DNS 관리 화면으로 이동합니다.

### 6. DNS 레코드 바꾸기

기존 Google Sites를 향하는 `@` 또는 `www` 레코드와 충돌하지 않도록 정리한 뒤 아래 레코드를 추가합니다.

| 유형 | 이름/호스트 | 값 |
|---|---|---|
| CNAME | `www` | `YOUR_USERNAME.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

`https://`나 `/`는 값에 넣지 않습니다. DNS 반영은 즉시 끝날 수도 있지만 최대 24시간 정도 걸릴 수 있습니다.

### 7. HTTPS 켜기

도메인 연결이 완료되면 저장소 `Settings` → `Pages`에서 `Enforce HTTPS`를 선택합니다. 이후 `http://hojinchu.com` 접속도 안전한 `https://www.hojinchu.com` 주소로 연결됩니다.

## 나중에 내용 수정하기

주요 내용은 `app/page.tsx`, 디자인은 `app/globals.css`에 있습니다. 수정한 뒤 아래 세 줄만 실행하면 자동으로 다시 배포됩니다.

```bash
git add .
git commit -m "Update website"
git push
```

## 로컬에서 확인하기

Node.js와 pnpm이 설치된 환경에서 다음 명령을 실행합니다.

```bash
pnpm install
pnpm dev
```

브라우저에서 `http://localhost:3000`을 열면 됩니다.
