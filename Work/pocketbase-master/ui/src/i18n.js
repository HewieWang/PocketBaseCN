// PocketBase UI 国际化模块
// 以英文原文作为 key，中文为 value。找不到翻译时自动 fallback 到英文原文。

const STORAGE_KEY = "pbLocale";

// 支持的语言列表
export const locales = [
    { code: "en", label: "English" },
    { code: "zh", label: "中文" },
];

// 中文语言包（key 为英文原文）
const zhMessages = {
    // ── 通用 ──────────────────────────────────────────
    "Save": "保存",
    "Cancel": "取消",
    "Delete": "删除",
    "Edit": "编辑",
    "Create": "创建",
    "Add": "添加",
    "Confirm": "确认",
    "Back": "返回",
    "Next": "下一步",
    "Loading...": "加载中...",
    "Loading plugins...": "加载插件中...",
    "Search": "搜索",
    "Reset": "重置",
    "Export": "导出",
    "Import": "导入",
    "Refresh": "刷新",
    "Submit": "提交",
    "Yes": "是",
    "No": "否",
    "All": "全部",
    "None": "无",
    "Yes, delete": "确认删除",
    "No, cancel": "取消",

    // ── 顶部导航 / Header ─────────────────────────────
    "Settings": "设置",
    "Docs": "文档",
    "Manage superusers": "管理超级用户",
    "Logout": "退出登录",
    "Color scheme": "配色方案",
    "Light": "浅色",
    "Dark": "深色",
    "Auto": "自动",
    "Language": "语言",

    // ── 认证 / Auth ───────────────────────────────────
    "Superuser login": "超级用户登录",
    "Login": "登录",
    "Forgotten password": "忘记密码",
    "Send OTP": "发送一次性密码",
    "One-time password": "一次性密码",
    "Id": "ID",
    "Request another OTP": "重新请求一次性密码",
    "Check your {email} inbox and enter below the received One-time password (OTP).":
        "请查看您的 {email} 收件箱，并在下方输入收到的一次性密码（OTP）。",
    "Show password": "显示密码",
    "Hide password": "隐藏密码",
    "Invalid login credentials.": "登录凭证无效。",
    "Confirm password": "确认密码",
    "New password": "新密码",
    "Token": "令牌",

    // ── 集合 / Collections ────────────────────────────
    "New collection": "新建集合",
    "Collection": "集合",
    "Collections": "集合",
    "Collection type": "集合类型",
    "Name": "名称",
    "Type": "类型",
    "Required": "必填",
    "Actions": "操作",
    "Duplicate": "复制",
    "Add field": "添加字段",
    "No collections yet.": "暂无集合。",
    "No collections found.": "未找到集合。",
    "Search collections...": "搜索集合...",
    "Clear search": "清除搜索",
    "Clear": "清除",
    "Collections overview": "集合概览",
    "Pinned": "已置顶",
    "Others": "其他",
    "Pin": "置顶",
    "Unpin": "取消置顶",
    "Create your first collection to get started.": "创建你的第一个集合开始使用。",
    "Are you sure you want to delete this collection?": "确定要删除此集合吗？",
    "This action cannot be undone.": "此操作无法撤销。",
    "OAuth2 auth is enabled but the collection doesn't have any registered providers":
        "已启用 OAuth2 认证，但该集合没有注册任何提供商",
    "Successfully created collection \"{name}\".": "成功创建集合 \"{name}\"。",
    "Successfully updated collection \"{name}\".": "成功更新集合 \"{name}\"。",
    "Successfully deleted collection \"{name}\".": "已成功删除集合 \"{name}\"。",
    "Successfully truncated collection \"{name}\".": "已成功清空集合 \"{name}\"。",
    "Failed to save collection.": "保存集合失败。",
    "Create ": "新建 ",
    "Edit ": "编辑 ",
    " collection": "集合",
    "More options": "更多选项",
    "Collection copied to clipboard!": "集合已复制到剪贴板！",
    "Copy JSON": "复制 JSON",
    "Yes, discard": "确认放弃",
    " (system)": "（系统）",
    "e.g. posts": "例如 posts",
    "Type: ": "类型：",
    "N/A": "无",
    "Has errors": "有错误",
    "Field name*": "字段名*",
    "Search address...": "搜索地址...",
    "Collection settings": "集合设置",
    "Raw errors:": "原始错误：",
    "Save changes": "保存更改",
    "Save options": "保存选项",
    "Save and continue": "保存并继续",
    "Reset form": "重置表单",
    "Truncate": "清空",
    "Collection name": "集合名称",
    "Do you really want to delete all records of the collection?": "确定要删除该集合的所有记录吗？",
    "Type the collection name ": "输入集合名称 ",
    "Do you really want to delete the selected collection?": "确定要删除所选集合吗？",
    "Do you really want to delete the selected collection and all its records": "确定要删除所选集合及其所有记录吗",
    "You have unsaved changes. Do you really want to discard them?": "你有未保存的更改，确定要放弃吗？",
    // 集合类型
    "Base": "基础",
    "Auth": "认证",
    "View": "视图",
    // Tab 名称
    "Fields": "字段",
    "Rules": "规则",
    "Auth Options": "认证选项",
    "Indexes": "索引",
    "View query": "视图查询",

    // ── 字段类型 / Field types ────────────────────────
    "Plain text": "纯文本",
    "Number": "数字",
    "Bool": "布尔",
    "Email": "邮箱",
    "URL": "网址",
    "Datetime": "日期时间",
    "Autodate": "自动日期",
    "File": "文件",
    "Select": "选择",
    "Relation": "关联",
    "JSON": "JSON",
    "Rich editor": "富文本编辑器",
    "Geo Point": "地理坐标",
    "Password": "密码",

    // ── 字段 tab / Fields tab ─────────────────────────
    "Unique constraints and indexes (": "唯一约束和索引（",
    ")": "）",
    "Unique:": "唯一：",
    "New index": "新建索引",
    "New field": "新建字段",

    // ── 规则 tab / Rules tab ──────────────────────────
    "System collection rule cannot be changed.": "系统集合规则无法修改。",
    "All rules follow the ": "所有规则遵循 ",
    "PocketBase filter syntax and operators": "PocketBase 过滤语法和运算符",
    "Hide available fields": "隐藏可用字段",
    "Show available fields": "显示可用字段",
    "The following record fields are available:": "以下记录字段可用：",
    "The request fields could be accessed with the special ": "请求字段可通过特殊的 ",
    " fields:": " 字段访问：",
    "You could also add constraints and query other collections using the ": "你还可以使用 ",
    " field:": " 字段添加约束并查询其他集合：",
    "Example rule:": "规则示例：",
    "List/Search rule": "列表/搜索规则",
    "View rule": "查看规则",
    "Create rule": "创建规则",
    "The main record fields hold the values that are going to be inserted in the database.":
        "主记录字段保存将要插入数据库的值。",
    "Update rule": "更新规则",
    "The main record fields hold the old/existing record field values.\nTo target the newly submitted ones you can use @request.body.*.":
        "主记录字段保存旧的/现有的记录字段值。\n要定位新提交的值，可以使用 @request.body.*。",
    "Delete rule": "删除规则",
    "Additional auth collection rules": "额外的认证集合规则",
    "Authentication rule": "认证规则",
    "This rule is executed every time ": "此规则在每次 ",
    "before authentication": "认证之前",
    " allowing you to restrict who can authenticate.": " 执行，允许你限制谁可以认证。",
    "For example, to allow only verified users you can set it to ": "例如，要只允许已验证用户，可以设置为 ",
    "Leave it empty to allow anyone with an account to authenticate.": "留空以允许任何有账号的用户认证。",
    "To disable authentication entirely you can change it to \"Set superusers only\".":
        "要完全禁用认证，可以将其改为\"仅超级用户\"。",
    "Manage rule": "管理规则",
    "This rule is executed in addition to the ": "此规则在 ",
    "create": "创建",
    "update": "更新",
    " API rules.": " API 规则之外执行。",
    "It enables superuser-like permissions to allow fully managing the auth record(s), eg. changing the password without requiring to enter the old one, directly updating the verified state or email, etc.":
        "它启用类似超级用户的权限，允许完全管理认证记录，例如无需输入旧密码即可更改密码、直接更新验证状态或邮箱等。",

    // ── 规则字段组件 / ruleField ──────────────────────
    "Rule": "规则",
    "(Superusers only)": "（仅超级用户）",
    "Unlock and set custom rule": "解锁并设置自定义规则",
    "Set superusers only": "设为仅超级用户",
    "Leave empty to grant everyone access...": "留空以允许所有人访问...",

    // ── 认证选项 tab / Auth Options tab ───────────────
    "Auth methods": "认证方式",
    "Send email alert for new logins": "新登录时发送邮件提醒",
    "Mail templates": "邮件模板",
    "Send test email": "发送测试邮件",
    "Email template": "邮件模板",
    "Placeholders:": "占位符：",
    "Default Verification email template": "默认验证邮件模板",
    "Default Password reset email template": "默认密码重置邮件模板",
    "Default Confirm email change email template": "默认确认邮箱变更邮件模板",
    "Default OTP email template": "默认 OTP 邮件模板",
    "Default Login alert email template": "默认登录提醒邮件模板",

    // ── 记录 / Records ────────────────────────────────
    "New record": "新建记录",
    "Record": "记录",
    "record": "条记录",
    "records": "条记录",
    "No records yet.": "暂无记录。",
    "No records found.": "未找到记录。",
    "Load more": "加载更多",
    "Selected ": "已选择 ",
    "Toggle columns": "切换列",
    "Successfully deleted {count} {word}.": "已成功删除 {count} {word}。",
    "Do you really want to delete the selected records?": "确定要删除所选记录吗？",
    "Created": "创建时间",
    "Updated": "更新时间",
    "Save and create another": "保存并创建另一条",
    "Delete record": "删除记录",
    "Are you sure you want to delete this record?": "确定要删除此记录吗？",
    "Unlock to save": "解锁以保存",
    "The record has previous unsaved changes.": "该记录有之前未保存的更改。",
    "Restore draft": "恢复草稿",
    "Discard draft": "放弃草稿",
    "Close": "关闭",
    "Account": "账户",
    "Main": "主",
    "Auth providers": "认证提供商",
    "Has unsaved changes": "有未保存的更改",
    "Record copied to clipboard!": "记录已复制到剪贴板！",
    "Impersonate": "模拟登录",
    "Reset issued tokens": "重置已签发的令牌",
    "Reset all tokens": "重置所有令牌",
    "Do you really want to reset all issued tokens for the selected auth record?":
        "确定要重置所选认证记录的所有已签发令牌吗？",
    "Successfully reset all tokens for the selected record.": "已成功重置所选记录的所有令牌。",
    "Send password reset email": "发送密码重置邮件",
    "Send verification email": "发送验证邮件",
    "Send": "发送",
    "Make email public or private": "将邮箱设为公开或私有",
    "Public: ": "公开：",
    "On": "开",
    "Off": "关",
    "change password": "修改密码",
    "Generate and set random password": "生成并设置随机密码",
    "Generated and copied random password to clipboard.": "已生成随机密码并复制到剪贴板。",
    "No external auth providers found.": "未找到外部认证提供商。",
    "Unlink": "取消关联",
    "verify": "验证",
    "unverify": "取消验证",
    "Failed to save record.": "保存记录失败。",
    "Successfully created {collection} \"{id}\".": "已成功创建 {collection} \"{id}\"。",
    "Successfully updated {collection} \"{id}\".": "已成功更新 {collection} \"{id}\"。",
    "Successfully deleted record \"{id}\".": "已成功删除记录 \"{id}\"。",
    "Successfully sent password reset email to {email}.": "已成功向 {email} 发送密码重置邮件。",
    "Successfully sent verification email to {email}.": "已成功向 {email} 发送验证邮件。",
    "Successfully unlinked {name}.": "已成功取消关联 {name}。",
    "Do you really want to send password reset email to {email}?": "确定要向 {email} 发送密码重置邮件吗？",
    "Do you really want to send verification email to {email}?": "确定要向 {email} 发送验证邮件吗？",
    "Do you really want to unlink the {name} provider?": "确定要取消关联 {name} 提供商吗？",
    "Do you really want to manually change the verified account state from \"{from}\" to \"{to}\"?":
        "确定要手动将验证账户状态从 \"{from}\" 更改为 \"{to}\" 吗？",
    "ID: ": "ID：",
    " record": " 记录",
    "Do you really want to delete the selected record?": "确定要删除所选记录吗？",

    // ── 设置 / Settings ───────────────────────────────
    "Application": "应用",
    "Backups": "备份",
    "Mail": "邮件",
    "Mail settings": "邮件设置",
    "Storage": "存储",
    "Files storage": "文件存储",
    "Crons": "定时任务",
    "Import collections": "导入集合",
    "Export collections": "导出集合",
    "Sync": "同步",
    "System": "系统",
    "Debug": "调试",
    "SQL console": "SQL 控制台",
    "Application settings": "应用设置",
    "Application name": "应用名称",
    "Application URL": "应用 URL",
    "Accent": "主题色",
    "Invalid - color is too light": "无效 - 颜色太浅",
    "Hide/Lock collection and record controls": "隐藏/锁定集合和记录控件",
    "To prevent accidental changes when in production environment, collections create and update buttons will be hidden.\nRecords update will also require an extra unlock step before save.":
        "为防止在生产环境中意外更改，集合的创建和更新按钮将被隐藏。\n记录更新也需要额外的解锁步骤才能保存。",
    "Successfully saved application settings.": "已成功保存应用设置。",
    "The ONLY allowed superuser IPs will change to: ": "唯一允许的超级用户 IP 将更改为：",
    "Please make sure that your IP is in the list or you'll be locked.": "请确保您的 IP 在列表中，否则您将被锁定。",
    "In case of lockout, you can reset the setting with the ": "如果被锁定，您可以使用 ",
    " console command.": " 控制台命令重置设置。",
    "Yes, save changes": "确认保存更改",
    "Batch Web API": "批量 Web API",
    "Enabled": "已启用",
    "Disabled": "已禁用",
    "Enable": "启用",
    " (experimental)": "（实验性）",
    "Max requests in a batch": "单个批次最大请求数",
    "Rate limiting (if enabled) also applies for the batch create/update/upsert/delete requests.":
        "速率限制（如果启用）也适用于批量创建/更新/插入更新/删除请求。",
    "Max processing time (in seconds)": "最大处理时间（秒）",
    "Max body size (in bytes)": "最大请求体大小（字节）",
    "Default to 128MB": "默认为 128MB",
    "Superuser IPs": "超级用户 IP",
    "A comma separated list of superusers allowed IPs and subnets.": "以逗号分隔的超级用户允许 IP 和子网列表。",
    "Enabling this option greatly helps hardening the security of your application because even if someone manage to get their hands on a superuser auth token they will not be able to use it.":
        "启用此选项可极大地增强应用程序的安全性，因为即使有人获取了超级用户认证令牌，他们也无法使用它。",
    "In case your IP changes, you can always reset the field value with the ": "如果您的 IP 发生变化，您始终可以使用 ",
    "Superuser IPs and subnets": "超级用户 IP 和子网",
    "Leave empty for no restriction": "留空表示无限制",
    "Comma separated list of IPs and subnets such as: ": "以逗号分隔的 IP 和子网列表，例如：",
    " (you)": "（您）",
    "IP proxy headers": "IP 代理头",
    "Detected proxy header.\nIt is recommend to list it as trusted.": "检测到代理头。\n建议将其列为受信任。",
    "The configured proxy header doesn't match with the detected one.": "配置的代理头与检测到的不匹配。",
    "Below you should see your real IP. If not - configure the correct proxy header for your environment.":
        "下方应显示您的真实 IP。如果没有 - 请为您的环境配置正确的代理头。",
    "Resolved user IP:": "解析的用户 IP：",
    "Detected proxy header:": "检测到的代理头：",
    "When PocketBase is deployed on platforms like Fly or it is accessible through proxies such as NGINX, requests from different users will originate from the same IP address (the IP of the proxy connecting to your PocketBase app).":
        "当 PocketBase 部署在 Fly 等平台上或通过 NGINX 等代理访问时，来自不同用户的请求将源自同一 IP 地址（连接到 PocketBase 应用的代理 IP）。",
    "In this case to retrieve the actual user IP (used for rate limiting, logging, etc.) you need to properly configure your proxy and list below the trusted headers that PocketBase could use to extract the user IP.":
        "在这种情况下，要获取实际的用户 IP（用于速率限制、日志记录等），您需要正确配置代理，并在下方列出 PocketBase 可用于提取用户 IP 的受信任头。",
    "When using such proxy, to avoid spoofing it is recommended to:": "使用此类代理时，为避免欺骗，建议：",
    "use headers that are controlled only by the proxy and cannot be manually set by the users":
        "使用仅由代理控制且用户无法手动设置的头",
    "make sure that the PocketBase server can be accessed ONLY through the proxy":
        "确保 PocketBase 服务器只能通过代理访问",
    "You can clear the headers field if PocketBase is not deployed behind a proxy.":
        "如果 PocketBase 未部署在代理后面，您可以清空头字段。",
    "Trusted IP proxy headers": "受信任的 IP 代理头",
    "Leave empty to disable": "留空以禁用",
    "Comma separated list of headers such as: ": "以逗号分隔的头列表，例如：",
    "IP priority": "IP 优先级",
    "This is in case the proxy returns more than 1 IP as header value. The rightmost IP is usually considered to be the more trustworthy but this could vary depending on the proxy.":
        "这是当代理返回多个 IP 作为头值时的情况。最右侧的 IP 通常被认为更可信，但这可能因代理而异。",
    "Use leftmost IP": "使用最左侧 IP",
    "Use rightmost IP": "使用最右侧 IP",
    "Rate limiting": "速率限制",
    "Guest only": "仅访客",
    "Auth only": "仅认证用户",
    "Learn more about the rate limit rules": "了解更多速率限制规则",
    "Rate limit label": "速率限制标签",
    "Max requests": "最大请求数",
    "(per IP)": "（每 IP）",
    "Interval": "间隔",
    "(in seconds)": "（秒）",
    "Targeted users": "目标用户",
    "tag (users:create) or path (/api/)": "标签（users:create）或路径（/api/）",
    "Max requests*": "最大请求数*",
    "Interval*": "间隔*",
    "Remove rule": "删除规则",
    "Add rate limit rule": "添加速率限制规则",
    "Excluded IPs and subnets": "排除的 IP 和子网",
    "Comma separated list of IPs and CIDR subnets to exclude from the rate limiter.":
        "以逗号分隔的 IP 和 CIDR 子网列表，将从速率限制器中排除。",
    "Superusers are always excluded and they can send as many requests as they want.":
        "超级用户始终被排除，他们可以发送任意数量的请求。",

    // ── 邮件设置 / Mail settings ──────────────────────
    "Auto (StartTLS)": "自动（StartTLS）",
    "Always": "始终",
    "PLAIN (default)": "PLAIN（默认）",
    "LOGIN": "LOGIN",
    "Successfully saved mail settings.": "已成功保存邮件设置。",
    "Configure common settings for sending emails.": "配置发送邮件的常用设置。",
    "Sender name": "发件人名称",
    "Sender address": "发件人地址",
    "Use SMTP mail server ": "使用 SMTP 邮件服务器 ",
    "(recommended)": "（推荐）",
    "By default PocketBase uses the unix \"sendmail\" command for sending emails. For better emails deliverability it is recommended to use a SMTP mail server.":
        "默认情况下，PocketBase 使用 unix \"sendmail\" 命令发送邮件。为了提高邮件送达率，建议使用 SMTP 邮件服务器。",
    "SMTP server host": "SMTP 服务器主机",
    "Port": "端口",
    "Username": "用户名",
    "Hide more options": "隐藏更多选项",
    "Show more options": "显示更多选项",
    "TLS encryption": "TLS 加密",
    "AUTH method": "认证方法",
    "EHLO/HELO domain": "EHLO/HELO 域名",
    "Some SMTP servers, such as the Gmail SMTP-relay, requires a proper domain name in the inital EHLO/HELO exchange and will reject attempts to use localhost.":
        "某些 SMTP 服务器（如 Gmail SMTP-relay）在初始 EHLO/HELO 交换时需要正确的域名，并会拒绝使用 localhost 的尝试。",
    "Default to localhost": "默认为 localhost",
    "OTP": "一次性密码",
    "Login alert": "登录提醒",
    "Test email send timeout.": "测试邮件发送超时。",
    "Successfully sent test email.": "已成功发送测试邮件。",
    "Auth collection": "认证集合",
    "Loading auth collections...": "加载认证集合中...",
    "Select auth collection": "选择认证集合",
    "To email address": "收件邮箱地址",

    // ── 存储设置 / Storage settings ───────────────────
    "File storage": "文件存储",
    "By default PocketBase uses and recommends the local file system to store uploaded files because it is more performant, easier to manage and backup.":
        "默认情况下，PocketBase 使用并推荐使用本地文件系统来存储上传的文件，因为它性能更高、更易于管理和备份。",
    "Alternatively, if you have limited disk space available, you could opt to an S3 compatible external storage.":
        "或者，如果您的磁盘空间有限，可以选择兼容 S3 的外部存储。",
    "If you have existing uploaded files, you'll have to migrate them manually from the ":
        "如果您有已上传的文件，则必须将它们从 ",
    "S3 storage": "S3 存储",
    "local file system": "本地文件系统",
    " to the ": " 手动迁移到 ",
    "There are several command line tools that can help you, such as: ": "有几个命令行工具可以帮助您，例如：",
    "Successfully saved storage settings.": "已成功保存存储设置。",
    "Endpoint": "端点",
    "Bucket": "存储桶",
    "Region": "区域",
    "Access key": "访问密钥",
    "Secret": "密钥",
    "Force path-style addressing": "强制使用路径式寻址",
    "Forces the request to use path-style addressing, eg. \"https://s3.amazonaws.com/BUCKET/KEY\" instead of the default \"https://BUCKET.s3.amazonaws.com/KEY\".":
        "强制请求使用路径式寻址，例如 \"https://s3.amazonaws.com/BUCKET/KEY\"，而不是默认的 \"https://BUCKET.s3.amazonaws.com/KEY\"。",
    "Use S3 storage": "使用 S3 存储",

    // ── 备份 / Backups ────────────────────────────────
    "Backup and restore your PocketBase data": "备份和恢复您的 PocketBase 数据",
    "Do you really want to delete {key}?": "确定要删除 {key} 吗？",
    "Successfully deleted {key}.": "已成功删除 {key}。",
    "No backups found.": "未找到备份。",
    "Download": "下载",
    "Restore": "恢复",
    "Initialize new backup": "初始化新备份",
    "Backup/restore operation is in process": "备份/恢复操作正在进行中",
    "Every day at 00:00h": "每天 00:00",
    "Every sunday at 00:00h": "每周日 00:00",
    "Every Mon and Wed at 00:00h": "每周一和周三 00:00",
    "Every first day of the month at 00:00h": "每月第一天 00:00",
    "Successfully saved backups settings.": "已成功保存备份设置。",
    "Backup options": "备份选项",
    "Enable auto backups": "启用自动备份",
    "Cron expression": "Cron 表达式",
    "e.g. 0 0 * * *": "例如 0 0 * * *",
    "Presets": "预设",
    "Supports numeric list, steps, ranges or ": "支持数字列表、步长、范围或 ",
    "macros": "宏",
    "By default the timezone is in UTC.": "默认时区为 UTC。",
    "Max @auto backups to keep": "保留的最大自动备份数",
    "Store backups in S3 storage": "在 S3 存储中保存备份",
    "Successfully generated new backup.": "已成功生成新备份。",
    "The backup was started but may take a while to complete. You can come back later.":
        "备份已启动，但可能需要一段时间才能完成。您可以稍后再回来。",
    "Please note that during the backup the performance could be slightly degraded and some queries may take longer to complete than usual.":
        "请注意，在备份期间，性能可能会略有下降，某些查询可能比平时需要更长的时间才能完成。",
    "If you are using S3 storage for the collections file upload, you'll have to backup them separately since they are not locally stored and they will not be included in the generated backup!":
        "如果您使用 S3 存储来上传集合文件，则必须单独备份它们，因为它们不是本地存储的，不会包含在生成的备份中！",
    "Backup name": "备份名称",
    "Leave empty to autogenerate": "留空以自动生成",
    "Must be in the format [a-z0-9_-].zip": "格式必须为 [a-z0-9_-].zip",
    "Start backup": "开始备份",
    "Restore ": "恢复 ",
    "Please proceed with extreme caution and use it only with trusted backups!":
        "请极其谨慎地操作，仅在您信任备份时使用！",
    "Backup restore currently works only on UNIX based systems.": "备份恢复目前仅在基于 UNIX 的系统上可用。",
    "The restore operation will attempt to replace your existing ": "恢复操作将尝试将您现有的 ",
    " with the one from the backup and will restart the application process.":
        " 替换为备份中的内容，并将重启应用程序进程。",
    "This means that on success all of your data (including app settings, users, superusers, etc.) will be replaced with the ones from the backup.":
        "这意味着成功后，您的所有数据（包括应用设置、用户、超级用户等）都将被替换为备份中的数据。",
    "The operation will be reverted if the backup is invalid (ex. missing ": "如果备份无效（例如缺少 ",
    " file).": " 文件），操作将被回退。",
    "Below is an oversimplified version of the restore flow:": "以下是恢复流程的简化版本：",
    "Replaces the current ": "替换当前的 ",
    " with the content from the backup.": " 为备份中的内容。",
    "Triggers app restart.": "触发应用重启。",
    "Applies all migrations that are missing in the restored ": "应用已恢复的 ",
    ".": " 中缺失的所有迁移。",
    "Initializes the app server as usual.": "照常初始化应用服务器。",
    "Type the backup name ": "输入备份名称 ",
    " to confirm:": " 以确认：",
    "Restore backup": "恢复备份",
    "Note that we don't perform validations for the uploaded backup files. Proceed with extreme caution and only if you trust the source.\n\nDo you really want to upload \"{name}\"?":
        "请注意，我们不会对上传的备份文件进行验证。请极其谨慎地操作，仅在您信任来源时才继续。\n\n确定要上传 \"{name}\" 吗？",
    "Successfully uploaded a new backup.": "已成功上传新备份。",
    "Upload backup": "上传备份",

    // ── 定时任务 / Crons ──────────────────────────────
    "Registered app cron jobs": "已注册的应用定时任务",
    "App cron jobs can be registered only programmatically with ": "应用定时任务只能通过编程方式注册，使用 ",
    "Successfully triggered \"{jobId}\".": "已成功触发 \"{jobId}\"。",
    "No registered crons found.": "未找到已注册的定时任务。",
    "Run": "运行",

    // ── SQL 控制台 / SQL console ─────────────────────
    "Be careful and continue only if you really know what you are doing because, depending on the query, the operation could break your application and may not be reversible.":
        "请小心，只有在您确实知道自己在做什么时才继续，因为根据查询的不同，操作可能会破坏您的应用程序，并且可能无法恢复。",
    "Execute": "执行",
    "Failed to execute query.": "执行查询失败。",
    "Recently executed queries": "最近执行的查询",
    "No recently executed queries.": "暂无最近执行的查询。",
    "SQL console caveats": "SQL 控制台注意事项",
    "The returned rows are limited up to 1000.": "返回的行最多限制为 1000 条。",
    "The executed queries have a max timeout of 3 minutes.": "执行的查询最大超时时间为 3 分钟。",
    "The data is returned as byte strings without any additional formatting.":
        "数据以字节字符串形式返回，不进行任何额外格式化。",
    "Multiple queries are supported but only the result of the last one is returned.":
        "支持多个查询，但仅返回最后一个查询的结果。",
    "Query executed successfully!": "查询执行成功！",
    "Affected rows: ": "受影响的行数：",
    "No rows found.": "未找到行。",
    "Load remaining ({count})": "加载剩余（{count}）",
    "Time: ": "时间：",
    "Rows: ": "行数：",
    "Export as CSV": "导出为 CSV",
    "e.g. EXPLAIN QUERY PLAN SELECT * from users WHERE verified=true":
        "例如：EXPLAIN QUERY PLAN SELECT * from users WHERE verified=true",

    // ── 同步 / Sync (Import/Export collections) ───────
    "Paste below the collections configuration you want to import or": "在下方粘贴要导入的集合配置，或",
    "Load from JSON file": "从 JSON 文件加载",
    "You can use the ": "您可以使用 ",
    " migrations to manage your collections programmatically in more granular and version controlled manner.":
        " 迁移以更精细、版本可控的方式通过编程管理您的集合。",
    "Invalid collections configuration.": "无效的集合配置。",
    "Merge with the existing collections": "与现有集合合并",
    "Your collections configuration is already up-to-date!": "您的集合配置已是最新！",
    "Detected changes": "检测到的更改",
    "Deleted": "已删除",
    "Changed": "已更改",
    "Added": "已添加",
    "Some of the imported collections share the same name and/or fields but are imported with different IDs.":
        "部分导入的集合具有相同的名称和/或字段，但导入时使用了不同的 ID。",
    "You can replace them in the import if you want to:": "如果需要，您可以在导入时替换它们：",
    "Replace with original IDs": "替换为原始 ID",
    "Review": "审核",
    "Below you'll find your current collections configuration that you could import in another PocketBase environment.":
        "下方是您当前的集合配置，您可以将其导入到另一个 PocketBase 环境中。",
    "Select all": "全选",
    "Download as JSON": "下载为 JSON",
    "Successfully imported collections configuration.": "已成功导入集合配置。",
    "Do you really want to delete the following collection fields and their related records data:":
        "确定要删除以下集合字段及其相关记录数据吗：",
    "Side-by-side diff": "并排差异对比",
    "Confirm and import": "确认并导入",
    "Props": "属性",
    "Old": "旧值",
    "New": "新值",
    "field: ": "字段：",
    "Deleted - ": "已删除 - ",
    "All stored data related to '{name}' will be deleted!": "与 '{name}' 相关的所有已存储数据都将被删除！",
    " and ": " 和 ",
    " or ": " 或 ",
    "Failed to load the imported JSON.": "加载导入的 JSON 失败。",

    // ── 速率限制信息 / Rate limit info modal ─────────
    "targets the files download endpoint": "针对文件下载端点",
    "targets all auth methods": "针对所有认证方式",
    "Rate limit label format": "速率限制标签格式",
    "The rate limit rules are resolved in the following order (stops on the first match):":
        "速率限制规则按以下顺序解析（在第一个匹配处停止）：",
    "exact tag (e.g. ": "精确标签（例如 ",
    "wildcard tag (e.g. ": "通配符标签（例如 ",
    "METHOD + exact path (e.g. ": "METHOD + 精确路径（例如 ",
    "METHOD + prefix path (e.g. ": "METHOD + 前缀路径（例如 ",
    "exact path (e.g. ": "精确路径（例如 ",
    "prefix path (e.g. ": "前缀路径（例如 ",
    "In case of multiple rules with the same label but different target user audience (e.g. \"guest\" vs \"auth\"), only the matching audience rule is taken in consideration.":
        "如果有多个规则具有相同的标签但目标用户受众不同（例如 \"guest\" 与 \"auth\"），则仅考虑匹配受众的规则。",
    "The rate limit label could be in one of the following formats:": "速率限制标签可以是以下格式之一：",
    " - full exact route match (": " - 完全精确路由匹配（",
    "must be without trailing slash": "不能有尾部斜杠",
    "; \"METHOD\" is optional).": "；\"METHOD\" 是可选的）。",
    "For example:": "例如：",
    " - matches ": " - 匹配 ",
    ", etc.": " 等。",
    " - matches only ": " - 仅匹配 ",
    " - path prefix (": " - 路径前缀（",
    "must end with trailing slash;": "必须以尾部斜杠结尾；",
    "\"METHOD\" is optional). For example:": "\"METHOD\" 是可选的）。例如：",
    " - targets a specific action of a single collection.": " - 针对单个集合的特定操作。",
    " To apply the rule for all collections you can use the ": " 要将规则应用于所有集合，您可以使用 ",
    " wildcard. For example:": " 通配符。例如：",
    "The predifined collection tags are (": "预定义的集合标签有（",
    "there should be autocomplete once you start typing": "开始输入时应该会有自动补全",
    "):": "）：",

    // ── 日志 / Logs ───────────────────────────────────
    "Logs": "日志",
    "Request logs": "请求日志",
    "No logs": "暂无日志",
    "Logs settings": "日志设置",
    "Search term or filter like `level > 0`": "搜索词或过滤器，如 `level > 0`",
    "Include requests by superusers": "包含超级用户的请求",
    "Total: ": "总计：",
    "Level": "级别",
    "level": "级别",
    "Message": "消息",
    "message": "消息",
    "No logs found.": "未找到日志。",
    "Reset zoom": "重置缩放",
    "Load older": "加载更早的",
    "log": "条日志",
    "logs": "条日志",
    "Default levels": "默认级别",
    "(drag the timeline to pan)": "（拖动时间线平移）",
    "request": "个请求",
    "requests": "个请求",
    "{total} request": "{total} 个请求",
    "s": "",
    "Log copied to clipboard!": "日志已复制到剪贴板！",
    "Log details": "日志详情",
    "id": "ID",
    "created": "创建时间",
    "Download JSON": "下载 JSON",
    "Successfully saved logs settings.": "已成功保存日志设置。",
    "Successfully deleted all logs.": "已成功删除所有日志。",
    "Do you really want to delete all logs?": "确定要删除所有日志吗？",
    "Max days retention": "最大保留天数",
    "Set to ": "设置为 ",
    " to delete all logs and disable logs persistence.": " 以删除所有日志并禁用日志持久化。",
    "Min log level": "最低日志级别",
    "Logs with level below the minimum will be ignored.": "级别低于最小值的日志将被忽略。",
    "Max data size": "最大数据大小",
    "(bytes)": "（字节）",
    "The max size in bytes of the serialized log JSON data field (truncated on \"best-effort\" basis).":
        "序列化日志 JSON 数据字段的最大字节大小（以\"尽力而为\"为基础截断）。",
    "Default to ~16KB": "默认为 ~16KB",
    "Enable IP logging": "启用 IP 日志记录",
    "Enable Auth Id logging": "启用认证 ID 日志记录",
    "Delete all logs": "删除所有日志",
    "Default log levels:": "默认日志级别：",
    "UNKN": "未知",

    // ── 邮件模板 / Mail templates ─────────────────────
    "Verification": "验证",
    "Password reset": "密码重置",
    "Email change": "邮箱变更",

    // ── 全局组件 / Global components ─────────────────
    "Copy": "复制",
    "Copied": "已复制",
    "Open in new tab": "在新标签页中打开",
    "Cannot preview the file.": "无法预览该文件。",
    "No items found": "未找到项目",
    "- Select -": "- 选择 -",
    "Unset": "未设置",
    "Search...": "搜索...",
    "Search history": "搜索历史",
    "Your recent searches will show up here.": "您最近的搜索将显示在这里。",
    "Direction": "方向",
    "LTR content": "从左到右（LTR）内容",
    "RTL content": "从右到左（RTL）内容",
    "Insert media": "插入媒体",
    "Inline image (Base64)": "内嵌图片（Base64）",
    "Media from collection": "从集合中选择媒体",
    "Manual embed": "手动嵌入",
    "Yes, ": "确认",

    // ── 字段设置 / Field settings ─────────────────────
    "Min date (Local)": "最小日期（本地）",
    "Requires": "要求",
    "Requires the field value to be nonempty string.": "要求字段值是非空字符串。",
    "Except domains": "排除的域名",
    "Only domains": "仅允许的域名",
    "List of domains that are NOT allowed.\\nThis field is disabled if \"Only domains\" is set.":
        "不允许的域名列表。\\n如果设置了\"仅允许的域名\"，则此字段将禁用。",
    "List of domains that are ONLY allowed.\\nThis field is disabled if \"Except domains\" is set.":
        "仅允许的域名列表。\\n如果设置了\"排除的域名\"，则此字段将禁用。",
    "Help text": "帮助文本",
    "Use comma as separator.": "使用逗号作为分隔符。",
    "Min length": "最小长度",
    "Max length": "最大长度",
    "Validation pattern": "验证模式",
    "Autogenerate pattern": "自动生成模式",
    "Ex. ": "例如：",
    "No min limit": "无最小限制",
    "Default to max 5000 characters": "默认为最多 5000 个字符",
    "Set and autogenerate text matching the pattern on missing record create value.":
        "记录创建值缺失时，设置并自动生成匹配该模式的文本。",
    "Clear the field or set it to 0 for no limit.": "清空字段或将其设置为 0 表示无限制。",
    "Clear the field or set it to 0 to fallback to the default limit.": "清空字段或将其设置为 0 以回退到默认限制。",
    "Description": "描述",
    "Other fields": "其他字段",
    "Auth specific fields": "认证特定字段",

    // ── API 预览 / API Preview ────────────────────────
    " (GET, POST, PUT, PATCH, DELETE)": "（GET、POST、PUT、PATCH、DELETE）",
    " (OR) tokens.": "（OR）标记。",
    " (could include query parameters)": "（可能包含查询参数）",
    " Any/At-least-one-of": " 任意/至少一个",
    " Equal": " 等于",
    " For optimization purposes, it is set by default in the ": " 为了优化，默认在 ",
    " Greater than": " 大于",
    " Greater than or equal": " 大于或等于",
    " Less than": " 小于",
    " Less than or equal": " 小于或等于",
    " Like/Contains": " 相似/包含",
    " NOT Like/Contains": " 不相似/不包含",
    " Not equal": " 不等于",
    " SDKs methods.": " SDK 方法。",
    " body, then it could look something like:": " body，那么它可能看起来像这样：",
    " could be any of the above field literal, function, string (single or double quoted), number, null, true, false":
        " 可以是上述字段字面量、函数、字符串（单引号或双引号）、数字、null、true、false 中的任意一种",
    " element has the following properties:": " 元素具有以下属性：",
    " field and file keys need to follow the pattern ": " 字段和文件键需要遵循 ",
    " field type value.": " 字段类型值。",
    " is one of:": " 是以下之一：",
    " of the record to authenticate.": " 要认证的记录。",
    " parameter that defines the list of the batch requests to process.": " 参数，用于定义要处理的批量请求列表。",
    " property (eg. ": " 属性（例如 ",
    " the total counts query will be skipped and the response fields ": " 将跳过总计数查询，并且响应字段 ",
    " to target all keys from the specific depth level.": " 以定位特定深度级别的所有键。",
    " will be expanded.": " 将被展开。",
    " will be used to determine whether the subscriber is allowed to receive the event message.":
        " 将用于确定订阅者是否被允许接收事件消息。",
    " will have -1 value.": " 将具有 -1 值。",
    "(auto wraps the right string OPERAND in a \"%\" for wildcard match if not explicitly set)":
        "（如果未显式设置，会自动将右侧字符串操作数用 \"%\" 包裹以进行通配符匹配）",
    "(custom per-request Authorization header is not supported at the moment, aka. all batch requests have the same auth state)":
        "（目前不支持自定义每个请求的 Authorization 头，即所有批量请求具有相同的认证状态）",
    "(optional)": "（可选）",
    "(required)": "（必填）",
    ").": "）。",
    ", ": "、",
    ", (AND) and ": "，(AND) 和 ",
    ", the collection's ": "，该集合的 ",
    ", the regular batch action fields are expected to be submitted as serialized json under the ":
        "，常规批量操作字段应以序列化 JSON 的形式提交到 ",
    ", where:": "，其中：",
    ". For more info and examples you could check the detailed ": "。有关更多信息和示例，您可以查看详细的 ",
    "?query params": "?query params",
    "API details": "API 详情",
    "Add -/+ (default) in front of the attribute for DESC / ASC order.":
        "在属性前添加 -/+（默认）以进行降序/升序排序。",
    "Again this is handled transparently by the official SDKs, but for example if you prefer to manually construct a JS ":
        "同样，官方 SDK 会自动处理这一点，但例如如果您更喜欢手动构造 JS ",
    "All query params must be properly URL encoded (the SDKs do this automatically).":
        "所有查询参数必须正确进行 URL 编码（SDK 会自动执行此操作）。",
    "All record ids have forbidden characters and unique case-insensitive (ASCII) validations in addition to the user defined regex pattern.":
        "所有记录 ID 除了用户定义的正则表达式模式外，还包含禁止字符和唯一不区分大小写（ASCII）验证。",
    "App settings": "应用设置",
    "Auth record email address.": "认证记录邮箱地址。",
    "Auth record password confirmation.": "认证记录密码确认。",
    "Auth record password.": "认证记录密码。",
    "Auto expand record relations. For example:": "自动展开记录关联。例如：",
    "Batch and transactional create/update/upsert/delete of multiple records in a single request.":
        "在单个请求中批量且事务性地创建/更新/插入更新/删除多条记录。",
    "Because this endpoint process the requests in a single DB transaction it could degrade the performance of your application if not used with proper care and configuration (use smaller max processing and body size limits, avoid large file uploads over slow S3 networks and custom hooks that communicate with slow external APIs).":
        "由于此端点会在单个数据库事务中处理请求，如果使用不当或配置不当，可能会降低应用程序的性能（请使用更小的最大处理时间和请求体大小限制，避免通过较慢的 S3 网络上传大文件，以及与较慢的外部 API 通信的自定义钩子）。",
    "Body parameters could be sent as ": "请求体参数可以以 ",
    "Body params": "请求体参数",
    "Comma separated string of the fields to return in the JSON response (by default returns all fields). For example:":
        "以逗号分隔的字段字符串，指定要在 JSON 响应中返回的字段（默认返回所有字段）。例如：",
    "Confirmation of the new password.": "新密码的确认。",
    "Creates a new {name} record.": "创建一条新的 {name} 记录。",
    "Dart SDK docs": "Dart SDK 文档",
    "Each batch ": "每个批量 ",
    "Event data format": "事件数据格式",
    "Events are sent for ": "事件针对 ",
    "Example responses": "示例响应",
    "Fetch a paginated {name} records list, supporting sorting and filtering.":
        "获取分页的 {name} 记录列表，支持排序和过滤。",
    "Fields docs": "字段文档",
    "File upload is supported only via ": "仅支持通过 ",
    "Files upload and handling docs": "文件上传和处理文档",
    "Filter the returned records. For example:": "过滤返回的记录。例如：",
    "For more details you could check the ": "有关更多详细信息，您可以查看 ",
    "For the cases when you don't use the SDKs, the she supported batch request actions are:":
        "对于不使用 SDK 的情况，支持的批量请求操作有：",
    "Hide details": "隐藏详情",
    "ID of the record to delete.": "要删除的记录的 ID。",
    "ID of the record to update.": "要更新的记录的 ID。",
    "ID of the record to view.": "要查看的记录的 ID。",
    "If set to ": "如果设置为 ",
    "In addition to the collection non-hidden fields, the following special sort fields could be also used: ":
        "除了集合的非隐藏字段外，还可以使用以下特殊排序字段：",
    "In addition, the following field modifiers are also supported:": "此外，还支持以下字段修饰符：",
    "In case of multiple identity fields, explicitly set the field name to use when searching for the auth record.":
        "如果存在多个身份字段，请显式设置搜索认证记录时要使用的字段名。",
    "Indicates whether the auth record is verified or not.": "指示认证记录是否已验证。",
    "Leave it empty for auto detection.": "留空以自动检测。",
    "Not enabled for the collection": "该集合未启用",
    "Note that in case of a password change all previously issued tokens for the current record will be automatically invalidated and if you want your user to remain signed in you need to reauthenticate manually after the update call.":
        "请注意，如果更改密码，当前记录之前签发的所有令牌将自动失效，如果您希望用户保持登录状态，则需要在更新调用后手动重新认证。",
    "On successful password reset all previously issued auth tokens for the specific record will be invalidated (and the user will be marked as verified if not already).":
        "成功重置密码后，该特定记录之前签发的所有认证令牌将失效（如果用户尚未验证，将被标记为已验证）。",
    "Only the relations to which the request user has permissions to ": "只有请求用户有权限 ",
    "Optional data that will be used when creating the auth record on OAuth2 sign-up.":
        "可选数据，将在 OAuth2 注册时用于创建认证记录。",
    "Path params": "路径参数",
    "Realtime docs": "实时文档",
    "Request": "请求",
    "Requires superuser Authorization:TOKEN header": "需要超级用户 Authorization:TOKEN 头",
    "Returns a short plain text version of the field string value. Ex.: ": "返回字段字符串值的简短纯文本版本。例如：",
    "Sends {name} password reset email request.": "发送 {name} 密码重置邮件请求。",
    "Show details": "显示详情",
    "Specify the max returned records per page (default to 30).": "指定每页返回的最大记录数（默认为 30）。",
    "Specify the records order attribute(s).": "指定记录的排序属性。",
    "Subscribe to realtime changes via Server-Sent Events (SSE).": "通过服务器发送事件（SSE）订阅实时更改。",
    "Superusers and the owner of the record always have access to the email address.":
        "超级用户和记录所有者始终可以访问邮箱地址。",
    "Supports up to 6-levels depth nested relations expansion.": "支持最多 6 层的嵌套关联展开。",
    "The account password to confirm the email change.": "用于确认邮箱变更的账户密码。",
    "The auth record email address to send the OTP request (if exists).":
        "要发送 OTP 请求的认证记录邮箱地址（如果存在）。",
    "The auth record password.": "认证记录密码。",
    "The authorization code returned from the initial request.": "初始请求返回的授权码。",
    "The batch Web API need to be explicitly enabled and configured from the ": "批量 Web API 需要从 ",
    "The code verifier sent with the initial request as part of the code_challenge.":
        "作为 code_challenge 的一部分，与初始请求一起发送的代码验证器。",
    "The created auth record must comply with the same requirements and validations in the regular create action.":
        "创建的认证记录必须符合常规创建操作中的相同要求和验证。",
    "The data can only be in JSON, aka. user uploaded files currently are not supported during OAuth2 sign-ups.":
        "数据只能是 JSON，即目前 OAuth2 注册期间不支持用户上传文件。",
    "The expanded relations will be appended to each individual record under the ": "展开的关联将附加到每条记录下的 ",
    "The filter syntax follows the format ": "过滤语法遵循 ",
    "The id of the OTP request.": "OTP 请求的 ID。",
    "The new password to set.": "要设置的新密码。",
    "The one-time/short-lived password from the OTP request.": "来自 OTP 请求的一次性/短期密码。",
    "The page (aka. offset) of the paginated list (default to 1).": "分页列表的页码（即偏移量，默认为 1）。",
    "The redirect url sent with the initial request.": "与初始请求一起发送的重定向 URL。",
    "The request accepts only 1 required ": "该请求只接受 1 个必填 ",
    "The token from the change email request email.": "变更邮箱请求邮件中的令牌。",
    "The token from the password reset request email.": "密码重置请求邮件中的令牌。",
    "The token from the verification request email.": "验证请求邮件中的令牌。",
    "This could drastically speed up the search queries when the total counters are not needed or cursor based pagination is used.":
        "当不需要总计数器或使用基于游标的分页时，这可以极大地加速搜索查询。",
    "To group and combine several expressions you could use brackets ": "要对多个表达式进行分组和组合，您可以使用括号 ",
    "Updates an existing {name} record.": "更新一条现有的 {name} 记录。",
    "Use ": "使用 ",
    "When the batch request is send as ": "当批量请求以 ",
    "When using the official SDKs the batch requests are transparently constructed by their service handler.":
        "使用官方 SDK 时，批量请求由其服务处理程序透明地构造。",
    "When you subscribe to a ": "当您订阅一个 ",
    "When you subscribe to an ": "当您订阅一个 ",
    "Whether to show/hide the auth record email when fetching the record data.":
        "是否在获取记录数据时显示/隐藏认证记录邮箱。",
    "You could subscribe to a single record or to an entire collection.": "您可以订阅单条记录或整个集合。",
    "delete": "删除",
    "entire collection": "整个集合",
    "record create - ": "记录创建 - ",
    "record delete - ": "记录删除 - ",
    "record update - ": "记录更新 - ",
    "record upsert - ": "记录插入更新 - ",
    "single record": "单条记录",
    "view": "查看",
    "Request verification": "请求验证",
    "Confirm verification": "确认验证",
    "OTP request": "OTP 请求",
    "OTP auth": "OTP 认证",
    "Request email change": "请求邮箱变更",
    "Confirm email change": "确认邮箱变更",
    "Request password reset": "请求密码重置",
    "Confirm password reset": "确认密码重置",
    "Authenticate with an OAuth2 provider and returns a new auth token and record data.":
        "使用 OAuth2 提供商进行认证，并返回新的认证令牌和记录数据。",
    "Authenticate with an one-time/short-lived password (OTP).": "使用一次性/短期密码（OTP）进行认证。",
    "Authenticate with combination of ": "使用 ",
    "Authorization:TOKEN header": "Authorization:TOKEN 头",
    "Delete a single {name} record.": "删除单条 {name} 记录。",
    "Fetch a single {name} record.": "获取单条 {name} 记录。",
    "For more details please check the ": "有关更多详细信息，请查看 ",
    "JS SDK docs": "JS SDK 文档",
    "Note that when requesting an OTP we return an ": "请注意，当请求 OTP 时，我们会返回一个 ",
    "OAuth2 integration documentation": "OAuth2 集成文档",
    "On successful authentication the user will be also marked as verified (if the OTP source is email and the user is not verified already).":
        "认证成功后，用户也将被标记为已验证（如果 OTP 来源是邮箱且用户尚未验证）。",
    "Returns a new auth response (token and record data) for an already authenticated record.":
        "为已认证的记录返回新的认证响应（令牌和记录数据）。",
    "Returns a public list with all allowed {name} authentication methods.":
        "返回所有允许的 {name} 认证方法的公开列表。",
    "Sends {name} account verification request.": "发送 {name} 账户验证请求。",
    "Sends {name} email change request.": "发送 {name} 邮箱变更请求。",
    "The auth record email address to send the password reset request (if exists).":
        "要发送密码重置请求的认证记录邮箱地址（如果存在）。",
    "The auth record email address to send the verification request (if exists).":
        "要发送验证请求的认证记录邮箱地址（如果存在）。",
    "The new email address to send the change email request.": "要发送邮箱变更请求的新邮箱地址。",
    "This method is usually called by users on page/screen reload to ensure that the previously stored data in ":
        "此方法通常在用户重新加载页面/屏幕时调用，以确保 ",
    " is still valid and up-to-date.": " 仍然有效且是最新的。",
    " even if a user with the provided email doesn't exist as a very basic enumeration protection.":
        " 即使提供的邮箱对应的用户不存在，作为非常基本的枚举保护。",

    // ── OAuth2 提供商选项 ──────────────────────────────
    " (for the id_token)": "（用于 id_token）",
    " + ": " + ",
    " OR ": " 或 ",
    " field (default)": " 字段（默认）",
    " id_token claim": " id_token 声明",
    " id_token claims": " id_token 声明",
    " is a direct result of the TLS code->token exchange server response.":
        " 是 TLS 代码 -> 令牌交换服务器响应的直接结果。",
    " may need to be explicitly allowed depending on your tenant setup.": " 可能需要根据您的租户设置显式允许。",
    " will be used for the association with the PocketBase user (see ": " 将用于与 PocketBase 用户建立关联（请参阅 ",
    "\"email\" + \"xms_edov\" id_token claims": "\"email\" + \"xms_edov\" id_token 声明",
    "\"email\" id_token claim": "\"email\" id_token 声明",
    "\"verified_primary_email\" id_token claim": "\"verified_primary_email\" id_token 声明",
    "Any optional claim such as ": "任何可选声明，例如 ",
    "Auth URL": "认证 URL",
    "Azure AD / Entra ID": "Azure AD / Entra ID",
    "Both fields are considered optional because the parsed ": "这两个字段均被视为可选，因为解析出的 ",
    "Client secret": "客户端密钥",
    "Comma separated list of accepted values for the iss token claim validation.":
        "用于 iss 令牌声明验证的接受值逗号分隔列表。",
    "Different Types of Lark User IDs": "不同类型的 Lark 用户 ID",
    "Display name": "显示名称",
    "Duration (in seconds)": "持续时间（秒）",
    "Either ": "任一 ",
    "Either \"verified_primary_email\" OR \"email\" + \"xms_edov\" id_token claims":
        "\"verified_primary_email\" 或 \"email\" + \"xms_edov\" id_token 声明",
    "Endpoints": "端点",
    "Extract email from": "从以下位置提取邮箱",
    "Ex. https://login.microsoftonline.com/YOUR_DIRECTORY_TENANT_ID/oauth2/v2.0/authorize":
        "例如 https://login.microsoftonline.com/YOUR_DIRECTORY_TENANT_ID/oauth2/v2.0/authorize",
    "Ex. https://login.microsoftonline.com/YOUR_DIRECTORY_TENANT_ID/oauth2/v2.0/token":
        "例如 https://login.microsoftonline.com/YOUR_DIRECTORY_TENANT_ID/oauth2/v2.0/token",
    "Feishu (China)": "飞书（中国）",
    "Fetch user info from": "获取用户信息自",
    "Graph API ": "Graph API ",
    "Graph API \"mail\" field (default)": "Graph API \"mail\" 字段（默认）",
    "ID Token": "ID 令牌",
    "Issuers": "签发者",
    "JWKS verification URL": "JWKS 验证 URL",
    "Key ID": "密钥 ID",
    "Lark (International)": "Lark（国际版）",
    "Note that the Lark user's ": "请注意，Lark 用户的 ",
    "Provider endpoints": "提供商端点",
    "Self-hosted endpoints (optional)": "自托管端点（可选）",
    "Support PKCE": "支持 PKCE",
    "The default minimal required scopes are: ": "默认的最小必需作用域为：",
    "Token URL": "令牌 URL",
    "URL to the public token verification keys.": "指向公共令牌验证密钥的 URL。",
    "Union ID": "Union ID",
    "User info URL": "用户信息 URL",
    "Usually it should be safe to be always enabled as most providers will just ignore the extra query parameters if they don't support PKCE.":
        "通常始终启用是安全的，因为大多数提供商在不支持 PKCE 时会忽略额外的查询参数。",
    "Extracts the \"email\" token field (since ~2023 by default Microsoft populates it only if the email is considered verified, unless manually configured otherwise).":
        "提取 \"email\" 令牌字段（自 2023 年左右起，默认情况下 Microsoft 仅在邮箱被视为已验证时才填充它，除非手动另行配置）。",
    "Extracts the \"email\" token field but also checks if the domain owner has been verified.":
        "提取 \"email\" 令牌字段，但也会检查域所有者是否已验证。",
    "Extracts the \"mail\" field from the Graph API /me endpoint (this is a historical default and it is generally accepted to be safe in controlled/single-tenant AD setup).":
        "从 Graph API /me 端点提取 \"mail\" 字段（这是一个历史默认值，在受控/单租户 AD 环境中通常被认为是安全的）。",
    "Extracts the configured user's \"PrimaryAuthoritativeEmail\" attribute value.":
        "提取所配置用户的 \"PrimaryAuthoritativeEmail\" 属性值。",
    "Extracts the first nonempty value from the two options.": "从两个选项中提取第一个非空值。",
    "Site": "站点",
    "Generate Apple client secret": "生成 Apple 客户端密钥",
    "Generate secret": "生成密钥",
    "Private key": "私钥",
    "Team ID": "团队 ID",
    "Max {maxDuration} seconds (~{months} months).": "最长 {maxDuration} 秒（约 {months} 个月）。",
    "Successfully generated client secret.": "已成功生成客户端密钥。",
    "The key is not stored on the server and it is used only for generating the signed JWT.":
        "该密钥不会存储在服务器上，仅用于生成签名 JWT。",
    "Client ID": "客户端 ID",
    "Enter the email associated with your account and we'll send you a recovery link:":
        "请输入与您账户关联的邮箱，我们将向您发送恢复链接：",
    // ── 认证确认页 ──────────────────────────────────
    "Check {email} for the recovery link!": "请检查 {email} 中的恢复链接！",
    "Invalid or expired verification token.": "无效或过期的验证令牌。",
    "Invalid or expired password reset token.": "无效或过期的密码重置令牌。",
    "Successfully verified {email}.": "已成功验证 {email}。",
    "Please check your email for the new verification link.": "请检查您的邮箱以获取新的验证链接。",
    "The password was successfully changed.": "密码已成功更改。",
    "You can go back to sign in with your new password.": "您可以返回并使用新密码登录。",
    "The email was successfully changed.": "邮箱已成功更改。",
    "You can go back and sign in with your new email address.": "您可以返回并使用新的邮箱地址登录。",
    "Invalid or expired email change token.": "无效或过期的邮箱变更令牌。",
    // ── 集合设置杂项 ──────────────────────────────
    "No collections with the selected rule.": "没有符合所选规则的集合。",
    "No providers found.": "未找到提供商。",
    "No records with selectable files found.": "未找到具有可选文件的记录。",
    "No \"{fileTypes}\" files found.": "未找到 \"{fileTypes}\" 文件。",
    "Learn more": "了解更多",
    "Learn more.": "了解更多。",
    "Max duration between 2 authentications (in seconds)": "两次认证之间的最长持续时间（秒）",
    "Multi-factor authentication (MFA)": "多因素认证（MFA）",
    "Multi-factor authentication (MFA) requires the user to authenticate with any 2 different auth methods (otp, identity/password, oauth2) before issuing an auth token. ":
        "多因素认证（MFA）要求用户在签发认证令牌之前，使用任意 2 种不同的认证方法（OTP、身份/密码、OAuth2）进行认证。 ",
    "For example, to require MFA only for accounts with non-empty email you can set it to ":
        "例如，要仅对具有非空邮箱的账户要求 MFA，您可以将其设置为 ",
    "Leave the rule empty to require MFA for everyone.": "将规则留空以对所有人要求 MFA。",
    "This optional rule could be used to enable/disable MFA per account basis.":
        "此可选规则可用于按账户启用/禁用 MFA。",
    "Token options (invalidate, duration)": "令牌选项（失效、持续时间）",
    "Invalidate all previously issued tokens": "使所有先前签发的令牌失效",
    "Generated password length": "生成的密码长度",
    "Identity fields": "身份字段",
    "Review existing _externalAuths records": "查看现有的 _externalAuths 记录",

    // ── 其他 ──────────────────────────────────────────
    "App logo": "应用 Logo",
    "Toggle sidebar": "切换侧边栏",
    "or": "或",
    "and": "和",
    "The installer token is invalid or has expired.": "安装程序令牌无效或已过期。",
    "Please wait while extracting the uploaded archive!": "请稍候，正在解压已上传的归档文件！",
    "API preview": "API 预览",
    "The field cannot be presentable if hidden.": "隐藏的字段不能设为可展示。",
    "Remove": "删除",
    "Presets:": "预设：",
    "Subject": "主题",
    "Body (HTML)": "正文（HTML）",
    "Go": "Go",
    "JS": "JS",
    "Failed to load record.": "加载记录失败。",
    "JavaScript": "JavaScript",
    "Identity/Password": "身份/密码",
    "OAuth2": "OAuth2",
    "One-time password (OTP)": "一次性密码（OTP）",
    "Only non-hidden fields with UNIQUE index constraint can be selected.":
        "只能选择具有 UNIQUE 索引约束的非隐藏字段。",
    "Images (jpg, png, svg, gif, webp)": "图片（jpg、png、svg、gif、webp）",
    "Documents (pdf, doc/docx, xls/xlsx)": "文档（pdf、doc/docx、xls/xlsx）",
    "Videos (mp4, mpeg, avi, mov, 3gp)": "视频（mp4、mpeg、avi、mov、3gp）",
    "Archives (zip, 7zip, rar)": "归档文件（zip、7zip、rar）",
    "Other": "其他",
    "Max size ": "最大大小 ",
    "Wildcard columns (*) are not supported.": "不支持通配符列（*）。",
    "The query must have a unique ": "查询必须具有唯一的 ",
    " column.": " 列。",
    "If your query doesn't have a suitable one, you can use the universal ":
        "如果你的查询没有合适的列，可以使用通用的 ",
    "Expressions must be aliased with a valid formatted field name, e.g. ":
        "表达式必须使用有效的格式化字段名作为别名，例如 ",
    "Combined/multi-spaced expressions must be wrapped in parenthesis, e.g. ": "组合/多空格表达式必须用括号包裹，例如 ",
    "UNION expressions are supported but the entire query must be wrapped in subquery.":
        "支持 UNION 表达式，但整个查询必须包裹在子查询中。",
    "OAuth2 auth completed": "OAuth2 认证完成",
    "Auth completed.": "认证完成。",
    "You can close this window and go back to the app.": "你可以关闭此窗口并返回应用。",
    "OAuth2 auth failed": "OAuth2 认证失败",
    "Auth failed.": "认证失败。",
    "You can close this window and go back to the app to try again.": "你可以关闭此窗口并返回应用重试。",
    "Do you really want to save the collection changes?": "确定要保存集合更改吗？",
    "Select OAuth2 provider": "选择 OAuth2 提供商",
    "Setup your PocketBase instance": "设置你的 PocketBase 实例",
    "Forgotten superuser password": "忘记超级管理员密码",
    "Select field": "选择字段",
    "OAuth2 full name": "OAuth2 全名",
    "OAuth2 avatar": "OAuth2 头像",
    "OAuth2 id": "OAuth2 ID",
    "OAuth2 username": "OAuth2 用户名",
    "No restriction": "无限制",
    "Default to single": "默认为单个",
    "Default to max ~5MB": "默认最大约 5MB",
    "Default to max ~1MB": "默认最大约 1MB",
    "Select collection*": "选择集合*",
    "Up to 71 chars": "最多 71 个字符",
    "Default to 10": "默认为 10",
    "Add choices*": "添加选项*",
    "Max select": "最大选择数",
    "MFA rule": "MFA 规则",
    "Leave empty to require MFA for everyone": "留空以对所有人要求 MFA",
    "New password confirm": "确认新密码",
    "Password confirm": "确认密码",
    "Unique": "唯一",
    "System collections": "系统集合",
    "Max size": "最大大小",
    "Min select": "最小选择数",
    "Cascade delete": "级联删除",
    "Min": "最小值",
    "Max": "最大值",
    "Token duration (in seconds)": "令牌持续时间（秒）",
    "Longitude:": "经度：",
    "Latitude:": "纬度：",
    "Field options": "字段选项",
    "Options": "选项",
    "Predefined colors": "预定义颜色",
    "Select address coordinates": "选择地址坐标",
    "Zoom in": "放大",
    "Zoom out": "缩小",
    "Auth duration (in seconds)": "认证令牌持续时间（秒）",
    "Password reset duration (in seconds)": "密码重置令牌持续时间（秒）",
    "Protected file duration (in seconds)": "受保护文件令牌持续时间（秒）",
    "Email verification duration (in seconds)": "邮箱验证令牌持续时间（秒）",
    "Email change duration (in seconds)": "邮箱变更令牌持续时间（秒）",
    "Original size": "原始大小",
    "100x100 thumb": "100x100 缩略图",
    "Enabled for everyone": "对所有人启用",
    "Edit relation record": "编辑关联记录",
    "Generate token": "生成令牌",
    "Generate new one": "生成新的",
    "Single": "单个",
    "Multiple": "多个",
    "True": "是",
    "False": "否",
    "New-line separated choices:": "换行分隔的选项：",
    "Label": "标签",
    "e.g. Blog posts": "例如：博客文章",
    "Field label (optional)": "字段标签（可选）",
};

// 英文语言包直接返回 key（不需要映射）

const enMessages = {};

const messages = {
    en: enMessages,
    zh: zhMessages,
};

// 从 localStorage 读取，否则检测浏览器语言
function detectInitialLocale() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && messages[saved]) {
        return saved;
    }
    const browserLang = navigator.language?.toLowerCase() || "en";
    if (browserLang.startsWith("zh")) {
        return "zh";
    }
    return "en";
}

// 当前语言（响应式 store）
export const localeStore = store({
    value: detectInitialLocale(),
});

/**
 * 翻译函数
 * @param {string} text - 英文原文（作为 key）
 * @param {Object} [params] - 可选参数，用于替换 {key} 占位符
 * @returns {string}
 */
export function tr(text, params) {
    if (!text) return text;

    const lang = localeStore.value;
    let result = text;

    if (lang !== "en" && messages[lang]) {
        result = messages[lang][text] ?? text;
    }

    // 参数替换：支持 {name} 形式的占位符
    if (params && typeof params === "object") {
        for (const [key, val] of Object.entries(params)) {
            result = result.replaceAll(`{${key}}`, String(val));
        }
    }

    return result;
}

/**
 * 切换语言
 * @param {string} code - 语言代码（en / zh）
 */
export function setLocale(code) {
    if (!messages[code]) return;
    localeStore.value = code;
    localStorage.setItem(STORAGE_KEY, code);
    document.documentElement.lang = code;
}

// 初始化时设置 html lang 属性
document.documentElement.lang = localeStore.value;

// 挂载到全局，供模板中使用
window.app = window.app || {};
window.app.tr = tr;
window.app.setLocale = setLocale;
window.app.locales = locales;
window.app.localeStore = localeStore;
