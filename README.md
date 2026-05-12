# 家庭药品管理 App

一款基于 Capacitor + Vite 构建的跨平台药品管理应用。

## 功能特点

- 药品库存管理
- 拍照识别药品
- 过期提醒
- 数据云同步

## 技术栈

- **前端**: Vite + JavaScript
- **移动端**: Capacitor
- **构建**: GitHub Actions

## 构建 APK

1. 访问 [GitHub Actions](https://github.com/tomkim413/medkit--app/actions)
2. 点击 `Build Android APK` workflow
3. 点击 `Run workflow`
4. 等待构建完成后下载 `medkit-app-debug.apk`

## 本地开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建 Web
npm run build

# 同步到 Android
npx cap sync android
```

## License

MIT
