# Hướng dẫn Push Code lên GitHub/GitLab

## 1. Kiểm tra trạng thái Git
```bash
git status
```

## 2. Thêm tất cả các thay đổi
```bash
# Thêm tất cả file mới và thay đổi
git add .

# Hoặc thêm từng file cụ thể
git add src/
git add angular.json
git add package.json
git add tsconfig.json
```

## 3. Commit các thay đổi
```bash
git commit -m "Migrate to Angular: Convert Express.js app to Angular framework"
```

## 4. Push lên Remote Repository

### Lần đầu tiên (nếu chưa có remote):
```bash
# Thêm remote repository
git remote add origin <URL_GITHUB_REPO>

# Push code lên
git push -u origin main
```

### Các lần sau:
```bash
# Pull code mới nhất (nếu có người khác đã push)
git pull origin main

# Push code của bạn
git push origin main
```

## 5. Nếu gặp conflict
```bash
# 1. Pull code mới nhất
git pull origin main

# 2. Giải quyết conflict trong các file
# 3. Sau khi giải quyết xong:
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

## Cấu trúc dự án Angular sau khi chuyển đổi:
```
├── src/
│   ├── app/              # Angular components, services, modules
│   │   ├── pages/        # Page components
│   │   ├── shared/       # Shared components (header, footer, cart)
│   │   └── services/     # Services (cart.service.ts)
│   ├── assets/           # Images và assets
│   ├── index.html        # Entry point
│   ├── main.ts          # Bootstrap file
│   └── styles.css       # Global styles
├── angular.json          # Angular configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies
└── .gitignore           # Git ignore rules
```

## Lưu ý:
- **KHÔNG push** các file: `node_modules/`, `.angular/`, `dist/`
- Các file này đã được thêm vào `.gitignore`
- Trước khi push, chạy `npm install` để cài dependencies

