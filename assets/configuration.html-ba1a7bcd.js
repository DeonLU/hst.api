import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-e0095480.js";const t={},o=e(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>Shamrock</code> 提供了一个图形化的配置界面，可进行简单的配置操作。<br> 大部分配置简单易于理解，我们仅仅介绍部分难于理解的配置选项。</p></div><h2 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项" aria-hidden="true">#</a> 配置选项</h2><h3 id="强制平板模式" tabindex="-1"><a class="header-anchor" href="#强制平板模式" aria-hidden="true">#</a> 强制平板模式</h3><p>让 <code>QQ 客户端</code> 识别设备为平板，使其账号可在安卓和平板同时在线。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>除了 <code>WebSocket</code> 相关功能，其他功能的配置进行修改立即生效，无需重新启动 <code>QQ</code> 。 不建议使用 <code>CQ 码</code>，因为在新一代机器人设计理念中，该操作过于落后，可能会出现许多问题。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>被动 <code>WebSocket</code> 在断线之后，每隔 <code>5</code> 秒尝试重新连接。</p></div><h2 id="目录定义" tabindex="-1"><a class="header-anchor" href="#目录定义" aria-hidden="true">#</a> 目录定义</h2><ul><li>内部存储目录: <code>/storage/emulated/0</code> 或 <code>/sdcard</code></li><li><code>QQ</code> 主目录: <code>内部存储目录 + /Android/data/com.tencent.mobileqq</code></li><li><code>Shamrock</code> 主目录: <code>QQ主目录 + /Tencent/Shamrock</code></li></ul><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>将下方 <code>JSON</code> 文件创建在 <code>Shamrock 主目录 + /config.json</code><br> 请确保 <code>JSON</code> 格式正确。</p><div class="language-json5 line-numbers-mode" data-ext="json5"><pre class="language-json5"><code><span class="token punctuation">{</span>
  <span class="token property unquoted">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property unquoted">group_rule</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property unquoted">black_list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12345678</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 如果群号是\`12345678\`就跳过了哦！</span>
      <span class="token property unquoted">white_list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property unquoted">private_rule</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property unquoted">black_list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12345678</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property unquoted">white_list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property unquoted">default_token</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property unquoted">active_websocket</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property unquoted">port</span><span class="token operator">:</span> <span class="token number">5800</span><span class="token punctuation">,</span> <span class="token comment">// 主动WS监听的端口</span>
    <span class="token property unquoted">token</span><span class="token operator">:</span> <span class="token string">&#39;aaaa1111,bbbb1111&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 同时允许两个token可使用|或,作为分割</span>
    <span class="token property unquoted">tokens</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;aaaa1111&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;aaaa2222&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 使用tokens实现多token，优先级比上面那个高</span>
    <span class="token property unquoted">heartbeat_interval</span><span class="token operator">:</span> <span class="token number">15000</span> <span class="token comment">// 设置为null则默认15000毫秒作为心跳间隔，0则为无心跳</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property unquoted">passive_websocket</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property unquoted">address</span><span class="token operator">:</span> <span class="token string">&#39;ws://xxxxxxxxx&#39;</span> <span class="token comment">// 这里是个例子，如果默认tk存在则使用默认token鉴权</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property unquoted">address</span><span class="token operator">:</span> <span class="token string">&#39;ws://aaaaaaaaa&#39;</span><span class="token punctuation">,</span>
      <span class="token property unquoted">token</span><span class="token operator">:</span> <span class="token string">&#39;aaa666&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 提供了特例化token，将不使用默认token</span>
      <span class="token property unquoted">heartbeat_interval</span><span class="token operator">:</span> <span class="token number">15000</span> <span class="token comment">// 设置为null则默认15000毫秒作为心跳间隔，0则为无心跳</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>2024-3：allow-temp-session已经在后续版本中去除，未来需要在你自己的接收端对消息来源进行拦截或处理</p></blockquote><table><thead><tr><th>参数名称</th><th>类型</th><th>作用</th><th>例子</th></tr></thead><tbody><tr><td><code>default_token</code></td><td><code>string</code></td><td>默认 <code>token</code> ，<strong>HTTP接口/主被动WS</strong> 如果未单独定义 <code>token</code> ，则使用默认 <code>token</code></td><td><code>aaa123456</code></td></tr></tbody></table><blockquote><p>记得把注释删掉哦？JSON5貌似也没有完全支持呢？该配置文件采用Json5标准！</p></blockquote><h2 id="websocket认证方法" tabindex="-1"><a class="header-anchor" href="#websocket认证方法" aria-hidden="true">#</a> WebSocket认证方法</h2><p>在 <code>HTTP Upgrade</code> 请求头中添加 <code>access_token</code> 或 <code>ticket</code> 或 <code>Authorization</code> 头</p><p>例：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">192.168.3.4</span></span>
<span class="token header"><span class="token header-name keyword">Upgrade</span><span class="token punctuation">:</span> <span class="token header-value">websocket</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">upgrade</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Key</span><span class="token punctuation">:</span> <span class="token header-value">wwwwwwwwwwwwwwwwwwwwww==</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Version</span><span class="token punctuation">:</span> <span class="token header-value">13</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">aaaa1111</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据目录" tabindex="-1"><a class="header-anchor" href="#数据目录" aria-hidden="true">#</a> 数据目录</h2><p>大部分 <code>Shamrock</code> 的数据/缓存保存在 <code>Shamrock 主目录</code><br> 其中的日志可作为 <code>Issue</code> 内容，截取部分提交。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── tmpfiles <span class="token comment"># 临时文件目录</span>
│   ├── logs <span class="token comment"># 日志目录</span>
│   │   └── xxx.log <span class="token comment"># 日志文件</span>
├── config.json <span class="token comment"># 配置文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),p=[o];function c(l,i){return s(),a("div",null,p)}const u=n(t,[["render",c],["__file","configuration.html.vue"]]);export{u as default};
