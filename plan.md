# 华工手册 / SCUT Wiki 重构计划

## Objective

将当前 `scut-wiki/scut-wiki` 仓库初始化并重构为“华工手册 / SCUT Wiki”：一个开放、开源、互助、共享的华南理工大学信息聚合项目。新站以旧站“华工手册 / gzic.online”为历史来源，迁移其内容与素材，并面向长期维护建立结构化内容、贡献流程、自动检查和部署基础。

## User Value

- 将公众号、群聊、口口相传、学生组织、学院通知、旧网页和个人经验中的校园信息沉淀为公开、可搜索、可验证、可持续更新的公共知识库。
- 让本科生、研究生、留学生、教职工、后勤、家属、校友和未来的华工人都能在同一开放空间获取与贡献信息。
- 保留“华工手册”的历史语境，同时建立可长期维护的 SCUT Wiki 技术与内容结构。

## Constraints

- 主品牌中文名：华工手册；英文名：SCUT Wiki。
- 主仓库：`https://github.com/scut-wiki/scut-wiki`。
- 旧仓库：`https://github.com/MengyangGao/gzic.online`，作为 legacy/archive 来源保留。
- 旧站公开地址：`https://www.gzic.online`。
- 联系邮箱：`scut.wiki@outlook.com`。
- 内容迁移必须标注来源、致谢与历史说明。
- 技术栈优先采用 VitePress 或同等轻量静态文档站；内容主体使用 Markdown。
- 公共数据如黄页、组织、链接、校区资源、常用入口应尽量抽取为 YAML/JSON。
- 页面 frontmatter 至少支持 `title`、`category`、`campus`、`maintainers`、`last_verified`、`source`、`status`。
- 许可证采用代码 MIT、内容 CC BY-SA 4.0。
- GitHub Pages 先部署到 `https://scut-wiki.github.io/scut-wiki/`，后续再绑定 `scut.wiki`。
- 每次较大改动保持清晰 commit；不 push，不创建 PR，除非用户再次明确授权。

## Assumptions

- [ASSUMPTION] 第一版允许将旧站内容完整迁移为 Markdown，但旧信息可标记为 `needs_review`，不在本轮逐条核验所有电话、链接、组织状态。
- [ASSUMPTION] 第一版采用 VitePress + pnpm + TypeScript/Node 脚本。
- [ASSUMPTION] 搜索先使用 VitePress 本地搜索；后续可升级为 Pagefind 或 Algolia DocSearch。
- [ASSUMPTION] `.gitbook/assets` 与 `image` 素材迁移到 `docs/public/legacy/`，并在迁移说明中保留来源。
- [ASSUMPTION] 旧站页面文本会在尊重原意基础上做结构化整理；核心精神页保留关键表达并明确来源。

## Affected Files

- `README.md`
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `LICENSE`
- `package.json`
- `pnpm-lock.yaml`
- `docs/**`
- `data/**`
- `scripts/**`
- `.vitepress/**`
- `.github/ISSUE_TEMPLATE/**`
- `.github/pull_request_template.md`
- `.github/workflows/**`
- `plan.md`

## Steps

1. 核验当前仓库、旧仓库、旧站重点页面和参考项目结构。
2. 初始化 VitePress 工程、站点配置、导航、侧边栏、搜索与基础样式。
3. 迁移旧站核心页面和素材，建立 legacy-aware 内容目录。
4. 建立结构化数据目录，抽取黄页、组织、友链、常用入口、校区资源等公共数据。
5. 建立 README、贡献指南、行为准则、许可证、Issue/PR 模板。
6. 增加 frontmatter 检查、链接检查、格式检查脚本。
7. 增加 GitHub Actions 工作流，包括安装、检查、构建和 GitHub Pages 部署。
8. 运行格式检查、链接检查、构建验证。
9. 分阶段提交清晰 commit。

## 2026-04-29 信息架构调整

用户要求将目录收敛为单一顺序，不再分割“开始 / 校园信息 / 学习与成长 / 项目”。新的主侧边栏顺序为：首页、如何使用本 Wiki、参与贡献、立志篇、黄页、学习篇、生活篇、学生组织篇、飞跃手册、信息素养、关于。

- 课程攻略作为“学习篇”二级入口。
- 新生须知内容合并进“如何使用本 Wiki”和“立志篇”，不再作为主侧边栏入口。
- 更新日志放在首页底部“最近更新”小章节，不再作为主侧边栏入口。
- 交通篇并入“生活篇”的交通小章节，不再作为主侧边栏入口。
- 学习篇和飞跃手册需要支持展开子页面。
- 普通页面需要直接吸收 `gzic.online` 原始内容，避免只留下空泛介绍。

## 2026-04-30 信息架构再调整

参考南科手册 `sustech.online` 的实现方式：主页优先提供常用入口、新生入口、飞跃入口、地图/服务入口、版权与支持信息；正文面向读者直接解决问题，维护规范、结构化数据和贡献格式集中到“参与共建”。

新的主侧边栏顺序：

1. 首页
2. 如何使用本 Wiki
3. 立志篇
4. 通讯录
5. 生活篇（合并学生组织）
6. 学习篇（只保留面向读者的学科/专业指南）
7. 飞跃手册
8. 信息素养
9. 参与共建
10. 关于

处理原则：

- 删除正文中的“结构化索引”“维护规则”“后续建议补齐字段”等建设者话术。
- 课程攻略的贡献规范移到“参与共建”，学习篇只保留学科、学院、专业与学习资源内容。
- 学生组织内容并入生活篇，`/organizations/` 仅作兼容入口。
- 飞跃手册采用 `/future/` 作为“华工飞跃手册”专区，不单独拆站；当前先从 `flying.gzic.online` 迁移所有文章，按保研直博、出国深造、考研、就业、体制内分类。

## 2026-04-30 首页与更新机制调整

目标：收敛首页首屏表达，减少重复入口按钮和功能卡片；最近更新改为按最近 commit message 自动生成；导航中“立志篇”后移到“信息素养”前。

受影响文件：

- `docs/index.md`
- `docs/.vitepress/config.ts`
- `docs/.vitepress/theme/index.ts`
- `docs/.vitepress/theme/components/RecentUpdates.vue`
- `scripts/generate-recent-updates.mjs`
- `package.json`
- `.github/workflows/*.yml`
- `.gitignore`

步骤：

1. 删除首页 hero actions 和 feature cards。
2. 将首页 tagline 改为中英文一句话简介。
3. 将常用入口和侧边栏中的“立志篇”移动到“信息素养”前。
4. 增加构建前生成最近五条 commit message 的脚本和组件。
5. 调整 CI / Pages checkout 深度，保证构建环境能读取最近五条提交。

容易忽略的风险：

- GitHub Actions 默认浅克隆只能读到 1 条提交，必须设置 `fetch-depth: 0`。
- 构建时生成文件不应污染提交历史，需加入 `.gitignore`。
- 首页 Markdown 中使用 Vue 组件时，需要在 VitePress theme 中注册，否则构建可过但页面不显示。

## 2026-04-30 首页二轮微调与历史压缩

目标：继续压缩首页首屏视觉占用，使“华工手册 SCUT Wiki”保持同一行展示；放宽 tagline 宽度；将“常用入口”从三列表格改为单列链接列表；保留用户已暂存的正文改动；最终将 `Initial commit` 之后的全部变更压缩为单个迁移提交并强制推送。

受影响文件：

- `docs/index.md`
- `docs/.vitepress/theme/style.css`
- 用户已暂存的 `docs/guide/index.md`、`docs/life/index.md`
- `plan.md`

步骤：

1. 保留当前暂存区，不回退用户已暂存改动。
2. 首页“常用入口”改为单列链接列表。
3. 调整 VitePress home hero 样式，让标题同一行展示并扩大 tagline 可用宽度。
4. 运行格式、frontmatter、链接和构建检查。
5. 将所有变更 squash 到 `Initial commit` 之后的一个迁移提交。
6. 使用 `--force-with-lease` 推送，避免覆盖远端未知新提交。

容易忽略的风险：

- 标题强制同一行可能在窄屏溢出，需要移动端单独减小 hero 字号。
- 压缩历史前必须确认远端基线，避免把别人刚推送的新提交覆盖。
- 用户已暂存内容必须进入最终迁移提交，不能被后续 soft reset 或重新暂存流程遗漏。

## 2026-04-30 首页三轮微调

目标：首页“常用入口”同步完整导航项；将官方链接移动到右侧并命名为“官方站点”；标题行使用更稳定的 flex 布局，桌面端保持“华工手册 SCUT Wiki”同一行展示。

受影响文件：

- `docs/index.md`
- `docs/.vitepress/theme/style.css`
- `plan.md`

风险：

- 首页中使用 HTML 区块会绕过 Markdown 自动标题目录，需要手动保留锚点。
- 移动端仍需允许标题换行，避免窄屏横向滚动。

## 2026-04-30 Guide 与兼容路由清理

目标：把“华工手册是什么”移动到首页，并在右上角保留学校官网链接；删除首页“官方站点”栏；完善“如何使用本 Wiki”页面，使其包含新生入口、阅读方法、信息核验方法和官方入口；删除不再需要的旧兼容路由。

受影响文件：

- `docs/index.md`
- `docs/guide/index.md`
- `docs/.vitepress/theme/style.css`
- `docs/freshman/index.md`
- `docs/transport/index.md`
- `docs/organizations/index.md`
- `docs/study/courses/index.md`
- `plan.md`

依据：

- 华南理工大学官方概况页面：学校地处广州、直属教育部，校园分为五山校区、大学城校区和广州国际校区。
- 广州国际校区官方简介：广州国际校区是继五山校区和大学城校区之后建设的第三个校区。

风险：

- 删除兼容路由会使旧链接返回 404；当前站内没有链接依赖这些页面，后续如需要可改为 GitHub Pages 404 跳转或保留 redirects 方案。
- 首页标题强制同一行需要覆盖 VitePress 默认 `.name` / `.text` 块级样式。

## 2026-04-30 首页与全站导航视觉调整

目标：把学校官网放到全站导航右侧；首页改为和其他页面一致的侧边栏布局，移除“常用入口”重复区块；调整首页视觉，使华工手册与 SCUT Wiki 保持同一标题但不整段使用红色；删除页脚提示语，并给 SCUT Wiki contributors 添加链接。

用户价值：

- 首页导航位置更符合直觉，信息架构和其他页面一致。
- 避免首页同时出现侧边栏与常用入口造成重复。
- 页面视觉保留简洁、开源文档站气质，但减少默认主题的单调和大面积红色。

约束：

- 不 push，用户先本地预览。
- 保持 VitePress 轻量实现，不引入新的前端依赖。
- 不回退用户已有内容与已 amend 的迁移提交。

假设：

- [ASSUMPTION] “整个网页右上角”指 VitePress 顶部导航栏右侧，而不是正文内容区。
- [ASSUMPTION] 首页可以从 `layout: home` 切换为普通文档布局，以换取侧边栏一致性。

受影响文件：

- `docs/.vitepress/config.ts`
- `docs/.vitepress/theme/style.css`
- `docs/index.md`
- `plan.md`

步骤：

- 调整顶部导航，加入学校官网外链。
- 删除首页 `layout: home` 与常用入口区块，改用普通 Markdown / HTML 首屏。
- 调整 footer message/copyright。
- 增加首页专用轻量样式与全局色彩细节。
- 运行格式、链接检查、构建，并用浏览器确认首页侧边栏、导航与视觉。
- amend 当前迁移提交，不 push。

验证：

- `npm run format`
- `npm run check`
- 浏览器检查首页：侧边栏存在，顶部“学校官网”存在，常用入口不存在，页脚提示语不存在，contributors 链接存在。

三个容易忽略的风险：

- VitePress 首页切换为普通文档布局后，首页在移动端的标题间距可能需要单独调。
- Footer HTML 链接取决于 VitePress 是否按 HTML 渲染，需要浏览器验证。
- 顶部导航项增多可能在窄屏提前折叠，需要保持文字短。

回滚说明：

- 可恢复 `docs/index.md` 的 `layout: home` 和原 hero frontmatter，再移除新增首页样式与导航项。

## 2026-04-30 学习篇拆分与首页收敛

目标：删除首页额外口号段；把“学校官网”放回顶部导航序列中，位于“关于”之后；将学习篇里的学院与专业经验拆成多个子页面，并把经验性质说明放到学习篇首页。

用户价值：

- 首页更简洁，避免重复表达。
- 学习篇可以按学院直接进入具体内容，后续也更容易继续扩展。
- 顶部导航顺序更符合用户指定的位置。

约束：

- 不 push，继续本地预览。
- 保留原有迁移内容，不删具体学院经验，只调整目录结构。
- 不引入新依赖。

假设：

- [ASSUMPTION] 学院子页面先按现有内容拆分为未来技术学院、吴贤铭智能工程学院、生物医学工程学院、前沿软物质学院、微电子和集成电路学院。
- [ASSUMPTION] 学习篇首页保留“学院与专业经验”总入口，并提示内容性质与核验方式。

受影响文件：

- `docs/index.md`
- `docs/study/index.md`
- `docs/study/colleges/index.md`
- `docs/study/colleges/*.md`
- `docs/.vitepress/config.ts`
- `docs/.vitepress/theme/index.ts`
- `docs/.vitepress/theme/style.css`
- `plan.md`

步骤：

- 删除首页 `wiki-home-note` 内容与样式。
- 移除 Layout 插槽里的学校官网链接，改为 nav 中“关于”之后的外链。
- 将学院内容拆成独立 Markdown 子页面，并更新 sidebar。
- 在学习篇首页补充学院经验说明与入口列表。
- 运行格式、链接检查、构建，并用浏览器检查首页和学习篇。
- amend 当前迁移提交，不 push。

验证：

- `npm run format`
- `npm run check`
- 浏览器检查首页和学习篇导航。

三个容易忽略的风险：

- 拆分页面后侧边栏层级过深，窄屏导航可读性下降。
- 原有 `/study/colleges/` 链接需要继续可用，不能直接变成 404。
- nav 外链在窄屏可能折叠菜单里显示，但桌面布局应位于“关于”之后。

回滚说明：

- 可将各学院内容合并回 `docs/study/colleges/index.md`，并移除 sidebar 子项。

## 2026-04-30 目录层级与首页细节

目标：删除首页残余分割线；将首页英文标题强调色从绿色改为接近华南理工大学官方视觉中蓝色主调的颜色；收窄左侧目录宽度；调整学习篇说明；将学习篇和飞跃手册的三级页面加入 sidebar，但默认折叠。

用户价值：

- 首页视觉更干净，标题颜色更贴近华工识别。
- 左侧目录减少留白，正文区域更舒展。
- 飞跃手册投稿文章可从目录直接发现，长列表默认折叠避免干扰阅读。

约束：

- 不 push，继续本地预览。
- 不删除现有投稿内容，只补充导航入口。
- 三级目录默认折叠。

假设：

- [ASSUMPTION] 未找到公开、可直接引用的华南理工大学标准色十六进制值；先采用接近学校官网与校徽视觉主调的蓝色 `#2f80c0`，后续如取得正式 VI 手册可替换。
- [ASSUMPTION] “左边目录太宽”优先通过 VitePress 的 `--vp-sidebar-width` 收窄，不重写主题布局。

受影响文件：

- `docs/.vitepress/config.ts`
- `docs/.vitepress/theme/style.css`
- `docs/index.md`
- `docs/study/index.md`
- `plan.md`

步骤：

- 移除首页 hero 下边框和装饰色条。
- 新增 `--wiki-c-scut-blue` 并替换首页英文标题强调色。
- 设置 `--vp-sidebar-width` 为更窄宽度。
- 修改学习篇经验说明。
- 将学习篇学院子页面、飞跃手册各分类投稿加入 sidebar 的三级折叠菜单。
- 运行格式、链接检查、构建，并用浏览器检查首页、学习篇、飞跃手册。
- amend 当前迁移提交，不 push。

验证：

- `npm run format`
- `npm run check`
- 浏览器检查首页无残余分割线、学习篇说明、飞跃手册目录。

三个容易忽略的风险：

- 飞跃手册投稿标题较长，侧边栏过窄可能换行较多。
- cleanUrls 下 sidebar 链接可以不带尾部 `/`，但站内链接检查仍需覆盖。
- 首页装饰线移除后首屏可能显得过空，需要保留合理间距。

回滚说明：

- 可恢复 `--vp-sidebar-width` 默认值，移除飞跃手册三级 items，并恢复首页 hero 装饰线。

## 2026-04-30 页面宽度与菜单折叠调整

目标：让“学校官网”与其他顶部导航项高度一致；收窄左侧目录并扩大正文可用宽度；二级菜单默认收起；增强二级和三级 sidebar 缩进。

用户价值：

- 顶部导航不再有突兀按钮感。
- 宽屏上正文区域更充分利用空间。
- 侧边栏层级更清晰，默认状态更轻。

约束：

- 保留用户已改的首页英文彩色渐变，不回退为纯蓝。
- 不 push，继续本地预览。
- 不引入新依赖。

假设：

- [ASSUMPTION] “二级菜单默认收起”指学习篇、飞跃手册等带子项的侧边栏分组默认折叠；当前页面所属分组仍可能由 VitePress 自动展开以显示 active 路径。
- [ASSUMPTION] 右侧“业内目录”指页面 outline/本页目录。

受影响文件：

- `docs/.vitepress/config.ts`
- `docs/.vitepress/theme/style.css`
- `plan.md`

步骤：

- 移除学校官网 nav 的 pill 样式，保留普通链接 hover。
- 将 `--vp-sidebar-width` 进一步收窄，并调整 `--vp-layout-max-width`、doc content/aside 宽度。
- 将学习篇、飞跃手册二级分组设置为默认折叠。
- 给 sidebar level-1/level-2 设置更明确缩进。
- 运行格式、链接检查、构建，并用浏览器检查首页布局。
- amend 当前迁移提交，不 push。

验证：

- `npm run format`
- `npm run check`
- 浏览器检查首页导航和侧边栏布局。

三个容易忽略的风险：

- VitePress 内部 class 名调整可能影响自定义宽度覆盖。
- 当前 active 页面所属目录可能仍自动展开，这是预期导航行为。
- 侧边栏过窄时长标题换行增多，需要在 220-240px 间取平衡。

回滚说明：

- 删除新增 layout/sidebar 覆盖 CSS，并恢复 sidebar 分组 `collapsed: false`。

## 2026-04-30 最终 UI 对齐与发布

目标：修复顶部导航左上角交错、右上角 GitHub 图标贴边、侧边栏可折叠一级菜单与普通一级目录不对齐的问题；完成最终检查后 amend 并推送。

用户价值：

- 顶部导航和侧边栏视觉对齐，避免像布局错位。
- 宽屏右侧保留安全边距。
- 一级目录层级一致，二级/三级层级通过缩进表达。

约束：

- 保留已确认的页面内容与彩色标题渐变。
- amend 当前迁移提交，最终仍保持两条提交。
- 用户已要求 push，本轮完成后推送远端。

假设：

- [ASSUMPTION] 顶部交错来自覆盖 `.VPNavBar.has-sidebar .content`，应只调整正文区域而不改导航内部布局。
- [ASSUMPTION] 远端仍是旧迁移提交，本地 amend 后需要 `--force-with-lease` 才能保持两条提交。

受影响文件：

- `docs/.vitepress/theme/style.css`
- `plan.md`

步骤：

- 移除对 `VPNavBar` content 的 padding/max-width 覆盖，只保留正文区域扩宽。
- 给导航右侧内容区补 padding，避免 GitHub 图标贴边。
- 调整 `.VPSidebarItem.level-0.collapsible` 缩进，使学习篇/飞跃手册与普通一级目录对齐。
- 运行格式、链接检查、构建和浏览器检查。
- amend 当前迁移提交，并 force-with-lease 推送。

验证：

- `npm run format`
- `npm run check`
- 浏览器 DOM/截图检查关键区域无明显交错。

三个容易忽略的风险：

- VitePress 侧边栏在当前 active 分组可能自动展开，与默认折叠配置不同。
- 窄屏时顶部 nav 折叠，不能只依赖当前窗口判断桌面导航。
- force push 前本地必须保持 clean，避免漏提交用户修改。

回滚说明：

- 如推送后视觉不满意，可再 amend 修正并 force-with-lease 推送；如需撤销本轮 CSS，恢复上一提交对应的样式覆盖即可。

## 2026-05-01 导航精简与首页合并

目标：统一左侧一级菜单字体和格式；顶部右侧只保留日夜切换、GitHub 和学校官网；移动端把目录抽屉入口放在左侧，隐藏右侧抽屉；将“如何使用本 Wiki”内容精简合并到首页，不再单独开页。

用户价值：

- 顶部导航更简洁，不重复展示正文目录。
- 移动端第一屏操作更明确：左侧打开目录，右侧是常用站点操作。
- 首页承载使用说明、新生入口、常用入口和信息核验方法，减少一次点击。

约束：

- 保持当前 VitePress 技术栈和现有内容结构。
- 保留用户已确认的彩色标题渐变。
- 本轮不 push，除非用户再明确要求。

假设：

- [ASSUMPTION] “右上角只保留”指顶栏右侧移除搜索和普通 nav 文本，只保留主题切换、GitHub、学校官网。
- [ASSUMPTION] “左侧的华工手册请在左侧加一个三横杠”指移动端顶栏左侧显示侧边栏菜单按钮，logo 和站名紧随其后。

受影响文件：

- `docs/.vitepress/config.ts`
- `docs/.vitepress/theme/index.ts`
- `docs/.vitepress/theme/style.css`
- `docs/index.md`
- `docs/guide/index.md`
- `plan.md`

步骤：

- 移除 `nav` 中重复页面入口，只保留学校官网由主题插槽渲染。
- 删除 `sidebar` 中“如何使用本 Wiki”入口。
- 将 guide 内容压缩合并进首页。
- 删除独立 guide 页面，确保站内无 `/guide/` 链接。
- 用 CSS 统一 sidebar 一级字体、缩进和可折叠项格式。
- 用 CSS/slot 调整桌面和移动端顶栏：隐藏搜索和右侧 hamburger，移动端把本地目录按钮固定到左侧。
- 运行格式、链接检查、构建和浏览器验证。

验证：

- `npm run format`
- `npm run check`
- 浏览器检查首页、侧边栏、移动端顶栏。

三个容易忽略的风险：

- VitePress 的移动端侧边栏按钮默认在本地导航行，需要定位到顶栏时避免遮挡 logo。
- 删除 `/guide/` 后外部旧链接会 404；当前站内没有引用。
- 顶栏隐藏搜索后仍应保留本地搜索能力的未来入口，可后续另设搜索页面或快捷方式。

回滚说明：

- 恢复 `docs/guide/index.md`，把 sidebar/nav 中 guide 入口加回，并移除移动端顶栏覆盖 CSS。

## 2026-05-01 底部信息与移动端导航修正

目标：修复移动端左侧目录按钮可点击但图标不可见的问题；移除右上角学校官网；统一首页正文宽度变量；把页面底部改为更接近南科手册的“共同完善 + 上次更新 + 贡献者”形式。

用户价值：

- 移动端目录入口可见、可点、语义清晰。
- 顶部右侧减少干扰，只保留日夜切换和 GitHub。
- 首页和正文宽度从一个变量控制，后续调整不需要多处同步。
- 页面底部更鼓励共建，并能显示页面维护者。

约束：

- 保留用户已经修改过的首页正文内容，不回退。
- 不引入额外运行时服务；贡献者优先读取 frontmatter `maintainers`。
- 本轮不推送，除非用户明确要求。

假设：

- [ASSUMPTION] “本页 contributor”可以先用 `maintainers` 字段作为页面贡献者/维护者展示，未来再扩展为 Git 历史贡献者统计。
- [ASSUMPTION] 首页底部已有版权行可以移除，避免和新的页面 footer 重复。

受影响文件：

- `docs/.vitepress/config.ts`
- `docs/.vitepress/theme/index.ts`
- `docs/.vitepress/theme/style.css`
- `docs/.vitepress/theme/components/PageContributors.vue`
- `docs/index.md`
- `plan.md`

步骤：

- 删除学校官网顶栏插槽和对应样式。
- 新增 `PageContributors` 组件，从 `frontmatter.maintainers` 渲染贡献者。
- 修改 edit link 与 last updated 文案。
- 用 CSS 调整 `VPDocFooter` 布局，让贡献者出现在上次更新下一行。
- 用 `--wiki-content-width` 统一首页说明和正文内容最大宽度。
- 用 CSS 自绘移动端三横杠菜单图标。

验证：

- `npm run format`
- `npm run check`
- 本地 dev server 访问首页和窄屏页面。

三个容易忽略的风险：

- `doc-footer-before` 插槽位于默认 edit info 之前，需要用 CSS 定位避免贡献者挤占顶部空间。
- 自绘三横杠不能遮挡原按钮点击区域，也不能影响屏幕阅读器语义。
- 删除顶部学校官网后，首页正文里的官方入口仍应保留，避免完全失去官方链接入口。

回滚说明：

- 删除 `PageContributors.vue`，恢复 `theme/index.ts` 的默认 Layout；把 config 文案和 footer 设置恢复到上一版。

## 2026-05-01 CI 排查与底部品牌色修正

目标：排查 GitHub Actions 最近失败原因；将底部“一起完善这本手册！”改为华工手册主题红；右下角贡献者统一显示为带链接的 `© 2026 SCUT Wiki contributors`；保留用户对首页和宽度的最新调整。

用户价值：

- CI 失败原因清晰，后续 push 后检查应恢复绿色。
- 底部视觉与华工手册品牌一致，不再沿用南科手册的绿色。
- 贡献者信息统一、可点击，指向 GitHub contributors 页面。

约束：

- 不回退用户已修改的首页内容和 `--wiki-content-width`。
- 保持本地最终历史只有 `Initial commit` 和迁移提交。
- 用户已授权本轮解决后上传；推送使用 `--force-with-lease`，避免覆盖远端意外新提交。

假设：

- [ASSUMPTION] “contributors 页面”指 GitHub 仓库 contributors graph：`https://github.com/scut-wiki/scut-wiki/graphs/contributors`。

受影响文件：

- `docs/.vitepress/theme/components/PageContributors.vue`
- `docs/.vitepress/theme/style.css`
- `plan.md`

步骤：

- 查看最近 CI 日志，确认失败点。
- 将 footer edit link 颜色改为 `--vp-c-brand-*`。
- 将 PageContributors 组件改为固定版权贡献者链接。
- 运行格式、完整检查。
- amend 到迁移提交，并 force-with-lease 推送。

验证：

- `gh run view ... --log-failed`
- `npm run format`
- `npm run check`
- `git log --oneline --graph --all`

三个容易忽略的风险：

- Pages workflow 成功不代表 CI 成功，因为 CI 多了格式检查。
- 如果远端在本轮操作期间被别人更新，`--force-with-lease` 应拒绝覆盖。
- 固定贡献者文案会弱化每页 `maintainers` 的展示，后续如需维护者名单可另开页面元信息区。

回滚说明：

- 恢复 `PageContributors.vue` 为读取 `maintainers`，并把 edit link 颜色恢复为绿色。

## Validation

- `pnpm install`
- `pnpm run check:frontmatter`
- `pnpm run check:links`
- `pnpm run format:check`
- `pnpm run build`
- `git status --short`
- 视情况本地启动 `pnpm run docs:dev` 做页面浏览检查。

## Risks

- 旧站链接和电话等信息可能已过期，第一版需用 `needs_review` 和 `last_verified` 显式标注，避免制造“已核验”的错觉。
- GitBook 旧素材可能包含相对路径、大小写路径或未被页面引用的文件，迁移时需要保留原始目录索引，避免静默丢失历史素材。
- 旧站精神表达需要保留，但长段原文直接搬迁会降低新站可维护性；需要在“历史来源”和“新站使命”之间保持清晰边界。
- GitHub Pages base path 必须设置为 `/scut-wiki/`，否则资源在组织仓库页面可能加载失败。
- 中英文品牌大小写需统一：中文“华工手册”，英文“SCUT Wiki”，仓库名 `scut-wiki`。

## Rollback Notes

- 每个阶段通过独立 commit 保存。
- 如 VitePress 初始化方案不合适，可回退工程初始化 commit，仅保留迁移出来的 Markdown 和结构化数据。
- 如某批旧内容迁移质量不达标，可回退对应内容迁移 commit，保留工具链和站点框架。
