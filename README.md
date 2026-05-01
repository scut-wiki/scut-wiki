# 华工手册 / SCUT Wiki

华工手册是一个开放、开源、互助、共享的华南理工大学信息聚合项目，希望为华工学生、教职工、留学生、毕业校友、家属以及校园服务相关人员提供信息聚合、经验整理和入口指引。本项目由华工学生于 2023 年 9 月发布，并于 2026 年 4 月正式启用第二版域名——<a href="https://scut.wiki">SCUT Wiki</a>。欢迎所有华工人（包括留学生和毕业校友）参与建设。


## 本地开发

需要 Node.js。当前项目使用 npm。

```bash
npm install
npm run docs:dev
```

构建和检查：

```bash
npm run check:frontmatter
npm run check:links
npm run format:check
npm run build
```

## 内容结构

- `docs/`：VitePress 文档站内容。
- `docs/legacy/original/`：历史 Markdown 资料归档。
- `docs/public/legacy/`：历史素材归档。
- `data/`：黄页、组织、友链、校区、常用入口等结构化数据。
- `scripts/`：frontmatter、链接和格式检查脚本。

页面 frontmatter 至少包含：

```yaml
title: 页面标题
category: freshman
campus: [wushan, university-town, gzic]
maintainers: [github-id-or-team]
last_verified: 2026-04-29
source:
  - title: 来源标题
    url: https://example.com
status: active
```

`status` 可使用：`active`、`needs_review`、`stale`、`archived`、`draft`。

## 如何贡献

请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。

你可以：

- 反馈过期信息。
- 补充官方来源。
- 新增校区、学院、组织、课程和服务入口。
- 整理学习、生活、交通、飞跃、新生和信息素养经验。
- 帮忙检查链接、格式和构建。

如果不熟悉 GitHub，也可以发邮件到：scut.wiki@outlook.com。

## 如何反馈过期信息

请优先创建 Issue，并尽量写清：

- 哪个页面或哪条数据过期。
- 原内容是什么。
- 新内容是什么。
- 来源链接或截图。
- 适用校区、学院、年级或身份。

## 引用与转载

- 本项目代码采用 MIT License。
- 本项目正文内容除非另有说明，采用 CC BY-SA 4.0。
- 引用本站内容时请保留来源链接、作者/贡献者信息和相同协议。
- 引用内容、外部链接、图片、课件、试卷等资料的权利归原作者或原机构所有。

## For International Students

scut.wiki (华工手册 in Chinese) is an open-soucre project aggregates the information in South China University of Technology(SCUT).

This project is initiated by students in SCUT, and welcomes all SCUTers to participate in the construction.

Due to the time and ability limits, we didn't present this manual in other languages. Please use the translation tools to translate the manual if necessary. If there is any question, please feel free to send email to scut.wiki@outlook.com.

## 致谢

本项目受启发于以下网址或项目：

- [南科手册](https://sustech.online/)
- [上海交通大学生存手册](https://survivesjtu.gitbook.io/survivesjtumanual)
- [CS 自学指南](https://csdiy.wiki/)
- [机器人工程师培养计划 - YY硕 - 知乎](https://zhuanlan.zhihu.com/p/22266788)

感谢华工手册历年来的所有内容提供者、开发维护者和参与者：

- 新版开发维护:
  [![GitHub contributors](https://img.shields.io/github/contributors/scut-wiki/scut-wiki.svg)](https://github.com/scut-wiki/scut/wiki)
  [https://github.com/scut-wiki/scut-wiki/graphs/contributors](https://github.com/scut-wiki/scut-wiki/graphs/contributors)

- 初版开发维护：
  [![GitHub contributors](https://img.shields.io/github/contributors/MengyangGao/gzic.online.svg)](https://github.com/MengyangGao/gzic.online)
  [https://github.com/MengyangGao/gzic.online/graphs/contributors](https://github.com/MengyangGao/gzic.online/graphs/contributors)

感谢 GZIC 小圈、SCUT 学生创新俱乐部、华南鲤咕、鲤工包打听、小灯神 GENIE、信息阁。

感谢许多帮助过校园信息流通的组织和个人。
