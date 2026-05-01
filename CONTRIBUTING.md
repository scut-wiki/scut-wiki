# 贡献指南

感谢你愿意参与华工手册 / SCUT Wiki。

## 贡献方式

- GitHub Issue：反馈过期信息、提出建议、补充线索。
- Pull Request：直接修改文档、数据、脚本或站点配置。
- 邮件：scut.wiki@outlook.com。

## 内容要求

请尽量做到：

- 标注来源，优先使用学校官网、学院官网、官方公众号、官方文件等一手来源。
- 区分事实、观点、个人经验和宣传内容。
- 写明适用范围：校区、学院、专业、年级、身份和时间。
- 对可能过期的信息使用 `status: needs_review` 或 `status: stale`。
- 不公开他人隐私、账号、群聊敏感内容或未经同意的个人信息。
- 不上传无授权的课件、教材扫描、试卷、付费资料或其他受限内容。

## Frontmatter

每个页面至少需要：

```yaml
---
title: 页面标题
category: study
campus: [wushan, university-town, gzic]
maintainers: [your-github-id]
last_verified: 2026-04-29
source:
  - title: 来源标题
    url: https://example.com
status: needs_review
---
```

## 本地检查

```bash
npm install
npm run check
```

如果只改内容，可以至少运行：

```bash
npm run check:frontmatter
npm run check:links
```

## Pull Request 建议

- 一个 PR 尽量只解决一个主题。
- 标题说明改了什么，例如 `docs: update gzic campus contacts`。
- 在 PR 描述中写明来源、核验日期和风险。
- 如果整理历史内容，请保留原始来源链接。

## 过期信息反馈模板

请提供：

- 页面链接或文件路径。
- 过期内容。
- 新内容。
- 来源链接。
- 适用范围。
- 是否愿意继续维护该条目。
