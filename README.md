# Rubick Pot 翻译插件

一个 Rubick UI 插件，用于调用 Pot 翻译软件的外部 API 进行翻译、OCR 等操作。

## 功能特性

- **文本翻译**：输入文本并发送到 Pot 进行翻译
- **划词翻译**：调用 Pot 的划词翻译功能
- **截图 OCR**：调用 Pot 的截图文字识别功能
- **截图翻译**：调用 Pot 的截图翻译功能
- **图片 OCR**：支持复制图片到 Rubick 并进行 OCR 识别

## 前提条件

1. 安装并运行 [Pot 翻译软件](https://github.com/pot-app/pot-desktop)
2. 确保 Pot 的外部 API 服务已启用（默认端口：60828）
3. 安装 Rubick 启动器

## 安装方法

1. 在插件目录中执行：
   ```bash
   npm link
   ```

2. 在 Rubick 中通过开发者菜单安装插件，输入插件名称：
   ```
   rubick-pot-plugin
   ```

3. 安装完成后，在 Rubick 搜索框中输入关键词即可使用。

## 使用方法

### 文本翻译
1. 在 Rubick 搜索框中输入 "翻译"、"pot" 或 "translate"
2. 选择插件后，在文本框中输入需要翻译的文本
3. 点击 "翻译" 按钮发送请求

### 划词翻译
1. 在 Rubick 搜索框中输入 "划词翻译" 或 "pot划词"
2. 选择插件后，插件会自动调用 Pot 的划词翻译功能

### 截图 OCR
1. 在 Rubick 搜索框中输入 "OCR"、"截图OCR" 或 "potOCR"
2. 选择插件后，插件会自动调用 Pot 的截图 OCR 功能
3. 按照 Pot 的提示选择需要识别的区域

### 截图翻译
1. 在 Rubick 搜索框中输入 "截图翻译" 或 "pot截图翻译"
2. 选择插件后，插件会自动调用 Pot 的截图翻译功能
3. 按照 Pot 的提示选择需要翻译的区域

### 图片 OCR
1. 在 Rubick 搜索框中输入 "图片OCR" 或 "pot图片OCR"
2. 选择插件后，复制图片到插件界面
3. 点击 "图片 OCR" 按钮进行识别

## 配置说明

- 默认使用 Pot 的默认端口 60828
- 如果您修改了 Pot 的端口设置，请在 `index.html` 中相应修改 `port` 变量

## 开源协议

本插件采用 MIT 开源协议。

```
MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 反馈与建议

如有问题或建议，欢迎提交 Issue 或 Pull Request。

## 致谢

- [Pot 翻译软件](https://github.com/pot-app/pot-desktop) - 提供强大的翻译和 OCR 功能
- [Rubick](https://github.com/rubickCenter/rubick) - 提供插件平台支持